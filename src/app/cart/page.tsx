import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart/CartPageClient";

export const metadata: Metadata = {
  title: "سلة التسوق | ندية",
  description: "راجع المنتجات في سلة التسوق وأكمل طلبك. الدفع عند الاستلام متاح.",
  openGraph: {
    title: "سلة التسوق | ندية",
    description: "راجع المنتجات في سلة التسوق وأكمل طلبك.",
    locale: "ar_MA",
    type: "website",
  },
};

export default function CartPage() {
  return <CartPageClient />;
}
