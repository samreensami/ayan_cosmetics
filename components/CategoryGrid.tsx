import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/lib/products";
import LabelHeading from "@/components/LabelHeading";
import { cn } from "@/lib/utils";

interface CategoryTile {
  name: string;
  /** Shop URL — uses a real `category` from lib/products.ts or a `q` keyword search */
  href: string;
  /** How to pick the cover photo from the catalogue */
  match: (p: Product) => boolean;
}

const byName = (kw: string) => (p: Product) => p.name.toLowerCase().includes(kw);
const byCategory = (c: Product["category"]) => (p: Product) => p.category === c;

const categories: CategoryTile[] = [
  { name: "Lipstick", href: "/shop?q=lip", match: byName("lipstick") },
  { name: "Foundation", href: "/shop?q=foundation", match: byName("foundation") },
  { name: "Skincare", href: "/shop?category=Skincare", match: byCategory("Skincare") },
  { name: "Eye makeup", href: "/shop?q=eye", match: byName("eyeshadow") },
  { name: "Mascara", href: "/shop?q=mascara", match: byName("mascara") },
  { name: "Perfumes", href: "/shop?category=Perfumes", match: byCategory("Perfumes") },
  { name: "Hair care", href: "/shop?category=Hair%20Care", match: byCategory("Hair Care") },
  { name: "Beauty boxes", href: "/shop?category=Bundles", match: byCategory("Bundles") },
];

/** Small, varied tilts like swatch cards on a counter — straighten on hover/focus (desktop only). */
const TILTS = ["md:-rotate-2", "md:rotate-1", "md:-rotate-1", "md:rotate-2"];

function coverFor(tile: CategoryTile): Product | undefined {
  return products.find((p) => tile.match(p) && p.inStock && p.image) ?? products.find(tile.match);
}

export default function CategoryGrid() {
  return (
    <section className="relative py-16 md:py-24" aria-labelledby="categories-title">
      {/* 3D stage anchor: mascara (wand out) + nail polish perch top-right of this section */}
      <div
        className="pointer-events-none absolute -top-4 right-3 h-36 w-28 md:right-[5%] md:top-0 md:h-56 md:w-44"
        data-stage="categories"
        data-stage-set="mascara"
        data-stage-fill="0.95"
        data-stage-rot="7.0"
        data-stage-cap="0.7"
        aria-hidden="true"
      />
      <div className="container-custom">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <LabelHeading id="categories-title">Shop by category</LabelHeading>
          <Link href="/shop" className="shrink-0 text-sm underline underline-offset-4 hover:text-primary">
            View all products
          </Link>
        </div>

        <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0">
          {categories.map((tile, index) => {
            const cover = coverFor(tile);
            return (
              <li key={tile.name} className="w-[42%] shrink-0 snap-start sm:w-[30%] md:w-auto">
                <Link
                  href={tile.href}
                  className={cn(
                    "group block rounded-3xl bg-card p-2 shadow-soft transition-transform duration-500 ease-out md:p-2.5",
                    "hover:-translate-y-1 hover:rotate-0 focus-visible:rotate-0",
                    TILTS[index % TILTS.length]
                  )}
                >
                  <div className="product-frame relative aspect-[4/5] overflow-hidden rounded-2xl">
                    {cover && (
                      <Image
                        src={cover.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 42vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <p className="px-2 pb-2 pt-3 font-display text-lg md:text-xl">{tile.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
