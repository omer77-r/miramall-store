import Link from "next/link";
import { ShoppingBag, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="rounded-full bg-primary/10 p-8 mb-6">
        <ShoppingBag className="size-16 text-primary" />
      </div>
      <h1 className="text-4xl font-bold text-foreground mb-3">الصفحة غير موجودة</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون تم نقلها أو حذفها.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
        >
          <Home className="size-4" />
          العودة للرئيسية
        </Link>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-2xl border-2 border-border px-6 py-3 text-sm font-bold text-foreground hover:bg-muted transition-colors"
        >
          <ShoppingBag className="size-4" />
          تصفح المنتجات
        </Link>
      </div>
    </div>
  );
}
