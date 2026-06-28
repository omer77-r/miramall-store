import type { Product, Review } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p1",
    slug: "metal-clothes-hanger-4-tier",
    name: "4-Tier Metal Clothes Hanger",
    nameAr: "نشار الملابس المعدني 4 طبقات",
    description: "Space-saving 4-tier metal clothes hanger, foldable and portable. Perfect for organizing your wardrobe.",
    descriptionAr: "قلب خزانتك من الفوضى لترتيب المحترفين! 🏠 هاد النشار المعدني كايجمعلك 4 طبقات فمكان واحد، كافي لجميع ملابسك بلا ما تهرس الخزانة. معدن 100% كايصبر معاك سنين، ماشي بحال البلاستيك لي كايتكسر. قابل للطي — سفر؟ نقل؟ جيبو معاك فينما مشيتي. تركيب فـ 10 دقايق بلا فني ولا تعقيد. الحل النهائي للناس لي كاتقدر الوقت والترتيب.",
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
    descriptionAr: "أمن دارك بـ 150 درهم فقط! 🔒 هاد المصباح الشمسي الذكي على شكل كاميرا مراقبة واقعي 100%، كايخلي أي واحد يفكر بلي عندك كاميرا حقيقية. الإضاءة قوية وتخدم بالطاقة الشمسية كاملة — مكتخلص حتى درهم كهرباء. ساهل فالتثبيت، حطو قدام الدار ولا فالجردة و ارقد مرتاح. حل ذكي وغير مكلف باش تحمي دارك وأسرتك.",
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
    descriptionAr: "وداعاً لغسيل اليد! 👋 هاد الغسالة الصغيرة الحجم كاتصب وتنشف وتعقم بالأشعة الزرقاء فجهاز واحد. خاصة بالملابس الداخلية والحوايج الصغيرة — صحة ونضافة 100%. مناسبة للسكن والطلبة والرحلات. كاتقضي على البكتيريا والميكروبات بالأشعة UV. إذا بغيتي الراحة والنضافة، هاد الغسالة الحل!",
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
    descriptionAr: "أحسن حل لهاد الصيف 🔥❄️ مروحة تبريد كاتبرد بالثلج والماء، كاتعطيك هواء منعش وبارد فالحين. كافي فالمكتب، فالبيت، حتى فالمطبخ. حط فيها الثلج والماء وشوف كيفاش الجو كايتبدل 180 درجة. اقتصادي فالكهرباء — مكتخلصش بزاف. إلا كان الحر كايعصبك، هاد المروحة غاتبدل حياتك هاد الصيف!",
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
  },
  {
    id: "p5",
    slug: "car-air-mattress-pump-pillows",
    name: "Car Air Mattress + Pump + 2 Pillows",
    nameAr: "فراش السيارة المريح + المضخة + وسادتين",
    description: "Inflatable car mattress with electric pump and 2 pillows. Transform your car into a comfortable bedroom in minutes.",
    descriptionAr: "حوّل سيارتك إلى غرفة نوم مريحة فدقيقتين! 🚗💤 استمتع بنوم عميق وراحة تامة ليك وللأطفال أثناء السفر الطويل. فراش هوائي مريح، ساهل فالتركيب ومناسب لجميع السيارات. كايجي معاه مضخة كهربائية كاتنفخو فدقايق + وسادتين مريحات. سفر، كامبينغ، ولا حتى راحة فالحديقة — هاد الفراش هو الحل. مادة قوية كاتصبر، ماكتقطعش بسهولة. نوم هاني فأي مكان!",
    price: 300,
    originalPrice: 450,
    discount: 33,
    images: ["/products/product_5_img1.png", "/products/product_5_img2.png", "/products/product_5_img3.png"],
    category: "cat-home",
    tags: ["سيارة", "فراش", "سفر", "كامبينغ"],
    rating: 4.8,
    reviewCount: 76,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "فراش هوائي مريح لجميع السيارات",
      "مضخة كهربائية كاتنفخو فدقايق",
      "كايجي معاه وسادتين مريحات",
      "مثالي للسفر والكامبينغ"
    ],
    specifications: {
      "المحتوى": "فراش + مضخة + وسادتين",
      "النفخ": "كهربائي",
      "الاستخدام": "السيارة والسفر",
      "المادة": "PVC قوي"
    },
    inStock: true,
    codAvailable: true
  },
  {
    id: "p6",
    slug: "smart-fan-bulb-2-in-1",
    name: "Smart Fan Bulb 2-in-1",
    nameAr: "مصباح المروحة الذكي 2 في 1",
    description: "Smart LED bulb with built-in fan. Plugs into any E27 socket with remote control. No electrician needed.",
    descriptionAr: "الضو والمروحة فجهاز واحد كايتركب فثواني! 💡🌀 مصباح ذكي بمروحة مدمجة وإضاءة LED قوية. كيتركب فأي دواية عادية (E27) بلا كهربائي وبلا أسلاك. كاتتحكم فيه كامل بالريموت — تشعل، تطفي، تبدل لون الضو، تكبر ولا تصغر سرعة المروحة. حل ذكي للبيت، المطبخ، ولا الجراج. اقتصادي فالكهرباء وكايبرد المكان فالصيف.",
    price: 200,
    originalPrice: 300,
    discount: 33,
    images: ["/products/product_6_img1.png", "/products/product_6_img2.png", "/products/product_6_img3.png"],
    category: "cat-electronics",
    tags: ["مصباح", "مروحة", "ذكي", "LED"],
    rating: 4.7,
    reviewCount: 92,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "ضو LED قوي + مروحة فجهاز واحد",
      "كيتركب فأي دواية E27 بلا كهربائي",
      "ريموت كنترول لتحكم كامل",
      "اقتصادي فالكهرباء"
    ],
    specifications: {
      "النوع": "مصباح + مروحة 2 في 1",
      "التركيب": "دواية E27 عادية",
      "التحكم": "ريموت كنترول",
      "الإضاءة": "LED قوية"
    },
    inStock: true,
    codAvailable: true
  },
  {
    id: "p7",
    slug: "hair-removal-machine",
    name: "Hair Removal Machine",
    nameAr: "آلة إزالة الشعر",
    description: "Professional hair removal device for all body areas including sensitive zones. Removes hair painlessly and effectively.",
    descriptionAr: "أحسن آلة لإزالة الشعر من جميع المناطق حتى المنطقة الحساسة! ✨ كتحيد الزغب وتقاد حجبان وحتى الزغب من النيف. تكنولوجيا حديثة بلا ألم وبلا تهييج. كتخدم على كاع نوع البشرة وكاع لون الشعر. اقتصادية بزاف — مكتحتاجش تمشي للصالون كل شهر. نتائج فورية وبشرة ناعمة لفترة طويلة. هدية مثالية للبنات وللنساء.",
    price: 200,
    originalPrice: 320,
    discount: 38,
    images: ["/products/product_7_img1.png", "/products/product_7_img2.png", "/products/product_7_img3.png", "/products/product_7_img4.png"],
    category: "cat-electronics",
    tags: ["جمال", "إزالة الشعر", "عناية", "بشرة"],
    rating: 4.6,
    reviewCount: 118,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "كتحيد الشعر من جميع مناطق الجسم",
      "آمنة للمنطقة الحساسة والوجه",
      "بلا ألم وبلا تهييج",
      "قابلة للشحن — استعمال متعدد"
    ],
    specifications: {
      "الاستخدام": "جميع مناطق الجسم",
      "التقنية": "إزالة شعر حديثة",
      "الشحن": "USB قابل للشحن",
      "النوع البشرة": "كاع نوع"
    },
    inStock: true,
    codAvailable: true
  },
  {
    id: "p8",
    slug: "magic-projector-led",
    name: "Magic Projector with Free LED",
    nameAr: "البروجكتور السحري + ليد مجانا",
    description: "Smart projector with 2 Bluetooth speakers and over 14 colors. Bonus free LED strip. Perfect for your home cinema.",
    descriptionAr: "أحسن حاجة تقدر تاخد لبيتك! 🎬✨ بروجكتور سحري فيه 2 بيفان بلوتوث وأكثر من 14 لون. كايعطيك تجربة سينما فدارك بجودة عالية. كاتربط معاه الهاتف ولا الـ USB ولا حتى Wi-Fi. صوت قوي ونقي بلا حاجة لمكبرات إضافية. ومعاه شريط LED مجاناً باش تزين الحفلة ولا الغرفة. هدية مثالية للأطفال وللعائلة. تخصيص اللون حسب المزاج.",
    price: 200,
    originalPrice: 320,
    discount: 38,
    images: ["/products/product_8_img1.png", "/products/product_8_img2.png", "/products/product_8_img3.png", "/products/product_8_img4.png", "/products/product_8_img5.png"],
    category: "cat-electronics",
    tags: ["بروجكتور", "سينما", "بلوتوث", "ترفيه"],
    rating: 4.7,
    reviewCount: 104,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "2 مكبر صوت بلوتوث مدمج",
      "أكثر من 14 لون قابل للتغيير",
      "شريط LED مجاناً معاه",
      "ربط بالهاتف، USB، Wi-Fi"
    ],
    specifications: {
      "النوع": "بروجكتور سحري",
      "الصوت": "2 بلوتوث",
      "الألوان": "+14 لون",
      "الهدية": "شريط LED مجاني"
    },
    inStock: true,
    codAvailable: true
  },
  {
    id: "p9",
    slug: "mini-handheld-fan",
    name: "Mini Handheld Fan",
    nameAr: "فرفارة يد صغيرة",
    description: "Compact handheld fan with powerful cooling. USB rechargeable, perfect for hot summer days everywhere you go.",
    descriptionAr: "فرفارة يد صغيرة فالحجم ولكن كاتبرد مزيان! 🌬️ أحسن حل لهاد الحرارة لي داخلة. كتدخل فالساك ولا فالجيب — تجيبها معاك فينما مشيتي. قابلة للشحن بـ USB، البطارية كتدوم ساعات. عندها أكثر من سرعة باش تختار اللي تبغي. تصميم أنيق وألوان مختلفة. مثالية للنساء، الطلبة، والمسافرين. وداعاً للحر فالطاكسي ولا فالباص!",
    price: 150,
    originalPrice: 220,
    discount: 32,
    images: ["/products/product_9_img1.png", "/products/product_9_img2.png", "/products/product_9_img3.png"],
    category: "cat-electronics",
    tags: ["مروحة", "صغيرة", "صيف", "محمول"],
    rating: 4.5,
    reviewCount: 87,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "حجم صغير كتدخل فالجيب ولا الساك",
      "قابلة للشحن USB",
      "بطارية كتدوم ساعات",
      "أكثر من سرعة للاختيار"
    ],
    specifications: {
      "النوع": "فرفارة يد محمولة",
      "الشحن": "USB",
      "الحجم": "صغير ومحمول",
      "السرعات": "متعددة"
    },
    inStock: true,
    codAvailable: true
  },
  {
    id: "p10",
    slug: "portable-juice-blender",
    name: "Portable Juice Blender",
    nameAr: "آلة طحن عصير",
    description: "Rechargeable electric blender for juices and smoothies. Compact and portable, perfect for fresh drinks anywhere.",
    descriptionAr: "آلة طحن عصير — خلاط كهربائي قابل للشحن! 🥤🍓 أحسن حاجة تصوب بيها عصير وتبرد فهاد الصيف. كتطحن الفواكه، الخضرة، حتى الثلج فثواني. حجم صغير ومحمول — تخدم بيها فالدار، فالخدمة، ولا فالسفر. قابلة للشحن USB، بلا حاجة للكهرباء. صحية بزاف لأنك كتشرب عصير طبيعي 100% بلا ساكر ولا مواد حافظة. مثالية للرياضيين، الأطفال، وللي بغا يعيش بصحة.",
    price: 200,
    originalPrice: 300,
    discount: 33,
    images: ["/products/product_10_img1.png", "/products/product_10_img2.png", "/products/product_10_img3.png"],
    category: "cat-home",
    tags: ["خلاط", "عصير", "صحة", "مطبخ"],
    rating: 4.6,
    reviewCount: 95,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "خلاط كهربائي قابل للشحن",
      "كتطحن فواكه، خضرة، حتى ثلج",
      "حجم صغير ومحمول",
      "USB قابل للشحن — استعمال فأي مكان"
    ],
    specifications: {
      "النوع": "خلاط محمول",
      "الشحن": "USB قابل للشحن",
      "الاستخدام": "عصير وسموثي",
      "الحجم": "محمول"
    },
    inStock: true,
    codAvailable: true
  },
  {
    id: "p11",
    slug: "massage-machine",
    name: "Massage Machine",
    nameAr: "آلة مساج",
    description: "Professional massage machine for all body areas. Perfect for relaxation after a long tiring day.",
    descriptionAr: "آلة مساج لجميع المناطق! 💆‍♀️ أحسن حاجة تقدر تاخد وتستعملها بعد يوم متعب. كتعطيك إحساس بحال المساج الاحترافي فالمنزل بلا ما تمشي للسبا. كتشغل على الرقبة، الكتفين، الظهر، والرجلين — تخفف التوتر والآلام العضلية. أكثر من سرعة وأكثر من نوع المساج. هدية مثالية للوالدين، للزوج/الزوجة، ولكل واحد كيخدم بزاف. صحية ومريحة، تستحق كل درهم!",
    price: 250,
    originalPrice: 400,
    discount: 38,
    images: ["/products/product_11_img1.png", "/products/product_11_img2.png", "/products/product_11_img3.png"],
    category: "cat-electronics",
    tags: ["مساج", "صحة", "راحة", "عناية"],
    rating: 4.8,
    reviewCount: 142,
    isNew: true,
    isBestSeller: true,
    isTrending: true,
    features: [
      "مساج لجميع مناطق الجسم",
      "كتخفف التوتر والآلام",
      "أكثر من سرعة ونوع مساج",
      "قابلة للشحن — استعمال فأي مكان"
    ],
    specifications: {
      "النوع": "آلة مساج محمولة",
      "المناطق": "جميع الجسم",
      "السرعات": "متعددة",
      "الشحن": "USB قابل للشحن"
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
  {
    id: "r5",
    productId: "p5",
    userName: "يونس ع.",
    rating: 5,
    comment: "خدمناه فالسفر مع الأطفال، نوم هاني فالسيارة. المضخة كاتنفخو فدقايق. شي حاجة خرافية!",
    date: "2026-06-24",
    avatar: "/images/avatars/avatar-1.jpg"
  },
  {
    id: "r6",
    productId: "p6",
    userName: "كريمة ل.",
    rating: 5,
    comment: "تركبت ساهلة فالدواية بلا كهربائي. الضو قوي والمروحة كتعطي هواء مزيان. الريموت عملي بزاف.",
    date: "2026-06-25",
    avatar: "/images/avatars/avatar-2.jpg"
  },
  {
    id: "r7",
    productId: "p7",
    userName: "سلمى ر.",
    rating: 5,
    comment: "خدامة مزيان وبلا ألم. نتائج بانو من أول استعمال. وداع للحلاوة والشمع!",
    date: "2026-06-22",
    avatar: "/images/avatars/avatar-3.jpg"
  },
  {
    id: "r8",
    productId: "p8",
    userName: "محمد ت.",
    rating: 5,
    comment: "البروجكتور واعر، الصوت قوي والألوان زوينة. والLED لي جا معاه زاد جمال للغرفة.",
    date: "2026-06-21",
    avatar: "/images/avatars/avatar-4.jpg"
  },
  {
    id: "r9",
    productId: "p9",
    userName: "أمينة و.",
    rating: 4,
    comment: "صغيرة ومريحة، كتدخل فالساك بسهولة. البطارية كتدوم نهار كامل. مزيانة فالطاكسي.",
    date: "2026-06-23",
    avatar: "/images/avatars/avatar-2.jpg"
  },
  {
    id: "r10",
    productId: "p10",
    userName: "رشيد ك.",
    rating: 5,
    comment: "خلاط رائع للسموثي والعصير. كنخدم بيه فالخدمة ديما. الشحن كيدوم بزاف.",
    date: "2026-06-20",
    avatar: "/images/avatars/avatar-1.jpg"
  },
  {
    id: "r11",
    productId: "p11",
    userName: "سعاد م.",
    rating: 5,
    comment: "بعد نهار خدمة طويل، آلة المساج هادي كاتفك التوتر فالكتفين. حقاً مريحة ومستاهلة.",
    date: "2026-06-26",
    avatar: "/images/avatars/avatar-3.jpg"
  },
];

export function getProductReviews(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function getTrendingProducts(): Product[] {
  return getTrending(8);
}
