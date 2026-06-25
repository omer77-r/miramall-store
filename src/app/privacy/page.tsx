import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { Shield, Lock, Cookie, UserCheck, FileText, Database } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "سياسة الخصوصية",
  description:
    "سياسة الخصوصية لمتجر ميرا مول. تعرف على كيفية جمع واستخدام وحماية بياناتك الشخصية عند التسوق من متجرنا.",
});

const sections = [
  {
    icon: Database,
    title: "جمع المعلومات",
    content: (
      <>
        <p className="mb-4">
          نقوم بجمع المعلومات التالية عند استخدامكم لموقع ميرا مول أو تقديم طلب:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>الاسم الكامل ورقم الهاتف وعنوان التوصيل لإتمام الطلبات.</li>
          <li>عنوان البريد الإلكتروني للتواصل وإرسال تحديثات الطلب.</li>
          <li>معلومات التصفح (نوع المتصفح، الصفحات المزارة) لتحسين تجربة المستخدم.</li>
          <li>معلومات الطلبات السابقة لتسهيل إعادة الطلب.</li>
        </ul>
        <p>
          جميع المعلومات تُجمع بشكل طوعي عند تقديم طلب أو التواصل معنا، ولا نقوم
          بجمع أي معلومات دون علمكم وموافقتكم.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    title: "استخدام المعلومات",
    content: (
      <>
        <p className="mb-4">
          نستخدم المعلومات التي نجمعها للأغراض التالية فقط:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>معالجة طلباتكم وتوصيلها إلى العنوان المحدد.</li>
          <li>التواصل معكم بخصوص حالة الطلب أو أي استفسارات.</li>
          <li>تحسين خدماتنا وتجربة التسوق على الموقع.</li>
          <li>إرسال العروض والتحديثات التسويقية (فقط في حال موافقتكم).</li>
          <li>الامتثال للمتطلبات القانونية والتنظيمية.</li>
        </ul>
      </>
    ),
  },
  {
    icon: UserCheck,
    title: "مشاركة المعلومات",
    content: (
      <>
        <p className="mb-4">
          نلتزم بعدم بيع أو تأجير أو مشاركة معلوماتكم الشخصية مع أطراف خارجية،
          باستثناء الحالات التالية:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            شركات الشحن: نشارك اسمكم وعنوانكم ورقم هاتفكم مع شركة الشحن لتوصيل
            الطلب.
          </li>
          <li>
            الالتزامات القانونية: في حال طلب قانوني من جهة قضائية أو تنظيمية
            مختصة.
          </li>
          <li>
            مزودي الخدمات التقنية: مثل خدمات الاستضافة وتحليل البيانات، مع
            التزامهم باتفاقيات سرية.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: Lock,
    title: "حماية البيانات",
    content: (
      <>
        <p className="mb-4">
          نطبق إجراءات أمنية صارمة لحماية معلوماتكم الشخصية من الوصول غير المصرح
          به أو التعديل أو الإفصاح أو الإتلاف:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>تشفير SSL/TLS لجميع الاتصالات بين متصفحكم وموقعنا.</li>
          <li>تخزين البيانات على خوادم آمنة محمية بجدران نارية.</li>
          <li>تحديد صلاحيات الوصول إلى البيانات للموظفين المصرح لهم فقط.</li>
          <li>مراجعات دورية لأنظمة الأمان وتحديثها باستمرار.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Cookie,
    title: "ملفات تعريف الارتباط (Cookies)",
    content: (
      <>
        <p className="mb-4">
          نستخدم ملفات تعريف الارتباط لتحسين تجربة تصفحكم لموقعنا:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            ملفات ضرورية: لتشغيل الموقع (مثل حفظ محتويات سلة التسوق وتفضيلات
            اللغة).
          </li>
          <li>
            ملفات تحليلية: لفهم كيفية استخدام الزوار لموقعنا وتحسين أدائه (مثل
            عدد الزيارات والصفحات الأكثر تصفحاً).
          </li>
          <li>
            يمكنكم تعطيل ملفات تعريف الارتباط من إعدادات متصفحكم، لكن قد يؤثر ذلك
            على بعض وظائف الموقع.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: Shield,
    title: "حقوق المستخدمين",
    content: (
      <>
        <p className="mb-4">
          وفقاً للقوانين المغربية والدولية، لكم الحقوق التالية فيما يخص بياناتكم
          الشخصية:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>الحق في الوصول إلى بياناتكم الشخصية ومعرفة كيفية استخدامها.</li>
          <li>الحق في تصحيح أي بيانات غير دقيقة أو غير مكتملة.</li>
          <li>الحق في طلب حذف بياناتكم الشخصية (&quot;الحق في النسيان&quot;).</li>
          <li>الحق في الاعتراض على معالجة بياناتكم لأغراض التسويق.</li>
          <li>الحق في سحب الموافقة على معالجة البيانات في أي وقت.</li>
        </ul>
        <p>
          لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني
          contact@miramall.ma أو عبر واتساب.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary to-primary/5 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(232,160,191,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="size-4" />
              <span>سياسة الخصوصية</span>
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              خصوصيتكم
              <span className="relative mx-2 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  أمانة
                </span>
              </span>
              في أعناقنا
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              نلتزم بحماية خصوصيتكم وبياناتكم الشخصية. توضح هذه السياسة كيفية جمع
              واستخدام وحماية معلوماتكم عند استخدام موقع ميرا مول.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Last Updated */}
            <div className="mb-12 rounded-xl border border-border bg-muted p-4 text-center text-sm text-muted-foreground">
              آخر تحديث: 1 يونيو 2026
            </div>

            {/* Intro */}
            <div className="mb-12 leading-relaxed text-muted-foreground">
              <p className="mb-4">
                في ميرا مول، ندرك أهمية خصوصيتكم ونلتزم بحماية بياناتكم الشخصية. تشرح
                سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا للمعلومات التي
                تقدمونها لنا عند استخدامكم لموقع miramall.ma أو خدماتنا.
              </p>
              <p>
                باستخدامكم لموقع ميرا مول، فإنكم توافقون على الممارسات الموضحة في هذه
                السياسة. ننصحكم بقراءتها بعناية والتواصل معنا في حال وجود أي
                استفسارات.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <section.icon className="size-6 text-primary" />
                    </div>
                    <div className="pt-1">
                      <h2 className="font-heading text-xl font-bold text-foreground">
                        {index + 1}. {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="leading-relaxed text-muted-foreground">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <Shield className="mx-auto mb-4 size-10 text-primary" />
              <h2 className="mb-2 font-heading text-xl font-bold text-foreground">
                لديك استفسار حول الخصوصية؟
              </h2>
              <p className="mb-4 text-muted-foreground">
                نحن هنا للإجابة على أي أسئلة تتعلق بسياسة الخصوصية أو بياناتكم
                الشخصية.
              </p>
              <a
                href="mailto:contact@miramall.ma"
                className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
              >
                contact@miramall.ma
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
