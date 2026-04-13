"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import ProductFilters, { FilterState } from "@/components/ProductFilters";
import TrustSignals from "@/components/TrustSignals";
import { products, Concern } from "@/lib/products";

/**
 * Shop Page for AYAN Cosmetics
 *
 * Features:
 * - Search bar
 * - Category, Brand, Price, Concern filters
 * - Product grid with all products
 * - Responsive design
 *
 * Route: /shop
 * Query params: ?category=X&brand=Y&concern=Z
 */

export default function ShopPage() {
  const searchParams = useSearchParams();

  // Search query state
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize filters from URL params
  const [filters, setFilters] = useState<FilterState>(() => {
    const categoryParam = searchParams.get("category") || "";
    const concernParam = searchParams.get("concern");

    return {
      category: categoryParam === "all" ? "" : categoryParam,
      brand: "",
      concerns: concernParam ? [concernParam as Concern] : [],
      sortBy: "featured",
    };
  });

  // Update filters when URL params change
  useEffect(() => {
    const categoryParam = searchParams.get("category") || "";
    if (categoryParam && categoryParam !== "all") {
      setFilters((prev) => ({
        ...prev,
        category: categoryParam.replace("+", " "),
      }));
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.category && filters.category !== "all") {
      result = result.filter(
        (product) => product.category === filters.category
      );
    }

    // Brand filter
    if (filters.brand && filters.brand !== "all") {
      result = result.filter((product) => product.brand === filters.brand);
    }

    // Concern filter
    if (filters.concerns.length > 0) {
      result = result.filter((product) =>
        filters.concerns.some((concern) => product.concern.includes(concern))
      );
    }

    // Sort products
    switch (filters.sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "featured":
      default:
        result.sort(
          (a, b) =>
            (b.isBestSeller ? 1 : 0) +
            (b.isNew ? 1 : 0) -
            ((a.isBestSeller ? 1 : 0) + (a.isNew ? 1 : 0))
        );
        break;
    }

    return result;
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 via-white to-gold/10 pt-24 pb-8 md:pt-28 md:pb-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Shop All Products
          </h1>
          <p className="text-gray-600">
            Discover our collection of genuine cosmetics, fragrances, and beauty
            accessories
          </p>
        </div>
      </div>

      {/* Trust Signals */}
      <TrustSignals variant="compact" />

      <div className="container-custom py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search products, brands, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <ProductFilters
            filters={filters}
            onFilterChange={setFilters}
            totalProducts={products.length}
            filteredCount={filteredProducts.length}
          />
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl">
            <div className="text-6xl mb-4">😢</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setFilters({
                  category: "",
                  brand: "",
                  concerns: [],
                  sortBy: "featured",
                });
              }}
              className="text-primary font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
