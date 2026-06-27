import type { Product, Review } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p1",
    slug: "metal-clothes-hanger-4-tier",
    name: "4-Tier Metal Clothes Hanger",
    nameAr: "نشار الملابس المعدني 4 طبقات",
    description: "Space-saving 4-tier metal clothes hanger, foldable and portable. Perfect for organizing your wardrobe.",
    descriptionAr: "نشار ديال الملابس معدن 4 طبقات، خفيف وقابل للطي ساهل فالتخزين والنقل. كيساع بزاف ديال الملابس ومرتب. مناسب للمنزل والسفر وتنظيم الخزانة.",
    price: 240,
    originalPrice: 320,
    discount: 25,
    images: ["/products/product_1_img1.png", "/products/product_1_img2.png", "/products/product_1_img3.png", "/products/product_1_img4.png", "/products/product_1_img5.png"],
    category: "cat-home",
    tags: ["منزل", "نشار", "تنظيم", "ملابس"],
    rating: 4.8,
    reviewCount: 45,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "4 طبقات كافية لجميع الملابس",
      "خفيف الوزن وقابل للطي",
      "معدن متين وقوي",
      "ساهل فالتخزين والنقل"
    ],
    specifications: {
      "المادة": "معدن",
      "الطبقات": "4 طبقات",
      "القابلية": "قابل للطي",
      "الاستخدام": "منزلي وسفر"
    },
    inStock: true,
    codAvailable: true
  },
  {
    id: "p2",
    slug: "solar-camera-security-light",
    name: "Solar Camera Security Light",
    nameAr: "مصباح شمسي ذكي على شكل كاميرا",
    description: "Innovative outdoor solar light designed as a realistic camera to deter intruders and protect your home.",
    descriptionAr: "مصباح شمسي خارجي مبتكر كيجمع بين الإضاءة القوية وشكل كاميرا مراقبة واقعي لردع اللصوص وحماية المنزل ديالك. تصميم ذكي كيخلي أي واحد يشك بلي كاينة كاميرا حقيقية مع إضاءة قوية كتخدم بالطاقة الشمسية.",
    price: 150,
    originalPrice: 200,
    discount: 25,
    images: ["/products/product_2_img1.png", "/products/product_2_img2.png", "/products/product_2_img3.png", "/products/product_2_img4.png", "/products/product_2_img5.png"],
    category: "cat-electronics",
    tags: ["كاميرا", "شمسي", "أمن", "إضاءة"],
    rating: 4.7,
    reviewCount: 89,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "إضاءة قوية بالطاقة الشمسية",
      "شكل كاميرا مراقبة واقعي لردع اللصوص",
      "تصميم ذكي مبتكر",
      "سهل التركيب خارج المنزل"
    ],
    specifications: {
      "الطاقة": "شمسية",
      "النوع": "مصباح + كاميرا وهمية",
      "الاستخدام": "خارجي",
      "التركيب": "سهل"
    },
    inStock: true,
    codAvailable: true
  },
  {
    id: "p3",
    slug: "mini-washing-machine-uv",
    name: "Mini Washing Machine with UV Sterilization",
    nameAr: "غسالة ملابس صغيرة بالأشعة الزرقاء",
    description: "Compact mini washing machine with UV sterilization, specifically designed for lingerie and small items.",
    descriptionAr: "آلة التصبين صغيرة الحجم خاصة بالملابس الداخلية والحوايج الصغيرة. كتصب وتنشف وفيه أشعة الزرقاء لي كتحيد البكتيريا والميكروبات. عملية وصغيرة الحجم مناسبة للسكن والرحلات.",
    price: 300,
    originalPrice: 400,
    discount: 25,
    images: ["/products/product_3_img1.png", "/products/product_3_img2.png", "/products/product_3_img3.png"],
    category: "cat-home",
    tags: ["غسالة", "ملابس", "مصغرة", "أشعة"],
    rating: 4.9,
    reviewCount: 134,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "تصبين وتنشيف في جهاز واحد",
      "أشعة الزرقاء لقتل البكتيريا",
      "صغيرة الحجم مناسبة للسكن",
      "سهلة الاستخدام"
    ],
    specifications: {
      "الاستخدام": "ملابس داخلية وصغيرة",
      "التقنية": "أشعة UV",
      "الحجم": "مصغر",
      "الوظائف": "تصبين + تنشيف + تعقيم"
    },
    inStock: true,
    codAvailable: true
  },
  {
    id: "p4",
    slug: "air-cooling-fan-evaporative",
    name: "Evaporative Air Cooling Fan",
    nameAr: "مروحة تبريد الهواء",
    description: "Portable evaporative air cooler that uses water and ice for powerful cooling. Perfect for hot summer days.",
    descriptionAr: "أحسن حل لهاد الحرارة! فرفار تبريد كدي فيه الماء والثلج، كتبرع وتكثف الهواء. مثالي للأجواء الحارة، كيعطيك برودة منعشة فالحال. ساهل فالإستعمال ونافع فالصيف.",
    price: 200,
    originalPrice: 280,
    discount: 28,
    images: ["/products/product_4_img1.jpeg", "/products/product_4_img2.jpeg", "/products/product_4_img3.jpeg", "/products/product_4_img4.jpeg"],
    category: "cat-home",
    tags: ["مروحة", "تبريد", "ماء", "صيف"],
    rating: 4.6,
    reviewCount: 67,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "تبريد بالثلج والماء",
      "منعش ومناسب للأجواء الحارة",
      "محمول وسهل الاستعمال",
      "اقتصادي فاستهلاك الكهرباء"
    ],
    specifications: {
      "النوع": "مروحة تبريد بخارية",
      "الطريقة": "ماء + ثلج",
      "الاستخدام": "منزلي ومكتبي",
      "اللون": "متعدد"
    },
    inStock: true,
    codAvailable: true
  }
];

