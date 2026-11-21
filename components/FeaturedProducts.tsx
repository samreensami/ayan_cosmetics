import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

interface FeaturedProductsProps {
  title?: string;
  limit?: number;
  showViewAll?: boolean;
}

export default function FeaturedProducts({
  title = "New in and bestsellers",
  limit = 8,
  showViewAll = true,
}: FeaturedProductsProps) {
  const products = getFeaturedProducts(limit);
  if (products.length === 0) return null;

  return (
    <section className="bg-secondary/60 py-16 md:py-24" aria-labelledby="featured-title">
      <div className="container-custom">
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
          <h2 id="featured-title" className="section-title max-w-xl text-balance">
            {title}
          </h2>
          {showViewAll && (
            <Link href="/shop" className="shrink-0 text-sm underline underline-offset-4 hover:text-primary">
              Shop all
            </Link>
          )}
        </div>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
