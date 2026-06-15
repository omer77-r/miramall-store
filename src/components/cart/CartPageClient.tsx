"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ShieldCheck, Truck, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/providers/CartProvider";

export function CartPageClient() {
  const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart();
  const deliveryFee = subtotal >= 300 ? 0 : 39;
  const orderTotal = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="bg-background min-h-screen">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="rounded-full bg-muted p-8">
              <ShoppingBag className="size-16 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">سلة التسوق فارغة</h1>
            <p className="text-muted-foreground">لم تضف أي منتجات بعد. تصفح متجرنا واكتشف أفضل المنتجات!</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              <ShoppingCart className="size-5" />
              تصفح المنتجات
            </Link>
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
          <Link href="/shop" className="hover:text-foreground transition-colors">المتجر</Link>
          <span>/</span>
          <span className="text-foreground font-medium">سلة التسوق</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">سلة التسوق</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={item.productId}
                  layout
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 32, scale: 0.95 }}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-4"
                >
                  <Link href={`/products/${item.product.slug}`} className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.nameAr}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <Link href={`/products/${item.product.slug}`}>
                        <h3 className="font-semibold text-sm line-clamp-2">{item.product.nameAr}</h3>
                      </Link>
                      <p className="text-sm font-bold text-foreground mt-1">
                        {item.product.price} درهم
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-0 rounded-lg border border-border">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="p-1.5 hover:bg-muted transition-colors rounded-r-lg"
                          aria-label="تقليل الكمية"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium select-none">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="p-1.5 hover:bg-muted transition-colors rounded-l-lg"
                          aria-label="زيادة الكمية"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-foreground">
                          {item.product.price * item.quantity} درهم
                        </span>
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="إزالة المنتج"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={clearCart}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="size-4" />
                تفريغ السلة
              </button>
              <Link
                href="/shop"
                className="flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                <ArrowLeft className="size-4" />
                متابعة التسوق
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-lg font-bold text-foreground">ملخص الطلب</h2>

              <div className="space-y-3">
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
                  <p className="text-xs text-muted-foreground">التوصيل مجاني للطلبات فوق 300 درهم</p>
                )}
                <div className="border-t border-border pt-3 flex items-center justify-between">
                  <span className="text-base font-bold text-foreground">الإجمالي</span>
                  <span className="text-base font-bold text-foreground">{orderTotal} درهم</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E8A0BF] py-3.5 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-[#d48dac] transition-colors"
              >
                إتمام الطلب
              </Link>

              <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 dark:border-emerald-800 dark:bg-emerald-950/20">
                <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs text-muted-foreground">الدفع عند الاستلام متاح. لا تدفع حتى تستلم طلبك.</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Truck className="size-3.5 shrink-0" />
                <span>توصيل سريع 2-5 أيام لجميع مدن المغرب</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
