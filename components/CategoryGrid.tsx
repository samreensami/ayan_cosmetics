import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/lib/products";

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

function coverFor(tile: CategoryTile): Product | undefined {
  return products.find((p) => tile.match(p) && p.inStock && p.image) ?? products.find(tile.match);
}

export default function CategoryGrid() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="categories-title">
      <div className="container-custom">
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
          <h2 id="categories-title" className="section-title">
            Shop by category
          </h2>
          <Link href="/shop" className="shrink-0 text-sm underline underline-offset-4 hover:text-primary">
            View all products
          </Link>
        </div>

        <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0">
          {categories.map((tile) => {
            const cover = coverFor(tile);
            return (
              <li key={tile.name} className="w-[42%] shrink-0 snap-start sm:w-[30%] md:w-auto">
                <Link href={tile.href} className="group block">
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
                  <p className="mt-3 font-display text-lg md:text-xl">{tile.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
