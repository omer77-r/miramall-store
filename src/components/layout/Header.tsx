"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion, useScroll } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  ShoppingBag,
  X,
  Moon,
  Sun,
} from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function Header() {
  const [searchExpanded, setSearchExpanded] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const { scrollY } = useScroll()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setIsScrolled(v > 40))
    return () => unsubscribe()
  }, [scrollY])

  useEffect(() => {
    if (searchExpanded && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchExpanded])

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-40 border-b transition-shadow duration-300",
        "bg-white/95 backdrop-blur-xl",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/mira-logo-new.png"
              alt="Mira Mall Logo"
              width={300}
              height={100}
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Search Bar */}
          <div className="flex flex-1 min-w-0 justify-center px-2 md:px-8">
            <div className="relative w-full max-w-2xl">
              <div className="relative flex items-center">
                <Search
                  className={cn(
                    "absolute right-3 h-4 w-4 pointer-events-none transition-colors",
                    searchExpanded ? "text-primary" : "text-muted-foreground"
                  )}
                />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setSearchExpanded(true)}
                  onBlur={() => {
                    if (!searchValue) setSearchExpanded(false)
                  }}
                  placeholder="ابحث عن منتجاتك..."
                  className={cn(
                    "w-full h-10 bg-muted rounded-full pr-10 pl-4 text-sm",
                    "placeholder:text-muted-foreground outline-none transition-all duration-300",
                    "focus:bg-white focus:ring-2 focus:ring-primary/30 focus:border-transparent",
                  )}
                  dir="rtl"
                />
                {searchExpanded && searchValue && (
                  <button
                    onClick={() => {
                      setSearchValue("")
                      setSearchExpanded(false)
                    }}
                    className="absolute left-3 p-0.5 rounded-full text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-1">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="تغيير المظهر"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}

            {/* Shop */}
            <Link
              href="/shop"
              className="p-2 text-foreground/70 hover:text-primary transition-colors"
              aria-label="المتجر"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
