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

  useEffect(() => {
    const categoryParam = searchParams.get("category") || "";
    if (categoryParam && categoryParam !== "all") {
      setFilters((prev) => ({
        ...prev,
        category: categoryParam.replace("+", " "),
      }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    if (filters.category && filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.brand && filters.brand !== "all") {
      result = result.filter((p) => p.brand === filters.brand);
    }

    if (filters.concerns.length > 0) {
      result = result.filter((p) =>
        filters.concerns.some((c) => p.concern.includes(c))
      );
    }

    return result;
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* ── HERO SECTION (Bright & High-End) ── */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
        <Image
          src="/images/products/shop3.png"
          alt="AYAN Cosmetics"
          fill
          priority
          className="object-cover object-top opacity-100" // Brightness restored
        />
        
        {/* Subtle overlays to help text pop without making it dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <h1 
              className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85] opacity-0 mb-4 drop-shadow-2xl"
              style={{ 
                animation: "slideRight 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards",
                textShadow: "0px 4px 30px rgba(0,0,0,0.6)" 
              }}
            >
              The <span className="text-[#529538]">Bold</span> <br /> 
              Standard
            </h1>
            <p 
              className="text-white max-w-md text-xs md:text-sm font-black uppercase tracking-[6px] opacity-0 drop-shadow-md"
              style={{ animation: "slideRight 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s forwards" }}
            >
              Premium Beauty Collection
            </p>
          </div>
        </div>
      </section>

      {/* ── SHOP AREA (Horizontal Layout for Wide Screens) ── */}
      <section className="container-custom py-12">
        
        {/* Search & Stats Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-[#529538]" />
            <Input
              type="search"
              placeholder="SEARCH PRODUCTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-16 h-14 bg-zinc-900 border-zinc-800 text-white rounded-full uppercase font-black text-[10px] tracking-widest focus:border-[#529538] transition-all"
            />
          </div>
          <div className="flex items-center gap-4 px-6 border-l border-zinc-800">
            <span className="text-[#529538] text-3xl font-black">{filteredProducts.length}</span>
            <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-[3px] leading-tight">Products<br/>Available</span>
          </div>
        </div>

        {/* Filters Wrapper (Improved for Wide Screen) */}
        <div className="mb-12 bg-zinc-900/30 border border-green-900/10 rounded-[40px] p-6 md:p-8">
           <h3 className="text-white/40 font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-3">
             <span className="w-8 h-[1px] bg-green-900/50"></span> Refine Results
           </h3>
           <ProductFilters
              filters={filters}
              updateAction={setFilters}
              totalProducts={products.length}
              filteredCount={filteredProducts.length}
            />
        </div>

        {/* Product Grid (Full Width) */}
        <div className="w-full">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="opacity-0 rounded-[40px] overflow-hidden border border-green-900/10 bg-zinc-900/20 hover:border-[#529538]/40 hover:shadow-[0_30px_60px_-15px_rgba(82,149,56,0.15)] transition-all duration-500"
                  style={{ animation: `fadeIn 0.6s ease ${index * 0.05}s forwards` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-28 bg-zinc-900/10 rounded-[50px] border border-dashed border-zinc-800">
              <h3 className="text-xl font-bold text-white uppercase italic tracking-widest">No products match your search</h3>
              <button onClick={() => setSearchQuery("")} className="mt-6 px-8 py-3 bg-[#529538] text-white font-black uppercase text-xs rounded-full hover:scale-105 transition-transform">Clear Everything</button>
            </div>
          )}
        </div>
      </section>

      {/* ── CUSTOM ANIMATIONS ── */}
      <style jsx global>{`
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}