"use client";

import React, { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import ProductFilters, { FilterState } from "@/components/ProductFilters";
import { products, Concern } from "@/lib/products";

// Tabs map 1:1 to `Category` values in lib/products.ts
const SHOP_CATEGORIES = [
  { id: "", label: "All" },
  { id: "Makeup", label: "Makeup" },
  { id: "Skincare", label: "Skincare" },
  { id: "Hair Care", label: "Hair care" },
  { id: "Perfumes", label: "Perfumes" },
  { id: "Bundles", label: "Beauty boxes" },
  { id: "Electronic Devices", label: "Devices & tools" },
];

/**
 * Re-mount the shop content whenever the URL query changes (category tiles, footer
 * links, ?q= searches) so filters re-initialise from the URL without a sync effect.
 */
export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopPageKeyed />
    </Suspense>
  );
}

function ShopPageKeyed() {
  const searchParams = useSearchParams();
  return <ShopContent key={searchParams.toString()} />;
}

function ShopContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get("q") ?? "");

  // Initialize filters from URL params
  const [filters, setFilters] = useState<FilterState>(() => {
    const categoryParam = searchParams.get("category") || "";
    const concernParam = searchParams.get("concern");

    return {
      category: categoryParam === "all" ? "" : categoryParam.replace("+", " "),
      brand: "",
      concerns: concernParam ? [concernParam as Concern] : [],
      sortBy: "featured",
    };
  });


  // Heading Click Handler (Tab Navigation)
  const handleCategoryTabClick = (categoryName: string) => {
    setFilters((prev) => ({
      ...prev,
      category: categoryName,
    }));
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search Logic
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Category Filter (Donon sidebars aur quick tabs se sync)
    if (filters.category && filters.category !== "") {
      result = result.filter((p) => p.category.toLowerCase() === filters.category.toLowerCase());
    }

    // Brand Filter
    if (filters.brand && filters.brand !== "") {
      result = result.filter((p) => p.brand === filters.brand);
    }

    // Concerns Filter
    if (filters.concerns.length > 0) {
      result = result.filter((p) =>
        filters.concerns.some((c) => p.concern.includes(c))
      );
    }

    return result;
  }, [searchQuery, filters]);

  return (
    <div className="pt-16">
      {/* ── Header ── */}
      <section className="border-b border-border">
        <div className="container-custom grid gap-6 py-10 md:grid-cols-12 md:items-end md:py-16">
          <div className="md:col-span-7">
            <h1 className="font-display text-5xl leading-[1] md:text-7xl">The shop</h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Every product is original and sourced from authorised distributors. Order with cash on delivery, or
              pick up from our counter in Saima Mall.
            </p>
          </div>
          <div className="relative md:col-span-5">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              type="search"
              aria-label="Search products"
              placeholder="Search products, brands…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 rounded-full border-border bg-card pl-12 text-sm"
            />
          </div>
        </div>
      </section>

      <section className="container-custom py-8 md:py-12">
        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Product categories"
          className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0"
        >
          {SHOP_CATEGORIES.map((tab) => {
            const isActive = filters.category.toLowerCase() === tab.id.toLowerCase();
            return (
              <button
                key={tab.id || "all"}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryTabClick(tab.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mb-10 rounded-3xl border border-border bg-card p-5 md:p-8">
          <ProductFilters
            filters={filters}
            updateAction={setFilters}
            totalProducts={products.length}
            filteredCount={filteredProducts.length}
          />
        </div>

        <p className="mb-6 text-sm text-muted-foreground" aria-live="polite">
          {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          {searchQuery.trim() && <> for &ldquo;{searchQuery.trim()}&rdquo;</>}
        </p>

        {filteredProducts.length > 0 ? (
          <ul className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-3xl border border-dashed border-border py-24 text-center">
            <p className="font-display text-2xl">Nothing matches these filters</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search, or message us on WhatsApp and we&apos;ll check stock for you.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setFilters({ category: "", brand: "", concerns: [], sortBy: "featured" });
              }}
              className="mt-6 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}