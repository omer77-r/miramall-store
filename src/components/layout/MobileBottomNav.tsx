"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Grid3X3, ShoppingCart, Heart, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/components/providers/CartProvider"

const navItems = [
  {
    label: "الرئيسية",
    href: "/",
    icon: Home,
  },
  {
    label: "الأقسام",
    href: "/categories",
    icon: Grid3X3,
  },
  {
    label: "السلة",
    href: "/cart",
    icon: ShoppingCart,
    isCart: true,
  },
  {
    label: "المفضلة",
    href: "/wishlist",
    icon: Heart,
  },
  {
    label: "حسابي",
    href: "/account",
    icon: User,
  },
]

export function MobileBottomNav() {
  const pathname = usePathname()
  const { totalItems, openCart } = useCart()

  const handleCartClick = (e: React.MouseEvent, item: (typeof navItems)[number]) => {
    if (item.isCart) {
      e.preventDefault()
      openCart()
    }
  }

  return (
    <nav className="md:hidden fixed bottom-0 right-0 left-0 z-40 bg-white/90 backdrop-blur-xl border-t border-zinc-200/60 safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleCartClick(e, item)}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 min-w-[64px] px-1 py-1 rounded-xl transition-colors relative",
                isActive
                  ? "text-rose-500"
                  : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              <div className="relative">
                <Icon
                  className={cn(
                    "h-5 w-5 transition-all",
                    isActive && "drop-shadow-[0_0_6px_rgba(244,114,182,0.4)]"
                  )}
                />
                {item.isCart && totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[10px] font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium",
                  isActive && "font-semibold"
                )}
              >
                {item.label}
              </span>
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-rose-500 rounded-full" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
