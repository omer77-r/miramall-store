"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, ShoppingBag } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-rose-300 via-pink-100 to-amber-50">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-[15%] w-64 h-64 rounded-full bg-rose-200/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-pink-200/25 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-100/20 blur-3xl"
        animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      {/* Small decorative circles */}
      <motion.div
        className="absolute top-[25%] right-[20%] w-3 h-3 rounded-full bg-rose-400/60"
        animate={{ y: [-8, 8, -8], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[25%] w-4 h-4 rounded-full bg-pink-400/50"
        animate={{ y: [6, -6, 6], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-[40%] left-[30%] w-2 h-2 rounded-full bg-amber-400/60"
        animate={{ y: [-5, 5, -5], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      {/* Sparkle icons */}
      <motion.div
        className="absolute top-[20%] left-[22%] text-rose-400/40"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-[25%] right-[25%] text-pink-400/30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div className="text-center lg:text-right space-y-6 lg:space-y-8" {...fadeUp}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-rose-600 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>متجر التسوق الأول في المغرب</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              أناقة وجودة
              <br />
              <span className="text-primary">تصل إلى باب بيتك</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              تسوق أفضل المنتجات من ندية - الدفع عند الاستلام - توصيل سريع لجميع مدن المغرب
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-rose-300/40 hover:shadow-xl hover:shadow-rose-300/50 transition-shadow text-lg"
                >
                  <ShoppingBag className="w-5 h-5" />
                  تسوق الآن
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/products?filter=discount"
                  className="inline-flex items-center gap-2 border-2 border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full px-8 py-3.5 font-semibold transition-colors text-lg"
                >
                  العروض الخاصة
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4"
            >
              {["✅ دفع عند الاستلام", "🚚 توصيل سريع", "⭐ جودة مضمونة"].map((text) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-foreground border border-rose-100 shadow-sm"
                >
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Product showcase */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Product grid preview */}
            <motion.div
              className="relative w-full max-w-[480px] aspect-square"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Decorative product placeholders */}
              <div className="absolute top-[5%] right-[10%] w-32 h-40 rounded-2xl bg-white shadow-xl rotate-[-6deg] flex items-center justify-center overflow-hidden border border-rose-100">
                <div className="text-center p-2">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-rose-100 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-rose-400" />
                  </div>
                  <div className="mt-2 w-20 h-2 bg-rose-100 rounded mx-auto" />
                  <div className="mt-1 w-14 h-2 bg-rose-50 rounded mx-auto" />
                </div>
              </div>
              <div className="absolute top-[15%] left-[5%] w-28 h-36 rounded-2xl bg-white shadow-lg rotate-[3deg] flex items-center justify-center overflow-hidden border border-pink-100">
                <div className="text-center p-2">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-pink-100 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-pink-400" />
                  </div>
                  <div className="mt-2 w-16 h-2 bg-pink-100 rounded mx-auto" />
                  <div className="mt-1 w-10 h-2 bg-pink-50 rounded mx-auto" />
                </div>
              </div>
              <div className="absolute bottom-[10%] right-[5%] w-36 h-44 rounded-2xl bg-white shadow-xl rotate-[2deg] flex items-center justify-center overflow-hidden border border-amber-100">
                <div className="text-center p-2">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-amber-100 flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                  <div className="mt-2 w-24 h-2.5 bg-amber-100 rounded mx-auto" />
                  <div className="mt-1.5 w-16 h-2.5 bg-amber-50 rounded mx-auto" />
                  <div className="mt-1.5 w-20 h-1.5 bg-rose-100 rounded mx-auto" />
                </div>
              </div>

              {/* Circular badge */}
              <motion.div
                className="absolute top-0 left-[20%] w-20 h-20 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-lg shadow-rose-300/40 font-bold z-10"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-xs">خصم</span>
                <span className="text-lg leading-tight">30%</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
