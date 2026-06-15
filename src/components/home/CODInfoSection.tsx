"use client";

import { motion } from "framer-motion";
import { Banknote, Eye, ShieldCheck, ClipboardCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Banknote,
    title: "لا حاجة للدفع المسبق",
    description: "ماتحتاجش تخلص حتى توصل ليك الطلبية للدار. شوف المنتج وعاين عليه قبل ما تخلص.",
  },
  {
    icon: Eye,
    title: "عاين المنتج قبل الدفع",
    description: "افتح الطلبية قدّام عامل التوصيل وتأكد من الجودة والمقاس واللون. راك مرتاح.",
  },
  {
    icon: ShieldCheck,
    title: "أمان وثقة كاملة",
    description: "ماتحتاجش تدخل معلومات البطاقة البنكية. تعامل مباشر وآمن بدون أي مخاطر.",
  },
  {
    icon: ClipboardCheck,
    title: "عملية بسيطة وسهلة",
    description: "طلباتك من الموقع، توصلك للدار، تعاين، تخلص. بسيطة وسهلة بحال ما كاتشرب أتاي.",
  },
];

export default function CODInfoSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted via-rose-50/40 to-muted" />

      {/* Decorative element */}
      <motion.div
        className="absolute top-10 left-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 text-primary font-semibold text-sm mb-4">
            <Banknote className="w-4 h-4" />
            نظام الدفع المريح
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">لماذا الدفع عند الاستلام؟</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            في ندية، راحتك وأمانك هوما الأولوية. نظام الدفع عند الاستلام كيضمن ليك تجربة تسوق مريحة وآمنة 100٪
          </p>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-border shadow-sm hover:shadow-xl hover:shadow-rose-100/30 hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2.5">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>

              {/* Decorative sparkle on hover */}
              <Sparkles className="absolute top-5 left-5 w-4 h-4 text-primary/0 group-hover:text-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          الدفع عند الاستلام متاح في جميع مدن المغرب • بدون أي مصاريف إضافية
        </motion.p>
      </div>
    </section>
  );
}
