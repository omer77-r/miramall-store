import type { Metadata } from "next";

const siteConfig = {
  name: "ندية",
  nameAr: "ندية",
  url: "https://nadya.ma",
  ogImage: "https://nadya.ma/og-image.jpg",
  description:
    "تسوق أفضل المنتجات من ندية. توصيل سريع لجميع مدن المغرب. الدفع عند الاستلام. ملابس، إلكترونيات، أدوات منزلية والمزيد.",
  keywords:
    "ندية, متجر إلكتروني, المغرب, الدفع عند الاستلام, تسوق, ملابس, إلكترونيات, أدوات منزلية, توصيل, COD, Nadya, Morocco, ecommerce, online shopping",
};

export function constructMetadata({
  title,
  description,
  image,
  noIndex,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: title
      ? `${title} | ${siteConfig.name}`
      : `${siteConfig.name} | متجر التسوق الأول في المغرب`,
    description: description || siteConfig.description,
    keywords: siteConfig.keywords,
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: image || siteConfig.ogImage, width: 1200, height: 630 }],
      locale: "ar_MA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
    },
  };
}
