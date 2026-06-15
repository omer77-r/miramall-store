import type { Metadata } from "next";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { ShopPageClient } from "@/components/shop/ShopPageClient";

export const metadata: Metadata = {
  title: "المتجر | جميع المنتجات | ندية",
  description: "تصفح جميع منتجات ندية. ملابس، إلكترونيات، عطور، إكسسوارات، أدوات منزلية والمزيد. توصيل لجميع مدن المغرب والدفع عند الاستلام.",
  openGraph: {
    title: "المتجر | ندية",
    description: "تصفح جميع منتجات ندية بأسعار تنافسية وجودة مضمونة.",
    locale: "ar_MA",
    type: "website",
  },
};

export default function ShopPage() {
  return <ShopPageClient products={products} categories={categories} />;
}
