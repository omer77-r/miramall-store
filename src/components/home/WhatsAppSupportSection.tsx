"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Phone, ChevronLeft } from "lucide-react";

export default function WhatsAppSupportSection() {
  const phoneNumber = "212600000000";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("السلام عليكم، عندي سؤال بخصوص منتجات ميرا مول")}`;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-5 py-2 text-emerald-600 font-semibold text-sm">
            <MessageCircle className="w-4 h-4" />
            دعم مباشر
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">عندك سؤال؟ راسلنا فواتساب</h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            حنا هنا باش نجاوبوك على أي سؤال. كتب لينا ونردو عليك بسرعة.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 border border-emerald-100 shadow-sm"
          >
            <Phone className="w-5 h-5 text-emerald-500" />
            <span className="text-lg font-bold text-foreground tracking-wider" dir="ltr">
              +212 6 00 00 00 00
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white rounded-full px-10 py-4 font-bold text-lg shadow-lg shadow-emerald-200/50 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-200/60 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل الآن
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          <p className="text-xs text-muted-foreground">
            متواجدون من الإثنين إلى السبت • 9:00 صباحاً - 8:00 مساءً
          </p>
        </motion.div>
      </div>
    </section>
  );
}
