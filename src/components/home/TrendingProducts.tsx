"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, ShoppingBag, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { getTrending } from "@/lib/data/products";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

export default function TrendingProducts() {
  const products = getTrending(6);

  return (
    <section className="py-12 lg:py-16 bg-white">
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
              href="/shop"
              className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">الأكثر طلباً دابا</h2>
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
              <Flame className="w-5 h-5 text-red-500" />
            </div>
          </div>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

function ProductCard({ product, index }: { product: Product; index: number }) {
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-border/60 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
    >
      {/* Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full px-2.5 py-1 border border-red-100">
          <Flame className="w-3 h-3" />
          الأكثر طلباً
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
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 size-8 rounded-full bg-white/80 shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 size-8 rounded-full bg-white/80 shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="size-4" />
              </button>
            </>
          )}
        </div>
      </Link>

      <div className="p-4 text-center space-y-2">
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="font-semibold text-foreground line-clamp-1">
            {product.nameAr}
          </h3>
        </Link>

        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200"
              )}
            />
          ))}
          <span className="text-sm text-muted-foreground mr-1">({product.reviewCount})</span>
        </div>

        <div>
          <span className="text-xl font-bold text-foreground">{product.price} درهم</span>
        </div>

        <Link
          href={`/products/${product.slug}#order-form`}
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-2.5 font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          <ShoppingBag className="w-4 h-4" />
          اطلب الآن
        </Link>
      </div>
    </motion.div>
  );
}
