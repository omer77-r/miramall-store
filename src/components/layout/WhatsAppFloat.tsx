import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "212600000000";
  const message = encodeURIComponent("السلام عليكم، عندي سؤال بخصوص منتجات ميرا مول");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="اشتري عبر واتساب"
      className="fixed bottom-20 left-4 z-50 md:bottom-6 md:left-6 flex items-center gap-2 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 hover:bg-emerald-600 hover:scale-105 transition-all duration-200 px-5 py-3"
    >
      <span className="font-bold text-sm">اشتري عبر واتساب</span>
      <MessageCircle className="size-5 fill-white" />
      <span className="absolute top-0 right-0 size-3 rounded-full bg-emerald-300 animate-ping" />
      <span className="absolute top-0 right-0 size-3 rounded-full bg-emerald-400" />
    </Link>
  );
}
