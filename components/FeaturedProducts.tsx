import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import LabelHeading from "@/components/LabelHeading";

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
    <section className="relative bg-secondary/60 py-16 md:py-24" aria-labelledby="featured-title">
      {/* 3D stage anchor: a faceted perfume bottle, top-left, stopper lifted */}
      <div
        className="pointer-events-none absolute -top-6 left-2 h-32 w-28 md:left-[3%] md:-top-10 md:h-56 md:w-44"
        data-stage="featured"
        data-stage-set="perfume"
        data-stage-fill="0.95"
        data-stage-rot="7.6"
        data-stage-cap="0.3"
        aria-hidden="true"
      />
      <div className="container-custom">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <LabelHeading id="featured-title" tilt={1.2}>
            {title}
          </LabelHeading>
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
