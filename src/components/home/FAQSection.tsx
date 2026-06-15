"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, HelpCircle, ChevronLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { faqs } from "@/lib/data/faq";

export default function FAQSection() {
  const displayFaqs = faqs.slice(0, 6);

  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 text-primary font-semibold text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            الأسئلة الشائعة
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">عندك سؤال؟ عندنا الجواب</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            إجابات على أكثر الأسئلة اللي كاتجينا من زبناء ندية
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {displayFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="bg-white rounded-2xl border border-border overflow-hidden data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-rose-100/30 transition-all duration-300"
                >
                  <AccordionTrigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-right hover:bg-muted/30 transition-colors cursor-pointer">
                    <span className="font-semibold text-foreground text-sm sm:text-base">
                      {faq.questionAr}
                    </span>
                    <ChevronLeft className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 group-data-[state=open]:-rotate-90" />
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-5 pb-5 pt-1">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answerAr}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Link to full FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8"
        >
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }} className="inline-block">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              عرض كل الأسئلة
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
