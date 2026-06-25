import type { Metadata } from "next";
import { CheckoutPageClient } from "@/components/checkout/CheckoutPageClient";

export const metadata: Metadata = {
  title: "إتمام الطلب | ميرا مول",
  description: "أكمل طلبك من ميرا مول. املأ معلومات التوصيل واستلم طلبك عند الباب. الدفع عند الاستلام متاح في جميع مدن المغرب.",
  openGraph: {
    title: "إتمام الطلب | ميرا مول",
    description: "أكمل طلبك من ميرا مول. املأ معلومات التوصيل واستلم طلبك عند الباب.",
    locale: "ar_MA",
    type: "website",
  },
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
