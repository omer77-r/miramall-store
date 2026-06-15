"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { categories, subcategories } from "@/lib/data/categories"

interface MegaMenuProps {
  categoryId: string
}

export function MegaMenu({ categoryId }: MegaMenuProps) {
  const category = categories.find((c) => c.id === categoryId)
  if (!category) return null

  const subs = subcategories[categoryId] || []

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 left-0 top-full z-30 bg-white/95 backdrop-blur-xl border-t border-zinc-100 shadow-xl shadow-zinc-200/20"
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Categories Grid */}
          <div className="flex-[3]">
            {/* All Categories Link */}
            <Link
              href={`/category/${category.slug}`}
              className="inline-flex items-center gap-2 text-rose-600 font-semibold text-lg mb-4 hover:text-rose-700 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              {category.nameAr}
            </Link>

            {/* Subcategories Grid */}
            <div className="grid grid-cols-3 gap-x-8 gap-y-3">
              {subs.map((sub: { id: string; nameAr: string }) => (
                <Link
                  key={sub.id}
                  href={`/category/${category.slug}/${sub.id}`}
                  className="text-sm text-zinc-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg px-3 py-2 transition-colors"
                >
                  {sub.nameAr}
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Area */}
          <div className="flex-[2] bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100/50">
            <div className="aspect-[4/3] bg-gradient-to-br from-rose-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
              <Sparkles className="h-12 w-12 text-rose-400" />
            </div>
            <h4 className="font-semibold text-zinc-800 mb-1">
              اكتشفي {category.nameAr}
            </h4>
            <p className="text-sm text-zinc-500 mb-3">
              {category.descriptionAr}
            </p>
            <Link
              href={`/category/${category.slug}`}
              className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors"
            >
              تسوقي الآن
              <span className="mr-1">←</span>
            </Link>
            <div className="mt-4 flex items-center gap-4 text-xs text-zinc-400">
              <span>{category.productCount}+ منتج</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
