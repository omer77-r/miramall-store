"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { Check, MessageCircle, ShoppingBag, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "212600000000";

function MerciContent() {
  const params = useSearchParams();
  const orderId = params.get("id") || "";
  const name = params.get("name") || "";
  const product = params.get("product") || "";
  const qty = params.get("qty") || "1";
  const price = params.get("price") || "";
  const city = params.get("city") || "";
  const phone = params.get("phone") || "";

  const whatsappMessage = encodeURIComponent(
    `السلام عليكم، أنا ${name}، طلبت ${product} × ${qty}، المدينة: ${city}، المبلغ: ${price} درهم، رقم الطلب: ${orderId}`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-lg px-4 py-16 text-center" dir="rtl">
        <div className="mx-auto size-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
          <Check className="size-10 text-emerald-600" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">
          تم استلام طلبك بنجاح! 🎉
        </h1>
        <p className="text-muted-foreground mb-8">
          شكراً {name || "ليك"}، غادي نتواصلو معاك قريباً لتأكيد الطلب.
        </p>

        {orderId && (
          <div className="rounded-2xl border border-border bg-card p-5 mb-6 text-right">
            <h3 className="font-bold text-foreground mb-3">ملخص الطلب</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">رقم الطلب</span>
                <span className="font-medium font-mono">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">المنتج</span>
                <span className="font-medium">{product}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">الكمية</span>
                <span className="font-medium">{qty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">المدينة</span>
                <span className="font-medium">{city}</span>
              </div>
              {phone && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الهاتف</span>
                  <span className="font-medium" dir="ltr">{phone}</span>
                </div>
              )}
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-bold">المبلغ الإجمالي</span>
                <span className="font-bold text-primary">{price} درهم</span>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/25"
          >
            <MessageCircle className="size-5 fill-white" />
            أكد طلبك عبر واتساب
          </a>

          <Link
            href="/shop"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-bold text-foreground hover:bg-muted transition-colors"
          >
            <ShoppingBag className="size-5" />
            تسوق المزيد
          </Link>

          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            <ArrowRight className="size-4" />
            الرجوع للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function MerciPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin size-8 border-4 border-primary border-t-transparent rounded-full" />
        </div>
      }
    >
      <MerciContent />
    </Suspense>
  );
}
