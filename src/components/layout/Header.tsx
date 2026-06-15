"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { AnimatePresence, motion, useScroll } from "framer-motion"
import Link from "next/link"
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/components/providers/CartProvider"
import { MegaMenu } from "@/components/layout/MegaMenu"
import { MobileNav } from "@/components/layout/MobileNav"
import { SlideCart } from "@/components/layout/SlideCart"

const announcementMessages = [
  "🚚 توصيل مجاني للطلبات فوق 499 درهم",
  "💰 الدفع عند الاستلام متاح لجميع الطلبات",
  "📲 دعم عبر واتساب: 0612-345678",
]

const categories = [
  { id: "skincare", nameAr: "العناية بالبشرة", href: "/category/skincare" },
  { id: "haircare", nameAr: "العناية بالشعر", href: "/category/haircare" },
  { id: "fragrance", nameAr: "العطور", href: "/category/fragrance" },
  { id: "makeup", nameAr: "مستحضرات التجميل", href: "/category/makeup" },
  { id: "bodycare", nameAr: "العناية بالجسم", href: "/category/bodycare" },
  { id: "moroccan", nameAr: "منتجات مغربية", href: "/category/moroccan" },
  { id: "wellness", nameAr: "الصحة والعافية", href: "/category/wellness" },
  { id: "gifts", nameAr: "الهدايا", href: "/category/gifts" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [announcementIndex, setAnnouncementIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [megaMenuActive, setMegaMenuActive] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const megaMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { totalItems, openCart } = useCart()

  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setIsScrolled(v > 40))
    return () => unsubscribe()
  }, [scrollY])

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcementMessages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (searchExpanded && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchExpanded])

  const handleOpenMobileMenu = useCallback(() => setMobileMenuOpen(true), [])
  const handleCloseMobileMenu = useCallback(() => setMobileMenuOpen(false), [])
  const handleOpenCart = useCallback(() => openCart(), [openCart])

  const handleMegaMenuEnter = useCallback((categoryId: string) => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current)
    setActiveMegaMenu(categoryId)
    setMegaMenuActive(true)
  }, [])

  const handleMegaMenuLeave = useCallback(() => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuActive(false)
    }, 200)
  }, [])

  const handleMegaMenuContentEnter = useCallback(() => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current)
  }, [])

  const handleMegaMenuContentLeave = useCallback(() => {
    setMegaMenuActive(false)
  }, [])

  return (
    <>
      <MobileNav open={mobileMenuOpen} onClose={handleCloseMobileMenu} />

      <SlideCart />

      {/* Announcement Bar */}
      <div className="relative z-50 bg-rose-500 text-white overflow-hidden h-9 flex items-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={announcementIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap px-4"
            >
              {announcementMessages[announcementIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={cn(
          "sticky top-0 z-40 border-b transition-shadow duration-300",
          "bg-white/95 backdrop-blur-xl",
          isScrolled && "shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Row: Logo | Search | Icons */}
          <div className="flex items-center gap-3 h-16 md:h-20">
            {/* Mobile: Hamburger */}
            <button
              onClick={handleOpenMobileMenu}
              className="md:hidden p-2 -ml-2 text-zinc-600 hover:text-rose-600 transition-colors"
              aria-label="القائمة"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-rose-500" />
                <span className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Nadya
                </span>
              </div>
              <span className="text-[10px] text-zinc-400 tracking-[0.2em] uppercase hidden sm:block">
                ندية
              </span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 justify-center px-4">
              <motion.div
                animate={{ width: searchExpanded ? "100%" : "480px" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative max-w-xl"
              >
                <div className="relative flex items-center">
                  <Search
                    className={cn(
                      "absolute right-3 h-4 w-4 pointer-events-none transition-colors",
                      searchExpanded ? "text-rose-500" : "text-zinc-400"
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
                    placeholder="ابحثي عن منتجاتك..."
                    className={cn(
                      "w-full h-10 bg-zinc-100 rounded-full pr-10 pl-4 text-sm text-zinc-800",
                      "placeholder:text-zinc-400 outline-none transition-all duration-300",
                      "focus:bg-white focus:ring-2 focus:ring-rose-300 focus:border-transparent",
                      "dir-rtl"
                    )}
                    dir="rtl"
                  />
                  {searchExpanded && searchValue && (
                    <button
                      onClick={() => {
                        setSearchValue("")
                        setSearchExpanded(false)
                      }}
                      className="absolute left-3 p-0.5 rounded-full text-zinc-400 hover:text-zinc-600"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-1 md:gap-2">
              {/* Mobile Search Toggle */}
              <button
                onClick={() => setSearchExpanded(!searchExpanded)}
                className="md:hidden p-2 text-zinc-600 hover:text-rose-600 transition-colors"
                aria-label="بحث"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="p-2 text-zinc-600 hover:text-rose-600 transition-colors relative hidden sm:block"
                aria-label="المفضلة"
              >
                <Heart className="h-5 w-5" />
              </Link>

              {/* Account */}
              <Link
                href="/account"
                className="p-2 text-zinc-600 hover:text-rose-600 transition-colors hidden sm:block"
                aria-label="حسابي"
              >
                <User className="h-5 w-5" />
              </Link>

              {/* Cart */}
              <button
                onClick={handleOpenCart}
                className="p-2 text-zinc-600 hover:text-rose-600 transition-colors relative"
                aria-label="سلة التسوق"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>
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
                className="md:hidden overflow-hidden pb-3"
              >
                <div className="relative flex items-center">
                  <Search className="absolute right-3 h-4 w-4 text-zinc-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="ابحثي عن منتجاتك..."
                    className="w-full h-10 bg-zinc-100 rounded-full pr-10 pl-10 text-sm text-zinc-800 placeholder:text-zinc-400 outline-none dir-rtl"
                    dir="rtl"
                    autoFocus
                  />
                  {searchValue && (
                    <button
                      onClick={() => setSearchValue("")}
                      className="absolute left-3 p-0.5 rounded-full text-zinc-400 hover:text-zinc-600"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Navigation - Desktop */}
          <nav
            className="hidden md:flex items-center gap-1 pb-2 overflow-x-auto scrollbar-hide"
            onMouseEnter={() => {
              if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current)
            }}
            onMouseLeave={handleMegaMenuLeave}
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                onMouseEnter={() => handleMegaMenuEnter(cat.id)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap",
                    "text-zinc-600 hover:text-rose-600 hover:bg-rose-50",
                    activeMegaMenu === cat.id && megaMenuActive && "text-rose-600 bg-rose-50"
                  )}
                >
                  {cat.nameAr}
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaMenuActive && activeMegaMenu && (
            <div
              onMouseEnter={handleMegaMenuContentEnter}
              onMouseLeave={handleMegaMenuContentLeave}
            >
              <MegaMenu categoryId={activeMegaMenu} />
            </div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
