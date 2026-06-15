"use client";

import { motion } from "framer-motion";
import { Banknote, Truck, ShieldCheck, RotateCcw, Gem } from "lucide-react";

const badges = [
  { icon: Banknote, label: "الدفع عند الاستلام" },
  { icon: Truck, label: "توصيل سريع لجميع المدن" },
  { icon: ShieldCheck, label: "ضمان الجودة" },
  { icon: RotateCcw, label: "إرجاع سهل" },
  { icon: Gem, label: "منتجات مختارة بعناية" },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-white border-b border-border overflow-hidden">
      {/* Auto-scrolling strip on mobile, grid on desktop */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-border rtl:divide-x-reverse">
            {badges.map((badge) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-3 py-5 px-4"
              >
                <badge.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <motion.div
          className="flex gap-0"
          animate={{ x: [0, -800, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...badges, ...badges].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 py-3.5 px-5 whitespace-nowrap shrink-0"
            >
              <badge.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{badge.label}</span>
              <span className="mx-2 text-border">|</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
