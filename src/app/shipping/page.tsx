import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import {
  Truck,
  MapPin,
  Clock,
  Banknote,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "الشحن والتوصيل",
  description:
    "معلومات الشحن والتوصيل من ميرا مول. توصيل سريع لجميع مدن المغرب خلال 2-5 أيام. توصيل مجاني للطلبات فوق 349 درهم. الدفع عند الاستلام.",
});

export default function ShippingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary to-primary/5 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(232,160,191,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Truck className="size-4" />
              <span>الشحن والتوصيل</span>
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              توصيل
              <span className="relative mx-2 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  سريع
                </span>
              </span>
              لكل المغرب
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              نوصل طلبيتكم إلى باب منزلكم أينما كنتم في المغرب. توصيل سريع، آمن،
              وموثوق مع إمكانية تتبع الشحنة.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Coverage */}
            <div className="mb-12 rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="size-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  مناطق التغطية
                </h2>
              </div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  نغطي جميع مدن وقرى المغرب بدون استثناء - من طنجة إلى الكويرة.
                  لا توجد منطقة خارج نطاق خدمتنا. أيًّا كان موقعكم في المملكة،
                  سنوصل طلبيتكم إليكم.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "الدار البيضاء",
                    "الرباط",
                    "مراكش",
                    "فاس",
                    "طنجة",
                    "أكادير",
                    "مكناس",
                    "وجدة",
                    "تطوان",
                    "العيون",
                    "الداخلة",
                    "بني ملال",
                    "القنيطرة",
                    "الجديدة",
                    "آسفي",
                    "الناظور",
                    "تازة",
                    "خريبكة",
                    "سطات",
                    "الرشيدية",
                    "ورزازات",
                    "تارودانت",
                    "الصويرة",
                    "إفران",
                    "شفشاون",
                    "الحسيمة",
                    "زاكورة",
                    "طانطان",
                    "كلميم",
                    "السمارة",
                  ].map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm"
                    >
                      <MapPin className="size-3.5 shrink-0 text-primary/60" />
                      <span className="text-foreground">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Delivery Times */}
            <div className="mb-12 rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="size-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  مدة التوصيل
                </h2>
              </div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  نلتزم بتوصيل طلبيتكم في أسرع وقت ممكن. تختلف مدة التوصيل حسب
                  موقعكم:
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/20">
                    <h4 className="mb-2 font-semibold text-emerald-700 dark:text-emerald-300">
                      المدن الكبرى
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      الدار البيضاء، الرباط، مراكش، فاس، طنجة، أكادير، مكناس، وجدة
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                      2-3 أيام عمل
                    </div>
                  </div>
                  <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 dark:border-amber-800 dark:bg-amber-950/20">
                    <h4 className="mb-2 font-semibold text-amber-700 dark:text-amber-300">
                      باقي المدن
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      جميع المدن والمناطق الأخرى في المغرب
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
                      3-5 أيام عمل
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-border bg-muted/50 p-4 text-sm">
                  <strong className="text-foreground">ملاحظة:</strong> أيام العمل
                  هي من الاثنين إلى السبت. لا يتم التوصيل أيام الأحد والعطل
                  الرسمية. في فترات التخفيضات والمواسم، قد تزيد مدة التوصيل
                  بيوم إضافي.
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-12 rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Banknote className="size-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  رسوم التوصيل
                </h2>
              </div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
                    <div className="mb-2 font-heading text-3xl font-bold text-primary">
                      مجاناً
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                       للطلبات فوق 349 درهم
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      توصيل مجاني لباب المنزل
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/50 p-5 text-center">
                    <div className="mb-2 font-heading text-3xl font-bold text-foreground">
                      39 درهم
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                       للطلبات أقل من 349 درهم
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      رسم توصيل ثابت لجميع المدن
                    </p>
                  </div>
                </div>
                <p>
                  رسوم التوصيل ثابتة وموحدة لجميع مدن المغرب. نشجعكم على الاستفادة
                   من التوصيل المجاني بجمع مشترياتكم لتصل إلى 349 درهم.
                </p>
              </div>
            </div>

            {/* COD */}
            <div className="mb-12 rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="size-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  خلّص ملي توصلك (COD)
                </h2>
              </div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  كنوفرو ليك خدمة خلّص ملي توصلك فجميع مدن المغرب.
                  هاد الخدمة كتعني:
                </p>
                <ul className="list-inside list-disc space-y-3">
                  <li>ما محتاجش بطاقة بنكية أو حساب إلكتروني.</li>
                  <li>
                    كتخلّص غير ملي كتوصلك الطلبية وكتأكد بلي مطابقة لطلبك.
                  </li>
                  <li>بلا أي مصاريف إضافية.</li>
                  <li>
                    تفحص المنتج قبل الدفع لمندوب التوصيل للتأكد من سلامته.
                  </li>
                </ul>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">هام:</strong> يرجى تجهيز
                    المبلغ المطلوب نقداً عند استلام الطلب. مندوب التوصيل لا يحمل
                    فكة (باقي النقود)، لذا نرجو تحضير المبلغ بالضبط إن أمكن.
                  </p>
                </div>
              </div>
            </div>

            {/* Tracking */}
            <div className="mb-12 rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Smartphone className="size-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  تتبع الشحنة
                </h2>
              </div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  بعد شحن طلبيتك، سنرسل لك رقم التتبع عبر واتساب أو رسالة نصية.
                  يمكنك استخدام هذا الرقم للتواصل مع شركة الشحن لمعرفة حالة
                  طلبيتك في أي وقت.
                </p>
                <p>
                  كما يمكنك التواصل معنا مباشرة عبر واتساب للاستفسار عن حالة
                  طلبيتك في أي وقت. فريق خدمة العملاء جاهز لمساعدتك.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <Truck className="mx-auto mb-4 size-10 text-primary" />
              <h2 className="mb-2 font-heading text-xl font-bold text-foreground">
                هل لديك استفسار عن الشحن؟
              </h2>
              <p className="mb-6 text-muted-foreground">
                فريقنا جاهز للإجابة على جميع أسئلتك حول التوصيل والشحن.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                >
                  تواصل معنا
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full border border-input bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50"
                >
                  تسوق الآن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
