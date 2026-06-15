"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  CircleCheck,
  ShieldCheck,
  Truck,
  ArrowLeft,
  MessageCircle,
  ShoppingBag,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { OrderForm } from "@/lib/types";
import { useCart } from "@/components/providers/CartProvider";

const orderFormSchema = z.object({
  fullName: z.string().min(2, "الاسم الكامل مطلوب"),
  phone: z
    .string()
    .min(10, "رقم الهاتف غير صحيح")
    .regex(/^(?:\+212|0)[5-7]\d{8}$/, "صيغة الهاتف المغربي مطلوبة (06XXXXXXXX أو +2126XXXXXXXX)"),
  city: z.string().min(2, "المدينة مطلوبة"),
  address: z.string().min(5, "العنوان الكامل مطلوب"),
  notes: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "يجب الموافقة على الشروط والأحكام" }),
  }),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

const moroccanCities = [
  "الدار البيضاء", "الرباط", "مراكش", "فاس", "طنجة", "أكادير", "مكناس",
  "وجدة", "تطوان", "القنيطرة", "آسفي", "الجديدة", "الناظور", "بني ملال",
  "تازة", "خريبكة", "المحمدية", "العيون", "الرشيدية", "ورزازات",
  "الحسيمة", "برشيد", "سطات", "تاونات", "غير ذلك",
];

