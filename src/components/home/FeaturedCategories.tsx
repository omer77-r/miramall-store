"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shirt, Smartphone, Home, Sparkles, Footprints, Briefcase, Gem, UtensilsCrossed } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  shirt: Shirt,
  smartphone: Smartphone,
  home: Home,
  sparkles: Sparkles,
  footprints: Footprints,
  briefcase: Briefcase,
  gem: Gem,
  "utensils-crossed": UtensilsCrossed,
};

const container = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.08, duration: 0.5 },
};

const item = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function FeaturedCategories() {
  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">تسوق حسب الفئة</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            اكتشف مجموعتنا المختارة بعناية من أفضل الفئات والمنتجات
          </p>
        </motion.div>

        <motion.div
          {...container}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Sparkles;
            return (
              <motion.div key={cat.id} {...item}>
                <Link href={`/shop?category=${cat.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      "group relative flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl bg-white border border-border shadow-sm hover:shadow-xl hover:shadow-primary/15 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                    )}
                  >
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <div className="relative text-center">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {cat.nameAr}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                        {cat.productCount} منتج
                      </p>
                    </div>

                    <span className="relative inline-flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      تسوق الآن
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
