"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Star, Sparkles, ShoppingBag } from "lucide-react";
import { getNewArrivals } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export default function NewArrivalsSection() {
  const products = getNewArrivals(8);

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
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-green-500" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">وصل حديثاً</h2>
          </div>
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link
              href="/shop?filter=new"
              className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/15 hover:border-primary/20 transition-all duration-300"
            >
              {/* New badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full px-2.5 py-1 border border-green-200">
                  <Sparkles className="w-3 h-3" />
                  جديد
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
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="p-3 sm:p-4 space-y-2">
                <Link href={`/products/${product.slug}`} className="block">
                  <h3 className="font-semibold text-sm sm:text-base text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {product.nameAr}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-3 h-3",
                        i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200"
                      )}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground mr-1">({product.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-base sm:text-lg font-bold text-foreground">{product.price} درهم</span>
                  {product.originalPrice != null && (
                    <span className="text-xs sm:text-sm text-muted-foreground line-through">{product.originalPrice} درهم</span>
                  )}
                </div>

                {/* Order button */}
                <Link
                  href={`/products/${product.slug}#order-form`}
                  className="w-full flex items-center justify-center gap-1.5 bg-primary text-primary-foreground rounded-xl py-2 sm:py-2.5 font-medium text-xs sm:text-sm hover:bg-primary/90 transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  اطلب الآن
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
