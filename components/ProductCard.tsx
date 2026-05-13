"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ShoppingCart, Check, Star } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/CartContext";
import { generateWhatsAppLink } from "@/lib/whatsapp"; 
import { cn } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  // Safety check
  if (!product || !product.id) return null;

  const orderViaWhatsApp = generateWhatsAppLink(product.name, product.price || 0);

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <article className="group relative flex flex-col h-full bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl rounded-sm">
      
      {/* IMAGE SECTION - Parent 'relative' added to fix Next.js Layout error */}
      <div className="relative aspect-[4/5] w-full bg-[#F9F9F9] overflow-hidden">
        <Link href={`/shop/${product.slug}`} className="block w-full h-full">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              // 'relative' parent fix and object-contain for high-end look
              className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, 25vw"
              onError={() => setImageError(true)}
              // Agar ye logo ya hero images hain to priority add karein
              priority={product.isBestSeller} 
            />
          ) : (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-4xl">💄</div>
          )}
        </Link>

        {/* Minimalist Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {product.isNew && (
            <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-black text-white">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-[#529538] text-white shadow-lg">
              Hot
            </span>
          )}
        </div>

        {/* Hover Actions - Slide from Bottom */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-[2px] flex gap-2 z-30">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={cn(
              "flex-1 h-12 flex items-center justify-center gap-2 font-bold uppercase text-[10px] tracking-widest transition-all",
              justAdded 
                ? "bg-black text-white" 
                : "bg-[#529538] text-white hover:bg-black active:scale-95"
            )}
          >
            {justAdded ? <Check size={16} /> : <><ShoppingCart size={16} /> Add to Cart</>}
          </button>
          
          <a
            href={orderViaWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-[#529538] text-[#529538] hover:bg-[#529538] hover:text-white transition-all active:scale-95"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-5 flex flex-col flex-1 text-center items-center">
        <span className="text-[10px] font-bold text-[#529538] uppercase tracking-[0.3em] mb-2">
          {product.brand || "Ayan Cosmetics"}
        </span>

        <Link href={`/shop/${product.slug}`} className="block group/title">
          <h3 className="text-sm md:text-base font-black text-gray-900 uppercase tracking-tight leading-tight line-clamp-2 min-h-[3rem] group-hover/title:text-[#529538] transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < Math.floor(product.rating || 5) ? "fill-[#FFD700] text-[#FFD700]" : "text-gray-200"} 
            />
          ))}
          <span className="text-[10px] font-bold text-gray-400 ml-1">({product.rating || "5.0"})</span>
        </div>

        {/* Luxury Line Decor */}
        <div className="mt-4 h-0.5 w-8 bg-gray-200 group-hover:w-16 group-hover:bg-[#529538] transition-all duration-500"></div>
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-100 overflow-hidden rounded-sm">
      <div className="aspect-[4/5] bg-gray-50 animate-pulse" />
      <div className="p-6 flex flex-col items-center gap-3">
        <div className="h-2 w-16 bg-gray-100 animate-pulse" />
        <div className="h-4 w-32 bg-gray-100 animate-pulse" />
        <div className="h-2 w-12 bg-gray-100 animate-pulse" />
      </div>
    </div>
  );
}