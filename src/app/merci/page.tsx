"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { Check, CornerDownLeft } from "lucide-react";

function MerciContent() {
  const params = useSearchParams();
  const product = params.get("product") || "";
  const qty = params.get("qty") || "1";
  const price = params.get("price") || "";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0e8] to-white">
      <div className="mx-auto max-w-md px-5 py-12 text-center" dir="rtl">
        {/* Checkmark */}
        <div className="mx-auto size-24 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center mb-6">
          <Check className="size-12 text-emerald-500 stroke-[3]" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black text-zinc-800 mb-3">
          شكراً لك!
        </h1>
        <p className="text-sm text-zinc-500 leading-relaxed mb-8">
          طلبك تسجل بنجاح. فريقنا غادي يتاصل بيك فأقرب وقت باش يأكد التوصيل.
        </p>

        {/* Order Summary Card */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 mb-8 text-right">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-start">
              <span className="font-bold text-zinc-800 flex-1 text-left">{product}</span>
              <span className="text-zinc-400 font-medium mr-0 ml-4 flex-shrink-0">المنتج</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-zinc-800">{qty}</span>
              <span className="text-zinc-400 font-medium">الكمية</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-zinc-800">خلّص كي توصلك</span>
              <span className="text-zinc-400 font-medium">الخلاص</span>
            </div>
            <div className="border-t border-dashed border-zinc-200 pt-3 flex justify-between items-center">
              <span className="font-black text-2xl text-primary">{price} درهم</span>
              <span className="text-zinc-400 font-medium">المجموع</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-3 mb-8">
          {[
            "غادي نتاصلو بيك تليفونياً لتأكيد الطلب",
            "كنجهّزو الطلب وكنصيفطوه ليك",
            "كتعاين السلعة وكتخلّص غير كي توصلك",
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-white px-4 py-3.5"
            >
              <span className="flex-1 text-sm text-zinc-600 font-medium text-right">
                {step}
              </span>
              <span className="size-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary hover:bg-primary/90 text-white px-6 py-4 text-base font-bold transition-colors shadow-lg shadow-primary/20"
        >
          <CornerDownLeft className="size-5" />
          رجوع للصفحة الرئيسية
        </Link>

        {/* Footer Note */}
        <p className="text-xs text-zinc-400 mt-6">
          🚚 التوصيل 24-48 ساعة · لجميع مدن المغرب
        </p>
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
