import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import AttributionTracker from "@/components/AttributionTracker";
import Script from "next/script";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
});

export const viewport: Viewport = {
  themeColor: "#FF6B00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "ميرا مول | تسوق منتجات المغرب - توصيل 24h-48h والدفع عند الاستلام",
  description:
    "تسوق أفضل المنتجات من ميرا مول. توصيل 24h-48h لجميع مدن المغرب فين ما كنتي. الدفع عند الاستلام بدون مصاريف خفية. جودة مضمونة وأسعار تنافسية.",
  keywords: [
    "متجر", "تسوق", "المغرب", "الدفع عند الاستلام", "ميرا مول",
    "توصيل 24 ساعة", "توصيل 48 ساعة", "COD", "Mira Mall", "Morocco",
    "shopping", "livraison Maroc", "الدار البيضاء", "الرباط", "مراكش",
  ],
  metadataBase: new URL("https://miramall.ma"),
  openGraph: {
    title: "ميرا مول | تسوق منتجات المغرب - توصيل 24h-48h والدفع عند الاستلام",
    description:
      "تسوق أفضل المنتجات من ميرا مول. توصيل 24h-48h لجميع مدن المغرب. الدفع عند الاستلام.",
    url: "https://miramall.ma",
    siteName: "ميرا مول Mira Mall",
    locale: "ar_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ميرا مول | تسوق منتجات المغرب - توصيل 24h-48h",
    description:
      "تسوق أفضل المنتجات من ميرا مول. توصيل 24h-48h لجميع مدن المغرب. الدفع عند الاستلام.",
  },
  alternates: {
    canonical: "https://miramall.ma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans pb-16 md:pb-0">
        <ClientProviders>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileBottomNav />
          <AttributionTracker />
        </ClientProviders>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1343992540996759');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1343992540996759&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                ttq.load('D92EKEJC77U49J865620');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />
      </body>
    </html>
  );
}
