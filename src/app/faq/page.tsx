import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import { faqItems, faqCategories } from "@/lib/data/faq";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { HelpCircle, MessageCircle } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "الأسئلة الشائعة",
  description:
    "إجابات على الأسئلة الشائعة حول التسوق من ميرا مول: الطلبات، الشحن، الدفع، الإرجاع، والحساب. كل ما تحتاج معرفته عن التسوق من متجر ميرا مول.",
});

const categoryNameMap = Object.fromEntries(
  faqCategories.map((c) => [c.id, c.nameAr])
);

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary to-primary/5 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,160,191,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <HelpCircle className="size-4" />
              <span>الأسئلة الشائعة</span>
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              كل ما تحتاج
              <span className="relative mx-2 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  معرفته
                </span>
              </span>
              عن ميرا مول
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              إجابات سريعة على الأسئلة الأكثر شيوعاً حول التسوق، الشحن، الدفع،
              الإرجاع وكل ما يتعلق بتجربتك مع ميرا مول.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={faqItems} categoryNames={categoryNameMap} />
          </div>
        </div>
      </section>

      {/* Contact Prompt */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10">
              <MessageCircle className="size-8 text-primary" />
            </div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
              لم تجد إجابتك؟
            </h2>
            <p className="mb-8 text-muted-foreground">
              لا تقلق! فريقنا جاهز للإجابة على جميع استفساراتكم. تواصل معنا
              وسنرد عليك في أسرع وقت.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <MessageCircle className="size-4" />
                تواصل عبر واتساب
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-input bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-muted"
              >
                اذهب إلى صفحة التواصل
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
