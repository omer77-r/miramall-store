import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import {
  ShoppingBag,
  Users,
  MapPin,
  Calendar,
  Heart,
  Star,
  Shield,
  Truck,
  Phone,
  Award,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "من نحن",
  description:
    "تعرف على ميرا مول، متجر التسوق الأول في المغرب. نقدم منتجات متميزة بجودة عالية مع توصيل لجميع مدن المغرب والدفع عند الاستلام.",
});

const stats = [
  { icon: ShoppingBag, value: "500+", label: "منتج" },
  { icon: Users, value: "+10,000", label: "عميل سعيد" },
  { icon: MapPin, value: "50+", label: "مدينة نُوصل إليها" },
  { icon: Calendar, value: "3", label: "سنوات من التميز" },
];

const trustBadges = [
  {
    icon: Shield,
    title: "جودة مضمونة",
    description: "جميع منتجاتنا تخضع لفحص دقيق للجودة قبل الشحن لضمان رضاكم.",
  },
  {
    icon: Truck,
    title: "توصيل سريع",
    description: "نوصل طلبيتك لباب منزلك في جميع مدن المغرب خلال 2-5 أيام عمل.",
  },
  {
    icon: Phone,
    title: "دفع عند الاستلام",
    description: "لا تدفع حتى تستلم طلبيتك وتتأكد من جودتها ومطابقتها لطلبك.",
  },
  {
    icon: Award,
    title: "خدمة عملاء ممتازة",
    description: "فريق دعم متواجد طوال أيام الأسبوع لمساعدتك والإجابة على استفساراتك.",
  },
];

const values = [
  {
    icon: Heart,
    title: "الثقة",
    description: "نؤمن بأن الثقة هي أساس علاقتنا مع عملائنا، ونسعى لكسبها في كل تعامل.",
  },
  {
    icon: Star,
    title: "الجودة",
    description: "لا نقبل إلا بالأفضل. نختار منتجاتنا بعناية لنقدم لكم أجود المنتجات المغربية.",
  },
  {
    icon: Sparkles,
    title: "الأصالة",
    description: "نفتخر بتقديم منتجات تعكس أصالة وعراقة الحرف اليدوية والتراث المغربي.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary to-primary/5 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(232,160,191,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="size-4" />
              <span>من نحن</span>
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              قصة
              <span className="relative mx-2 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ميرا مول
                </span>
              </span>
              بدأت بشغف
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              من قلب المغرب، بدأت رحلة ميرا مول بهدف بسيط: جعل التسوق تجربة سهلة، آمنة،
              وممتعة لكل مغربي ومغربية. نؤمن بأن الجمال والجودة حق للجميع.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-primary/10">
                    <ShoppingBag className="size-10 text-primary" />
                  </div>
                  <p className="font-heading text-3xl font-bold text-primary">
                    ميرا مول
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    متجر التسوق الأول في المغرب
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                قصتنا
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                من المغرب إلى كل بيت مغربي
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  تأسست ميرا مول انطلاقاً من رؤية واضحة: تقديم منتجات متميزة للمستهلك
                  المغربي مع تجربة تسوق استثنائية. بدأنا من الصفر، بإيمان راسخ بأن
                  الجودة والثقة هما مفتاح النجاح.
                </p>
                <p>
                  نتعاون مع أفضل الموردين والحرفيين في المغرب لنجلب لكم منتجات تعكس
                  غنى التراث المغربي وتلبي احتياجات الحياة العصرية. من الملابس
                  التقليدية إلى الإلكترونيات الحديثة، نقدم تشكيلة متنوعة تناسب جميع
                  الأذواق.
                </p>
                <p>
                  اليوم، نفخر بخدمة أكثر من 10,000 عميل في أكثر من 50 مدينة مغربية،
                  ونطمح لأن نكون الوجهة الأولى للتسوق الإلكتروني في المملكة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                قيمنا
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                رؤيتنا ورسالتنا
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Star className="size-6 text-primary" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                  رسالتنا
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  تقديم أفضل تجربة تسوق إلكتروني في المغرب من خلال منتجات عالية
                  الجودة، خدمة عملاء استثنائية، وتوصيل سريع وموثوق لكل مدينة مغربية.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Sparkles className="size-6 text-primary" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                  رؤيتنا
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  أن نكون المتجر الإلكتروني الأول والأكثر ثقة في المغرب، نربط الحرفيين
                  والمنتجين المحليين بالمستهلك المغربي، ونساهم في رقمنة التجارة المغربية.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10">
                    <v.icon className="size-7 text-primary" />
                  </div>
                  <h4 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {v.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mira Mall */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                لماذا ميرا مول؟
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                أسباب تميزنا عن غيرنا
              </h2>
              <p className="mt-4 text-muted-foreground">
                نضع ثقتكم على رأس أولوياتنا ونعمل بجد لنكون عند حسن ظنكم
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <badge.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {badge.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-1.5 text-sm font-medium text-primary">
                أرقامنا
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                ميرا مول في أرقام
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg"
                >
                  <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <stat.icon className="size-6 text-primary" />
                  </div>
                  <div className="mb-1 font-heading text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                فريقنا
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                نعمل معاً لخدمتكم
              </h2>
              <p className="mt-4 text-muted-foreground">
                فريق شغوف ملتزم بتقديم أفضل تجربة تسوق لكم
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto mb-4 size-28 overflow-hidden rounded-full bg-muted">
                    <div className="flex size-full items-center justify-center">
                      <Users className="size-12 text-muted-foreground/40" />
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    عضو الفريق
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    المنصب الوظيفي
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-6 text-muted-foreground">
                نبحث دائماً عن المواهب الشغوفة للانضمام إلى فريق ميرا مول
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                انضم إلينا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
            ابدأ رحلة التسوق مع ميرا مول اليوم
          </h2>
          <p className="mb-8 text-muted-foreground">
            استمتع بأفضل المنتجات مع توصيل سريع ودفع عند الاستلام
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            <ShoppingBag className="size-5" />
            <span>تسوق الآن</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
