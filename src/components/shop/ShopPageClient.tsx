"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product, Category } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";

interface ShopPageClientProps {
  products: Product[];
  categories: Category[];
}

export function ShopPageClient({ products, categories }: ShopPageClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("newest");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.nameAr.toLowerCase().includes(q) ||
          p.descriptionAr.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= Number(maxPrice));
    }

    if (minRating > 0) {
      filtered = filtered.filter((p) => p.rating >= minRating);
    }

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "bestseller":
        filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [products, search, selectedCategories, minPrice, maxPrice, minRating, sortBy]);

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setMinPrice("");
    setMaxPrice("");
    setMinRating(0);
  };

  const sortOptions = [
    { value: "newest", label: "الأحدث" },
    { value: "bestseller", label: "الأكثر مبيعاً" },
    { value: "price-asc", label: "السعر: من الأدنى إلى الأعلى" },
    { value: "price-desc", label: "السعر: من الأعلى إلى الأدنى" },
    { value: "rating", label: "التقييم" },
  ];

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="block text-sm font-semibold mb-2">بحث</label>
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-input bg-card pr-10 pl-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <label className="block text-sm font-semibold mb-3">الفئات</label>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="size-4 rounded border-input text-primary focus:ring-primary"
              />
              <span className="text-sm">{cat.nameAr}</span>
              <span className="mr-auto text-xs text-muted-foreground">({cat.productCount})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-semibold mb-3">نطاق السعر (درهم)</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="الحد الأدنى"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full rounded-xl border border-input bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
          <span className="text-muted-foreground text-sm">-</span>
          <input
            type="number"
            placeholder="الحد الأقصى"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full rounded-xl border border-input bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <label className="block text-sm font-semibold mb-3">التقييم</label>
        <div className="flex flex-wrap gap-2">
          {[4, 3, 2, 1].map((star) => (
            <button
              key={star}
              onClick={() => setMinRating(minRating === star ? 0 : star)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm transition-colors",
                minRating >= star
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50"
              )}
            >
              {star}+ ⭐
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button
          onClick={resetFilters}
          className="flex-1 rounded-xl border border-border py-2.5 text-sm font-medium hover:bg-muted transition-colors"
        >
          إعادة تعيين
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">المتجر</h1>
          <p className="text-muted-foreground mt-1">تصفح جميع منتجاتنا المميزة</p>
        </div>

        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-5">
              <h2 className="text-lg font-bold mb-4">تصفية المنتجات</h2>
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Sort & Count Bar */}
            <div className="flex items-center justify-between mb-5 gap-3">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-foreground">نتائج البحث</h2>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  {filteredProducts.length} منتج
                </span>
              </div>
              <div className="flex items-center gap-3">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none rounded-xl border border-input bg-card pr-4 pl-10 py-2 text-sm font-medium text-foreground cursor-pointer focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                </div>
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden rounded-xl border border-border p-2.5 hover:bg-muted transition-colors"
                  aria-label="فتح الفلتر"
                >
                  <SlidersHorizontal className="size-5" />
                </button>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Search className="size-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground">لا توجد منتجات</h3>
                <p className="text-sm text-muted-foreground mt-1">جرب تغيير معايير البحث أو الفلاتر</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  إعادة تعيين الفلاتر
                </button>
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductCard product={product} variant="default" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileFilterOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 inset-y-0 z-50 w-full max-w-sm bg-card shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-lg font-bold">تصفية المنتجات</h2>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="rounded-lg p-2 hover:bg-muted transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="p-5 overflow-y-auto" style={{ maxHeight: "calc(100vh - 70px)" }}>
                <FilterContent />
              </div>
              <div className="absolute inset-x-0 bottom-0 border-t border-border bg-card p-4">
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground"
                >
                  عرض النتائج ({filteredProducts.length})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
