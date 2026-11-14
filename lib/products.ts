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
  | "All Hair Types"
  | "Uneven Skin Tone"
  | "Hyperpigmentation"
  | "Dark Spots"
  | "Brightening"
  | "Elasticity & Firming"
  | "Dryness & Hydration"
  | "Glass Skin Glow"
  | "Radiance"
  | "Hydration"
  | "Rough & Bumpy Skin"
  | "Exfoliation"
  | "Skin Barrier Support"
  | "Oil Control" 
  | "Cleansing" 
  | "Normal to Oily Skin"
  | "Set Makeup"
  | "Reduce Shine"
  | "Pore Blurring"
  | "Matte Finish"
  | "Dull Skin"
  | "Blemishes"
  | "Fine Lines"
  | "Puffiness"
  | "Dark Circles"
  | "Sensitive Skin"
  | "Redness"
  |"Uneven Tone"
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
    id: "dr-rashel-hyaluronic-acid-super-serum",
    slug: "dr-rashel-hyaluronic-acid-super-serum",
    name: "Dr. Rashel Hyaluronic Acid Super Serum",
    brand: "DR·RASHEL",
    category: "Skincare",
    price: 2100,
    image: "/images/products/dr-rashel-hyaluronic-acid-super-serum.jpg",
    shortDescription: "High concentration 3% hyaluronic acid super serum for deep hydration.",
    concern: ["Dry Skin"],
    inStock: true,
    rating: 4.8,
    reviewCount: 34,
    isBestSeller: true,
  },
  {
    id: "dr-rashel-glycolic-acid-super-serum",
    slug: "dr-rashel-glycolic-acid-super-serum",
    name: "Dr. Rashel Glycolic Acid Super Serum",
    brand: "DR·RASHEL",
    category: "Skincare",
    price: 2150,
    image: "/images/products/dr-rashel-glycolic-acid-super-serum.jpg",
    shortDescription: "Resurfacing serum with 3% glycolic acid for smooth skin texture.",
    concern: [ "Dull Skin"],
    inStock: true,
    rating: 4.7,
    reviewCount: 22,
    isNew: true,
  },
  {
    id: "dr-rashel-turmeric-super-serum",
    slug: "dr-rashel-turmeric-super-serum",
    name: "Dr. Rashel Turmeric Super Serum",
    brand: "DR·RASHEL",
    category: "Skincare",
    price: 2000,
    image: "/images/products/dr-rashel-turmeric-super-serum.jpg",
    shortDescription: "10% turmeric concentration super serum for max radiance and glow.",
    concern: ["Dull Skin"],
    inStock: true,
    rating: 4.6,
    reviewCount: 18,
  },
  {
    id: "dr-rashel-vitamin-c-super-serum",
    slug: "dr-rashel-vitamin-c-super-serum",
    name: "Dr. Rashel Vitamin C Super Serum",
    brand: "DR·RASHEL",
    category: "Skincare",
    price: 2050,
    image: "/images/products/dr-rashel-vitamin-c-super-serum.jpg",
    shortDescription: "Brightening 3% fresh vitamin c super serum for glowing skin.",
    concern: ["Dark Spots", "Dull Skin"],
    inStock: true,
    rating: 4.9,
    reviewCount: 56,
    isBestSeller: true,
  },
  {
    id: "skin1004-madagascar-centella-ampoule",
    slug: "skin1004-madagascar-centella-ampoule",
    name: "Skin1004 Madagascar Centella Tone Brightening Capsule Ampoule",
    brand: "SKIN1004",
    category: "Skincare",
    price: 4500,
    image: "/images/products/skin1004-madagascar-centella-ampoule.jpg",
    shortDescription: "Made with pure Centella from Madagascar for tone brightening.",
    concern: ["Sensitive Skin", "Redness", "Uneven Tone"],
    inStock: true,
    rating: 4.9,
    reviewCount: 64,
    isBestSeller: true,
  },
  {
    id: "estelin-turmeric-vitamin-c-serum",
    slug: "estelin-turmeric-vitamin-c-serum",
    name: "Estelin Turmeric Vitamin C Brightening Face Serum",
    brand: "ESTELIN",
    category: "Skincare",
    price: 2200,
    image: "/images/products/estelin-turmeric-vitamin-c-serum.jpg",
    shortDescription: "Brightening face serum combining turmeric and vitamin C.",
    concern: ["Dark Spots", "Dull Skin"],
    inStock: true,
    rating: 4.7,
    reviewCount: 25,
  },
  {
    id: "anua-peach-70-niacin-serum",
    slug: "anua-peach-70-niacin-serum",
    name: "Anua Peach 70 Niacin Serum",
    brand: "Anua",
    category: "Skincare",
    price: 4800,
    image: "/images/products/anua-peach-70-niacin-serum.jpg",
    shortDescription: "70% peach extract niacin serum for glass skin and brightening.",
    concern: ["Dull Skin"],
    inStock: true,
    rating: 4.9,
    reviewCount: 72,
    isNew: true,
  },
  {
    id: "estelin-collagen-brown-serum",
    slug: "estelin-collagen-brown-serum",
    name: "Estelin Collagen Brown Serum",
    brand: "ESTELIN",
    category: "Skincare",
    price: 2300,
    image: "/images/products/estelin-collagen-brown-serum.jpg",
    shortDescription: "Repairs skin, adds moisture, and reduces dry lines.",
    concern: ["Dry Skin", "Fine Lines"],
    inStock: true,
    rating: 4.6,
    reviewCount: 20,
  },
  {
    id: "glow-recipe-watermelon-glow-dew-drops",
    slug: "glow-recipe-watermelon-glow-dew-drops",
    name: "Glow Recipe Watermelon Glow Niacinamide Dew Drops",
    brand: "Glow Recipe",
    category: "Skincare",
    price: 5500,
    image: "/images/products/glow-recipe-watermelon-glow-dew-drops.jpg",
    shortDescription: "Niacinamide infusing dew drops for immediate glow and hydration.",
    concern: ["Dull Skin"],
    inStock: true,
    rating: 5.0,
    reviewCount: 89,
    isBestSeller: true,
  },
  {
    id: "elf-holy-hydration-thirst-burst-drops",
    slug: "elf-holy-hydration-thirst-burst-drops",
    name: "e.l.f. Holy Hydration! Thirst Burst Drops",
    brand: "e.l.f. SKIN",
    category: "Skincare",
    price: 3200,
    image: "/images/products/elf-holy-hydration-thirst-burst-drops.jpg",
    shortDescription: "Dewy and brightening drops with 1% hibiscus complex and 5% niacinamide.",
    concern: ["Dry Skin", "Dull Skin"],
    inStock: true,
    rating: 4.8,
    reviewCount: 42,
    isNew: true,
  },
  {
    id: "maybelline-age-rewind-concealer-sand-122",
    slug: "maybelline-age-rewind-concealer-sand-122",
    name: "Maybelline Age Rewind Multi-Use Concealer - Sand 122",
    brand: "Maybelline New York",
    category: "Makeup",
    price: 2800,
    image: "/images/products/maybelline-age-rewind-concealer-sand-122.jpg",
    shortDescription: "Anti-aging multi-use concealer for instant flawless coverage.",
    concern: ["Dark Circles", "Fine Lines", "Blemishes"],
    inStock: true,
    rating: 4.8,
    reviewCount: 38,
    isBestSeller: true,
  },
  {
    id: "maybelline-super-stay-lumi-matte-foundation-110",
    slug: "maybelline-super-stay-lumi-matte-foundation-110",
    name: "Maybelline Super Stay Lumi-Matte Foundation - 110",
    brand: "Maybelline New York",
    category: "Makeup",
    price: 3500,
    image: "/images/products/maybelline-super-stay-lumi-matte-foundation-110.jpg",
    shortDescription: "Up to 30H lightweight matte foundation with SPF 16.",
    concern: ["Uneven Skin Tone", "Oily Skin"],
    inStock: true,
    rating: 4.9,
    reviewCount: 45,
    isNew: true,
  },
  {
    id: "estelin-vitamin-a-retinol-serum",
    slug: "estelin-vitamin-a-retinol-serum",
    name: "Estelin Vitamin A Retinol Age-Defying Face Serum",
    brand: "ESTELIN",
    category: "Skincare",
    price: 2200,
    image: "/images/products/estelin-vitamin-a-retinol-serum.jpg",
    shortDescription: "Reduces fine lines, firms skin, and restores youthful radiance.",
    concern: ["Fine Lines"],
    inStock: true,
    rating: 4.7,
    reviewCount: 29,
  },
  {
    id: "estelin-salicylic-acid-serum",
    slug: "estelin-salicylic-acid-serum",
    name: "Estelin Salicylic Acid Pore Refining Serum",
    brand: "ESTELIN",
    category: "Skincare",
    price: 2100,
    image: "/images/products/estelin-salicylic-acid-serum.jpg",
    shortDescription: "Deep pore cleansing and blemish control serum for clear skin.",
    concern: [ "Oily Skin"],
    inStock: true,
    rating: 4.6,
    reviewCount: 19,
  },
  {
    id: "estelin-vitamin-c-plus-serum",
    slug: "estelin-vitamin-c-plus-serum",
    name: "Estelin Vitamin C Plus Brightening & Anti-Aging Serum",
    brand: "ESTELIN",
    category: "Skincare",
    price: 2200,
    image: "/images/products/estelin-vitamin-c-plus-serum.jpg",
    shortDescription: "Brightening face serum infused with hyaluronic acid and niacinamide.",
    concern: ["Dull Skin", "Dark Spots"],
    inStock: true,
    rating: 4.8,
    reviewCount: 52,
    isBestSeller: true,
  },
  {
    id: "estelin-hyaluronic-acid-serum",
    slug: "estelin-hyaluronic-acid-serum",
    name: "Estelin Hyaluronic Acid Hydrating Serum",
    brand: "ESTELIN",
    category: "Skincare",
    price: 2150,
    image: "/images/products/estelin-hyaluronic-acid-serum.jpg",
    shortDescription: "Intense 24-hour hydration serum for smooth, plump skin.",
    concern: ["Dry Skin"],
    inStock: true,
    rating: 4.9,
    reviewCount: 41,
  },
  {
    id: "dr-rashel-whitening-fade-spots-serum",
    slug: "dr-rashel-whitening-fade-spots-serum",
    name: "Dr. Rashel Whitening Fade Spots Serum",
    brand: "DR·RASHEL",
    category: "Skincare",
    price: 1950,
    image: "/images/products/dr-rashel-whitening-fade-spots-serum.jpg",
    shortDescription: "Reduces pigmentation and fades dark spots with arbutin and niacinamide.",
    concern: ["Dark Spots"],
    inStock: true,
    rating: 4.7,
    reviewCount: 33,
  },
  {
    id: "dr-rashel-vitamin-c-eye-serum",
    slug: "dr-rashel-vitamin-c-eye-serum",
    name: "Dr. Rashel Vitamin C Brightening Eye Serum",
    brand: "DR·RASHEL",
    category: "Skincare",
    price: 1800,
    image: "/images/products/dr-rashel-vitamin-c-eye-serum.jpg",
    shortDescription: "Brightens dark circles, plumps, and reduces puffiness around the eyes.",
    concern: ["Dark Circles", "Puffiness"],
    inStock: true,
    rating: 4.6,
    reviewCount: 27,
  },
  {
    id: "dr-rashel-niacinamide-super-serum",
    slug: "dr-rashel-niacinamide-super-serum",
    name: "Dr. Rashel Niacinamide 5% Super Serum",
    brand: "DR·RASHEL",
    category: "Skincare",
    price: 2000,
    image: "/images/products/dr-rashel-niacinamide-super-serum.jpg",
    shortDescription: "High concentration 5% niacinamide serum to fade dark spots and even skin tone.",
    concern: ["Dark Spots", "Uneven Skin Tone"],
    inStock: true,
    rating: 4.8,
    reviewCount: 36,
    isNew: true,
  },
    {
    id: "cerave-sa-smoothing-cleanser-473ml",
    slug: "cerave-sa-smoothing-cleanser-473ml",
    name: "CeraVe SA Smoothing Cleanser (473ml / 16 fl oz)",
    brand: "CeraVe",
    category: "Skincare",
    price: 0,
    rating: 4.9,
    reviewCount: 48,
    inStock: true,
    isNew: true,
    image: "/images/products/cerave-sa-smoothing-cleanser-473ml.png",
    shortDescription: "Salicylic acid cleanser that gently exfoliates, softens, and smooths dry, rough, and bumpy skin.",
    concern: ["Rough & Bumpy Skin", "Exfoliation", "Dryness & Hydration", "Skin Barrier Support"]
  },
  {
    id: "cerave-foaming-facial-cleanser-473ml",
    slug: "cerave-foaming-facial-cleanser-473ml",
    name: "CeraVe Foaming Facial Cleanser (473ml / 16 fl oz)",
    brand: "CeraVe",
    category: "Skincare",
    price: 0,
    rating: 4.9,
    reviewCount: 52,
    inStock: true,
    isNew: true,
    image: "/images/products/cerave-foaming-facial-cleanser-473ml.jpg",
    shortDescription: "Daily foaming cleanser for normal to oily skin that removes excess oil while maintaining the natural skin barrier.",
    concern: ["Oil Control", "Cleansing", "Normal to Oily Skin", "Skin Barrier Support"]
  },
  {
    id: "cerave-hydrating-facial-cleanser-473ml",
    slug: "cerave-hydrating-facial-cleanser-473ml",
    name: "CeraVe Hydrating Facial Cleanser (473ml / 16 fl oz)",
    brand: "CeraVe",
    category: "Skincare",
    price: 0,
    rating: 4.9,
    reviewCount: 56,
    inStock: true,
    isNew: true,
    image: "/images/products/cerave-hydrating-facial-cleanser-473ml.png",
    shortDescription: "Gentle hydrating facial cleanser for normal to dry skin that cleanses and restores the protective skin barrier.",
    concern: ["Dryness & Hydration", "Cleansing", "Skin Barrier Support"]
  },
  {
    id: "cerave-acne-control-cleanser-237ml",
    slug: "cerave-acne-control-cleanser-237ml",
    name: "CeraVe Acne Control Cleanser (237ml / 8 fl oz)",
    brand: "CeraVe",
    category: "Skincare",
    price: 0,
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    isNew: true,
    image: "/images/products/cerave-acne-control-cleanser-237ml.png",
    shortDescription: "Acne treatment cleanser with 2% salicylic acid, purifying clay, and niacinamide to clear acne and reduce blackheads.",
    concern: [ "Oil Control", "Skin Barrier Support"]
  },
  {
    id: "charlotte-tilbury-airbrush-flawless-finish-setting-powder",
    slug: "charlotte-tilbury-airbrush-flawless-finish-setting-powder",
    name: "Charlotte Tilbury Airbrush Flawless Finish Setting Powder",
    brand: "Charlotte Tilbury",
    category: "Makeup",
    price: 0,
    rating: 4.9,
    reviewCount: 64,
    inStock: true,
    isNew: true,
    image: "/images/products/charlotte-tilbury-airbrush-flawless-finish-setting-powder.jpg",
    shortDescription: "Award-winning micro-fine setting powder that reduces shine, sets makeup for up to 12 hours, and creates a soft-focus finish[cite: 16].",
    concern: ["Set Makeup", "Reduce Shine", "Pore Blurring", "Matte Finish"]
  },
  {
    id: "charlotte-tilbury-airbrush-flawless-setting-spray-100ml",
    slug: "charlotte-tilbury-airbrush-flawless-setting-spray-100ml",
    name: "Charlotte Tilbury Airbrush Flawless Setting Spray (100ml)",
    brand: "Charlotte Tilbury",
    category: "Makeup",
    price: 4200,
    rating: 4.9,
    reviewCount: 59,
    inStock: true,
    isNew: true,
    image: "/images/products/charlotte-tilbury-airbrush-flawless-setting-spray-100ml.jpg",
    shortDescription: "High-performance weightless setting spray that primes, sets, and locks in makeup for up to 16 hours without melting or fading.",
    fullDescription: "Charlotte Tilbury Airbrush Flawless Setting Spray (100ml / 3.3 fl oz) primes and sets makeup for up to 16 hours of flawless wear. Formulated with hydrating aloe vera and Japanese green tea, it instantly refreshes the skin while locking in your look all day and night.",
    concern: ["Set Makeup", "Hydration"]
  },
  {
    id: "charlotte-tilbury-airbrush-flawless-foundation",
    slug: "charlotte-tilbury-airbrush-flawless-foundation",
    name: "Charlotte Tilbury Airbrush Flawless Foundation",
    brand: "Charlotte Tilbury",
    category: "Makeup",
    price: 4800,
    rating: 4.9,
    reviewCount: 68,
    inStock: true,
    isNew: true,
    image: "/images/products/charlotte-tilbury-airbrush-flawless-foundation.jpg",
    shortDescription: "Full-coverage, weightless, long-lasting liquid foundation with a natural matte finish and skincare benefits.",
    fullDescription: "Charlotte Tilbury Airbrush Flawless Foundation is a stay-all-day, weightless full-coverage liquid foundation. Formulated with hydrating and anti-aging ingredients, it smooths, blurs imperfections, and gives a flawless airbrushed complexion.",
    concern: [ "Matte Finish"]
  },
  {
    id: "kiko-milano-3d-hydra-lipgloss",
    slug: "kiko-milano-3d-hydra-lipgloss",
    name: "KIKO Milano 3D Hydra Lipgloss",
    brand: "KIKO Milano",
    category: "Makeup",
    price: 0,
    rating: 4.9,
    reviewCount: 72,
    inStock: true,
    isNew: true,
    image: "/images/products/kiko-milano-3d-hydra-lipgloss.jpg",
    shortDescription: "Softening and plumping lip gloss for a brilliant 3D shine and long-lasting hydration.",
    fullDescription: "KIKO Milano 3D Hydra Lipgloss softens lips and leaves them looking plump, radiant, and luminous. Its sensory texture blends smoothly into the lips, providing long-lasting hydration with a stunning high-shine 3D finish without stickiness.",
    concern: ["Hydration", ]
  },
  {
    id: "kiko-milano-radiant-fusion-baked-powder",
    slug: "kiko-milano-radiant-fusion-baked-powder",
    name: "KIKO Milano Radiant Fusion Baked Powder",
    brand: "KIKO Milano",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 35,
    inStock: true,
    isNew: true,
    image: "/images/products/kiko-milano-radiant-fusion-baked-powder.jpg",
    shortDescription: "Silky baked powder with a radiant finish that evens out the complexion and gives skin a natural luminous glow.",
    fullDescription: "KIKO Milano Radiant Fusion Baked Powder is a silky, baked face powder enriched with jojoba oil and vitamin E. It enhances the complexion with a luminous, radiant finish, smoothing the skin and setting makeup with a lightweight, comfortable feel.",
    concern: [ "Set Makeup"]
  },
  {
    id: "estelin-5d-hyaluronic-acid-serum",
    slug: "estelin-5d-hyaluronic-acid-serum",
    name: "Estelin 5D Hyaluronic Acid Hydrating Face Serum",
    brand: "ESTELIN",
    category: "Skincare",
    price: 2250,
    image: "/images/products/estelin-5d-hyaluronic-acid-serum.jpg",
    shortDescription: "Advanced 5D hyaluronic acid hydrating face serum for deep moisture replenishment.",
    concern: ["Dry Skin"],
    inStock: true,
    rating: 4.8,
    reviewCount: 31,
    isNew: true,
  },
  {
    id: "estelin-tea-tree-oil-salicylic-acid-serum",
    slug: "estelin-tea-tree-oil-salicylic-acid-serum",
    name: "Estelin Tea Tree Oil Salicylic Acid Shrink Pores Serum",
    brand: "ESTELIN",
    category: "Skincare",
    price: 2150,
    image: "/images/products/estelin-tea-tree-oil-salicylic-acid-serum.jpg",
    shortDescription: "Dissolves oil, shrinks pores, and brightens skin for a clear complexion.",
    concern: ["Oily Skin"],
    inStock: true,
    rating: 4.7,
    reviewCount: 28,
    isBestSeller: true,
  },
  {
    id: "kiko-milano-full-coverage-2-in-1-foundation-and-concealer",
    slug: "kiko-milano-full-coverage-2-in-1-foundation-and-concealer",
    name: "KIKO Milano Full Coverage 2-In-1 Foundation & Concealer",
    brand: "KIKO Milano",
    category: "Makeup",
    price: 0,
    rating: 4.8,
    reviewCount: 41,
    inStock: true,
    isNew: true,
    image: "/images/products/kiko-milano-full-coverage-2-in-1-foundation-and-concealer.png",
    shortDescription: "2-in-1 high-coverage liquid foundation and concealer that camouflages blemishes and evens out skin tone with a satin-matte finish.",
    fullDescription: "KIKO Milano Full Coverage 2-In-1 Foundation & Concealer provides superior high coverage while acting as both a base and a targeted spot concealer. Its dual-action applicator allows precise touch-ups or full-face application, concealing dark spots, redness, and imperfections for a smooth, satin-matte complexion.",
    concern: [ "Dark Spots"]
  },
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
    image: "/images/products/rivaj-fantasy-3-in-1-palette.jpeg",
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
    image: "/images/products/rivaj-fantasy-contour-palette.jpeg",
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
    image: "/images/products/rivaj-eyebrow-palette-4-in-1.jpeg",
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
    image: "/images/products/rivaj-fantacy-eyeshadow-9-in-1.jpeg",
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
    image: "/images/products/rivaj-hd-flawless-eyeshadow-palette-18-in-1.jpeg",
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
    image: "/images/products/rivaj-starlit-sparkle-glitter-palette-9-in-1.jpeg",
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
    image: "/images/products/rivaj-stunning-eyeshadow-kit-32-in-1.jpeg",
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
    image: "/images/products/rivaj-makhmali-eyeshadow-kit-32-in-1.jpeg",
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
    image: "/images/products/rivaj-classy-lipstick.jpeg",
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
    image: "/images/products/rivaj-color-fusion-lipstick.jpeg",
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
    image: "/images/products/rivaj-pure-matte-lipstick.jpeg",
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
    image: "/images/products/rivaj-lipstick-pencil.jpeg",
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
    image: "/images/products/rivaj-lip-and-eye-pencil.jpeg",
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
    image: "/images/products/rivaj-ultra-matte-lipstick.jpeg",
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
    image: "/images/products/rivaj-powder-matte-lip-gloss.jpeg",
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
    image: "/images/products/rivaj-all-day-intense-color-lip-gloss.jpeg",
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
    image: "/images/products/rivaj-lip-tint.jpeg",
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
    image: "/images/products/rivaj-quick-dry-lip-gloss.jpeg",
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
    image: "/images/products/rivaj-diamond-shine-lip-gloss.jpeg",
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
    image: "/images/products/rivaj-fashion-fit-nail-color.jpeg",
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
  },
  {
    id: "remington-styler-sleek-ceramic-straightener-rms-9680",
    slug: "remington-styler-sleek-ceramic-straightener-rms-9680",
    name: "Remington Styler Sleek Ceramic Hair Straightener (Rms-9680)",
    brand: "Remington Styler",
    category: "Electronic Devices",
    price: 0,
    rating: 4.8,
    reviewCount: 19,
    inStock: true,
    isNew: true,
    image: "/images/products/remington-styler-sleek-ceramic-straightener-rms-9680.jpeg",
    shortDescription: "An ultra-thin hair straightener with smooth ceramic plates heating up to 750°F for effortless styling.",
    concern: ["All Hair Types"]
  },
  {
    id: "remington-styler-pro-luxe-s-9600",
    slug: "remington-styler-pro-luxe-s-9600",
    name: "Remington Styler Pro Luxe Hair Straightener (S-9600)",
    brand: "Remington Styler",
    category: "Electronic Devices",
    price: 0,
    rating: 4.8,
    reviewCount: 15,
    inStock: true,
    isNew: true,
    image: "/images/products/remington-styler-pro-luxe-s-9600.jpeg",
    shortDescription: "Pro Luxe hair straightener featuring electro-magnetic plates and keratin protection technology.",
    concern: ["All Hair Types"]
  },
  {
    id: "remington-styler-pro-spiral-curls-s-276",
    slug: "remington-styler-pro-spiral-curls-s-276",
    name: "Remington Styler Pro Spiral Curls Hair Curler (S-276)",
    brand: "Remington Styler",
    category: "Electronic Devices",
    price: 0,
    rating: 4.8,
    reviewCount: 17,
    inStock: true,
    isNew: true,
    image: "/images/products/remington-styler-pro-spiral-curls-s-276.jpeg",
    shortDescription: "Pro spiral curling tong with 22mm advanced ceramic barrel for defined, long-lasting curls.",
    concern: ["All Hair Types"]
  },
  {
    id: "remington-styler-silk-fusion-straightener-s-9250",
    slug: "remington-styler-silk-fusion-straightener-s-9250",
    name: "Remington Styler Silk Fusion Hair Straightener (S-9250)",
    brand: "Remington Styler",
    category: "Electronic Devices",
    price: 0,
    rating: 4.8,
    reviewCount: 22,
    inStock: true,
    isNew: true,
    image: "/images/products/remington-styler-silk-fusion-straightener-s-9250.jpeg",
    shortDescription: "Silk Fusion hair straightener with floating plate technology and 20-second ultra-fast heat up.",
    concern: ["All Hair Types"]
  },
  {
    id: "remington-styler-shine-therapy-straightener-s-9665",
    slug: "remington-styler-shine-therapy-straightener-s-9665",
    name: "Remington Styler Shine Therapy Hair Straightener (S-9665)",
    brand: "Remington Styler",
    category: "Electronic Devices",
    price: 0,
    rating: 4.8,
    reviewCount: 21,
    inStock: true,
    isNew: true,
    image: "/images/products/remington-styler-shine-therapy-straightener-s-9665.jpeg",
    shortDescription: "Shine Therapy hair straightener with advanced keratin ceramic plates and Bio-Ionic style shaper.",
    concern: ["All Hair Types"]
  },
  {
    id: "remington-styler-proluxe-straightener-s-9100",
    slug: "remington-styler-proluxe-straightener-s-9100",
    name: "Remington Styler ProLuxe Hair Straightener (S-9100)",
    brand: "Remington Styler",
    category: "Electronic Devices",
    price: 0,
    rating: 4.8,
    reviewCount: 26,
    inStock: true,
    isNew: true,
    image: "/images/products/remington-styler-proluxe-straightener-s-9100.jpeg",
    shortDescription: "Premium hair straightener with ceramic heating plates for smooth, long-lasting styling.",
    concern: ["All Hair Types"]
  },
  {
    id: "remington-styler-hydro-fusion-ultra-boost-hair-dryer-s-4045",
    slug: "remington-styler-hydro-fusion-ultra-boost-hair-dryer-s-4045",
    name: "Remington Styler Hydro Fusion Ultra-Boost Hair Dryer (S-4045)",
    brand: "Remington Styler",
    category: "Electronic Devices",
    price: 0,
    rating: 4.8,
    reviewCount: 29,
    inStock: true,
    isNew: true,
    image: "/images/products/remington-styler-hydro-fusion-ultra-boost-hair-dryer-s-4045.jpeg",
    shortDescription: "Powerful 3500W professional hair dryer featuring Hydro Fusion technology for fast, 90% frizz-free drying.",
    concern: ["All Hair Types"]
  },
  {
    id: "remington-styler-proluxe-hair-dryer-s-8045",
    slug: "remington-styler-proluxe-hair-dryer-s-8045",
    name: "Remington Styler ProLuxe Professional Hair Dryer (S-8045)",
    brand: "Remington Styler",
    category: "Electronic Devices",
    price: 0,
    rating: 4.8,
    reviewCount: 25,
    inStock: true,
    isNew: true,
    image: "/images/products/remington-styler-proluxe-hair-dryer-s-8045.jpeg",
    shortDescription: "Professional ProLuxe hair dryer with OPTIheat technology for long-lasting salon-quality styles.",
    concern: ["All Hair Types"]
  },
  {
    id: "medicube-deep-vita-c-capsule-cream",
    slug: "medicube-deep-vita-c-capsule-cream",
    name: "Medicube Deep Vita C Capsule Cream (55g)",
    brand: "Medicube",
    category: "Skincare",
    price: 0,
    rating: 4.9,
    reviewCount: 34,
    inStock: true,
    isNew: true,
    image: "/images/products/medicube-deep-vita-c-capsule-cream.jpeg",
    shortDescription: "Vitamin C capsule cream enriched with 50% Vitamin Water and 5% Niacinamide for intense brightening and dark spot care.",
    concern: ["Brightening", "Dark Spots", "Hyperpigmentation", "Uneven Skin Tone"]
  },
  {
    id: "medicube-collagen-jelly-cream",
    slug: "medicube-collagen-jelly-cream",
    name: "Medicube Collagen Jelly Cream (110ml)",
    brand: "Medicube",
    category: "Skincare",
    price: 0,
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    isNew: true,
    image: "/images/products/medicube-collagen-jelly-cream.png",
    shortDescription: "A gel-textured collagen cream formulated with freeze-dried hydrolyzed collagen to restore elasticity and Korean glass skin glow.",
    concern: ["Anti-Aging", "Elasticity & Firming", "Dryness & Hydration", "Glass Skin Glow"]
  },
  {
    id: "arencia-vitamin-c-booster-shot-30ml",
    slug: "arencia-vitamin-c-booster-shot-30ml",
    name: "Arencia Vitamin C Booster Shot (30ml)",
    brand: "Arencia",
    category: "Skincare",
    price: 0,
    rating: 4.8,
    reviewCount: 16,
    inStock: true,
    isNew: true,
    image: "/images/products/arencia-vitamin-c-booster-shot-30ml.jpeg",
    shortDescription: "Face and eye moisturizer enriched with Vitamin C Complex (5%) and Glutathione for radiance and boosting.",
    concern: ["Brightening", "Dark Spots", "Uneven Skin Tone"]
  },
  {
    id: "anua-niacinamide-10-txa-4-serum-30ml",
    slug: "anua-niacinamide-10-txa-4-serum-30ml",
    name: "Anua Niacinamide 10% + TXA 4% Serum (30ml)",
    brand: "Anua",
    category: "Skincare",
    price: 0,
    rating: 4.9,
    reviewCount: 31,
    inStock: true,
    isNew: true,
    image: "/images/products/anua-niacinamide-10-txa-4-serum-30ml.jpg",
    shortDescription: "Advanced brightening serum formulated with 10% Niacinamide and 4% Tranexamic Acid for dark spots and uneven skin tone.",
    concern: ["Brightening", "Dark Spots", "Hyperpigmentation", "Uneven Skin Tone"]
  },
  {
    id: "elf-skin-holy-hydration-thirst-burst-drops",
    slug: "elf-skin-holy-hydration-thirst-burst-drops",
    name: "e.l.f. Skin Holy Hydration! Thirst Burst Drops",
    brand: "e.l.f.",
    category: "Skincare",
    price: 0,
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    isNew: true,
    image: "/images/products/elf-skin-holy-hydration-thirst-burst-drops.jpg",
    shortDescription: "Dewy and brightening hydrating drops formulated with 1% hydrating hibiscus complex and 5% niacinamide.",
    concern: ["Dryness & Hydration", "Brightening", "Radiance", "Uneven Skin Tone"]
  },
  {
    id: "celimax-pore-dark-spot-brightening-cream-35ml",
    slug: "celimax-pore-dark-spot-brightening-cream-35ml",
    name: "Celimax Pore + Dark Spot Brightening Cream (35ml)",
    brand: "Celimax",
    category: "Skincare",
    price: 0,
    rating: 4.9,
    reviewCount: 28,
    inStock: true,
    isNew: true,
    image: "/images/products/celimax-pore-dark-spot-brightening-cream-35ml.png",
    shortDescription: "Targeted brightening cream with 5% Niacinamide, 5% Tranexamic Acid, and Ceramide NP for pore and dark spot care.",
    concern: ["Brightening", "Dark Spots", "Uneven Skin Tone", "Hyperpigmentation"]
  },
  {
    id: "axis-y-dark-spot-correcting-glow-serum-50ml",
    slug: "axis-y-dark-spot-correcting-glow-serum-50ml",
    name: "AXIS-Y Dark Spot Correcting Glow Serum (50ml)",
    brand: "AXIS-Y",
    category: "Skincare",
    price: 0,
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    isNew: true,
    image: "/images/products/axis-y-dark-spot-correcting-glow-serum-50ml.jpg",
    shortDescription: "Activated Niacinamide (5%) serum with plant-derived Squalane to correct dark spots and brighten skin.",
    concern: ["Dark Spots", "Brightening", "Hyperpigmentation", "Uneven Skin Tone", "Hydration"]
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