export function getTrending(limit = 6): Product[] {
  return products.filter((p) => p.isTrending).slice(0, limit);
}

export function getBestSellers(limit = 8): Product[] {
  return products.filter((p) => p.isBestSeller).slice(0, limit);
}

export function getNewArrivals(limit = 8): Product[] {
  return products.filter((p) => p.isNew).slice(0, limit);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const currentProduct = products.find((p) => p.id === productId);
  if (!currentProduct) return [];

  return products
    .filter((p) => p.id !== productId && p.category === currentProduct.category)
    .slice(0, limit);
}

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "p1",
    userName: "سمير م.",
    rating: 5,
    comment: "نشار واعر بزاف، 4 طبقات كافيين لجميع الملابس. حطيته فالدروج وجا مزيان.",
    date: "2026-06-20",
    avatar: "/images/avatars/avatar-1.jpg"
  },
  {
    id: "r2",
    productId: "p2",
    userName: "نوال د.",
    rating: 5,
    comment: "هاد المصباح شي حاجة خرااافية! جاري كيعتقد بلي عندي كاميرا فالداخل ولاه. الضواه كافي وقوي.",
    date: "2026-06-22",
    avatar: "/images/avatars/avatar-2.jpg"
  },
  {
    id: "r3",
    productId: "p3",
    userName: "فاطمة ز.",
    rating: 5,
    comment: "الغسالة صغيرة ولكنها مجهدة بزاف. كتغسل وتنشف وفيه لأشعة الزرقاء لي كتحيد البكتيريا. عملية بزاف فالسكن.",
    date: "2026-06-19",
    avatar: "/images/avatars/avatar-3.jpg"
  },
  {
    id: "r4",
    productId: "p4",
    userName: "هشام ب.",
    rating: 4,
    comment: "الفرفار هاد كافي بزاف فهاد الحراقة. كدي فيه الثلج وكيبرد الجو. أنصح بيه.",
    date: "2026-06-23",
    avatar: "/images/avatars/avatar-4.jpg"
  },
];

export function getProductReviews(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function getTrendingProducts(): Product[] {
  return getTrending(8);
}
