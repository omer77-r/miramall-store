"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { AnimatePresence, motion, useScroll } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/layout/MobileNav"
import { MegaMenu } from "@/components/layout/MegaMenu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const { scrollY } = useScroll()

  useEffect(() => { setMounted(true) }, []) // eslint-disable-line react-hooks/set-state-in-effect

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setIsScrolled(v > 40))
    return () => unsubscribe()
  }, [scrollY])


  useEffect(() => {
    if (searchExpanded && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchExpanded])

  const handleOpenMobileMenu = useCallback(() => setMobileMenuOpen(true), [])
  const handleCloseMobileMenu = useCallback(() => setMobileMenuOpen(false), [])

  return (
    <>
      <MobileNav open={mobileMenuOpen} onClose={handleCloseMobileMenu} />

      {/* Main Header */}
      <motion.header
        className={cn(
          "sticky top-0 z-40 border-b transition-shadow duration-300",
          "bg-white/95 backdrop-blur-xl",
          isScrolled && "shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Logo | Search | Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 h-20 md:h-24">
            {/* Mobile: Hamburger */}
            <button
              onClick={handleOpenMobileMenu}
              className="md:hidden p-2 -ml-2 text-foreground/70 hover:text-primary transition-colors"
              aria-label="القائمة"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/mira-logo-new.png" 
                alt="Mira Mall Logo" 
                width={300} 
                height={100} 
                className="h-14 sm:h-16 md:h-20 lg:h-[88px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 min-w-0 justify-center px-8 lg:px-12">
              <motion.div
                animate={{ width: searchExpanded ? "100%" : "100%" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative w-full max-w-2xl"
              >
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
              </motion.div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5 ms-auto md:ms-0">
              {/* Mobile Search Toggle */}
              <button
                onClick={() => setSearchExpanded(!searchExpanded)}
                className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="بحث"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 text-foreground/70 hover:text-primary transition-colors hidden sm:block"
                  aria-label="تغيير المظهر"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              )}

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="p-2 text-foreground/70 hover:text-primary transition-colors relative hidden sm:block"
                aria-label="المفضلة"
              >
                <Heart className="h-5 w-5" />
              </Link>

              {/* Account */}
              <Link
                href="/account"
                className="p-2 text-foreground/70 hover:text-primary transition-colors hidden sm:block"
                aria-label="حسابي"
              >
                <User className="h-5 w-5" />
              </Link>

              {/* Shop */}
              <Link
                href="/shop"
                className="p-2 text-foreground/70 hover:text-primary transition-colors relative"
                aria-label="المتجر"
              >
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar (when expanded) */}
          <AnimatePresence>
            {searchExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden pb-2.5"
              >
                <div className="relative flex items-center">
                  <Search className="absolute right-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="ابحث عن منتجاتك..."
                    className="w-full h-10 bg-muted rounded-full pr-10 pl-10 text-sm placeholder:text-muted-foreground outline-none dir-rtl"
                    dir="rtl"
                    autoFocus
                  />
                  {searchValue && (
                    <button
                      onClick={() => setSearchValue("")}
                      className="absolute left-3 p-0.5 rounded-full text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  )
}
