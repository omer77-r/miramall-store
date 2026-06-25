"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact" | "horizontal";
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(product.images[0]);
  const [isLiked, setIsLiked] = useState(false);

  const discountPercent = product.discount
    ? `-${product.discount}%`
    : product.originalPrice
      ? `-${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%`
      : null;

  if (variant === "horizontal") {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="flex gap-4 rounded-xl border border-border bg-card p-3"
      >
        <Link href={`/products/${product.slug}`} className="relative shrink-0 size-24 overflow-hidden rounded-lg bg-muted">
          <Image
            src={imgSrc}
            alt={product.nameAr}
            fill
            className="object-cover"
            onError={() => setImgSrc("/images/placeholder.jpg")}
          />
          {product.discount && (
            <span className="absolute top-1 right-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
              {discountPercent}
            </span>
          )}
        </Link>
        <div className="flex flex-1 flex-col justify-between min-w-0">
          <div>
            <Link href={`/products/${product.slug}`} className="block">
              <h3 className="font-semibold text-sm text-foreground line-clamp-2">{product.nameAr}</h3>
            </Link>
            <div className="flex items-center gap-1 mt-1">
              <Star className="size-3 fill-amber-400 text-amber-400" />
              <span className="text-xs text-muted-foreground">{product.rating}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-bold text-foreground">{product.price} درهم</span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">{product.originalPrice} درهم</span>
              )}
            </div>
            <Link
              href={`/products/${product.slug}#order-form`}
              className="rounded-lg bg-primary p-1.5 text-primary-foreground hover:bg-primary/90 transition-colors inline-flex"
            >
              <ShoppingCart className="size-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div whileHover={{ y: -4 }} className="group rounded-xl border border-border bg-card overflow-hidden">
        <Link href={`/products/${product.slug}`} className="block relative aspect-square overflow-hidden bg-muted">
          <Image
            src={imgSrc}
            alt={product.nameAr}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgSrc("/images/placeholder.jpg")}
          />
          <div className="absolute top-2 right-2 flex flex-col gap-1.5">
            {product.discount && (
              <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                {discountPercent}
              </span>
            )}
            {product.isNew && (
              <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">
                جديد
              </span>
            )}
          </div>
        </Link>
        <div className="p-3">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-semibold text-sm line-clamp-1">{product.nameAr}</h3>
          </Link>
          <div className="flex items-center justify-between mt-1.5">
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-bold">{product.price} درهم</span>
              {product.originalPrice && (
                <span className="text-[10px] text-muted-foreground line-through">{product.originalPrice} درهم</span>
              )}
            </div>
            <div className="flex items-center gap-0.5">
              <Star className="size-3 fill-amber-400 text-amber-400" />
              <span className="text-[10px] text-muted-foreground">{product.rating}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <>
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden"
    >
      <Link href={`/products/${product.slug}`} className="block relative aspect-square overflow-hidden bg-muted">
        <Image
          src={imgSrc}
          alt={product.nameAr}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setImgSrc("/images/placeholder.jpg")}
        />
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          {product.discount && (
            <span className="rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-lg">
              {discountPercent}
            </span>
          )}
          {product.isNew && (
            <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-lg">
              جديد
            </span>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute right-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="rounded-full bg-white/90 p-2 text-foreground hover:bg-white shadow-lg transition-colors"
            aria-label="معاينة سريعة"
          >
            <Eye className="size-4" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={cn(
              "rounded-full bg-white/90 p-2 shadow-lg transition-colors",
              isLiked ? "text-red-500 hover:bg-white" : "text-foreground hover:bg-white"
            )}
            aria-label="إضافة للمفضلة"
          >
            <Heart className={cn("size-4", isLiked && "fill-current")} />
          </button>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold line-clamp-2 h-12">{product.nameAr}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "size-3.5",
                i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
              )}
            />
          ))}
          <span className="text-sm text-muted-foreground mr-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">{product.price} درهم</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{product.originalPrice} درهم</span>
            )}
          </div>
        </div>
        <Link
          href={`/products/${product.slug}#order-form`}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors active:scale-[0.98]"
        >
          <ShoppingCart className="size-4" />
          اطلب الآن
        </Link>
      </div>
    </motion.div>
    </>
  );
}
