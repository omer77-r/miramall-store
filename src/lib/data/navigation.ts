import { NavItem } from "@/lib/types"

export const mainNavigation: NavItem[] = [
  {
    title: "الرئيسية",
    titleAr: "الرئيسية",
    href: "/",
    icon: "Home",
  },
  {
    title: "الأكثر طلباً",
    titleAr: "الأكثر طلباً 🔥",
    href: "/categories/الأكثر-طلباً",
    icon: "Flame",
    badge: "جديد",
    badgeAr: "جديد",
  },
  {
    title: "نساء وأناقة",
    titleAr: "نساء وأناقة 👗",
    href: "/categories/نساء-وأناقة",
    icon: "Sparkles",
    children: [
      {
        title: "حقائب نسائية",
        titleAr: "حقائب نسائية",
        href: "/categories/نساء-وأناقة?tag=حقائب",
        icon: "ShoppingBag",
      },
      {
        title: "ملابس وأزياء",
        titleAr: "ملابس وأزياء",
        href: "/categories/نساء-وأناقة?tag=ملابس",
        icon: "Shirt",
      },
      {
        title: "مكياج وتجميل",
        titleAr: "مكياج وتجميل",
        href: "/categories/نساء-وأناقة?tag=مكياج",
        icon: "Wand",
      },
      {
        title: "إكسسوارات",
        titleAr: "إكسسوارات",
        href: "/categories/نساء-وأناقة?tag=إكسسوارات",
        icon: "Gem",
      },
      {
        title: "عطور نسائية",
        titleAr: "عطور نسائية",
        href: "/categories/نساء-وأناقة?tag=عطور",
        icon: "Heart",
      },
      {
        title: "أحذية نسائية",
        titleAr: "أحذية نسائية",
        href: "/categories/نساء-وأناقة?tag=أحذية",
        icon: "Footprints",
      },
    ],
  },
  {
    title: "رجال وستايل",
    titleAr: "رجال وستايل 🕶️",
    href: "/categories/رجال-وستايل",
    icon: "Crown",
    children: [
      {
        title: "ساعات رجالية",
        titleAr: "ساعات رجالية",
        href: "/categories/رجال-وستايل?tag=ساعات",
        icon: "Watch",
      },
      {
        title: "محافظ رجالية",
        titleAr: "محافظ رجالية",
        href: "/categories/رجال-وستايل?tag=محافظ",
        icon: "Wallet",
      },
      {
        title: "ملابس رجالية",
        titleAr: "ملابس رجالية",
        href: "/categories/رجال-وستايل?tag=ملابس",
        icon: "Shirt",
      },
      {
        title: "عطور رجالية",
        titleAr: "عطور رجالية",
        href: "/categories/رجال-وستايل?tag=عطور",
        icon: "Heart",
      },
      {
        title: "إكسسوارات",
        titleAr: "إكسسوارات",
        href: "/categories/رجال-وستايل?tag=إكسسوارات",
        icon: "Glasses",
      },
    ],
  },
  {
    title: "المنزل والمطبخ",
    titleAr: "المنزل والمطبخ 🏠",
    href: "/categories/المنزل-والمطبخ",
    icon: "Home",
    children: [
      {
        title: "أجهزة المطبخ",
        titleAr: "أجهزة المطبخ",
        href: "/categories/المنزل-والمطبخ?tag=أجهزة",
        icon: "Blender",
      },
      {
        title: "تنظيم وتخزين",
        titleAr: "تنظيم وتخزين",
        href: "/categories/المنزل-والمطبخ?tag=تنظيم",
        icon: "Container",
      },
      {
        title: "ديكور وعطور منزلية",
        titleAr: "ديكور وعطور منزلية",
        href: "/categories/المنزل-والمطبخ?tag=ديكور",
        icon: "Sparkles",
      },
      {
        title: "آلات القهوة والشاي",
        titleAr: "آلات القهوة والشاي",
        href: "/categories/المنزل-والمطبخ?tag=مشروبات",
        icon: "Coffee",
      },
    ],
  },
  {
    title: "السيارات",
    titleAr: "السيارات 🚗",
    href: "/categories/السيارات",
    icon: "Car",
    children: [
      {
        title: "كاميرات السيارة",
        titleAr: "كاميرات السيارة",
        href: "/categories/السيارات?tag=كاميرات",
        icon: "Camera",
      },
      {
        title: "العناية بالسيارة",
        titleAr: "العناية بالسيارة",
        href: "/categories/السيارات?tag=عناية",
        icon: "Droplets",
      },
      {
        title: "حوامل الهاتف",
        titleAr: "حوامل الهاتف",
        href: "/categories/السيارات?tag=حوامل",
        icon: "Smartphone",
      },
      {
        title: "منظمات السيارة",
        titleAr: "منظمات السيارة",
        href: "/categories/السيارات?tag=منظم",
        icon: "Container",
      },
    ],
  },
  {
    title: "الإلكترونيات",
    titleAr: "الإلكترونيات 📱",
    href: "/categories/الإلكترونيات",
    icon: "Zap",
    children: [
      {
        title: "سماعات وأذن",
        titleAr: "سماعات وأذن",
        href: "/categories/الإلكترونيات?tag=سماعات",
        icon: "Headphones",
      },
      {
        title: "ساعات ذكية",
        titleAr: "ساعات ذكية",
        href: "/categories/الإلكترونيات?tag=ساعات",
        icon: "Watch",
      },
      {
        title: "إضاءة LED",
        titleAr: "إضاءة LED",
        href: "/categories/الإلكترونيات?tag=إضاءة",
        icon: "Lightbulb",
      },
      {
        title: "شواحن وكوابل",
        titleAr: "شواحن وكوابل",
        href: "/categories/الإلكترونيات?tag=شواحن",
        icon: "BatteryCharging",
      },
    ],
  },
  {
    title: "الرياضة",
    titleAr: "الرياضة ⚽",
    href: "/categories/الرياضة",
    icon: "Dumbbell",
    children: [
      {
        title: "اليوغا والاسترخاء",
        titleAr: "اليوغا والاسترخاء",
        href: "/categories/الرياضة?tag=يوغا",
        icon: "PersonStanding",
      },
      {
        title: "تمارين الكارديو",
        titleAr: "تمارين الكارديو",
        href: "/categories/الرياضة?tag=كارديو",
        icon: "HeartPulse",
      },
      {
        title: "قارورات رياضية",
        titleAr: "قارورات رياضية",
        href: "/categories/الرياضة?tag=قارورات",
        icon: "FlaskRound",
      },
      {
        title: "ملابس رياضية",
        titleAr: "ملابس رياضية",
        href: "/categories/الرياضة?tag=ملابس",
        icon: "Shirt",
      },
    ],
  },
  {
    title: "الأطفال",
    titleAr: "الأطفال 👶",
    href: "/categories/الأطفال",
    icon: "Baby",
    children: [
      {
        title: "ألعاب تعليمية",
        titleAr: "ألعاب تعليمية",
        href: "/categories/الأطفال?tag=ألعاب",
        icon: "Gamepad2",
      },
      {
        title: "عربات وإكسسوارات",
        titleAr: "عربات وإكسسوارات",
        href: "/categories/الأطفال?tag=عربات",
        icon: "RailSymbol",
      },
      {
        title: "فنون وإبداع",
        titleAr: "فنون وإبداع",
        href: "/categories/الأطفال?tag=فنون",
        icon: "Palette",
      },
      {
        title: "ملابس أطفال",
        titleAr: "ملابس أطفال",
        href: "/categories/الأطفال?tag=ملابس",
        icon: "Shirt",
      },
    ],
  },
  {
    title: "العروض",
    titleAr: "العروض 💎",
    href: "/offers",
    icon: "Percent",
    badge: "تخفيضات",
    badgeAr: "تخفيضات",
  },
]

export const topBarLinks: NavItem[] = [
  {
    title: "توصيل مجاني للطلبيات فوق 300 درهم",
    titleAr: "توصيل مجاني للطلبيات فوق 300 درهم",
    href: "#",
    icon: "Truck",
  },
  {
    title: "الدفع عند الاستلام",
    titleAr: "الدفع عند الاستلام",
    href: "#",
    icon: "Banknote",
  },
  {
    title: "الإرجاع خلال 7 أيام",
    titleAr: "الإرجاع خلال 7 أيام",
    href: "#",
    icon: "ShieldCheck",
  },
  {
    title: "خدمة الزبناء",
    titleAr: "خدمة الزبناء",
    href: "/contact",
    icon: "Headset",
  },
  {
    title: "الأسئلة الشائعة",
    titleAr: "الأسئلة الشائعة",
    href: "/faq",
    icon: "HelpCircle",
  },
]
