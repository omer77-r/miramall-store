import os
import shutil
import json

json_data = """
[
  {
    "id": "p1",
    "slug": "air-fryer-large-capacity",
    "name": "Large Capacity Air Fryer",
    "nameAr": "قلاية هوائية بدون زيت بسعة كبيرة",
    "description": "Healthy cooking with large capacity air fryer.",
    "descriptionAr": "قلاية هوائية بسعة كبيرة تتيح لك طهي طعام صحي ولذيذ بدون زيت. مثالية للعائلات وتوفر الوقت والطاقة.",
    "price": 599,
    "originalPrice": 850,
    "discount": 29,
    "images": [],
    "category": "cat-home",
    "tags": ["مطبخ", "قلاية", "صحي", "أجهزة"],
    "rating": 4.8,
    "reviewCount": 145,
    "isNew": true,
    "isBestSeller": true,
    "isTrending": true,
    "features": ["سعة 6 لتر", "بدون زيت", "شاشة لمس ذكية", "برامج طهي متعددة"],
    "specifications": { "السعة": "6 لتر", "الطاقة": "1800W", "التحكم": "شاشة لمس" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p2",
    "slug": "powerful-upright-vacuum",
    "name": "Powerful Upright Vacuum Cleaner",
    "nameAr": "مكنسة كهربائية عمودية قوية وفعالة",
    "description": "High suction upright vacuum for home cleaning.",
    "descriptionAr": "مكنسة كهربائية عمودية خفيفة الوزن بقوة شفط عالية. تنظف جميع أنواع الأرضيات والسجاد بكل سهولة.",
    "price": 449,
    "originalPrice": 650,
    "discount": 30,
    "images": [],
    "category": "cat-home",
    "tags": ["منزل", "تنظيف", "مكنسة", "أجهزة"],
    "rating": 4.7,
    "reviewCount": 98,
    "isNew": false,
    "isBestSeller": true,
    "isTrending": false,
    "features": ["قوة شفط عالية", "خفيفة الوزن", "فلتر HEPA", "رأس دوار"],
    "specifications": { "الطاقة": "600W", "الوزن": "2 كغ", "طول السلك": "5 متر" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p3",
    "slug": "smartwatch-ultra-sports",
    "name": "Smartwatch Ultra Sports",
    "nameAr": "ساعة ذكية ألترا الرياضية",
    "description": "Advanced smartwatch ultra for sports and daily tracking.",
    "descriptionAr": "ساعة ذكية رياضية بتصميم متين وشاشة ساطعة. تدعم المكالمات البلوتوث، وتتبع النشاط الرياضي ومعدل ضربات القلب.",
    "price": 299,
    "originalPrice": 499,
    "discount": 40,
    "images": [],
    "category": "cat-electronics",
    "tags": ["ساعة ذكية", "رياضة", "إلكترونيات", "ألترا"],
    "rating": 4.9,
    "reviewCount": 320,
    "isNew": true,
    "isBestSeller": true,
    "isTrending": true,
    "features": ["شاشة كبيرة", "مكالمات بلوتوث", "تتبع رياضي", "مقاومة للماء"],
    "specifications": { "الشاشة": "2.0 إنش", "البطارية": "5 أيام", "التوافق": "Android & iOS" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p4",
    "slug": "professional-men-clipper",
    "name": "Professional Men Hair Clipper",
    "nameAr": "ماكينة حلاقة احترافية للرجال",
    "description": "Precision hair and beard clipper for men.",
    "descriptionAr": "ماكينة حلاقة احترافية دقيقة للحية والشعر. شفرات حادة من التيتانيوم وتصميم مريح للاستخدام الشخصي والصالونات.",
    "price": 199,
    "originalPrice": 350,
    "discount": 43,
    "images": [],
    "category": "cat-men",
    "tags": ["رجال", "حلاقة", "عناية", "احترافي"],
    "rating": 4.6,
    "reviewCount": 210,
    "isNew": false,
    "isBestSeller": true,
    "isTrending": true,
    "features": ["شفرات تيتانيوم", "بطارية قابلة للشحن", "رؤوس متعددة", "استخدام لاسلكي"],
    "specifications": { "البطارية": "ساعتين عمل", "الخامة": "معدن بالكامل", "المرفقات": "4 رؤوس" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p5",
    "slug": "elegant-women-bag-set",
    "name": "Elegant Women Bag Set",
    "nameAr": "طقم حقائب نسائية أنيقة",
    "description": "Multi-piece elegant handbag set for women.",
    "descriptionAr": "طقم حقائب نسائية متكامل وعصري. يجمع بين الأناقة والعملية ويناسب جميع الأوقات والمناسبات المختلفة.",
    "price": 249,
    "originalPrice": 400,
    "discount": 37,
    "images": [],
    "category": "cat-women",
    "tags": ["حقائب", "نساء", "أناقة", "أطقم"],
    "rating": 4.5,
    "reviewCount": 115,
    "isNew": true,
    "isBestSeller": false,
    "isTrending": true,
    "features": ["طقم من 4 قطع", "جلد صناعي عالي الجودة", "تصميم عصري", "ألوان جذابة"],
    "specifications": { "الخامة": "جلد PU", "القطع": "حقيبة كبيرة، وسط، محفظة", "الألوان": "أسود، بني، وردي" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p6",
    "slug": "professional-makeup-brush-set",
    "name": "Professional Makeup Brush Set",
    "nameAr": "طقم فرش مكياج احترافية متكامل",
    "description": "Complete professional makeup brush set.",
    "descriptionAr": "مجموعة كاملة من فرش المكياج الاحترافية الناعمة. تغطي جميع احتياجات التجميل لنتيجة مثالية ودمج احترافي.",
    "price": 149,
    "originalPrice": 250,
    "discount": 40,
    "images": [],
    "category": "cat-women",
    "tags": ["تجميل", "مكياج", "نساء", "فرش"],
    "rating": 4.8,
    "reviewCount": 180,
    "isNew": false,
    "isBestSeller": true,
    "isTrending": false,
    "features": ["شعر ناعم جداً", "مقبض خشبي مريح", "سهلة الدمج", "محفظة أنيقة للحفظ"],
    "specifications": { "العدد": "15 فرشاة", "الشعر": "ألياف صناعية ناعمة", "المرفقات": "حقيبة جلدية" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p7",
    "slug": "electric-stainless-chopper",
    "name": "Electric Stainless Steel Chopper",
    "nameAr": "طحانة كهربائية إينوكس للحوم والخضروات",
    "description": "Fast electric chopper for meat, veggies and nuts.",
    "descriptionAr": "طحانة كهربائية قوية بوعاء من الإينوكس المقاوم للصدأ. تفرم اللحوم والخضروات والمكسرات في ثوانٍ معدودة.",
    "price": 229,
    "originalPrice": 350,
    "discount": 34,
    "images": [],
    "category": "cat-home",
    "tags": ["مطبخ", "طحانة", "أجهزة", "إينوكس"],
    "rating": 4.7,
    "reviewCount": 260,
    "isNew": false,
    "isBestSeller": true,
    "isTrending": true,
    "features": ["شفرات فولاذية", "وعاء إينوكس", "سرعتان للفرام", "قوة فائقة"],
    "specifications": { "السعة": "3 لتر", "الطاقة": "500W", "المواد": "ستانلس ستيل" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p8",
    "slug": "smart-led-eye-care-lamp",
    "name": "Smart LED Eye-Care Lamp",
    "nameAr": "مصباح مكتب LED ذكي مريح للعين",
    "description": "Adjustable smart LED desk lamp with eye-care tech.",
    "descriptionAr": "مصباح مكتبي بإضاءة LED ذكية مريحة للعين وخالية من الوميض. مناسبة للدراسة والعمل، مع مستويات إضاءة متعددة.",
    "price": 179,
    "originalPrice": 250,
    "discount": 28,
    "images": [],
    "category": "cat-electronics",
    "tags": ["إلكترونيات", "مصباح", "مكتب", "ذكي"],
    "rating": 4.6,
    "reviewCount": 85,
    "isNew": true,
    "isBestSeller": false,
    "isTrending": true,
    "features": ["إضاءة مريحة للعين", "تحكم باللمس", "قابل للطي", "تعديل السطوع"],
    "specifications": { "الطاقة": "10W", "الألوان": "3 درجات إضاءة", "الشحن": "USB" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p9",
    "slug": "portable-car-vacuum",
    "name": "Portable Car Vacuum Cleaner",
    "nameAr": "مكنسة كهربائية محمولة وقوية للسيارة",
    "description": "Compact and strong portable vacuum for car cleaning.",
    "descriptionAr": "مكنسة محمولة قوية لتنظيف السيارات والزوايا الضيقة. خفيفة الوزن وسهلة التخزين مع ملحقات متعددة.",
    "price": 189,
    "originalPrice": 300,
    "discount": 37,
    "images": [],
    "category": "cat-cars",
    "tags": ["سيارات", "تنظيف", "محمول", "مكنسة"],
    "rating": 4.5,
    "reviewCount": 134,
    "isNew": false,
    "isBestSeller": true,
    "isTrending": false,
    "features": ["شفط قوي", "محمولة وصغيرة", "فلتر قابل للغسل", "مرفقات للزوايا"],
    "specifications": { "الطاقة": "120W", "النوع": "لاسلكية/بسلك", "الوزن": "500 غرام" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p10",
    "slug": "magnetic-car-phone-mount",
    "name": "Magnetic Car Phone Mount",
    "nameAr": "حامل هاتف مغناطيسي آمن للسيارة",
    "description": "Secure magnetic mount for all smartphones.",
    "descriptionAr": "حامل هاتف مغناطيسي بتصميم صغير وقوة ثبات عالية. يحافظ على أمان هاتفك أثناء القيادة حتى في الطرق الوعرة.",
    "price": 99,
    "originalPrice": 150,
    "discount": 34,
    "images": [],
    "category": "cat-cars",
    "tags": ["سيارات", "هاتف", "حامل", "مغناطيس"],
    "rating": 4.8,
    "reviewCount": 420,
    "isNew": false,
    "isBestSeller": true,
    "isTrending": true,
    "features": ["مغناطيس قوي جداً", "دوران 360 درجة", "تصميم مضغوط", "تثبيت سهل"],
    "specifications": { "المواد": "ألومنيوم", "التوافق": "جميع الهواتف", "اللون": "أسود" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p11",
    "slug": "professional-massage-gun",
    "name": "Professional Massage Gun",
    "nameAr": "جهاز مساج العضلات الاحترافي",
    "description": "Deep tissue muscle massage gun for recovery.",
    "descriptionAr": "جهاز تدليك العضلات الاحترافي. يساعد على الاسترخاء والتعافي بعد التمارين الرياضية أو يوم عمل طويل بفضل الاهتزازات العميقة.",
    "price": 279,
    "originalPrice": 450,
    "discount": 38,
    "images": [],
    "category": "cat-sports",
    "tags": ["رياضة", "مساج", "تعافي", "صحة"],
    "rating": 4.9,
    "reviewCount": 175,
    "isNew": true,
    "isBestSeller": true,
    "isTrending": true,
    "features": ["سرعات متعددة", "رؤوس تدليك مختلفة", "بطارية طويلة الأمد", "هادئ جداً"],
    "specifications": { "السرعات": "6 مستويات", "الرؤوس": "4 رؤوس تبديل", "البطارية": "ساعتين" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p12",
    "slug": "comfortable-men-sneakers",
    "name": "Comfortable Men Sneakers",
    "nameAr": "حذاء رياضي رجالي مريح وأنيق",
    "description": "Lightweight stylish sneakers for daily wear.",
    "descriptionAr": "حذاء رياضي مريح وخفيف الوزن للرجال. تصميم عصري يناسب اللباس الكاجوال والرياضي، مثالي للمشي اليومي.",
    "price": 249,
    "originalPrice": 350,
    "discount": 28,
    "images": [],
    "category": "cat-men",
    "tags": ["رجال", "أحذية", "رياضي", "أناقة"],
    "rating": 4.6,
    "reviewCount": 88,
    "isNew": true,
    "isBestSeller": false,
    "isTrending": false,
    "features": ["خفيف الوزن", "نعل ممتص للصدمات", "قماش يتنفس", "تصميم عصري"],
    "specifications": { "المقاسات": "39 - 44", "الخامة": "نسيج شبكي", "الاستخدام": "يومي / مشي" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p13",
    "slug": "luxury-modern-abaya",
    "name": "Luxury Modern Abaya",
    "nameAr": "عباية نسائية راقية بتصميم عصري",
    "description": "High quality fabric modern abaya for women.",
    "descriptionAr": "عباية نسائية راقية بتفاصيل عصرية وقماش عالي الجودة. تمنحك إطلالة محتشمة وأنيقة في جميع المناسبات.",
    "price": 299,
    "originalPrice": 450,
    "discount": 33,
    "images": [],
    "category": "cat-women",
    "tags": ["نساء", "عباية", "حجاب", "موضة"],
    "rating": 4.8,
    "reviewCount": 160,
    "isNew": false,
    "isBestSeller": true,
    "isTrending": true,
    "features": ["قماش ممتاز", "خياطة دقيقة", "تصميم أنيق", "مريحة في اللبس"],
    "specifications": { "المقاسات": "M - XXL", "اللون": "أسود وتطريز", "المناسبة": "رسمي ويومي" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p14",
    "slug": "kids-smart-educational-tablet",
    "name": "Kids Smart Educational Tablet",
    "nameAr": "تابلت تعليمي ذكي ممتع للأطفال",
    "description": "Fun and educational tablet specifically for kids.",
    "descriptionAr": "تابلت مخصص للأطفال مجهز بتطبيقات تعليمية وألعاب مسلية. يأتي بغطاء مقاوم للصدمات لحمايته من السقوط.",
    "price": 349,
    "originalPrice": 500,
    "discount": 30,
    "images": [],
    "category": "cat-kids",
    "tags": ["أطفال", "تابلت", "تعليمي", "ألعاب"],
    "rating": 4.5,
    "reviewCount": 230,
    "isNew": true,
    "isBestSeller": true,
    "isTrending": true,
    "features": ["شاشة واضحة", "محتوى تعليمي", "غطاء حماية سيليكون", "بطارية جيدة"],
    "specifications": { "الشاشة": "7 إنش", "النظام": "أندرويد", "التخزين": "16 جيجا" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p15",
    "slug": "kids-cotton-clothing-set",
    "name": "Kids Cotton Clothing Set",
    "nameAr": "طقم ملابس أطفال قطني مريح",
    "description": "Soft and comfortable 100% cotton set for kids.",
    "descriptionAr": "طقم ملابس قطني ناعم ومريح للأطفال. ألوان زاهية وتصميم عملي يمنح الطفل حرية الحركة طوال اليوم.",
    "price": 199,
    "originalPrice": 300,
    "discount": 33,
    "images": [],
    "category": "cat-kids",
    "tags": ["أطفال", "ملابس", "قطن", "مريح"],
    "rating": 4.7,
    "reviewCount": 75,
    "isNew": false,
    "isBestSeller": false,
    "isTrending": false,
    "features": ["قطن 100%", "ألوان ثابتة", "ناعم على البشرة", "تصميم عملي"],
    "specifications": { "الأعمار": "2 - 6 سنوات", "الخامة": "قطن خالص", "الموسم": "صيفي / ربيعي" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p16",
    "slug": "non-slip-yoga-mat",
    "name": "Non-Slip Yoga Mat",
    "nameAr": "حصيرة يوغا رياضية غير قابلة للانزلاق",
    "description": "Eco-friendly non-slip yoga and fitness mat.",
    "descriptionAr": "حصيرة رياضية لتمارين اليوغا واللياقة البدنية. سطح غير قابل للانزلاق وسمك مريح لحماية المفاصل أثناء التمرين.",
    "price": 149,
    "originalPrice": 220,
    "discount": 32,
    "images": [],
    "category": "cat-sports",
    "tags": ["رياضة", "يوغا", "تمارين", "حصيرة"],
    "rating": 4.8,
    "reviewCount": 112,
    "isNew": true,
    "isBestSeller": false,
    "isTrending": true,
    "features": ["سطح مانع للانزلاق", "صديقة للبيئة", "مريحة للمفاصل", "سهلة التنظيف"],
    "specifications": { "السمك": "10 ملم", "الأبعاد": "183x61 سم", "المادة": "TPE" },
    "inStock": true,
    "codAvailable": true
  },
  {
    "id": "p17",
    "slug": "luxury-men-classic-watch",
    "name": "Luxury Men Classic Watch",
    "nameAr": "ساعة يد رجالية فاخرة بتصميم كلاسيكي",
    "description": "Elegant classic quartz watch for men.",
    "descriptionAr": "ساعة رجالية كلاسيكية فاخرة تناسب اللباس الرسمي. مصنوعة من مواد عالية الجودة وتضفي لمسة من الأناقة والجاذبية.",
    "price": 349,
    "originalPrice": 550,
    "discount": 36,
    "images": [],
    "category": "cat-men",
    "tags": ["رجال", "ساعات", "أناقة", "كلاسيكي"],
    "rating": 4.9,
    "reviewCount": 95,
    "isNew": false,
    "isBestSeller": true,
    "isTrending": false,
    "features": ["تصميم كلاسيكي", "مقاومة للماء", "زجاج مقاوم للخدش", "حزام جلدي"],
    "specifications": { "الحركة": "كوارتز", "الحزام": "جلد طبيعي", "القطر": "42 ملم" },
    "inStock": true,
    "codAvailable": true
  }
]
"""

