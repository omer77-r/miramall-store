"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

// إشعارات "طلب جديد" — social proof كيرفع الثقة والتحويل.
// باش تحيدها: حط SHOW_TOASTS = false.
const SHOW_TOASTS = true;

const NAMES = [
  "أمين", "فاطمة", "يوسف", "خديجة", "محمد", "سلمى",
  "رشيد", "مريم", "حمزة", "نادية", "عبد الله", "سارة",
  "كريم", "حنان", "طارق", "إيمان",
];

const CITIES = [
  "الدار البيضاء", "الرباط", "مراكش", "فاس", "طنجة", "أكادير",
  "مكناس", "وجدة", "القنيطرة", "تطوان", "سلا", "تمارة",
  "الجديدة", "بني ملال", "خريبكة", "العيون",
];

const TIMES = ["دابا", "قبل شوية", "هاد الصباح", "اليوم"];

export default function RecentOrderToast({ productName }: { productName: string }) {
  const [toast, setToast] = useState<{ name: string; city: string; time: string } | null>(null);

  useEffect(() => {
    if (!SHOW_TOASTS) return;
    let hideTimer: ReturnType<typeof setTimeout>;
    let idx = Math.floor(Math.random() * NAMES.length);

    const show = () => {
      setToast({
        name: NAMES[idx % NAMES.length],
        city: CITIES[(idx * 7 + 3) % CITIES.length],
        time: TIMES[idx % TIMES.length],
      });
      idx++;
      hideTimer = setTimeout(() => setToast(null), 5000);
    };

    // أول إشعار من بعد 7 ثواني، ومن بعد كل 20 ثانية
    const first = setTimeout(show, 7000);
    const loop = setInterval(show, 20000);
    return () => {
      clearTimeout(first);
      clearInterval(loop);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.97 }}
          className="fixed bottom-24 right-3 z-40 lg:bottom-6 lg:right-6 max-w-[280px]"
          dir="rtl"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white/95 backdrop-blur px-4 py-3 shadow-xl shadow-emerald-500/10">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
              <ShoppingBag className="size-4 text-emerald-600" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold text-foreground truncate">
                {toast.name} من {toast.city}
              </p>
              <p className="text-[11px] text-muted-foreground truncate">
                طلب جديد: {productName} · {toast.time} ✅
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
