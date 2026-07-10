"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import ProductFilters, { FilterState } from "@/components/ProductFilters";
import { products, Concern } from "@/lib/products";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

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

  // Sync state if URL changes externally
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setFilters((prev) => ({
        ...prev,
        category: categoryParam === "all" ? "" : categoryParam.replace("+", " "),
      }));
    }
  }, [searchParams]);

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

    // Category Filter
    if (filters.category && filters.category !== "") {
      result = result.filter((p) => p.category === filters.category);
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
    <div className="min-h-screen bg-black overflow-x-hidden pt-20 md:pt-28">
      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
        <Image
          src="/images/products/shop3.png"
          alt="AYAN Cosmetics"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
        
        {/* FIXED FOR CENTER ALIGNMENT: items-center aur justify-center se text bilkul center ho jayega */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <h1 
              className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85] opacity-0 mb-4 mx-auto"
              style={{ 
                animation: "slideUpCenter 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards"
              }}
            >
              The <span className="text-[#529538]">Bold</span> <br /> 
              Standard
            </h1>
            <p 
              className="text-white max-w-md text-[10px] md:text-xs font-black uppercase tracking-[6px] opacity-0 mx-auto"
              style={{ animation: "slideUpCenter 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s forwards" }}
            >
              Premium Beauty Collection
            </p>
          </div>
        </div>
      </section>

      {/* ── SHOP AREA ── */}
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        
        {/* Search & Stats Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-[#529538]" />
            <Input
              type="search"
              placeholder="SEARCH PRODUCTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-16 h-14 bg-zinc-900 border-zinc-800 text-white rounded-full uppercase font-black text-[10px] tracking-widest focus:ring-1 focus:ring-[#529538] transition-all"
            />
          </div>
          <div className="flex items-center gap-4 px-6 border-l border-zinc-800">
            <span className="text-[#529538] text-4xl font-black leading-none">{filteredProducts.length}</span>
            <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-[3px] leading-tight">Products<br/>Found</span>
          </div>
        </div>

        {/* Filters Wrapper */}
        <div className="mb-12 bg-zinc-900/40 border border-zinc-800/50 rounded-[30px] p-6 md:p-10 backdrop-blur-md">
           <ProductFilters
              filters={filters}
              updateAction={setFilters}
              totalProducts={products.length}
              filteredCount={filteredProducts.length}
            />
        </div>

        {/* Product Grid */}
        <div className="w-full">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="opacity-0 transition-transform duration-500 hover:-translate-y-2"
                  style={{ animation: `fadeIn 0.6s ease ${index * 0.05}s forwards` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-zinc-900/20 rounded-[40px] border border-dashed border-zinc-800">
              <h3 className="text-xl font-bold text-white uppercase italic tracking-widest">No Results Found</h3>
              <button 
                onClick={() => {
                    setSearchQuery("");
                    setFilters({ category: "", brand: "", concerns: [], sortBy: "featured" });
                }} 
                className="mt-6 px-10 py-4 bg-[#529538] text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-white hover:text-black transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── ANIMATIONS ── */}
      <style jsx global>{`
        /* UPDATED ANIMATION: Center mein smooth slide up effect ke liye */
        @keyframes slideUpCenter {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}