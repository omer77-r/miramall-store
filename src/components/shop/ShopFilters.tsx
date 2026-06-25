"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";

interface ShopFiltersProps {
  search: string;
  onSearchChange: (val: string) => void;
  selectedCategories: string[];
  onToggleCategory: (id: string) => void;
  minPrice: string;
  onMinPriceChange: (val: string) => void;
  maxPrice: string;
  onMaxPriceChange: (val: string) => void;
  minRating: number;
  onMinRatingChange: (val: number) => void;
  onReset: () => void;
  categories: Category[];
}

export function ShopFilters({
  search,
  onSearchChange,
  selectedCategories,
  onToggleCategory,
  minPrice,
  onMinPriceChange,
  maxPrice,
  onMaxPriceChange,
  minRating,
  onMinRatingChange,
  onReset,
  categories,
}: ShopFiltersProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold mb-2">بحث</label>
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border border-input bg-card pr-10 pl-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
          />
        </div>
      </div>

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
                onChange={() => onToggleCategory(cat.id)}
                className="size-4 rounded border-input text-primary focus:ring-primary"
              />
              <span className="text-sm">{cat.nameAr}</span>
              <span className="mr-auto text-xs text-muted-foreground">({cat.productCount})</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3">نطاق السعر (درهم)</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="الحد الأدنى"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            className="w-full rounded-xl border border-input bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
          <span className="text-muted-foreground text-sm">-</span>
          <input
            type="number"
            placeholder="الحد الأقصى"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            className="w-full rounded-xl border border-input bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3">التقييم</label>
        <div className="flex flex-wrap gap-2">
          {[4, 3, 2, 1].map((star) => (
            <button
              key={star}
              onClick={() => onMinRatingChange(minRating === star ? 0 : star)}
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

      <div className="flex gap-2 pt-2">
        <button
          onClick={onReset}
          className="flex-1 rounded-xl border border-border py-2.5 text-sm font-medium hover:bg-muted transition-colors"
        >
          إعادة تعيين
        </button>
      </div>
    </div>
  );
}
