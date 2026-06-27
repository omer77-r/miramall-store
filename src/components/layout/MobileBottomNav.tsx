"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Grid3X3, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "الرئيسية", href: "/", icon: Home },
  { label: "المتجر", href: "/shop", icon: Grid3X3 },
  { label: "واتساب", href: "https://wa.me/212600000000", icon: MessageCircle, external: true },
]

export function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 right-0 left-0 z-40 bg-white/95 backdrop-blur-xl border-t border-border pb-safe">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = !item.external && (item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href))
          const Icon = item.icon

          return (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 min-w-[64px] px-1 py-1 rounded-xl transition-colors relative",
                isActive
                  ? "text-primary"
                  : item.label === "واتساب"
                  ? "text-green-600 hover:text-green-700"
                  : "text-foreground/70 hover:text-primary"
              )}
            >
              <div className="relative">
                <Icon className="h-5 w-5" />
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
