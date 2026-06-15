"use client";

import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Search, X } from "lucide-react";
import type { FAQ } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FAQ[];
  categoryNames: Record<string, string>;
}

export function FaqAccordion({ items, categoryNames }: FaqAccordionProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");

  const filtered = items.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      search.trim() === "" ||
      item.questionAr.toLowerCase().includes(search.toLowerCase()) ||
      item.answerAr.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = Array.from(new Set(items.map((i) => i.category)));

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث عن سؤال..."
          className="w-full rounded-xl border border-input bg-background py-3 pr-12 pl-12 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-all",
            activeCategory === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
          )}
        >
          الكل
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              activeCategory === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
            )}
          >
            {categoryNames[cat] || cat}
          </button>
        ))}
      </div>

      {/* FAQs */}
      {filtered.length > 0 ? (
        <Accordion type="single" collapsible className="space-y-3">
          {filtered.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-xl border border-border bg-card px-5 transition-all hover:border-primary/20"
            >
              <AccordionTrigger className="py-5 text-right font-semibold text-foreground hover:text-primary transition-colors">
                {item.questionAr}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                {item.answerAr}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="rounded-2xl border border-border bg-card py-16 text-center">
          <Search className="mx-auto mb-4 size-12 text-muted-foreground/30" />
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            لم يتم العثور على نتائج
          </h3>
          <p className="text-muted-foreground">
            جرب البحث عن كلمة أخرى أو تصفح جميع الأسئلة
          </p>
        </div>
      )}
    </div>
  );
}
