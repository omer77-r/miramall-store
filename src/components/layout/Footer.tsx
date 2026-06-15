"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Sparkles,
  Phone,
  Mail,
  Clock,
  Truck,
  ShieldCheck,
  CreditCard,
  RotateCcw,
  Send,
  Heart,
  Users,
  MessageCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { z } from "zod"

const emailSchema = z.string().email("بريد إلكتروني غير صالح")

export function Footer() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setEmailError(result.error.issues[0].message)
      return
    }
    setEmailError("")
    setSubscribed(true)
    setEmail("")
  }

  return (
    <footer className="bg-[#faf8f5] border-t border-zinc-200/60" dir="rtl">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 py-12 border-b border-zinc-200/60">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-zinc-800 mb-1">
              انضمي إلى عالم ندية
            </h3>
            <p className="text-sm text-zinc-500">
              اشتركي في النشرة البريدية للحصول على أحدث العروض والمنتجات الجديدة
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex items-center gap-2 w-full md:w-auto"
          >
            <div className="relative flex-1 md:w-80">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError("")
                }}
                placeholder="بريدك الإلكتروني"
                className={cn(
                  "w-full h-12 rounded-full border px-5 text-sm outline-none transition-colors",
                  "bg-white border-zinc-200 text-zinc-800 placeholder:text-zinc-400",
                  "focus:border-rose-400 focus:ring-2 focus:ring-rose-100",
                  emailError && "border-red-400 focus:border-red-400 focus:ring-red-100"
                )}
                dir="rtl"
              />
              {emailError && (
                <p className="absolute -bottom-5 right-3 text-xs text-red-500">
                  {emailError}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="h-12 px-6 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-medium text-sm transition-colors flex items-center gap-2 flex-shrink-0"
            >
              <Send className="h-4 w-4" />
              اشتراك
            </button>
          </form>
        </div>
        {subscribed && (
          <p className="text-center text-sm text-green-600 mt-3">
            ✓ شكراً لاشتراكك! تم تسجيل بريدك الإلكتروني بنجاح
          </p>
        )}
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-rose-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                Nadya
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              ندية - وجهتك الأولى لمنتجات التجميل والعناية الفاخرة في المغرب. نقدم
              لكِ أفضل المنتجات العالمية والمحلية بجودة عالية وأسعار مناسبة.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Heart className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-rose-500 hover:border-rose-300 transition-colors"
                aria-label="Facebook"
              >
                <Users className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/212612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-green-500 hover:border-green-300 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-zinc-800 mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "المنتجات", href: "/products" },
                { label: "العروض", href: "/offers" },
                { label: "تواصل معنا", href: "/contact" },
                { label: "من نحن", href: "/about" },
                { label: "المدونة", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-rose-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="font-semibold text-zinc-800 mb-4">خدمة العملاء</h4>
            <ul className="space-y-2.5">
              {[
                { label: "خدمة العملاء", href: "/customer-service" },
                { label: "الشحن والتوصيل", href: "/shipping" },
                { label: "الإرجاع والاستبدال", href: "/returns" },
                { label: "الأسئلة الشائعة", href: "/faq" },
                { label: "سياسة الخصوصية", href: "/privacy" },
                { label: "الشروط والأحكام", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-rose-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-semibold text-zinc-800 mb-4">
              معلومات التواصل
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/212612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-500 hover:text-green-600 transition-colors"
                >
                  <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span dir="ltr">0612-345678</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@nadya.ma"
                  className="flex items-center gap-3 text-sm text-zinc-500 hover:text-rose-600 transition-colors"
                >
                  <Mail className="h-4 w-4 text-rose-400 flex-shrink-0" />
                  <span dir="ltr">contact@nadya.ma</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-zinc-500">
                  <Clock className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>السبت - الخميس: 9:00 - 21:00</p>
                    <p>الجمعة: 15:00 - 21:00</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: CreditCard,
              label: "الدفع عند الاستلام",
              sub: "ادفعي عند استلام طلبك",
            },
            {
              icon: Truck,
              label: "توصيل سريع",
              sub: "توصيل خلال 2-5 أيام",
            },
            {
              icon: ShieldCheck,
              label: "منتجات أصلية",
              sub: "نضمن أصالة جميع المنتجات",
            },
            {
              icon: RotateCcw,
              label: "إرجاع سهل",
              sub: "سياسة إرجاع خلال 14 يوم",
            },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-zinc-100 hover:border-rose-200 hover:shadow-sm transition-all"
            >
              <badge.icon className="h-8 w-8 text-rose-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-zinc-700">
                  {badge.label}
                </p>
                <p className="text-xs text-zinc-400">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-200/60 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-400">
            © 2025 ندية Nadya. جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              💳 الدفع عند الاستلام
            </span>
            <span className="w-px h-3 bg-zinc-200" />
            <span>🇲🇦 صنع في المغرب</span>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/212612345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 left-4 md:left-8 z-30 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-all hover:scale-110"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  )
}
