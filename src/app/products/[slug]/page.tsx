import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/data/products";
import { ProductPageClient } from "@/components/product/ProductPageClient";
import { ProductStructuredData } from "@/components/product/ProductStructuredData";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "المنتج غير موجود | ميرا مول" };
  return {
    title: `${product.nameAr} | ميرا مول`,
    description: product.descriptionAr,
    keywords: [product.nameAr, ...product.tags, "المغرب", "الدفع عند الاستلام", "ميرا مول"],
    openGraph: {
      title: `${product.nameAr} | ميرا مول`,
      description: product.descriptionAr,
      images: product.images.slice(0, 1),
      locale: "ar_MA",
      siteName: "ميرا مول Mira Mall",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.nameAr} | ميرا مول`,
      description: product.descriptionAr,
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return (
    <>
      <ProductStructuredData product={product} />
      <ProductPageClient product={product} />
    </>
  );
}
