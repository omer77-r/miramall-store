"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Grid3X3, ShoppingBag, Heart, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "الرئيسية", href: "/", icon: Home },
  { label: "المتجر", href: "/shop", icon: Grid3X3 },
  { label: "المنتجات", href: "/shop", icon: ShoppingBag },
  { label: "المفضلة", href: "/wishlist", icon: Heart },
  { label: "حسابي", href: "/account", icon: User },
]

export function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 right-0 left-0 z-40 bg-white/95 backdrop-blur-xl border-t border-border pb-safe">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href)
          const Icon = item.icon

          return (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 min-w-[64px] px-1 py-1 rounded-xl transition-colors relative",
                isActive
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              )}
            >
              <div className="relative">
                <Icon className={cn("h-5 w-5", isActive && "drop-shadow-[0_0_6px_rgba(232,160,191,0.5)]")} />
              </div>
              <span className={cn("text-[10px] font-medium", isActive && "font-semibold")}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
