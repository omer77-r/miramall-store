"use client";

import { useState, useRef, useMemo, useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Check,
  ChevronRight,
  ChevronLeft,
  Truck,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product, Review } from "@/lib/types";
import { getProductReviews, getRelatedProducts, products } from "@/lib/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { useRouter } from "next/navigation";

interface ProductPageClientProps {
  product: Product;
}

function RatingStars({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeMap = { sm: "size-3", md: "size-4", lg: "size-5" };
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizeMap[size],
            i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-border bg-card p-4"
    >
      <div className="flex items-center gap-3">
        <div className="relative size-10 overflow-hidden rounded-full bg-secondary">
          <Image src={review.avatar} alt={review.userName} fill className="object-cover" />
        </div>
        <div>
          <p className="font-semibold text-sm">{review.userName}</p>
          <div className="flex items-center gap-1">
            <RatingStars rating={review.rating} size="sm" />
            <span className="text-xs text-muted-foreground">{review.date}</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
    </motion.div>
  );
}

export function ProductPageClient({ product }: ProductPageClientProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [reviewFilter, setReviewFilter] = useState<number | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", phone: "", city: "", address: "" });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [hasInteracted, setHasInteracted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: product.nameAr,
        content_ids: [product.id],
        content_type: "product",
        value: product.price,
        currency: "MAD",
      });
    }
  }, [product.id, product.nameAr, product.price]);

  const productReviews = useMemo(() => getProductReviews(product.id), [product.id]);
  const relatedProducts = useMemo(() => getRelatedProducts(product.id, 8), [product.id]);

  const filteredReviews = useMemo(() => {
    if (reviewFilter === null) return productReviews;
    return productReviews.filter((r) => Math.floor(r.rating) === reviewFilter);
  }, [productReviews, reviewFilter]);

  const avgRating = product.rating ?? 0;
  const totalReviews = product.reviewCount ?? productReviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => {
    const count = productReviews.filter((r) => Math.floor(r.rating) === star).length;
    const pct = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    return { star, count, pct };
  });

  const validatePhone = (phone: string) => /^(05|06|07)\d{8}$/.test(phone);

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    const errors: Record<string, string> = {};
    if (formData.fullName.length < 3) errors.fullName = "الاسم خاصو يكون 3 حروف على الأقل";
    if (!validatePhone(formData.phone)) errors.phone = "الرقم خاصو يبدا ب 06 أو 07 أو 05 (10 أرقام)";
    if (!formData.city) errors.city = "اختار المدينة";
    if (formData.address.length < 5) errors.address = "العنوان خاصو يكون 5 حروف على الأقل";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const discount = quantity === 2 ? 40 : quantity === 3 ? 80 : 0;
      const finalPrice = product.price * quantity - discount;

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "InitiateCheckout", {
          content_name: product.nameAr,
          value: finalPrice,
          currency: "MAD",
        });
      }

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          product: product.nameAr,
          productSlug: product.slug,
          quantity,
          totalPrice: finalPrice,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        const apiErrors: Record<string, string> = {};
        for (const err of data.errors || []) {
          apiErrors[err.field] = err.message;
        }
        setFormErrors(apiErrors);
        setIsSubmitting(false);
        return;
      }

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Purchase", {
          content_name: product.nameAr,
          value: finalPrice,
          currency: "MAD",
        });
      }

      const params = new URLSearchParams({
        id: data.order.id,
        name: formData.fullName,
        product: product.nameAr,
        qty: String(quantity),
        price: String(finalPrice),
        city: formData.city,
        phone: formData.phone,
      });

      router.push(`/merci?${params.toString()}`);
    } catch {
      setFormErrors({ general: "وقع مشكل. جرب مرة أخرى." });
      setIsSubmitting(false);
    }
  };

  const scrollRelated = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };


  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            الرئيسية
          </Link>
          <ChevronLeft className="size-3" />
          <Link href="/shop" className="hover:text-foreground transition-colors">
            المتجر
          </Link>
          <ChevronLeft className="size-3" />
          <span className="text-foreground font-medium truncate">{product.nameAr}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 group"
                >
                  <Image
                    src={product.images[selectedImage]}
                    alt={`${product.nameAr} - ${selectedImage + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={selectedImage === 0}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
                {selectedImage + 1} / {product.images.length}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "relative size-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                    selectedImage === idx
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <Image
                    src={img}
                    alt={`${product.nameAr} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                {product.nameAr}
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <RatingStars rating={avgRating} size="md" />
                <span className="text-sm text-muted-foreground">
                  {avgRating.toFixed(1)} ({totalReviews} تقييم)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">{product.price} درهم</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice} درهم
                  </span>
                  <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-bold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                    {product.discount ? `-${product.discount}%` : "تخفيض"}
                  </span>
                </>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">في المخزون</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{product.descriptionAr}</p>

            {/* Quantity Selector + Discount Pricing */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">الكمية:</span>
                <div className="flex items-center gap-0 rounded-xl border border-border">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2.5 hover:bg-muted transition-colors rounded-r-xl"
                    aria-label="تقليل الكمية"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="w-10 text-center font-semibold text-sm select-none">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(3, q + 1))}
                    className="p-2.5 hover:bg-muted transition-colors rounded-l-xl"
                    aria-label="زيادة الكمية"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((qty) => {
                  const discount = qty === 2 ? 40 : qty === 3 ? 80 : 0;
                  const total = product.price * qty - discount;
                  return (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setQuantity(qty)}
                      className={cn(
                        "rounded-xl border p-3 text-center transition-all",
                        quantity === qty
                          ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                          : "border-border hover:border-primary/40"
                      )}
                    >
                      <span className="block text-sm font-bold text-foreground">{qty} {qty === 1 ? "وحدة" : qty === 2 ? "وحدتين" : "وحدات"}</span>
                      <span className="block text-lg font-bold text-primary mt-0.5">{total} درهم</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Order Form - Direct */}
            {orderSubmitted ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                <div className="mx-auto size-14 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                  <Check className="size-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-1">تم استلام طلبك! 🎉</h3>
                <p className="text-sm text-emerald-600">
                  شكراً {formData.fullName}، سنتصل بك قريباً على الرقم {formData.phone} لتأكيد الطلب.
                </p>
              </div>
            ) : (
              <form id="order-form" onSubmit={handleSubmitOrder} className="rounded-2xl border border-border bg-card p-5 space-y-3">
                <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                  <ShoppingCart className="size-5 text-primary" />
                  إتمام الطلب
                </h3>

                {/* Product Summary */}
                <div className="bg-muted/50 rounded-xl px-4 py-2.5 flex items-center justify-between">
                  <span className="text-sm text-foreground font-medium">{product.nameAr} <span className="text-muted-foreground">×{quantity}</span></span>
                  <span className="text-sm font-bold text-primary">{product.price * quantity - (quantity === 2 ? 40 : quantity === 3 ? 80 : 0)} درهم</span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">الاسم الكامل</label>
                  <input
                    type="text" required
                    placeholder="مثال: أحمد بنعلي"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData((f) => ({ ...f, fullName: e.target.value }));
                      if (!hasInteracted) setHasInteracted(true);
                      setFormErrors((prev) => ({ ...prev, fullName: "" }));
                    }}
                    className={cn(
                      "w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all",
                      formErrors.fullName ? "border-red-400" : "border-border"
                    )}
                    dir="rtl"
                  />
                  {formErrors.fullName && <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">رقم الهاتف</label>
                  <input
                    type="tel" required
                    placeholder="مثال: 0612345678"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                      setFormData((f) => ({ ...f, phone: val }));
                      if (!hasInteracted) setHasInteracted(true);
                      setFormErrors((prev) => ({ ...prev, phone: "" }));
                    }}
                    className={cn(
                      "w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all",
                      formErrors.phone ? "border-red-400" : "border-border"
                    )}
                    dir="ltr"
                  />
                  {formErrors.phone && <p className="text-xs text-red-500 mt-1 text-right">{formErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">المدينة</label>
                  <input
                    type="text" required
                    placeholder="مثال: الدار البيضاء"
                    value={formData.city}
                    onChange={(e) => {
                      setFormData((f) => ({ ...f, city: e.target.value }));
                      setFormErrors((prev) => ({ ...prev, city: "" }));
                    }}
                    className={cn(
                      "w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all",
                      formErrors.city ? "border-red-400" : "border-border"
                    )}
                    dir="rtl"
                  />
                  {formErrors.city && <p className="text-xs text-red-500 mt-1">{formErrors.city}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">العنوان الكامل</label>
                  <textarea
                    required rows={2}
                    placeholder="مثال: حي السلام، شارع الحسن الثاني، رقم 12"
                    value={formData.address}
                    onChange={(e) => {
                      setFormData((f) => ({ ...f, address: e.target.value }));
                      setFormErrors((prev) => ({ ...prev, address: "" }));
                    }}
                    className={cn(
                      "w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none",
                      formErrors.address ? "border-red-400" : "border-border"
                    )}
                    dir="rtl"
                  />
                  {formErrors.address && <p className="text-xs text-red-500 mt-1">{formErrors.address}</p>}
                </div>

                {formErrors.general && (
                  <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-center">
                    <p className="text-sm text-red-600">{formErrors.general}</p>
                  </div>
                )}

                {/* COD + Delivery */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3">
                    <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                    <span className="text-xs text-emerald-700 font-medium">خلّص ملي توصلك - توصيل لجميع مدن المغرب</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-muted/30 border border-border p-3">
                    <Truck className="size-4 text-primary shrink-0" />
                    <span className="text-xs text-muted-foreground">التوصيل خلال 1-2 أيام</span>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin size-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      جاري تأكيد الطلب...
                    </span>
                  ) : (
                    <>
                      <ShoppingCart className="size-4" />
                      تأكيد الطلب (خلّص ملي توصلك)
                    </>
                  )}
                </motion.button>
              </form>
            )}

          </div>
        </div>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="rounded-xl border border-border bg-muted/30 p-5">
            <h3 className="font-semibold text-foreground mb-3 text-lg">المميزات</h3>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm">
                  <Check className="size-4 text-emerald-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Customer Reviews Section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">تقييمات العملاء</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Rating Summary */}
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <span className="text-5xl font-bold text-foreground">{avgRating.toFixed(1)}</span>
              <div className="flex justify-center mt-2">
                <RatingStars rating={avgRating} size="lg" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{totalReviews} تقييم</p>
              <div className="mt-4 space-y-1.5">
                {ratingDistribution.map(({ star, count, pct }) => (
                  <div key={star} className="flex items-center gap-2 text-sm">
                    <span className="w-5 text-right text-muted-foreground">{star}</span>
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full bg-amber-400" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="w-8 text-left text-xs text-muted-foreground">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="md:col-span-2">
              {/* Filter */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <button
                  onClick={() => setReviewFilter(null)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors border",
                    reviewFilter === null
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/50"
                  )}
                >
                  الكل
                </button>
                {[5, 4, 3, 2, 1].map((star) => (
                  <button
                    key={star}
                    onClick={() => setReviewFilter(star)}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-sm font-medium transition-colors border flex items-center gap-1",
                      reviewFilter === star
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-muted-foreground border-border hover:border-primary/50"
                    )}
                  >
                    {star} <Star className="size-3 fill-amber-400 text-amber-400" />
                  </button>
                ))}
              </div>

              {filteredReviews.length === 0 ? (
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <p className="text-muted-foreground">لا توجد تقييمات بعد. كن أول من يقيم هذا المنتج!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredReviews.slice(0, showAllReviews ? undefined : 3).map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                  {filteredReviews.length > 3 && (
                    <button
                      onClick={() => setShowAllReviews(!showAllReviews)}
                      className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
                    >
                      {showAllReviews ? "عرض أقل" : `عرض كل التقييمات (${filteredReviews.length})`}
                      <ChevronDown className={cn("size-4 transition-transform", showAllReviews && "rotate-180")} />
                    </button>
                  )}
                </div>
              )}

              {/* Write Review */}
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border py-3 text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                اكتب تقييمك
              </button>
            </div>
          </div>
        </motion.section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">منتجات قد تعجبك أيضاً</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollRelated("right")}
                  className="rounded-full border border-border p-2 hover:bg-muted transition-colors"
                  aria-label="التمرير لليسار"
                >
                  <ChevronRight className="size-5" />
                </button>
                <button
                  onClick={() => scrollRelated("left")}
                  className="rounded-full border border-border p-2 hover:bg-muted transition-colors"
                  aria-label="التمرير لليمين"
                >
                  <ChevronLeft className="size-5" />
                </button>
              </div>
            </div>
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {relatedProducts.map((p) => (
                <div key={p.id} className="min-w-[220px] sm:min-w-[250px] shrink-0">
                  <ProductCard product={p} variant="default" />
                </div>
              ))}
            </div>
          </motion.section>
        )}

      </div>

      {/* Mobile Sticky - Scroll to form */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur-md p-3 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-foreground">{product.price} درهم</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{product.originalPrice} درهم</span>
              )}
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <RatingStars rating={avgRating} size="sm" />
              <span className="text-xs text-muted-foreground">({totalReviews})</span>
            </div>
          </div>
          <motion.a
            whileTap={{ scale: 0.96 }}
            href="#order-form"
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30"
          >
            <ShoppingCart className="size-4" />
            اطلب الآن
          </motion.a>
        </div>
      </div>
    </div>
  );
}
