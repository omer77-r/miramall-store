import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

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
  icons: {
    icon: "/nadya-favicon.svg",
    apple: "/nadya-favicon.svg",
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
          <WhatsAppFloat />
        </ClientProviders>
      </body>
    </html>
  );
}
