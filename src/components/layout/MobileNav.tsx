"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, Search, Sparkles, ChevronDown, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { categories, subcategories } from "@/lib/data/categories"
import * as Accordion from "@radix-ui/react-accordion"

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel - slides from right (RTL) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-zinc-100">
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-zinc-500 hover:text-rose-600 transition-colors"
                aria-label="إغلاق"
              >
                <X className="h-5 w-5" />
              </button>

              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5 text-rose-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Nadya
                </span>
              </Link>

              <div className="w-9" />
            </div>

            {/* Search */}
            <div className="px-4 py-3">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="ابحثي عن منتجاتك..."
                  className="w-full h-10 bg-zinc-100 rounded-full pr-10 pl-4 text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-rose-300 dir-rtl"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Categories Accordion */}
            <div className="flex-1 overflow-y-auto px-4 pb-4">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 px-2">
                الأقسام
              </p>
              <Accordion.Root type="single" collapsible>
                {categories.map((category) => (
                  <Accordion.Item
                    key={category.id}
                    value={category.id}
                    className="border-b border-zinc-100 last:border-none"
                  >
                    <Accordion.Trigger className="flex items-center justify-between w-full py-3 px-2 text-sm font-medium text-zinc-700 hover:text-rose-600 transition-colors group">
                      <span>{category.nameAr}</span>
                      <ChevronDown className="h-4 w-4 text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="pb-2 pr-4 space-y-1">
                        <Link
                          href={`/category/${category.slug}`}
                          onClick={onClose}
                          className="block px-3 py-2 text-sm text-rose-600 font-medium hover:bg-rose-50 rounded-lg transition-colors"
                        >
                          عرض الكل
                        </Link>
                        {subcategories[category.id]?.map((sub) => (
                          <Link
                            key={sub.id}
                            href={`/category/${category.slug}/${sub.id}`}
                            onClick={onClose}
                            className="block px-3 py-2 text-sm text-zinc-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          >
                            {sub.nameAr}
                          </Link>
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>

            {/* Bottom Info */}
            <div className="border-t border-zinc-100 px-4 py-4 space-y-4">
              <div className="space-y-3">
                <Link
                  href="/wishlist"
                  onClick={onClose}
                  className="flex items-center gap-3 text-sm text-zinc-600 hover:text-rose-600 transition-colors"
                >
                  ❤️ المفضلة
                </Link>
                <Link
                  href="/account"
                  onClick={onClose}
                  className="flex items-center gap-3 text-sm text-zinc-600 hover:text-rose-600 transition-colors"
                >
                  👤 حسابي
                </Link>
                <Link
                  href="/track-order"
                  onClick={onClose}
                  className="flex items-center gap-3 text-sm text-zinc-600 hover:text-rose-600 transition-colors"
                >
                  📦 تتبع الطلب
                </Link>
              </div>

              <div className="pt-3 border-t border-zinc-100">
                <a
                  href="https://wa.me/212612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-green-50 text-green-700 rounded-xl text-sm font-medium hover:bg-green-100 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  واتساب: 0612-345678
                </a>
              </div>

              {/* Language & Currency */}
              <div className="flex items-center justify-center gap-4 text-xs text-zinc-400">
                <span>🇲🇦 العربية</span>
                <span className="w-px h-3 bg-zinc-200" />
                <span>MAD (د.م.)</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
