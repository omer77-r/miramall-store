"use client";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/components/providers/CartProvider";
import { ToastProvider } from "@/components/ui/Toaster";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider>
        <ToastProvider>{children}</ToastProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
