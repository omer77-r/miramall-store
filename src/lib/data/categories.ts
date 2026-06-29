import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-home",
    slug: "home-kitchen",
    name: "Home & Kitchen",
    nameAr: "المنزل والمطبخ",
    description: "Home organization, kitchen tools, cleaning appliances and home essentials.",
    descriptionAr: "منتجات منزلية، تنظيم الملابس، أدوات المطبخ، أجهزة التنظيف والعناية بالمنزل.",
    image: "/images/categories/home-kitchen.jpg",
    icon: "Home",
    parentId: null,
    productCount: 7,
    subCategoryIds: ["sub-home-1", "sub-home-2", "sub-home-3"],
  },
  {
    id: "cat-electronics",
    slug: "electronics",
    name: "Electronics",
    nameAr: "الإلكترونيات",
    description: "Smart devices, solar lights, security gadgets and innovative electronics.",
    descriptionAr: "أجهزة ذكية، إضاءة شمسية، كاميرات مراقبة وإلكترونيات مبتكرة.",
    image: "/images/categories/electronics.jpg",
    icon: "Zap",
    parentId: null,
    productCount: 5,
    subCategoryIds: ["sub-elec-1"],
  },
];

export const subCategories: Record<string, { id: string; name: string; nameAr: string; parentId: string }[]> = {
  "cat-home": [
    { id: "sub-home-1", name: "Home Organization", nameAr: "تنظيم المنزل", parentId: "cat-home" },
    { id: "sub-home-2", name: "Cleaning Appliances", nameAr: "أجهزة التنظيف", parentId: "cat-home" },
    { id: "sub-home-3", name: "Cooling & Comfort", nameAr: "التبريد والراحة", parentId: "cat-home" },
  ],
  "cat-electronics": [
    { id: "sub-elec-1", name: "Smart Gadgets", nameAr: "الأجهزة الذكية", parentId: "cat-electronics" },
  ],
};

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
