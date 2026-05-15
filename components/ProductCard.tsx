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

  if (!product || !product.id) return null;

  // Price 0 pass ho rahi hai kyunki prices hide rakhni hain
  const orderViaWhatsApp = generateWhatsAppLink(product.name, 0);

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <article className="group relative flex flex-col h-full bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:border-black rounded-none">
      
      {/* IMAGE SECTION */}
      <div className="relative aspect-[3/4] w-full bg-[#f3f3f3] overflow-hidden">
        <Link href={`/shop/${product.slug}`} className="block w-full h-full">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
              priority={product.isBestSeller} 
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-5xl">💄</div>
          )}
        </Link>

        {/* Status Badges */}
        <div className="absolute top-0 right-0 p-2 z-20 flex flex-col items-end">
          {product.isNew && (
            <span className="bg-black text-white text-[10px] font-bold uppercase px-3 py-1 mb-1 tracking-tighter">
              Just In
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-[#D4AF37] text-white text-[10px] font-bold uppercase px-3 py-1 tracking-tighter">
              Must Have
            </span>
          )}
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 flex flex-col flex-1 bg-white">
        <div className="flex flex-col items-center text-center space-y-1 mb-4">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            {product.brand || "AYAN COSMETICS"}
          </span>

          <Link href={`/shop/${product.slug}`}>
            <h3 className="text-lg md:text-xl font-black text-black uppercase leading-none tracking-tighter group-hover:underline decoration-2 underline-offset-4">
              {product.name}
            </h3>
          </Link>

          {/* Star Rating */}
          <div className="flex items-center gap-0.5 pt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={10} 
                className="fill-black text-black"
              />
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-auto flex flex-col gap-2">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={cn(
              "w-full h-12 flex items-center justify-center gap-2 font-black uppercase text-xs tracking-tighter transition-all border-2",
              justAdded 
                ? "bg-green-600 border-green-600 text-white" 
                : "bg-black border-black text-white hover:bg-transparent hover:text-black"
            )}
          >
            {justAdded ? <Check size={18} /> : <><ShoppingCart size={18} /> Add to Bag</>}
          </button>
          
          <a
            href={orderViaWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 font-black uppercase text-xs tracking-tighter hover:bg-green-500 hover:text-white transition-all"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

{/* CRITICAL BUILD FIX: Vercel isi function ko na paa kar deploy cancel kar raha tha */}
export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse flex flex-col bg-gray-100 h-[450px] w-full border border-gray-200">
      <div className="bg-gray-200 aspect-[3/4] w-full" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 w-1/3 mx-auto" />
        <div className="h-6 bg-gray-200 w-3/4 mx-auto" />
        <div className="h-12 bg-gray-200 w-full mt-4" />
      </div>
    </div>
  );
}