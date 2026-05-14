// lib/products.ts

export type Category =
  | "Lipstick"
  | "Blush"
  | "Skincare"
  | "Face Powder"
  | "Beauty Box"
  | "Perfumes";

export type Concern =
  | "Dry Skin"
  | "Oily Skin"
  | "Acne Prone"
  | "Anti-Aging"
  | "All Skin Types"
  | "Fragrance"
  | "Beauty Box";

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  shortDescription: string;
  fullDescription?: string;
  keyIngredients?: string[];
  howToUse?: string;
  benefits?: string[];
  concern: Concern[];
  isNew?: boolean;
  isBestSeller?: boolean;
  discountPercentage?: number;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

// ── Separate interface for Deals page products ──────────────────────────────
export interface DealProduct {
  id: string;
  name: string;
  price: number;
  imagePath: string;
  description: string;
  category: string;
  isDeal?: boolean;
  actualPrice?: number;
  isComboDeal?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "liquid-blush",
    name: "Liquid Blush - Natural Glow",
    brand: "AYAN Cosmetics",
    category: "Blush",
    price: 0,
    originalPrice: 0,
    image: "/images/products/liquidblush.jpg",
    shortDescription: "Buildable liquid blush for a natural flushed look",
    concern: ["All Skin Types"],
    isBestSeller: true,
    discountPercentage: 19,
    inStock: true,
    rating: 4.6,
    reviewCount: 45,
  },
  {
    id: "2",
    slug: "cheek-tint",
    name: "Cheek Tint - Fresh Flush",
    brand: "AYAN Cosmetics",
    category: "Blush",
    price: 0,
    image: "/images/products/cheektint.jpg",
    shortDescription: "Water-based cheek tint with long-lasting color",
    concern: ["All Skin Types", "Oily Skin"],
    isNew: true,
    inStock: true,
    rating: 4.4,
    reviewCount: 28,
  },
  {
    id: "3",
    slug: "deep-cleansing-face-wash",
    name: "Deep Cleansing Face Wash",
    brand: "AYAN Cosmetics",
    category: "Skincare",
    price: 0,
    image: "/images/products/deepcleaning.jpg",
    shortDescription: "Gentle yet effective daily cleanser",
    concern: ["Oily Skin", "Acne Prone"],
    isBestSeller: true,
    inStock: true,
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: "4",
    slug: "matte-face-powder",
    name: "Matte Face Powder",
    brand: "AYAN Cosmetics",
    category: "Face Powder",
    price: 0,
    image: "/images/products/facepowder.jpg",
    shortDescription: "Oil-control matte finish face powder",
    concern: ["Oily Skin", "All Skin Types"],
    inStock: true,
    rating: 4.3,
    reviewCount: 34,
  },
  {
    id: "5",
    slug: "long-lasting-lipstick",
    name: "Long Lasting Matte Lipstick",
    brand: "AYAN Cosmetics",
    category: "Lipstick",
    price: 0,
    originalPrice: 0,
    image: "/images/products/lipstic.jpg",
    shortDescription: "Highly pigmented matte lipstick",
    concern: ["All Skin Types"],
    discountPercentage: 23,
    isBestSeller: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "6",
    slug: "velvet-lipstick",
    name: "Velvet Finish Lipstick",
    brand: "AYAN Cosmetics",
    category: "Lipstick",
    price: 0,
    image: "/images/products/lipstic1.jpg",
    shortDescription: "Creamy velvet texture with rich color",
    concern: ["Dry Skin", "All Skin Types"],
    isNew: true,
    inStock: true,
    rating: 4.5,
    reviewCount: 23,
  },
  {
    id: "8",
    slug: "royal-oud-perfume",
    name: "Royal Oud - Luxury Fragrance",
    brand: "AYAN Cosmetics",
    category: "Perfumes",
    price: 0,
    originalPrice: 0,
    image: "/images/products/p1.jpg",
    shortDescription: "Deep, woody notes with a long-lasting premium trail",
    concern: ["Fragrance"],
    isBestSeller: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 56,
  },
  {
    id: "9",
    slug: "floral-bloom-perfume",
    name: "Floral Bloom - Fresh Scent",
    brand: "AYAN Cosmetics",
    category: "Perfumes",
    price: 0,
    image: "/images/products/p2.jpeg",
    shortDescription: "Light and airy floral notes for everyday elegance",
    concern: ["Fragrance"],
    isNew: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 32,
  },
  {
    id: "10",
    slug: "midnight-musk-perfume",
    name: "Midnight Musk - Bold Fragrance",
    brand: "AYAN Cosmetics",
    category: "Perfumes",
    price: 0,
    image: "/images/products/p3.jpeg",
    shortDescription: "A captivating and bold scent for special evenings",
    concern: ["Fragrance"],
    inStock: true,
    rating: 4.8,
    reviewCount: 41,
  },
  {
    id: "11",
    slug: "beauty-box-store-display-1",
    name: "Beauty Box - Store Display",
    brand: "AYAN Cosmetics",
    category: "Beauty Box",
    price: 0,
    image: "/images/products/blush1.jpeg",
    shortDescription: "Our beautiful store display featuring the Beauty Box collection",
    concern: ["All Skin Types"],
    inStock: true,
    rating: 5.0,
    reviewCount: 12,
  },
  {
    id: "12",
    slug: "beauty-box-store-display-2",
    name: "Beauty Box - Store Interior",
    brand: "AYAN Cosmetics",
    category: "Beauty Box",
    price: 0,
    image: "/images/products/box1.jpg",
    shortDescription: "Interior view of our Beauty Box section at Saima Mall",
    concern: ["All Skin Types"],
    inStock: true,
    rating: 5.0,
    reviewCount: 12,
  },
  {
    id: "13",
    slug: "bridal-beauty-box-premium-1",
    name: "Bridal Beauty Box - Premium Edition",
    brand: "AYAN Cosmetics",
    category: "Beauty Box",
    price: 0,
    image: "/images/products/box2.jpg",
    shortDescription: "A complete collection of our best-selling makeup essentials in a luxury box.",
    concern: ["All Skin Types"],
    isBestSeller: true,
    inStock: true,
    rating: 5.0,
    reviewCount: 15,
  },
  {
    id: "14",
    slug: "bridal-beauty-box-premium-2",
    name: "Bridal Beauty Box - Premium Edition 2",
    brand: "AYAN Cosmetics",
    category: "Beauty Box",
    price: 0,
    image: "/images/products/box3.jpg",
    shortDescription: "A complete collection of our best-selling makeup essentials in a luxury box.",
    concern: ["All Skin Types"],
    isBestSeller: true,
    inStock: true,
    rating: 5.0,
    reviewCount: 15,
  },
  {
    id: "15",
    slug: "amber-noir-perfume",
    name: "Amber Noir - Elegant Fragrance",
    brand: "AYAN Cosmetics",
    category: "Perfumes",
    price: 0,
    image: "/images/products/p4.jpeg",
    shortDescription: "A captivating and bold scent for special evenings",
    concern: ["Fragrance"],
    inStock: true,
    rating: 4.8,
    reviewCount: 41,
  },
  {
    id: "16",
    slug: "rose-velvet-perfume",
    name: "Rose Velvet - Smooth Fragrance",
    brand: "AYAN Cosmetics",
    category: "Perfumes",
    price: 0,
    image: "/images/products/p5.jpeg",
    shortDescription: "A smooth and elegant rose-infused scent",
    concern: ["Fragrance"],
    inStock: true,
    rating: 4.8,
    reviewCount: 41,
  },
  {
    id: "17",
    slug: "ocean-breeze-perfume",
    name: "Ocean Breeze - Fresh Fragrance",
    brand: "AYAN Cosmetics",
    category: "Perfumes",
    price: 0,
    image: "/images/products/p6.jpeg",
    shortDescription: "A fresh and invigorating ocean-inspired scent",
    concern: ["Fragrance"],
    inStock: true,
    rating: 4.8,
    reviewCount: 41,
  },
  {
    id: "18",
    slug: "golden-sands-perfume",
    name: "Golden Sands - Warm Fragrance",
    brand: "AYAN Cosmetics",
    category: "Perfumes",
    price: 0,
    image: "/images/products/p7.jpeg",
    shortDescription: "A warm and sensual amber-gold fragrance",
    concern: ["Fragrance"],
    inStock: true,
    rating: 4.8,
    reviewCount: 41,
  },
  {
    id: "19",
    slug: "luxury-gift-box-4",
    name: "Luxury Beauty Box - Edition 4",
    brand: "AYAN Cosmetics",
    category: "Beauty Box",
    price: 0,
    image: "/images/products/box4.jpg",
    shortDescription: "Our signature collection in a premium box.",
    concern: ["All Skin Types"],
    inStock: true,
    rating: 5.0,
    reviewCount: 10,
  },
  {
    id: "20",
    slug: "luxury-gift-box-5",
    name: "Luxury Beauty Box - Edition 5",
    brand: "AYAN Cosmetics",
    category: "Beauty Box",
    price: 0,
    image: "/images/products/box5.jpg",
    shortDescription: "A curated set of essentials for your beauty routine.",
    concern: ["All Skin Types"],
    inStock: true,
    rating: 5.0,
    reviewCount: 8,
  },
  {
    id: "21",
    slug: "luxury-gift-box-6",
    name: "Luxury Beauty Box - Edition 6",
    brand: "AYAN Cosmetics",
    category: "Beauty Box",
    price: 0,
    image: "/images/products/box6.jpg",
    shortDescription: "Perfect for gifting or personal pampering.",
    concern: ["All Skin Types"],
    inStock: true,
    rating: 5.0,
    reviewCount: 14,
  },
  {
    id: "22",
    slug: "luxury-gift-box-7",
    name: "Luxury Beauty Box - Edition 7",
    brand: "AYAN Cosmetics",
    category: "Beauty Box",
    price: 0,
    image: "/images/products/box7.jpg",
    shortDescription: "The ultimate beauty collection for a complete look.",
    concern: ["All Skin Types"],
    inStock: true,
    rating: 5.0,
    reviewCount: 12,
  },
  {
    id: "23",
    slug: "blush-palette-2",
    name: "Blush Collection - Shade 2",
    brand: "AYAN Cosmetics",
    category: "Blush",
    price: 0,
    image: "/images/products/blush2.jpeg",
    shortDescription: "Highly pigmented blush for a rosy glow.",
    concern: ["All Skin Types"],
    inStock: true,
    rating: 4.6,
    reviewCount: 22,
  },
  {
    id: "24",
    slug: "blush-palette-3",
    name: "Blush Collection - Shade 3",
    brand: "AYAN Cosmetics",
    category: "Blush",
    price: 0,
    image: "/images/products/blush3.jpeg",
    shortDescription: "Smooth texture with a natural finish.",
    concern: ["All Skin Types"],
    inStock: true,
    rating: 4.7,
    reviewCount: 19,
  },
  {
    id: "25",
    slug: "velvet-lip-cheek-tint",
    name: "Velvet Lip & Cheek Tint",
    brand: "AYAN Cosmetics",
    category: "Blush",
    price: 0,
    image: "/images/products/tint.jpeg",
    shortDescription: "Dual-purpose tint for lips and cheeks.",
    concern: ["All Skin Types"],
    inStock: true,
    rating: 4.8,
    reviewCount: 35,
  },
  {
    id: "26",
    slug: "fresh-tint-3",
    name: "Fresh Tint Shade 3",
    brand: "AYAN Cosmetics",
    category: "Blush",
    price: 0,
    image: "/images/products/tint3.jpeg",
    shortDescription: "Long-lasting color with a lightweight feel.",
    concern: ["All Skin Types"],
    inStock: true,
    rating: 4.5,
    reviewCount: 27,
  },
];