export function CheckoutPageClient() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const deliveryFee = subtotal >= 300 ? 0 : 39;
  const orderTotal = subtotal + deliveryFee;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      city: "",
      address: "",
      notes: "",
      termsAccepted: false as unknown as true,
    },
  });

  const onSubmit = async (data: OrderFormValues) => {
    const orderData: OrderForm = {
      fullName: data.fullName,
      phone: data.phone,
      city: data.city,
      address: data.address,
      notes: data.notes ?? "",
      termsAccepted: true,
    };

    console.log("Order submitted:", orderData, "Items:", items);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    clearCart();
  };

  const handleWhatsAppConfirm = () => {
    const itemsList = items.map((i) => `- ${i.product.nameAr} × ${i.quantity}`).join("\n");
    const message = `تم تقديم طلب جديد:\n\n${itemsList}\n\nالإجمالي: ${orderTotal} درهم\nالدفع عند الاستلام`;
    window.open(`https://wa.me/212600000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="bg-background min-h-screen">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full bg-muted p-8">
              <ShoppingBag className="size-16 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">لا توجد منتجات في السلة</h1>
            <p className="text-muted-foreground">أضف منتجات إلى السلة أولاً لإكمال الطلب.</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              تصفح المنتجات
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-background min-h-screen">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="rounded-full bg-emerald-100 p-8 dark:bg-emerald-900/30">
              <CircleCheck className="size-16 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">تم تقديم طلبك بنجاح! 🎉</h1>
            <p className="text-muted-foreground max-w-md">
              شكراً لثقتك في ندية. سنتواصل معك قريباً لتأكيد الطلب. استعد لاستلام طلبك خلال 2-5 أيام عمل.
            </p>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20 max-w-md">
              <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                📦 ستدفع {orderTotal} درهم عند استلام الطلب
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppConfirm}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 text-base font-bold text-white hover:bg-[#20ba5a] transition-colors shadow-lg"
              >
                <MessageCircle className="size-5" />
                تأكيد عبر واتساب
              </button>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-border px-6 py-3 text-base font-bold text-foreground hover:bg-muted transition-colors"
              >
                متابعة التسوق
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/cart" className="hover:text-foreground transition-colors">سلة التسوق</Link>
          <span>/</span>
          <span className="text-foreground font-medium">إتمام الطلب</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">إتمام الطلب</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Info Column (right side in RTL) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-bold text-foreground mb-5">معلومات التوصيل</h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-1.5">
                    الاسم الكامل <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    {...register("fullName")}
                    placeholder="أدخل اسمك الكامل"
                    className={cn(
                      "w-full rounded-xl border bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors",
                      errors.fullName ? "border-destructive focus:ring-destructive/20" : "border-input"
                    )}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">
                    رقم الهاتف <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="06XXXXXXXX"
                    className={cn(
                      "w-full rounded-xl border bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors",
                      errors.phone ? "border-destructive focus:ring-destructive/20" : "border-input"
                    )}
                    dir="ltr"
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      {errors.phone.message}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-muted-foreground">الصيغة: 06XXXXXXXX أو +2126XXXXXXXX</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold mb-1.5">
                    المدينة <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="city"
                    {...register("city")}
                    className={cn(
                      "w-full rounded-xl border bg-card px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors",
                      errors.city ? "border-destructive focus:ring-destructive/20" : "border-input"
                    )}
                  >
                    <option value="">اختر المدينة</option>
                    {moroccanCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      {errors.city.message}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold mb-1.5">
                    العنوان الكامل <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="address"
                    {...register("address")}
                    placeholder="الحي، الشارع، رقم المنزل، أقرب معلم..."
                    rows={3}
                    className={cn(
                      "w-full rounded-xl border bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none",
                      errors.address ? "border-destructive focus:ring-destructive/20" : "border-input"
                    )}
                  />
                  {errors.address && (
                    <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      {errors.address.message}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold mb-1.5">
                    ملاحظات إضافية
                  </label>
                  <textarea
                    id="notes"
                    {...register("notes")}
                    placeholder="أي تفاصيل إضافية لتوصيل الطلب..."
                    rows={2}
                    className="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Terms */}
                <div className="rounded-xl border border-border bg-muted/20 p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        {...register("termsAccepted")}
                        className="peer sr-only"
                      />
                      <div className={cn(
                        "size-5 rounded border-2 flex items-center justify-center transition-colors",
                        errors.termsAccepted
                          ? "border-destructive"
                          : "border-input peer-checked:bg-primary peer-checked:border-primary"
                      )}>
                        <Check className="size-3 text-white opacity-0 peer-checked:opacity-100" />
                      </div>
                    </div>
                    <span className="text-sm">أوافق على الشروط والأحكام وسياسة الخصوصية</span>
                  </label>
                  {errors.termsAccepted && (
                    <p className="mt-2 text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      {errors.termsAccepted.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Back Link */}
            <Link
              href="/cart"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
              العودة إلى السلة
            </Link>
          </div>

          {/* Order Summary Column (left side in RTL) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-lg font-bold text-foreground">ملخص الطلب</h2>

              {/* Items List */}
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.productId} className="flex gap-3">
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.nameAr}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium line-clamp-2">{item.product.nameAr}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">× {item.quantity}</span>
                        <span className="text-sm font-semibold">
                          {item.product.price * item.quantity} درهم
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">المجموع الفرعي</span>
                  <span className="font-medium">{subtotal} درهم</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">التوصيل</span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-medium">مجاني</span>
                  ) : (
                    <span className="font-medium">{deliveryFee} درهم</span>
                  )}
                </div>
                {deliveryFee > 0 && (
                  <p className="text-xs text-muted-foreground">مجاني للطلبات فوق 300 درهم</p>
                )}
                <div className="border-t border-border pt-3 flex items-center justify-between">
                  <span className="text-base font-bold text-foreground">الإجمالي</span>
                  <span className="text-base font-bold text-foreground">{orderTotal} درهم</span>
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E8A0BF] py-3.5 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-[#d48dac] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    جاري تأكيد الطلب...
                  </>
                ) : (
                  "تأكيد الطلب"
                )}
              </motion.button>

              {/* COD Badge */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 dark:border-emerald-800 dark:bg-emerald-950/20">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">ستدفع عند استلام الطلب</p>
                    <p className="text-xs text-muted-foreground mt-0.5">الدفع نقداً عند الاستلام. لا حاجة لبطاقة بنكية.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Truck className="size-3.5 shrink-0" />
                <span>التوصيل خلال 2-5 أيام عمل لجميع مدن المغرب</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
