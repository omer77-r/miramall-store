"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Zap, Clock } from "lucide-react";

export default function SpecialOfferBanner() {
  return (
    <section className="py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-accent to-primary/40 p-8 sm:p-12 lg:p-14"
        >
          {/* Animated background shapes */}
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />

          {/* Sparkle dots */}
          <motion.div
            className="absolute top-8 left-[30%] w-2 h-2 rounded-full bg-white/60"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-[35%] w-2.5 h-2.5 rounded-full bg-white/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />

          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Discount percentage */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3, duration: 0.8 }}
              className="shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white/20 backdrop-blur-sm flex flex-col items-center justify-center border-2 border-white/30"
            >
              <span className="text-3xl sm:text-4xl font-black text-white leading-none">30%</span>
              <span className="text-sm sm:text-base font-bold text-white/90">خصم</span>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-sm font-medium mb-5"
              >
                <Zap className="w-4 h-4" />
                عرض محدود — ما يفوتكش
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
              >
                تخفيضات حتى 30% — غير دابا!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-3 text-white/80 text-base sm:text-lg max-w-lg mx-auto lg:mx-0"
              >
                أثمنة خاصة على منتجات مختارة. الكمية محدودة — شري دابا وخلّص ملي توصل!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-3 mt-4 text-white/70 text-sm"
              >
                <Clock className="w-4 h-4" />
                <span>العرض غادي يسالي — ما تنساش!</span>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0"
            >
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-white text-primary rounded-full px-10 py-4 font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                شوف العروض
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
