import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/data/products";
import { ProductPageClient } from "@/components/product/ProductPageClient";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "المنتج غير موجود | ندية" };
  }

  return {
    title: `${product.nameAr} | ندية`,
    description: product.descriptionAr,
    openGraph: {
      title: `${product.nameAr} | ندية`,
      description: product.descriptionAr,
      images: product.images.slice(0, 1),
      locale: "ar_MA",
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}
