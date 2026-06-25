"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import { categories, subCategories } from "@/lib/data/categories"

interface MegaMenuProps {
  categoryId: string
}

export function MegaMenu({ categoryId }: MegaMenuProps) {
  const category = categories.find((c) => c.id === categoryId)
  if (!category) return null

  const subs = subCategories[categoryId] || []

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
              href={`/shop?category=${category.slug}`}
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg mb-4 hover:text-primary/80 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              {category.nameAr}
            </Link>

            {/* Subcategories Grid */}
            <div className="grid grid-cols-3 gap-x-8 gap-y-3">
              {subs.map((sub: { id: string; nameAr: string }) => (
                <Link
                  key={sub.id}
                  href={`/shop?category=${category.slug}`}
                  className="text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg px-3 py-2 transition-colors"
                >
                  {sub.nameAr}
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Area */}
          <div className="flex-[2] bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center">
              <Sparkles className="h-12 w-12 text-primary/50" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">
              اكتشف {category.nameAr}
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              {category.descriptionAr}
            </p>
            <Link
              href={`/shop?category=${category.slug}`}
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              تسوق الآن
              <span className="mr-1">←</span>
            </Link>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span>{category.productCount}+ منتج</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
