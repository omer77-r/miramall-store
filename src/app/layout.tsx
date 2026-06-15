import type { Metadata, Viewport } from "next";
import { Cairo, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#E8A0BF",
};

export const metadata: Metadata = {
  title: "ندية | متجر التسوق الأول في المغرب - الدفع عند الاستلام",
  description:
    "تسوق أفضل المنتجات من ندية. توصيل سريع لجميع مدن المغرب. الدفع عند الاستلام. ملابس، إلكترونيات، أدوات منزلية والمزيد. جودة مضمونة وأسعار تنافسية.",
  keywords: [
    "متجر",
    "تسوق",
    "المغرب",
    "الدفع عند الاستلام",
    "ندية",
    "ملابس",
    "إلكترونيات",
    "أدوات منزلية",
    "توصيل",
    "جودة",
    "أسعار",
  ],
  openGraph: {
    title: "ندية | متجر التسوق الأول في المغرب - الدفع عند الاستلام",
    description:
      "تسوق أفضل المنتجات من ندية. توصيل سريع لجميع مدن المغرب. الدفع عند الاستلام. ملابس، إلكترونيات، أدوات منزلية والمزيد.",
    url: "https://nadya.ma",
    siteName: "ندية Nadya",
    locale: "ar_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ندية | متجر التسوق الأول في المغرب",
    description:
      "تسوق أفضل المنتجات من ندية. توصيل سريع لجميع مدن المغرب. الدفع عند الاستلام.",
  },
  icons: {
    icon: "/nadya-favicon.svg",
    apple: "/nadya-favicon.svg",
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
      className={`${cairo.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
