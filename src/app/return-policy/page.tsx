import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import {
  RotateCcw,
  Package,
  ClipboardCheck,
  Banknote,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "سياسة الإرجاع",
  description:
    "سياسة الإرجاع والاستبدال لمتجر ميرا مول. يمكنك إرجاع المنتجات خلال 14 يوماً. شروط سهلة وشفافة. تعرف على كيفية إرجاع منتجك واسترداد أموالك.",
});

export default function ReturnPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary to-primary/5 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(232,160,191,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <RotateCcw className="size-4" />
              <span>سياسة الإرجاع</span>
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              إرجاع
              <span className="relative mx-2 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  سهل
                </span>
              </span>
              ومضمون
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              رضاكم هو أولويتنا. إذا لم تكونوا راضين عن مشترياتكم، نوفر لكم سياسة
              إرجاع سهلة وشفافة خلال 14 يوماً من تاريخ الاستلام.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Overview */}
            <div className="mb-12 rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <AlertCircle className="size-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  نظرة عامة
                </h2>
              </div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  في ميرا مول، نحرص على رضاكم التام عن مشترياتكم. إذا لم تكونوا
                  راضين تماماً عن المنتج الذي استلمتموه، يمكنكم إرجاعه خلال 14
                  يوماً من تاريخ الاستلام.
                </p>
                <p>
                  نهدف إلى جعل عملية الإرجاع سهلة وشفافة قدر الإمكان. توضح هذه
                  السياسة الشروط والخطوات اللازمة للإرجاع والاستبدال واسترداد
                  المبلغ.
                </p>
              </div>
            </div>

            {/* Conditions */}
            <div className="mb-12 rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <ClipboardCheck className="size-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  شروط الإرجاع
                </h2>
              </div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>لقبول طلب الإرجاع، يجب أن تتوفر الشروط التالية:</p>
                <ul className="list-inside list-disc space-y-3">
                  <li>
                    <strong className="text-foreground">المدة:</strong> تقديم طلب
                    الإرجاع خلال 14 يوماً من تاريخ استلام المنتج.
                  </li>
                  <li>
                    <strong className="text-foreground">الحالة:</strong> أن يكون
                    المنتج بحالته الأصلية، غير مستخدم، وغير تالف.
                  </li>
                  <li>
                    <strong className="text-foreground">العبوة:</strong> أن يكون
                    المنتج في عبوته الأصلية مع جميع الملحقات والملصقات.
                  </li>
                  <li>
                    <strong className="text-foreground">الإثبات:</strong> تقديم
                    إثبات الشراء (رقم الطلب أو فاتورة الشراء).
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-800 dark:bg-amber-950/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
                    <div>
                      <p className="font-semibold text-foreground">
                        المنتجات غير القابلة للإرجاع
                      </p>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>الملابس الداخلية وأدوات النظافة الشخصية (لأسباب صحية).</li>
                        <li>المنتجات التي تم فتح عبوتها محكمة الإغلاق.</li>
                        <li>المنتجات المصممة حسب الطلب أو المخصصة.</li>
                        <li>المنتجات الرقمية وبطاقات الهدايا.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="mb-12 rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Package className="size-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  خطوات الإرجاع
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "التواصل معنا",
                    description:
                      "تواصل معنا عبر واتساب أو البريد الإلكتروني. اذكر رقم طلبك وسبب الإرجاع. سنقوم بالرد عليك خلال 24 ساعة عمل.",
                  },
                  {
                    step: "2",
                    title: "تأكيد الطلب",
                    description:
                      "بعد مراجعة طلبك، سنؤكد لك إمكانية الإرجاع ونرسل لك تعليمات الشحن. في معظم الحالات، نرسل مندوباً لاستلام المنتج من عنوانك.",
                  },
                  {
                    step: "3",
                    title: "تجهيز المنتج",
                    description:
                      "قم بتغليف المنتج بشكل آمن في عبوته الأصلية مع جميع الملحقات. تأكد من إرفاق فاتورة الشراء أو رقم الطلب.",
                  },
                  {
                    step: "4",
                    title: "استلام المنتج",
                    description:
                      "سيقوم مندوبنا باستلام المنتج من عنوانك. تأكد من الحصول على إيصال الاستلام كدليل على تسليم المنتج.",
                  },
                  {
                    step: "5",
                    title: "فحص المنتج واسترداد المبلغ",
                    description:
                      "بعد استلام المنتج، سنقوم بفحصه للتأكد من استيفائه لشروط الإرجاع. عند الموافقة، سنقوم باسترداد المبلغ خلال 5-7 أيام عمل.",
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Refund */}
            <div className="mb-12 rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Banknote className="size-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  استرداد المبلغ
                </h2>
              </div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  بعد الموافقة على الإرجاع، نقوم باسترداد المبلغ وفق الآلية التالية:
                </p>
                <ul className="list-inside list-disc space-y-3">
                  <li>
                    <strong className="text-foreground">المدة:</strong> يتم
                    استرداد المبلغ خلال 5-7 أيام عمل من تاريخ استلامنا للمنتج
                    والتأكد من حالته.
                  </li>
                  <li>
                    <strong className="text-foreground">الطريقة:</strong> بالنسبة
                    لطلبات الدفع عند الاستلام، يتم إرجاع المبلغ عبر التحويل البنكي
                    أو التسليم النقدي حسب منطقتكم.
                  </li>
                  <li>
                    <strong className="text-foreground">المبلغ المسترد:</strong>
                    يتم استرداد كامل قيمة المنتج. رسوم التوصيل غير قابلة
                    للاسترداد إلا في حالة وجود خطأ من طرفنا أو وصول منتج تالف.
                  </li>
                  <li>
                    <strong className="text-foreground">الاستبدال:</strong> يمكنكم
                    اختيار استبدال المنتج بمنتج آخر بنفس القيمة أو دفع فرق السعر
                    إن وجد.
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <MessageCircle className="mx-auto mb-4 size-10 text-primary" />
              <h2 className="mb-2 font-heading text-xl font-bold text-foreground">
                هل تريد إرجاع منتج؟
              </h2>
              <p className="mb-6 text-muted-foreground">
                تواصل معنا عبر واتساب وسنساعدك في كل خطوة من خطوات الإرجاع.
              </p>
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <MessageCircle className="size-4" />
                تواصل عبر واتساب للإرجاع
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
