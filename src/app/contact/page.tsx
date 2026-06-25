import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Heart,
  Camera,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "تواصل معنا",
  description:
    "تواصل مع فريق ميرا مول. خدمة عملاء على واتساب. توصيل لجميع مدن المغرب. الدفع عند الاستلام. اتصل بنا الآن لأي استفسار.",
});

const socialLinks = [
  { icon: Camera, href: "https://instagram.com/miramall.ma", label: "Instagram" },
  { icon: Globe, href: "https://facebook.com/miramall.ma", label: "Facebook" },
  { icon: Heart, href: "https://youtube.com/@miramall.ma", label: "YouTube" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary to-primary/5 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,160,191,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <MessageCircle className="size-4" />
              <span>تواصل معنا</span>
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              يسعدنا
              <span className="relative mx-2 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  تواصلك
                </span>
              </span>
              معنا
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              فريقنا جاهز للرد على استفساراتكم ومساعدتكم في كل ما تحتاجونه.
              لا تترددوا في التواصل معنا عبر أي من القنوات التالية.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
            {/* Contact Info Sidebar */}
            <div className="space-y-6 lg:col-span-2">
              {/* WhatsApp */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 dark:border-emerald-800 dark:bg-emerald-950/20">
                <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
                  <MessageCircle className="size-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  واتساب
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  تواصل معنا عبر واتساب للرد السريع على استفساراتكم وطلباتكم
                </p>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  <MessageCircle className="size-4" />
                  تواصل عبر واتساب
                </a>
              </div>

              {/* Other Contact Info */}
              <div className="space-y-4 rounded-2xl border border-border bg-card p-6">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">الهاتف</h4>
                    <a
                      href="tel:+212600000000"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      dir="ltr"
                    >
                      +212 6 00 00 00 00
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">البريد الإلكتروني</h4>
                    <a
                      href="mailto:contact@miramall.ma"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      dir="ltr"
                    >
                      contact@miramall.ma
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">العنوان</h4>
                    <p className="text-sm text-muted-foreground">
                      المغرب - جميع المدن
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">أوقات العمل</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>الاثنين - السبت: 9:00 - 21:00</p>
                      <p>الأحد: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="mb-4 font-heading text-lg font-semibold text-foreground">
                  تابعونا على
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                      aria-label={s.label}
                    >
                      <s.icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="mb-2 font-heading text-2xl font-bold text-foreground">
                  أرسل رسالة
                </h3>
                <p className="mb-8 text-muted-foreground">
                  املأ النموذج التالي وسنقوم بالرد عليك في أقرب وقت ممكن
                </p>

                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="أدخل اسمك الكامل"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact" className="text-sm font-medium text-foreground">
                        البريد الإلكتروني أو الهاتف
                      </label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="example@email.com"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="عنوان رسالتك"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Send className="size-4" />
                    <span>إرسال الرسالة</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <MapPin className="size-4" />
              <span>موقعنا</span>
            </div>
            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground">
              نخدم جميع مدن المغرب
            </h2>
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="flex aspect-[21/9] items-center justify-center bg-card">
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 size-12 text-muted-foreground/30" />
                  <p className="text-muted-foreground">
                    خريطة المغرب - جميع المدن مشمولة بالتوصيل
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
