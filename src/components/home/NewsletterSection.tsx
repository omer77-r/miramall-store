"use client";

import { motion } from "framer-motion";
import { Mail, Gift, Bell, Percent } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="py-16 lg:py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 text-primary font-semibold text-sm">
            <Mail className="w-4 h-4" />
            النشرة البريدية
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">انضم إلى عائلة ندية</h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            توصل بأحدث المنتجات والعروض الحصرية قبل الجميع. كن أول من يعرف!
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 my-10"
        >
          {[
            { icon: Gift, text: "عروض حصرية" },
            { icon: Bell, text: "منتجات جديدة أولاً" },
            { icon: Percent, text: "تخفيضات خاصة" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-foreground font-medium">
              <item.icon className="w-4 h-4 text-primary" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
        >
          <div className="flex-1 w-full relative">
            <Mail className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-primary/50 pointer-events-none" />
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              required
              className="w-full h-12 pr-11 pl-4 rounded-xl border-2 border-primary/20 bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full sm:w-auto shrink-0 h-12 px-8 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-rose-200/40"
          >
            اشترك الآن
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-xs text-muted-foreground"
        >
          لن نشارك بريدك مع أي طرف آخر. يمكنك إلغاء الاشتراك في أي وقت.
        </motion.p>
      </div>
    </section>
  );
}
