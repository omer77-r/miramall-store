"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Banknote, Truck, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/80">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm font-bold text-green-700"
          >
            <Banknote className="w-4 h-4" />
            خلّص غير ملي توصلك — بلا كارطا بنكية
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.15] tracking-tight"
          >
            <span className="text-foreground">شري من دارك</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              وخلّص ملي توصل
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto"
          >
            منتجات مختارة بعناية، توصلك لباب دارك فـ 24 لـ 48 ساعة. شوف السلعة بيديك وعجباتك؟ خلّص. ما عجباتكش؟ رجّعها.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-3.5 font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all text-base sm:text-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                شوف المنتجات
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 pt-2"
          >
            {[
              { icon: Banknote, text: "خلّص ملي توصلك" },
              { icon: Truck, text: "توصيل 24h-48h" },
              { icon: ShieldCheck, text: "إرجاع فـ 14 يوم" },
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
      </div>
    </section>
  );
}
