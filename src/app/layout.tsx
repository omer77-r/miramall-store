import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

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
  title: "ميرا مول | متجر التسوق الأول في المغرب - الدفع عند الاستلام",
  description:
    "تسوق أفضل المنتجات من ميرا مول. توصيل سريع لجميع مدن المغرب. الدفع عند الاستلام. ملابس، إلكترونيات، أدوات منزلية والمزيد. جودة مضمونة وأسعار تنافسية.",
  keywords: [
    "متجر", "تسوق", "المغرب", "الدفع عند الاستلام", "ميرا مول",
    "ملابس", "إلكترونيات", "أدوات منزلية", "توصيل", "جودة", "أسعار",
    "COD", "Mira Mall", "Morocco", "shopping", "livraison Maroc",
  ],
  metadataBase: new URL("https://miramall.ma"),
  openGraph: {
    title: "ميرا مول | متجر التسوق الأول في المغرب - الدفع عند الاستلام",
    description:
      "تسوق أفضل المنتجات من ميرا مول. توصيل سريع لجميع مدن المغرب. الدفع عند الاستلام. ملابس، إلكترونيات، أدوات منزلية والمزيد.",
    url: "https://miramall.ma",
    siteName: "ميرا مول Mira Mall",
    locale: "ar_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ميرا مول | متجر التسوق الأول في المغرب",
    description:
      "تسوق أفضل المنتجات من ميرا مول. توصيل سريع لجميع مدن المغرب. الدفع عند الاستلام.",
  },
  icons: {
    icon: "/miramall-favicon.svg",
    apple: "/miramall-favicon.svg",
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
        </ClientProviders>
      </body>
    </html>
  );
}
