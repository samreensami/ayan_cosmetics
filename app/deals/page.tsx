"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

export default function DealsPage() {
  // Products filter out karein jo dynamic deals hain
  const dealItems = PRODUCTS.filter((p) => p.isDeal);

  const handleOrderWhatsApp = (productName: string, dealPrice: number) => {
    const text = `Assalam-o-Alaikum AYAN Cosmetics! Main website se "DEALS PAGE" check kar raha/rahi hoon. Mjhe ye deal confirm karni hai:\n\n📦 *Product:* ${productName}\n💰 *Deal Price:* Rs. ${dealPrice}\n\nKindly availability check kar ke confirm kar dein! ✨`;
    window.open(`https://wa.me/923332304145?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-background min-h-screen text-foreground pt-24 pb-16 font-sans">
      
      {/* ── Header ── */}
      <div className="mb-12 border-b border-border">
        <div className="container-custom py-12 md:py-20">
          <h1 className="font-display text-5xl leading-none md:text-7xl">
            Deals this week
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Grab 100% genuine premium cosmetics and curated luxury gift boxes at verified markdown prices direct from Saima Mall outlet.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* ── SECTION 1: POORI VANITY BOX COMBO DEAL (IMAGE 4) ── */}
        <h2 className="text-sm font-semibold text-muted-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Custom Bundles & Vanity Sets
        </h2>
        
        {dealItems.filter(p => p.isComboDeal).map((combo) => (
          <div key={combo.id} className="bg-card border border-border rounded-[32px] p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center mb-16 shadow-[0_0_50px_rgba(82,149,56,0.05)]">
            <div className="w-full lg:w-2/5 aspect-square relative rounded-2xl overflow-hidden bg-card border border-border">
              <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] font-semibold px-3 py-1.5 rounded-lg shadow-md">
                BEST VALUE COMBO 🔥
              </div>
              <Image 
                src={combo.imagePath} 
                alt={combo.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl md:text-3xl font-semibold text-foreground tracking-wide mb-3">{combo.name}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 font-medium max-w-2xl">{combo.description}</p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <span className="text-3xl md:text-5xl font-semibold text-primary">Rs. {combo.price}</span>
                <span className="text-base md:text-xl text-muted-foreground line-through font-bold mt-1 md:mt-2">
                  Rs. {combo.actualPrice}
                </span>
                <span className="bg-primary/10 text-primary text-[11px] font-semibold px-3 py-1 rounded-full border border-primary/20">
                  Save Rs. {(combo.actualPrice || 0) - combo.price}
                </span>
              </div>

              <button
                onClick={() => handleOrderWhatsApp(combo.name, combo.price)}
                className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground font-semibold text-xs px-8 py-4.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(82,149,56,0.2)] flex items-center justify-center gap-2 cursor-pointer group"
              >
                Claim This Bundle Pack
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}

        {/* ── SECTION 2: INDIVIDUAL DEALS GRID (IMAGES 5 & 6) ── */}
        <h2 className="text-sm font-semibold text-muted-foreground mb-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" /> Single Product Price Drops
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealItems.filter(p => !p.isComboDeal).map((product) => {
            const savings = (product.actualPrice || 0) - product.price;
            
            return (
              <div key={product.id} className="bg-card border border-border hover:border-border rounded-[24px] overflow-hidden flex flex-col shadow-xl transition-all duration-300 group">
                {/* Product Card Image Frame */}
                <div className="aspect-square relative w-full bg-card border-b border-border">
                  <div className="absolute top-3 left-3 z-10 bg-black/80 text-white font-semibold text-[9px] px-2.5 py-1 rounded-md border border-border">
                    Now Rs. {product.price}
                  </div>
                  <Image 
                    src={product.imagePath} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-primary mb-1.5 block">
                      {product.category}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground tracking-wide line-clamp-1 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-[11px] line-clamp-2 font-medium mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing and Action Strip */}
                  <div className="pt-3 border-t border-border">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-lg font-semibold text-foreground">Rs. {product.price}</span>
                      <span className="text-xs text-muted-foreground line-through font-bold">
                        Rs. {product.actualPrice}
                      </span>
                      <span className="text-[10px] font-semibold text-primary ml-auto">
                        -{Math.round((savings / (product.actualPrice || 1)) * 100)}% OFF
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrderWhatsApp(product.name, product.price)}
                      className="w-full bg-card hover:bg-primary text-muted-foreground hover:text-background border border-border hover:border-transparent text-[10px] font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag size={12} />
                      Order via WhatsApp
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}