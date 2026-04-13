"use client";

import React from "react";
import Link from "next/link";
import ProductCard, { ProductCardSkeleton } from "@/components/ProductCard";
import { getFeaturedProducts, products } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * FeaturedProducts Component for Home Page
 *
 * Displays a grid of featured products (best sellers and new arrivals)
 * Links to the full shop page
 */

interface FeaturedProductsProps {
  limit?: number;
  title?: string;
  showViewAll?: boolean;
}

export default function FeaturedProducts({
  limit = 8,
  title = "Featured Products",
  showViewAll = true,
}: FeaturedProductsProps) {
  // Get featured products (best sellers + new arrivals)
  const featuredProducts = getFeaturedProducts(limit);

  // If not enough featured, fill with other products
  const displayProducts =
    featuredProducts.length >= limit
      ? featuredProducts
      : [...featuredProducts, ...products.slice(0, limit - featuredProducts.length)];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-gray-600 mt-2">
              Discover our most loved products
            </p>
          </div>

          {showViewAll && (
            <Link href="/shop">
              <Button variant="outline" className="gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        {showViewAll && (
          <div className="md:hidden text-center mt-8">
            <Link href="/shop">
              <Button className="gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Loading skeleton for FeaturedProducts
 */
export function FeaturedProductsSkeleton({ count = 8 }: { count?: number }) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="h-10 w-64 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-10 w-40 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: count }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
