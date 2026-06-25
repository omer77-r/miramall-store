"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Star, ShoppingBag, Flame } from "lucide-react";
import { getTrending } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export default function TrendingProducts() {
  const products = getTrending(6);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
              <Flame className="w-5 h-5 text-red-500" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">المنتجات الرائجة</h2>
          </div>
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scrollable row on mobile, grid on desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 pb-4">
            {products.map((product, index) => (
              <div key={product.id} className="w-[280px] shrink-0">
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: ReturnType<typeof getTrending>[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/15 hover:border-primary/20 transition-all duration-300"
    >
      {/* Frequently bought badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full px-2.5 py-1 border border-red-100">
          <Flame className="w-3 h-3" />
          الأكثر طلباً
        </span>
      </div>

      {/* Discount badge */}
      {product.discount != null && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center bg-primary text-primary-foreground text-xs font-bold rounded-full px-2.5 py-1">
            -{product.discount}%
          </span>
        </div>
      )}

      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square bg-muted overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <ShoppingBag className="w-12 h-12 sm:w-14 sm:h-14 text-primary/50" />
              </div>
              <div className="mt-3 w-24 h-2 bg-primary/10 rounded mx-auto" />
              <div className="mt-1.5 w-16 h-2 bg-primary/5 rounded mx-auto" />
            </div>
          </div>
        </div>
      </Link>

      <div className="p-4 space-y-2.5">
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {product.nameAr}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-3.5 h-3.5",
                i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200"
              )}
            />
          ))}
          <span className="text-xs text-muted-foreground mr-1">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">{product.price} درهم</span>
          {product.originalPrice != null && (
            <span className="text-sm text-muted-foreground line-through">{product.originalPrice} درهم</span>
          )}
        </div>

        {/* Order button */}
        <Link
          href={`/products/${product.slug}#order-form`}
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-2.5 font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          <ShoppingBag className="w-4 h-4" />
          اطلب الآن
        </Link>
      </div>
    </motion.div>
  );
}
