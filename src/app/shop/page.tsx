import type { Metadata } from "next";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { ShopPageClient } from "@/components/shop/ShopPageClient";

export const metadata: Metadata = {
  title: "المتجر | جميع المنتجات | ميرا مول",
  description: "تصفح جميع منتجات ميرا مول. ملابس، إلكترونيات، عطور، إكسسوارات، أدوات منزلية والمزيد. توصيل لجميع مدن المغرب والدفع عند الاستلام.",
  openGraph: {
    title: "المتجر | ميرا مول",
    description: "تصفح جميع منتجات ميرا مول بأسعار تنافسية وجودة مضمونة.",
    locale: "ar_MA",
    type: "website",
  },
};

export default function ShopPage() {
  return <ShopPageClient products={products} categories={categories} />;
}
