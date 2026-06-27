"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowLeft } from "lucide-react";

export function CheckoutPageClient() {
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
          <h1 className="text-2xl font-bold text-foreground">إتمام الطلب</h1>
          <p className="text-muted-foreground max-w-md">
            اختر المنتج الذي يعجبك من المتجر، ثم اضغط على "اطلب الآن" واتبع الخطوات لإتمام طلبك. خلّص ملي توصلك فجميع مدن المغرب.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            <ShoppingBag className="size-5" />
            تصفح المنتجات
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
