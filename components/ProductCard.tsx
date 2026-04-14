"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ShoppingCart, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();

  const whatsappLink = `https://wa.me/923242162485?text=Order%3A%20${encodeURIComponent(product.name)}`;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full relative">
      {/* Image Container - Fixed to prevent jumping */}
      <div className="relative aspect-square w-full bg-gray-50">
        <Link href={`/shop/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </Link>
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && <Badge className="bg-[#00b140] text-[10px] py-0 px-2 border-none">NEW</Badge>}
          {product.isBestSeller && <Badge className="bg-yellow-400 text-black text-[10px] py-0 px-2 border-none">BEST</Badge>}
        </div>
      </div>

      {/* Info Section - No external components used to avoid padding bugs */}
      <div className="p-3 flex flex-col flex-grow">
        <span className="text-[9px] font-bold text-[#00b140] uppercase tracking-tighter">{product.brand}</span>
        
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-bold text-gray-900 text-sm line-clamp-2 h-10 mt-1 mb-2 leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Rating and Price Row - Simplified */}
        <div className="flex items-center justify-between mt-auto mb-3">
          <span className="text-sm font-black text-gray-900">Rs. {product.price}</span>
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-[10px] font-bold text-gray-600">{product.rating}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button
            onClick={() => {
              addToCart(product);
              setJustAdded(true);
              setTimeout(() => setJustAdded(false), 1500);
            }}
            className={cn(
              "flex-1 h-10 text-[10px] font-bold uppercase rounded-xl transition-all",
              justAdded ? "bg-black text-white" : "bg-[#00b140] hover:bg-black text-white"
            )}
          >
            {justAdded ? <Check className="h-4 w-4" /> : "Add to Cart"}
          </Button>
          
          <a href={whatsappLink} target="_blank" className="flex items-center justify-center w-10 h-10 border border-[#00b140]/30 rounded-xl text-[#00b140] hover:bg-[#00b140] hover:text-white transition-all">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}