products_data = json.loads(json_data)

import glob

extracted_folder = "/Users/omarouhaddou/Desktop/vs code test/public/extracted_products/image proudct"
target_folder = "/Users/omarouhaddou/Desktop/vs code test/public/products"

# Ensure target folder exists
os.makedirs(target_folder, exist_ok=True)

# Get all images from extracted folder
all_images = glob.glob(os.path.join(extracted_folder, "*.jpg"))
all_images.sort()

# Assign images to products
for i, product in enumerate(products_data):
    if i < len(all_images):
        src_image = all_images[i]
        ext = os.path.splitext(src_image)[1]
        dest_filename = f"{product['slug']}{ext}"
        dest_path = os.path.join(target_folder, dest_filename)
        shutil.copy2(src_image, dest_path)
        product["images"].append(f"/products/{dest_filename}")

# Generate the TypeScript code
ts_code = """import type { Product, Review } from "@/lib/types";\n\n"""
ts_code += "export const products: Product[] = " + json.dumps(products_data, ensure_ascii=False, indent=2) + ";\n\n"

# Keep the remaining utility functions from the original file
ts_code += """
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
  const product = products.find((p) => p.id === productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}

export const reviews: Review[] = [
  {
    id: "rev-1",
    productId: "p1",
    userName: "فاطمة الزهراء",
    rating: 5,
    comment: "رائع جداً وممتاز. أنصح به بشدة!",
    date: "2026-06-10",
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    id: "rev-2",
    productId: "p2",
    userName: "محمد أمين",
    rating: 4,
    comment: "جودة جيدة وتوصيل سريع، شكراً ميرا مول.",
    date: "2026-06-05",
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    id: "rev-3",
    productId: "p3",
    userName: "سعاد بناني",
    rating: 5,
    comment: "منتج رائع وعملي جداً في الاستخدام اليومي.",
    date: "2026-05-28",
    avatar: "/images/avatars/avatar-3.jpg",
  },
  {
    id: "rev-4",
    productId: "p4",
    userName: "يوسف التازي",
    rating: 5,
    comment: "ممتاز وأنصح الجميع بشرائه، شكراً على المصداقية.",
    date: "2026-06-08",
    avatar: "/images/avatars/avatar-5.jpg",
  }
];

export function getProductReviews(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function getTrendingProducts(): Product[] {
  return products.filter((p) => p.isTrending);
}
"""

with open("/Users/omarouhaddou/Desktop/vs code test/src/lib/data/products.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)

print("Successfully imported products!")
