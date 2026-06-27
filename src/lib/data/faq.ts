import type { FAQ } from "@/lib/types";

export interface FaqCategory {
  id: string;
  nameAr: string;
}

export const faqCategories: FaqCategory[] = [
  { id: "ordering", nameAr: "الطلبات" },
  { id: "shipping", nameAr: "الشحن والتوصيل" },
  { id: "payment", nameAr: "الدفع" },
  { id: "returns", nameAr: "الإرجاع" },
  { id: "guarantees", nameAr: "الضمان" },
];

export const faqItems: FAQ[] = [
  {
    id: "faq-1",
    question: "How does Cash on Delivery work?",
    questionAr: "كيفاش كيخدم خلّص ملي توصلك؟",
    answer: "When you place an order, we deliver your package to your doorstep. You inspect the product first, then pay the delivery agent in cash. No advance payment required.",
    answerAr: "ملّي كاتطلب، كنوصلو ليك الطلبية للباب ديالك. كاتعاين على المنتج أولاً، ومن بعد كاتخلص لعامل التوصيل نقداً. لا حاجة للدفع المسبق.",
    category: "ordering",
  },
  {
    id: "faq-2",
    question: "How long does delivery take?",
    questionAr: "شحال كتاخد مدة التوصيل؟",
    answer: "Delivery within Casablanca takes 24-48 hours. Other major cities: 48-72 hours. Remote areas: 3-5 business days.",
    answerAr: "التوصيل فكازا كاياخد 24-48 ساعة. المدن الكبيرة الأخرى: 48-72 ساعة. المناطق البعيدة: 3-5 أيام عمل.",
    category: "shipping",
  },
  {
    id: "faq-3",
    question: "Can I return a product?",
    questionAr: "واش نقدر نرجع المنتج؟",
    answer: "Yes, you have 7 days to return any product if it's defective or doesn't match the description. The delivery agent will collect the item.",
    answerAr: "نعم، عندك 7 أيام باش ترجع أي منتج إلا كان معطوب أو مطابقش الوصف. عامل التوصيل غادي يجمع السلعة.",
    category: "returns",
  },
  {
    id: "faq-4",
    question: "Which cities do you deliver to?",
    questionAr: "الشنو المدن اللي كتوصلو فيها؟",
    answer: "We deliver to all cities and regions across Morocco! From Tangier to Laayoune, no place is too far.",
    answerAr: "كنوصلو لجميع المدن والمناطق فالمغرب! من طنجة حتى لعيون، ما كاينش موضع بعيد.",
    category: "shipping",
  },
  {
    id: "faq-5",
    question: "Are there any hidden fees?",
    questionAr: "واش كاين مصاريف خفية؟",
    answer: "No hidden fees at all. The price you see on our website is exactly what you pay. Delivery is free for orders over 300 MAD.",
    answerAr: "ما كاينش أي مصاريف خفية. الثمن اللي كاتشوفو فموقعنا هو نفسو اللي كاتخلص. التوصيل مجاني لأي طلبية فوق 300 درهم.",
    category: "payment",
  },
  {
    id: "faq-6",
    question: "How do I track my order?",
    questionAr: "كيفاش نقدر نتتبع الطلبية؟",
    answer: "Once your order is confirmed, we'll send you SMS updates and you can contact our WhatsApp support anytime for status.",
    answerAr: "بمجرد ما يتأكد الطلب، غادي نرسلو ليك رسائل SMS باش تكون على علم بالحالة. وتقدر تتاصل بينا عبر واتساب ف أي وقت.",
    category: "ordering",
  },
  {
    id: "faq-7",
    question: "What quality guarantee do you offer?",
    questionAr: "شنو هو ضمان الجودة اللي كتقدمو؟",
    answer: "All our products go through strict quality checks before shipping. If you receive a damaged or incorrect item, we'll replace it for free.",
    answerAr: "جميع المنتجات كاتمر من مراقبة صارمة قبل ما تتصيفط. إلا وصلتك سلعة فيها عطب أو شي حاجة غالطة، غادي نبدلوهالك مجاناً.",
    category: "guarantees",
  },
  {
    id: "faq-8",
    question: "Can I modify or cancel my order?",
    questionAr: "واش نقدر نبدل أو نلغى الطلبية؟",
    answer: "You can modify or cancel your order within 2 hours of placing it by contacting our WhatsApp support. After that, the order enters processing.",
    answerAr: "تقدر تبدل أو تلغي الطلبية فظرف ساعتين من وقت ما طلبتي عبر التواصل معانا فواتساب. من بعد كاتدخل الطلبية فمرحلة التجهيز.",
    category: "ordering",
  },
];

export const faqs = faqItems;
