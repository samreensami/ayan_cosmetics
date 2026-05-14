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
    <div className="bg-black min-h-screen text-white pt-24 pb-16 font-sans">
      
      {/* ── LUXURY GREEN GLAM BANNER HIGHLIGHT ── */}
      <div className="relative w-full h-[260px] md:h-[340px] bg-gradient-to-r from-zinc-950 via-zinc-900 to-green-950/40 border-b border-zinc-900 flex items-center justify-center text-center px-4 overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#529538_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-3xl">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#529538] mb-3 block">
            Limited Time Offers
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            EXCLUSIVE <span className="text-[#529538]">DEALS</span>
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Grab 100% genuine premium cosmetics and curated luxury gift boxes at verified markdown prices direct from Saima Mall outlet.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* ── SECTION 1: POORI VANITY BOX COMBO DEAL (IMAGE 4) ── */}
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#529538] animate-pulse" /> Custom Bundles & Vanity Sets
        </h2>
        
        {dealItems.filter(p => p.isComboDeal).map((combo) => (
          <div key={combo.id} className="bg-zinc-950 border border-zinc-900 rounded-[32px] p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center mb-16 shadow-[0_0_50px_rgba(82,149,56,0.05)]">
            <div className="w-full lg:w-2/5 aspect-square relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <div className="absolute top-4 left-4 z-10 bg-[#529538] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md">
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
              <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-wide mb-3">{combo.name}</h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-medium max-w-2xl">{combo.description}</p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <span className="text-3xl md:text-5xl font-black text-[#529538]">Rs. {combo.price}</span>
                <span className="text-base md:text-xl text-zinc-600 line-through font-bold mt-1 md:mt-2">
                  Rs. {combo.actualPrice}
                </span>
                <span className="bg-[#529538]/10 text-[#529538] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-[#529538]/20">
                  Save Rs. {(combo.actualPrice || 0) - combo.price}
                </span>
              </div>

              <button
                onClick={() => handleOrderWhatsApp(combo.name, combo.price)}
                className="w-full sm:w-auto bg-[#529538] hover:bg-[#437d2e] text-white font-black text-xs uppercase tracking-widest px-8 py-4.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(82,149,56,0.2)] flex items-center justify-center gap-2 cursor-pointer group"
              >
                Claim This Bundle Pack
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}

        {/* ── SECTION 2: INDIVIDUAL DEALS GRID (IMAGES 5 & 6) ── */}
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#529538]" /> Single Product Price Drops
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealItems.filter(p => !p.isComboDeal).map((product) => {
            const savings = (product.actualPrice || 0) - product.price;
            
            return (
              <div key={product.id} className="bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-[24px] overflow-hidden flex flex-col shadow-xl transition-all duration-300 group">
                {/* Product Card Image Frame */}
                <div className="aspect-square relative w-full bg-zinc-900 border-b border-zinc-900">
                  <div className="absolute top-3 left-3 z-10 bg-black/80 text-white font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-zinc-800">
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
                    <span className="text-[10px] font-bold text-[#529538] tracking-widest uppercase mb-1.5 block">
                      {product.category}
                    </span>
                    <h3 className="text-sm font-black text-white uppercase tracking-wide line-clamp-1 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-zinc-500 text-[11px] line-clamp-2 font-medium mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing and Action Strip */}
                  <div className="pt-3 border-t border-zinc-900/80">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-lg font-black text-white">Rs. {product.price}</span>
                      <span className="text-xs text-zinc-600 line-through font-bold">
                        Rs. {product.actualPrice}
                      </span>
                      <span className="text-[10px] font-black text-[#529538] ml-auto">
                        -{Math.round((savings / (product.actualPrice || 1)) * 100)}% OFF
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrderWhatsApp(product.name, product.price)}
                      className="w-full bg-zinc-900 hover:bg-[#529538] text-zinc-300 hover:text-white border border-zinc-800 hover:border-transparent text-[10px] font-black uppercase tracking-widest py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
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