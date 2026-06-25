import type { Review } from "@/lib/types";

export const reviews: Review[] = [
  {
    id: "rev-1",
    productId: "p1",
    userName: "فاطمة الزهراء",
    rating: 5,
    comment: "صراحة الخدمة وصلتني فكازا فظرف 48 ساعة والمنتج كيمّا فالصورة. مزيان بزاف!",
    date: "2026-06-10",
    avatar: "",
  },
  {
    id: "rev-2",
    productId: "p3",
    userName: "محمد أمين",
    rating: 5,
    comment: "أول مرة نشري من النت وكنت خايف ولكن الدفع عند الاستلام طمني. المنتج جودة عالية. شكراً ميرا مول!",
    date: "2026-06-08",
    avatar: "",
  },
  {
    id: "rev-3",
    productId: "p2",
    userName: "سعاد بناني",
    rating: 4,
    comment: "اللباس رائع وخياطتو محترمة. الثمن مناسب للجودة. غادي نرجع نشري من عندكم بإذن الله.",
    date: "2026-06-07",
    avatar: "",
  },
  {
    id: "rev-4",
    productId: "p4",
    userName: "كريم العلوي",
    rating: 5,
    comment: "أحسن متجر إلكتروني مغربي تعاملت معه. التواصل سريع والتوصيل فظرف وجيز. شكراً ليكم!",
    date: "2026-06-05",
    avatar: "",
  },
  {
    id: "rev-5",
    productId: "p5",
    userName: "نورا الإدريسي",
    rating: 5,
    comment: "كنت مستعجلة على الطلبية ووصلاتني قبل الوقت المحدد. الخدمة ديالكم عالمية بصراحة.",
    date: "2026-06-03",
    avatar: "",
  },
  {
    id: "rev-6",
    productId: "p6",
    userName: "يوسف الشفشاوني",
    rating: 4,
    comment: "المنتجات كاملة بالضبط بحال الوصف. الشيء الوحيد لي بغيت هو تغليف أجمل ولكن المهم الجودة.",
    date: "2026-06-01",
    avatar: "",
  },
  {
    id: "rev-7",
    productId: "p7",
    userName: "مريم أيت",
    rating: 5,
    comment: "التوصيل لطنجة كان سريع بزاف! والمنتج جودة عالية. ها أنا كنرجع نشري المرة الثانية.",
    date: "2026-05-28",
    avatar: "",
  },
  {
    id: "rev-8",
    productId: "p1",
    userName: "عبد الله",
    rating: 5,
    comment: "مزيان مزيان! الثمن مقابل الجودة رائع. وثقت في المتجر وحتا فصحابي بداو كيشريو من عندكم.",
    date: "2026-05-25",
    avatar: "",
  },
];

export function getReviewsForProduct(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function getLatestReviews(limit = 8): Review[] {
  return [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
}
