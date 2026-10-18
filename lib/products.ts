export type Category =
  | "Makeup"
  | "Skincare"
  | "Hair Care"
  | "Electronic Devices"
  | "Perfumes"
  | "Bundles";

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
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
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
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface DealProduct {
  id: string;
  name: string;
  price: number;
  imagePath: string;
  description: string;
  category: string;
  isDeal?: boolean;
  isComboDeal?: boolean;
  actualPrice?: number;
}

export const products: Product[] = [
  {
    "id": "blush1",
    "slug": "radiant-blush-collection-1",
    "name": "Radiant Blush No.1",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/blush1.jpeg",
    "shortDescription": "Soft peachy blush for a natural flushed look.",
    "concern": [
      "All Skin Types"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 120
  },
  {
    "id": "blush2",
    "slug": "radiant-blush-collection-2",
    "name": "Radiant Blush No.2",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/blush2.jpeg",
    "shortDescription": "Warm rose-toned blush for a romantic glow.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 98
  },
  {
    "id": "blush3",
    "slug": "radiant-blush-collection-3",
    "name": "Radiant Blush No.3",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/blush3.jpeg",
    "shortDescription": "Coral blush that brightens any complexion.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 45
  },
  {
    "id": "blush4",
    "slug": "velvet-touch-blush",
    "name": "Velvet Touch Blush",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/blush4.jpeg",
    "shortDescription": "Silky smooth powder blush for all-day wear.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 60
  },
  {
    "id": "blush5",
    "slug": "sunset-glow-blush",
    "name": "Sunset Glow Blush",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/blush5.jpeg",
    "shortDescription": "Golden-hour warmth in every swipe.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.5,
    "reviewCount": 33
  },
  {
    "id": "blush6",
    "slug": "berry-flush-blush",
    "name": "Berry Flush Blush",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/blush6.jpeg",
    "shortDescription": "Deep berry tones for a bold, expressive flush.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 40
  },
  {
    "id": "blush7",
    "slug": "pink-petal-blush",
    "name": "Pink Petal Blush",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/blush7.jpeg",
    "shortDescription": "Delicate pink blush for a fresh, youthful look.",
    "concern": [
      "All Skin Types"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 150
  },
  {
    "id": "blush8",
    "slug": "golden-hour-blush",
    "name": "Golden Hour Blush",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/blush8.jpeg",
    "shortDescription": "Shimmer-kissed blush for a luminous finish.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 72
  },
  {
    "id": "blush9",
    "slug": "desert-rose-blush",
    "name": "Desert Rose Blush",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/blush9.jpeg",
    "shortDescription": "Earthy rose blush with a matte satin finish.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.5,
    "reviewCount": 28
  },
  {
    "id": "liquidblush",
    "slug": "liquid-blush-natural-glow",
    "name": "Liquid Blush - Natural Glow",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/liquidblush.jpg",
    "shortDescription": "Buildable liquid blush for a natural flushed look.",
    "concern": [
      "All Skin Types"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 200
  },
  {
    "id": "liquidblush2",
    "slug": "liquid-blush-rosy-dreams",
    "name": "Liquid Blush - Rosy Dreams",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/liquidblush2.jpeg",
    "shortDescription": "Dreamy rosy liquid blush that melts into skin.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 55
  },
  {
    "id": "tint1",
    "slug": "cheek-lip-tint-classic",
    "name": "Cheek & Lip Tint - Classic",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/tint.jpeg",
    "shortDescription": "Dual-use tint for cheeks and lips in one.",
    "concern": [
      "All Skin Types"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 180
  },
  {
    "id": "cheektint",
    "slug": "cheek-tint-fresh-flush",
    "name": "Fresh Flush Cheek Tint",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/cheektint.jpg",
    "shortDescription": "Lightweight cheek tint for an effortless fresh look.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 65
  },
  {
    "id": "lipstic1",
    "slug": "superstay-matte-lipstick",
    "name": "SuperStay Matte Lipstick",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/lipstic.jpg",
    "shortDescription": "Highly pigmented matte lipstick that stays all day.",
    "concern": [
      "All Skin Types"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 245
  },
  {
    "id": "lipstic2",
    "slug": "velvet-lip-color",
    "name": "Velvet Lip Color",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/lipstic1.jpg",
    "shortDescription": "Rich, creamy lipstick with long-lasting velvet finish.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 88
  },
  {
    "id": "skincare1",
    "slug": "deep-cleaning-serum",
    "name": "Deep Cleaning Serum",
    "brand": "AYAN Cosmetics",
    "category": "Skincare",
    "price": 0,
    "image": "/images/products/deepcleaning.jpg",
    "shortDescription": "Advanced formula for clear and glowing skin.",
    "concern": [
      "Oily Skin",
      "Acne Prone"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 30
  },
  {
    "id": "facepowder1",
    "slug": "silky-setting-face-powder",
    "name": "Silky Setting Face Powder",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/facepowder.jpg",
    "shortDescription": "Ultra-fine powder for a flawless matte finish.",
    "concern": [
      "All Skin Types",
      "Oily Skin"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 110
  },
  {
    "id": "highlighter1",
    "slug": "luminous-highlighter-powder",
    "name": "Luminous Highlighter Powder",
    "brand": "AYAN Cosmetics",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/highlighter.jpg",
    "shortDescription": "Blinding highlight for jaw-dropping glow.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 95
  },
  {
    "id": "box1",
    "slug": "bridal-beauty-master-box",
    "name": "Bridal Beauty Master Box",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/box1.png",
    "shortDescription": "Complete makeup essentials in a luxury vanity box.",
    "concern": [
      "All Skin Types"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 5,
    "reviewCount": 50
  },
  {
    "id": "box2",
    "slug": "everyday-glam-box",
    "name": "Everyday Glam Box",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/box2.jpg",
    "shortDescription": "Your daily beauty essentials in one curated box.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 42
  },
  {
    "id": "box3",
    "slug": "luxury-gift-box",
    "name": "Luxury Gift Box",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/box3.jpg",
    "shortDescription": "Perfect gifting set with premium beauty picks.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 35
  },
  {
    "id": "box4",
    "slug": "mini-beauty-box",
    "name": "Mini Beauty Box",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/box4.jpg",
    "shortDescription": "Travel-size beauty staples in a compact box.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 28
  },
  {
    "id": "box5",
    "slug": "signature-beauty-box",
    "name": "Signature Beauty Box",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/box5.jpg",
    "shortDescription": "AYAN's signature collection in a premium box.",
    "concern": [
      "All Skin Types"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 68
  },
  {
    "id": "box6",
    "slug": "festive-beauty-box",
    "name": "Festive Beauty Box",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/box6.jpg",
    "shortDescription": "Celebration-ready beauty set for special occasions.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 20
  },
  {
    "id": "box7",
    "slug": "complete-vanity-box",
    "name": "Complete Vanity Box",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/box7.jpg",
    "shortDescription": "An all-in-one vanity kit for the beauty lover.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 15
  },
  {
    "id": "p1",
    "slug": "royal-oud-luxury",
    "name": "Royal Oud Luxury",
    "brand": "AYAN Cosmetics",
    "category": "Perfumes",
    "price": 0,
    "image": "/images/products/p1.jpg",
    "shortDescription": "Deep woody notes for a premium signature scent.",
    "concern": [
      "Fragrance"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 88
  },
  {
    "id": "p2",
    "slug": "floral-bloom-eau-de-parfum",
    "name": "Floral Bloom Eau de Parfum",
    "brand": "AYAN Cosmetics",
    "category": "Perfumes",
    "price": 0,
    "image": "/images/products/p2.jpeg",
    "shortDescription": "Fresh floral bouquet with a lasting feminine trail.",
    "concern": [
      "Fragrance"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 55
  },
  {
    "id": "p3",
    "slug": "midnight-musk-perfume",
    "name": "Midnight Musk",
    "brand": "AYAN Cosmetics",
    "category": "Perfumes",
    "price": 0,
    "image": "/images/products/p3.jpeg",
    "shortDescription": "Sensual musk with warm amber undertones.",
    "concern": [
      "Fragrance"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 62
  },
  {
    "id": "p4",
    "slug": "rose-oud-perfume",
    "name": "Rose Oud Elixir",
    "brand": "AYAN Cosmetics",
    "category": "Perfumes",
    "price": 0,
    "image": "/images/products/p4.jpeg",
    "shortDescription": "Romantic rose fused with rich oud for a signature scent.",
    "concern": [
      "Fragrance"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 110
  },
  {
    "id": "p5",
    "slug": "citrus-breeze-perfume",
    "name": "Citrus Breeze",
    "brand": "AYAN Cosmetics",
    "category": "Perfumes",
    "price": 0,
    "image": "/images/products/p5.jpeg",
    "shortDescription": "Light citrus top notes for a refreshing everyday wear.",
    "concern": [
      "Fragrance"
    ],
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 38
  },
  {
    "id": "p6",
    "slug": "oriental-spice-perfume",
    "name": "Oriental Spice",
    "brand": "AYAN Cosmetics",
    "category": "Perfumes",
    "price": 0,
    "image": "/images/products/p6.jpeg",
    "shortDescription": "Bold oriental spices with a smoky, luxurious finish.",
    "concern": [
      "Fragrance"
    ],
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 47
  },
  {
    "id": "p7",
    "slug": "velvet-vanilla-perfume",
    "name": "Velvet Vanilla",
    "brand": "AYAN Cosmetics",
    "category": "Perfumes",
    "price": 0,
    "image": "/images/products/p7.jpeg",
    "shortDescription": "Sweet vanilla with a soft, creamy warmth.",
    "concern": [
      "Fragrance"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 72
  },
  {
    "id": "h1",
    "slug": "daily-glam-bundle",
    "name": "Daily Glam Bundle",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/h1.jpeg",
    "shortDescription": "Your everyday essentials in one perfect pack.",
    "concern": [
      "All Skin Types"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 85
  },
  {
    "id": "h2",
    "slug": "bridal-glow-bundle",
    "name": "Bridal Glow Bundle",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/h2.jpeg",
    "shortDescription": "Everything you need for a radiant bridal look.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 40
  },
  {
    "id": "h3",
    "slug": "night-out-bundle",
    "name": "Night Out Bundle",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/h3.jpeg",
    "shortDescription": "Bold and glam picks for a stunning evening look.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 30
  },
  {
    "id": "h4",
    "slug": "skincare-starter-bundle",
    "name": "Skincare Starter Bundle",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/h4.jpeg",
    "shortDescription": "Kick-start your skincare routine with AYAN essentials.",
    "concern": [
      "All Skin Types",
      "Dry Skin"
    ],
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 22
  },
  {
    "id": "deal1",
    "slug": "luxury-full-glam-deal",
    "name": "Luxury Full Glam Deal",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/deal1.png",
    "shortDescription": "Complete signature master bundle with organizer.",
    "concern": [
      "All Skin Types"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 5,
    "reviewCount": 60
  },
  {
    "id": "deal2",
    "slug": "glam-deal-2",
    "name": "AYAN Special Deal No.2",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/deal2.png",
    "shortDescription": "Handpicked bestsellers bundled at one great value.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 45
  },
  {
    "id": "deal3",
    "slug": "glam-deal-3",
    "name": "AYAN Special Deal No.3",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/deal3.png",
    "shortDescription": "Top-rated products curated in one value bundle.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 33
  },
  {
    "id": "deal4",
    "slug": "glam-deal-4",
    "name": "AYAN Special Deal No.4",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/deal4.png",
    "shortDescription": "A perfect mix of makeup and skincare favorites.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 28
  },
  {
    "id": "deal5",
    "slug": "glam-deal-5",
    "name": "AYAN Special Deal No.5",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/deal5.png",
    "shortDescription": "Exclusive bundle for the ultimate glam experience.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 18
  },
  {
    "id": "deal6",
    "slug": "glam-deal-6",
    "name": "AYAN Special Deal No.6",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/deal6.png",
    "shortDescription": "Premium picks wrapped in one must-have bundle.",
    "concern": [
      "All Skin Types"
    ],
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 25
  },
  {
    "id": "deal7",
    "slug": "glam-deal-7",
    "name": "AYAN Special Deal No.7",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/deal7.png",
    "shortDescription": "Seasonal favorites in one beautifully curated set.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 14
  },
  {
    "id": "deal8",
    "slug": "glam-deal-8",
    "name": "AYAN Special Deal No.8",
    "brand": "AYAN Cosmetics",
    "category": "Bundles",
    "price": 0,
    "image": "/images/products/deal8.png",
    "shortDescription": "Our most popular bundle — loved by thousands.",
    "concern": [
      "All Skin Types"
    ],
    "isBestSeller": true,
    "inStock": true,
    "rating": 5,
    "reviewCount": 90
  },
  {
    "id": "vgr-trimmer-v652",
    "slug": "vgr-v652-professional-hair-clipper",
    "name": "VGR V-652 Professional Hair Clipper",
    "brand": "VGR",
    "category": "Electronic Devices",
    "price": 0,
    "image": "/images/products/trimer-device.jpeg",
    "shortDescription": "Professional cordless hair clipper with digital battery display and premium golden finish.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 15
  },
  {
    "id": "keratin-hair-serum-red",
    "slug": "keratin-nutrition-moisturizing-smooth-hair-serum",
    "name": "Keratin Nutrition Moisturizing & Smooth Hair Serum",
    "brand": "Keratin",
    "category": "Hair Care",
    "price": 0,
    "image": "/images/products/Keratin-Hair-Serum-red.jpeg", // Case-sensitive exact name aur .jpeg extension
    "shortDescription": "98% Natural ingredients to repair damaged hair, solve split ends, increase volume, and make hair thicker.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 24
  },
  {
    "id": "chriss-brazilian-hair-serum",
    "slug": "chriss-professional-brazilian-keratin-hair-serum",
    "name": "Chriss's Professional Brazilian Keratin Hair Serum",
    "brand": "Chriss's",
    "category": "Hair Care",
    "price": 0,
    "image": "/images/products/chriss-brazilian-hair-serum.png", // Agar extension .png hai, warna .jpeg ya .jpg check kar lein
    "shortDescription": "Shine enhancement, reduces tangles, restores damage, and softens hair with a premium Turkish formula.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 18
  },
  {
    "id": "vgr-trimmer-v269",
    "slug": "vgr-v269-professional-hair-clipper",
    "name": "VGR V-269 Professional Hair Clipper",
    "brand": "VGR",
    "category": "Electronic Devices",
    "price": 0,
    "image": "/images/products/vgr-v269.jpeg", // Agar extension .jpeg ho to .jpeg kar lijiyega
    "shortDescription": "Professional hair clipper featuring a high-speed magnetic motor, DLC coating blades, and a digital power display.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 12
  },
  {
    "id": "vgr-trimmer-v991",
    "slug": "vgr-v991-professional-hair-trimmer",
    "name": "VGR V-991 Professional Hair Trimmer",
    "brand": "VGR",
    "category": "Electronic Devices",
    "price": 0,
    "image": "/images/products/vgr-v991.jpeg", // Agar extension .jpeg ho to .jpeg kar lijiyega
    "shortDescription": "Professional hair trimmer with ceramic and stainless steel blades, turbo function, and digital battery percentage display.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 8
  },
  {
    "id": "rani-makeup-primer",
    "slug": "rani-makeup-base-hydrating-primer",
    "name": "Rani Makeup Base Primer (15ml)",
    "brand": "Rani",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rani-primer.jpeg", // Agar aap .png mein save karein to yahan .png kar dijiyega
    "shortDescription": "An ultra-hydrating, lightweight aqua makeup base that preps, primes, and refines skin for longer-lasting makeup application.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 14
  },
  {
    "id": "rivaj-photo-focus-foundation",
    "slug": "rivaj-photo-focus-foundation-30ml",
    "name": "Rivaj Photo Focus Foundation (30ml)",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-foundation.jpeg", // Sahi file extension check kar ke lagayein
    "shortDescription": "24-hour long-wearing matte foundation providing medium coverage. Oil-free formula available in multiple shades.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 19
  },
  {
    "id": "rivaj-compact-face-powder",
    "slug": "rivaj-compact-face-powder-10g",
    "name": "Rivaj Compact Face Powder (10g)",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-compact-powder.jpeg", // Sahi file extension check kar ke lagayein
    "shortDescription": "A lightweight, matte-finish compact face powder designed for a smooth complexion, available in 10 diverse shades.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 15
  },
  {
    "id": "rivaj-sexy-curve-mascara",
    "slug": "rivaj-sexy-curve-mascara",
    "name": "Rivaj Sexy Curve Mascara",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-sexy-curve-mascara.jpeg", // Extension check kar ke lagayein
    "shortDescription": "Specially designed to prevent clumping and keep lashes smooth. Features a volume-boosting brush to instantly thicken and grow lashes.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 26
  },
  {
    "id": "rivaj-strength-volume-mascara",
    "slug": "rivaj-strength-and-volume-mascara",
    "name": "Rivaj Strength & Volume Mascara",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-strength-volume-mascara.jpeg", // Extension confirm kar ke lagayein
    "shortDescription": "Infused with coconut oil and vitamin B to nourish each lash while lengthening, strengthening, and adding volume.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 14
  },
  {
    "id": "rivaj-black-dense-mascara",
    "slug": "rivaj-black-dense-mascara",
    "name": "Rivaj Black Dense Mascara",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-black-dense-mascara.jpeg", // Extension check kar ke lagayein
    "shortDescription": "Features a tapered mascara wand that captures tiny corners and lower lashes to build volume from root to tip for a full-lash look.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 16
  },
  {
    "id": "rivaj-doubling-extend-mascara",
    "slug": "rivaj-doubling-extend-black-mascara",
    "name": "Rivaj Doubling Extend Black Mascara",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-doubling-extend-mascara.jpeg", // Sahi file extension check kar ke lagayein
    "shortDescription": "A volumizing and lengthening mascara that pushes the boundaries of your lashes with buildable, lash-lengthening coverage from root to tip.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 15
  },
  {
    "id": "rivaj-long-lasting-mascara",
    "slug": "rivaj-long-lasting-mascara",
    "name": "Rivaj Long Lasting Mascara",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-long-lasting-mascara.jpeg", // Extension confirm kar ke lagayein
    "shortDescription": "Defines, lengthens, and lifts lashes for fuller-looking, ultra-black lashes in an instant. Available in multiple shades.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 18
  },
  {
    "id": "rivaj-volume-express-mascara",
    "slug": "rivaj-volume-express-mascara",
    "name": "Rivaj Volume Express Mascara",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-volume-express-mascara.jpeg", // Extension confirm kar ke lagayein
    "shortDescription": "Goes on wet, then dries quickly to a smudge-resistant finish. Formulated with lash-conditioning ingredients to help achieve your desired volume.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 21
  },
  {
    "id": "rivaj-matte-twist-eyeliner",
    "slug": "rivaj-matte-twist-eyeliner",
    "name": "Rivaj Matte Twist Eyeliner",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-matte-twist-eyeliner.jpeg", // Extension check kar ke lagayein
    "shortDescription": "Formulated with high-quality ingredients to deliver bold, long-lasting color that won't smudge or fade. Available in multiple shades.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 13
  },
  {
    "id": "rivaj-dip-eyeliner-black",
    "slug": "rivaj-dip-eyeliner-black",
    "name": "Rivaj Dip Eyeliner Black",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-dip-eyeliner.jpeg", // Extension check kar ke lagayein
    "shortDescription": "Enhance your liquid liner skills and achieve swift color payoff with our long-lasting Dip Eyeliner in Black.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 11
  },
  {
    "id": "rivaj-metallic-eyeliner",
    "slug": "rivaj-metallic-eyeliner",
    "name": "Rivaj Metallic Eyeliner",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-metallic-eyeliner.jpeg", // Extension zaroor check kar lijiyega
    "shortDescription": "A bold makeup product with a shimmering, reflective finish that adds instant glamour to any look. Available in multiple vibrant shades.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 18
  },
  {
    "id": "rivaj-double-eyebrow-pencil",
    "slug": "rivaj-double-eyebrow-pencil",
    "name": "Rivaj Double Eyebrow Pencil",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-double-eyebrow-pencil.jpeg", // Extension zaroor check kar lijiyega
    "shortDescription": "The pencil precisely shapes and fills brows with tiny hair-like strokes for a natural look.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.5,
    "reviewCount": 14
  },{
    "id": "rivaj-eyebrow-pencil-with-comb",
    "slug": "rivaj-eyebrow-pencil-with-comb",
    "name": "Rivaj Eyebrow Pencil With Comb",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-eyebrow-pencil-with-comb.jpeg", // Extension confirm kar ke lagayein
    "shortDescription": "Fill in and define your brows with a distinctive pencil tip that produces fine strokes and features a built-in comb. Formula is resistant to rubbing.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 19
  },
  {
    "id": "rivaj-super-thick-eyebrow-pencil",
    "slug": "rivaj-super-thick-eyebrow-pencil",
    "name": "Rivaj Super Thick Eyebrow Pencil",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-super-thick-eyebrow-pencil.jpeg", // Extension verify kar ke lagayein
    "shortDescription": "Features a precise and ultra-fine, edge tip that draws on the tiniest lines to mimic the appearance of natural hairs.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 16
  },
  {
    "id": "rivaj-single-eyebrow-pencil",
    "slug": "rivaj-single-eyebrow-pencil",
    "name": "Rivaj Single Eyebrow Pencil",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-single-eyebrow-pencil.jpeg", // Extension cross-check kar lein
    "shortDescription": "Gear up your brow game with this intense eyebrow pencil. Efficiently fills, plumps, and defines your brows to the next level with an innovative formula.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 12
  },
  {
    "id": "rivaj-self-defined-eyeliner",
    "slug": "rivaj-self-defined-eyeliner",
    "name": "Rivaj Self Defined Eyeliner",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-self-defined-eyeliner.jpeg", // Extension cross-check kar lein
    "shortDescription": "Get the perfect lasting cat-eye look with a matte black finish. This felt tip eyeliner glides on smoothly and evenly to create the perfect eye line.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 15
  },
  {
    "id": "rivaj-absolute-pigment-eyeliner",
    "slug": "rivaj-absolute-pigment-eyeliner",
    "name": "Rivaj Absolute Pigment Eyeliner",
    "brand": "Rivaj",
    "category": "Makeup",
    "price": 0,
    "image": "/images/products/rivaj-absolute-pigment-eyeliner.png", // Extension cross-check kar lein
    "shortDescription": "Delivers intense, highly pigmented color for sharp, defined lines with maximum impact. Available in multiple vibrant shades.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 14
  },
 {
    id: "rivaj-blush-forever",
    slug: "rivaj-blush-forever",
    name: "Rivaj Blush Forever",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 12,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-blush-forever.jpeg",
    shortDescription: "A long-lasting 3-shade blush palette with highly pigmented, smooth-blendable blush tones.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-matte-single-blush-on-powder",
    slug: "rivaj-matte-single-blush-on-powder",
    name: "Rivaj Matte Single Blush On Powder",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.7,
    reviewCount: 18,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-matte-single-blush-on-powder.jpeg",
    shortDescription: "A velvety smooth matte single blush powder that gives a natural flush of color.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-fantasy-3-in-1-palette",
    slug: "rivaj-fantasy-3-in-1-palette",
    name: "Rivaj Fantasy 3 In 1 Palette",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 22,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-fantasy-3-in-1-palette.jfif",
    shortDescription: "A multi-functional 3-in-1 palette featuring blush, contour, and highlight shades.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-fantasy-contour-palette",
    slug: "rivaj-fantasy-contour-palette",
    name: "Rivaj Fantasy Contour Palette",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 15,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-fantasy-contour-palette.jfif",
    shortDescription: "A versatile 4-shade contour palette for sculpting, defining, and highlighting facial features.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-eyebrow-palette-4-in-1",
    slug: "rivaj-eyebrow-palette-4-in-1",
    name: "Rivaj Eyebrow Palette (4 in 1)",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 16,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-eyebrow-palette-4-in-1.jfif",
    shortDescription: "A complete 4-in-1 brow palette with primer and natural powder shades for perfectly shaped brows.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-fantacy-eyeshadow-9-in-1",
    slug: "rivaj-fantacy-eyeshadow-9-in-1",
    name: "Rivaj Fantacy Eyeshadow (9 in 1)",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 20,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-fantacy-eyeshadow-9-in-1.jfif",
    shortDescription: "A vibrant 9-in-1 eyeshadow palette featuring highly pigmented matte and shimmer shades.",
   
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-hd-flawless-eyeshadow-palette-18-in-1",
    slug: "rivaj-hd-flawless-eyeshadow-palette-18-in-1",
    name: "Rivaj HD Flawless Eyeshadow Palette (18 in 1)",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.9,
    reviewCount: 25,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-hd-flawless-eyeshadow-palette-18-in-1.jfif",
    shortDescription: "An ultra-pigmented 18-in-1 eyeshadow palette featuring a blend of rich mattes and shimmers.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-starlit-sparkle-glitter-palette-9-in-1",
    slug: "rivaj-starlit-sparkle-glitter-palette-9-in-1",
    name: "Rivaj Starlit Sparkle Glitter Palette (9 in 1)",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 19,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-starlit-sparkle-glitter-palette-9-in-1.jfif",
    shortDescription: "A dazzling 9-in-1 glitter palette packed with intense shimmer and sparkle shades.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-stunning-eyeshadow-kit-32-in-1",
    slug: "rivaj-stunning-eyeshadow-kit-32-in-1",
    name: "Rivaj Stunning Eyeshadow Kit (32 in 1)",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.9,
    reviewCount: 28,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-stunning-eyeshadow-kit-32-in-1.jfif",
    shortDescription: "A massive 32-in-1 eyeshadow kit featuring vibrant, high-pigment shades for infinite eye looks.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-makhmali-eyeshadow-kit-32-in-1",
    slug: "rivaj-makhmali-eyeshadow-kit-32-in-1",
    name: "Rivaj Makhmali Eyeshadow Kit (32 in 1)",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.9,
    reviewCount: 24,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-makhmali-eyeshadow-kit-32-in-1.jfif",
    shortDescription: "A luxurious 32-in-1 velvet-touch eyeshadow palette with rich, highly pigmented shades.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-classy-lipstick",
    slug: "rivaj-classy-lipstick",
    name: "Rivaj Classy Lipstick",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 32,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-classy-lipstick.jfif",
    shortDescription: "A smooth, highly pigmented lipstick offering vibrant color payoff and comfortable long wear.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-color-fusion-lipstick",
    slug: "rivaj-color-fusion-lipstick",
    name: "Rivaj Color Fusion Lipstick",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 30,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-color-fusion-lipstick.jfif",
    shortDescription: "A rich, hydrating lipstick with intense color payoff and a comfortable smooth finish.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-pure-matte-lipstick",
    slug: "rivaj-pure-matte-lipstick",
    name: "Rivaj Pure Matte Lipstick",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 35,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-pure-matte-lipstick.jfif",
    shortDescription: "A comfortable pure matte lipstick delivering bold, velvety color payoff with long-lasting wear.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-lipstick-pencil",
    slug: "rivaj-lipstick-pencil",
    name: "Rivaj Lipstick Pencil",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 38,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-lipstick-pencil.jfif",
    shortDescription: "A precision lipstick pencil offering smooth application, high color intensity, and long-lasting definition.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-lip-and-eye-pencil",
    slug: "rivaj-lip-and-eye-pencil",
    name: "Rivaj Lip & Eye Pencil",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 42,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-lip-and-eye-pencil.jfif",
    shortDescription: "A dual-purpose waterproof pencil for defining both lips and eyes with precision and long-lasting wear.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-ultra-matte-lipstick",
    slug: "rivaj-ultra-matte-lipstick",
    name: "Rivaj Ultra Matte Lipstick",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 36,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-ultra-matte-lipstick.jfif",
    shortDescription: "An ultra-matte lipstick providing intense color payoff and a comfortable long-lasting finish.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-powder-matte-lip-gloss",
    slug: "rivaj-powder-matte-lip-gloss",
    name: "Rivaj Powder Matte Lip Gloss",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 31,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-powder-matte-lip-gloss.jfif",
    shortDescription: "A lightweight liquid lip gloss delivering a smooth, velvety powder-matte finish.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-all-day-intense-color-lip-gloss",
    slug: "rivaj-all-day-intense-color-lip-gloss",
    name: "Rivaj All Day Intense Color Lip Gloss",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 29,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-all-day-intense-color-lip-gloss.jfif",
    shortDescription: "A long-lasting liquid lip gloss delivering high-impact, intense color and comfortable shine.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-lip-tint",
    slug: "rivaj-lip-tint",
    name: "Rivaj Lip Tint",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 34,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-lip-tint.jfif",
    shortDescription: "A lightweight, long-lasting lip tint that provides a natural flush of color with a smooth feel.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-quick-dry-lip-gloss",
    slug: "rivaj-quick-dry-lip-gloss",
    name: "Rivaj Quick Dry Lip Gloss",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 33,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-quick-dry-lip-gloss.jfif",
    shortDescription: "A fast-drying liquid lip gloss offering intense color payoff and a comfortable matte-shine finish.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-diamond-shine-lip-gloss",
    slug: "rivaj-diamond-shine-lip-gloss",
    name: "Rivaj Diamond Shine Lip Gloss",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 37,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-diamond-shine-lip-gloss.jfif",
    shortDescription: "A high-shine lip gloss infused with 3D glitter effect for brilliant, sparkling lips.",
    concern: ["All Skin Types"]
  },
  {
    id: "rivaj-fashion-fit-nail-color",
    slug: "rivaj-fashion-fit-nail-color",
    name: "Rivaj Fashion Fit Nail Color",
    brand: "Rivaj",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 45,
    inStock: true,
    isNew: true,
    image: "/images/products/rivaj-fashion-fit-nail-color.jfif",
    shortDescription: "A long-lasting, vibrant nail polish featuring a smooth application and glossy high-shine finish.",
    concern: ["All Skin Types"]
  },
  {
    "id": "sadoer-volumizing-rosemary-hair-mask-500ml",
    "slug": "sadoer-volumizing-rosemary-hair-mask-500ml",
    "name": "Sadoer Volumizing Rosemary Hair Mask",
    "brand": "Sadoer",
    "category": "Hair Care",
    "price": 0,
    "image": "/images/products/sadoer-volumizing-rosemary-hair-mask.jpeg", // Extension zaroor cross-check kar lein
    "shortDescription": "A deep repair hair mask with rosemary extract that helps repair damaged, rough hair scales. It targets root repair for dry, bifurcated hair and provides a quick 1-minute smoothing treatment.",
    "concern": [
      "All Skin Types"
    ],
    "isNew": true,
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 24
  }
];

// ── DEALS (for dedicated deal sections) ─────────────────────────────────────
export const PRODUCTS: DealProduct[] = products
  .filter((p) => p.category === "Bundles")
  .map((p) => ({
    id: p.id,
    name: p.name,
    price: 0,
    imagePath: p.image,
    description: p.shortDescription,
    category: p.category,
    isDeal: true,
  }));

// ── HELPERS ──────────────────────────────────────────────────────────────────
export const getFeaturedProducts = (limit = 8): Product[] =>
  products.filter((p) => p.isBestSeller || p.isNew).slice(0, limit);

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getAllCategories = (): Category[] =>
  [...new Set(products.map((p) => p.category))] as Category[];

export const getAllBrands = (): string[] =>
  [...new Set(products.map((p) => p.brand))];

export const getRelatedProducts = (product: Product, limit = 4): Product[] =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);

export const getProductReviews = (_productId: string): Review[] => [];