// ── Deals page products (separate from main catalog) ───────────────────────
export const PRODUCTS: DealProduct[] = [
  {
    id: "luxury-full-glam-box",
    name: "AYAN Luxury Full Glam Box & Organizer",
    price: 8000,
    imagePath: "/images/products/deal1.png",
    description: "Complete signature master bundle featuring premium eyeshadow palette, HD foundations, lipsticks, liners, and beauty blenders arranged in a luxury vanity organizer.",
    category: "Bundles",
    isDeal: true,
    isComboDeal: true,
    actualPrice: 11500,
  },
  {
    id: "fit-me-matte-poreless",
    name: "Fit Me Matte + Poreless Foundation Tube",
    price: 2950,
    imagePath: "/images/products/deal2.png",
    description: "Ultra-blendable liquid foundation for a flawless matte finish. Controls shine and blurs pores.",
    category: "Foundation",
    isDeal: true,
    actualPrice: 3500,
  },
  {
    id: "benetint-lip-cheek",
    name: "BeneTint Lip & Cheek Liquid Tint",
    price: 599,
    imagePath: "/images/products/deal3.png",
    description: "Rose-tinted lip and cheek stain. Smudge-proof and transparent long-lasting formula.",
    category: "Tint",
    isDeal: true,
    actualPrice: 850,
  },
  {
    id: "super-stay-active-wear",
    name: "Super Stay 30H Full Coverage Foundation",
    price: 2150,
    imagePath: "/images/products/deal4.png",
    description: "High-pigment foundation with a weightless, ultra-matte locking behavior.",
    category: "Foundation",
    isDeal: true,
    actualPrice: 2500,
  },
  {
    id: "colossal-mascara-yellow",
    name: "The Colossal Intense Volume Mascara",
    price: 1750,
    imagePath: "/images/products/deal5.png",
    description: "Iconic mega brush volumizing waterproof mascara for dramatic thick lashes.",
    category: "Eye Makeup",
    isDeal: true,
    actualPrice: 1850,
  },
  {
    id: "baby-skin-instant-primer",
    name: "Baby Skin Instant Pore Eraser Primer",
    price: 2350,
    imagePath: "/images/products/deal6.png",
    description: "Lightweight breathable pore blurring makeup base primer for smooth skin.",
    category: "Primer",
    isDeal: true,
    actualPrice: 2800,
  },
  {
    id: "fit-me-concealer",
    name: "Fit Me Liquid Concealer Stick",
    price: 1500,
    imagePath: "/images/products/deal7.png",
    description: "Natural coverage concealer to conceal redness, flaws, and under-eye dark circles.",
    category: "Concealer",
    isDeal: true,
    actualPrice: 2100,
  },
];

// ── Helper functions ────────────────────────────────────────────────────────

export const getFeaturedProducts = (limit = 8): Product[] =>
  products.filter((p) => p.isBestSeller || p.isNew).slice(0, limit);

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getAllCategories = (): Category[] =>
  [...new Set(products.map((p) => p.category))];

export const getAllBrands = (): string[] =>
  [...new Set(products.map((p) => p.brand))];

export const getRelatedProducts = (product: Product, limit = 4): Product[] =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);

export const getProductReviews = (productId: string): Review[] => [
  {
    id: "1",
    productId,
    userName: "Sarah K.",
    rating: 5,
    comment: "Excellent product! Highly recommend.",
    date: "2024-01-15",
    verified: true,
  },
  {
    id: "2",
    productId,
    userName: "Ayesha M.",
    rating: 4,
    comment: "Good quality, fast delivery.",
    date: "2024-01-10",
    verified: true,
  },
];
