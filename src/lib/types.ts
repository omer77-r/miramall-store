export interface Product {
  id: string
  slug: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  price: number
  originalPrice: number | null
  discount: number | null
  images: string[]
  category: string
  tags: string[]
  rating: number
  reviewCount: number
  isNew: boolean
  isBestSeller: boolean
  isTrending: boolean
  features: string[]
  specifications: Record<string, string>
  inStock: boolean
  codAvailable: boolean
}

export interface Category {
  id: string
  slug: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  image: string
  icon: string
  parentId: string | null
  productCount: number
  subCategoryIds?: string[]
}

export interface CartItem {
  productId: string
  quantity: number
  product: Product
}

export interface OrderForm {
  fullName: string
  phone: string
  city: string
  address: string
  notes: string
  termsAccepted: boolean
}

export interface Review {
  id: string
  productId: string
  userName: string
  rating: number
  comment: string
  date: string
  avatar: string
}

export interface FAQ {
  id: string
  question: string
  questionAr: string
  answer: string
  answerAr: string
  category: string
}

export interface NavItem {
  title: string
  titleAr: string
  href: string
  icon?: string
  children?: NavItem[]
  badge?: string
  badgeAr?: string
}

export interface HeroSlide {
  id: string
  titleAr: string
  subtitleAr: string
  ctaAr: string
  href: string
  image: string
  color: string
}
