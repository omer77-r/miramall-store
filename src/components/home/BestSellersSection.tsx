"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Crown, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { getBestSellers } from "@/lib/data/products";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

export default function BestSellersSection() {
  const products = getBestSellers(8);

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link
              href="/shop?filter=bestsellers"
              className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">الأكثر مبيعاً</h2>
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <Crown className="w-5 h-5 text-amber-500" />
            </div>
          </div>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <BestSellerCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellerCard({ product, index }: { product: Product; index: number }) {
  const [currentImg, setCurrentImg] = useState(0);
  const images = product.images;

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl border border-border/60 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
    >
      {/* Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full px-2.5 py-1 border border-amber-200">
          <Crown className="w-3 h-3" />
          الأكثر مبيعاً
        </span>
      </div>

      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square bg-white overflow-hidden">
          <Image
            src={images[currentImg]}
            alt={product.nameAr}
            fill
            className="object-cover"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 size-7 rounded-full bg-white/80 shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="size-3.5" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 size-7 rounded-full bg-white/80 shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="size-3.5" />
              </button>
            </>
          )}
        </div>
      </Link>

      <div className="p-3 sm:p-4 text-center space-y-1.5">
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="font-semibold text-sm sm:text-base text-foreground line-clamp-1">
            {product.nameAr}
          </h3>
        </Link>

        <div className="flex items-center justify-center gap-0.5">
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

        <div>
          <span className="text-base sm:text-lg font-bold text-foreground">{product.price} درهم</span>
        </div>

        <Link
          href={`/products/${product.slug}#order-form`}
          className="w-full flex items-center justify-center gap-1.5 bg-primary text-primary-foreground rounded-xl py-2 sm:py-2.5 font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-colors"
        >
          <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          اطلب الآن
        </Link>
      </div>
    </motion.div>
  );
}
