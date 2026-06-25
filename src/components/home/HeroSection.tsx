"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, ShoppingBag, Banknote, Truck, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/80">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-[20%] w-[300px] h-[300px] rounded-full bg-amber-100/25 blur-3xl"
          animate={{ scale: [0.9, 1.06, 0.9] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-primary shadow-sm border border-primary/10"
            >
              <Sparkles className="w-4 h-4" />
              <span>متجر التسوق الأول في المغرب</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-foreground">أناقة وجودة</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                تصل إلى باب بيتك
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              اكتشف أفضل المنتجات بعناية من ميرا مول. الدفع عند الاستلام، توصيل سريع لجميع مدن المغرب، وجودة مضمونة.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-3.5 font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all text-base sm:text-lg"
                >
                  <ShoppingBag className="w-5 h-5" />
                  تسوق الآن
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border-2 border-primary/30 text-primary hover:bg-primary/5 rounded-full px-8 py-3.5 font-semibold transition-colors text-base sm:text-lg"
                >
                  من نحن
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2"
            >
              {[
                { icon: Banknote, text: "الدفع عند الاستلام" },
                { icon: Truck, text: "توصيل سريع لجميع المدن" },
                { icon: ShieldCheck, text: "ضمان الجودة" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-foreground border border-primary/10 shadow-sm"
                >
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  {item.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Product Visual Showcase */}
          <div className="hidden lg:flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[480px]"
            >
              {/* Main featured image area */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-[4/5]"
              >
                {/* Main large card */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-white to-primary/10 shadow-2xl shadow-primary/10 border border-primary/10 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-44 h-44 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center mb-6"
                    >
                      <Sparkles className="w-20 h-20 text-primary/60" />
                    </motion.div>
                    <div className="w-32 h-3 bg-primary/20 rounded-full mb-3" />
                    <div className="w-24 h-3 bg-primary/10 rounded-full mb-6" />
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-foreground">249 درهم</span>
                      <span className="text-sm text-muted-foreground line-through">349 درهم</span>
                    </div>
                  </div>
                </div>

                {/* Floating small card 1 */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-[5%] -right-[10%] w-28 h-36 rounded-2xl bg-white shadow-xl border border-primary/10 flex flex-col items-center justify-center p-3"
                >
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-2">
                    <Sparkles className="w-7 h-7 text-green-500" />
                  </div>
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 rounded-full px-2 py-0.5">جديد</span>
                </motion.div>

                {/* Floating small card 2 */}
                <motion.div
                  animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-[5%] -left-[8%] w-28 h-32 rounded-2xl bg-white shadow-xl border border-primary/10 flex flex-col items-center justify-center p-3"
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-2">
                    <Truck className="w-7 h-7 text-amber-500" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 rounded-full px-2 py-0.5">توصيل مجاني</span>
                </motion.div>

                {/* Discount badge */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-[20%] -right-[12%] w-20 h-20 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-xl shadow-primary/30 font-bold z-10"
                >
                  <span className="text-[10px]">خصم</span>
                  <span className="text-lg leading-none">30%</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
