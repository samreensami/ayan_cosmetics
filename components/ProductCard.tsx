"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Heart, ImageIcon, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import StarRating from "@/components/StarRating";
import { Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();

  const {
    slug,
    name,
    brand,
    image,
    rating,
    reviewCount,
    isNew,
    isBestSeller,
    inStock,
    price
  } = product;

  // Final WhatsApp Link with correct number
  const whatsappLink = `https://wa.me/923242162485?text=Assalam-o-Alaikum%2C%20I%20want%20to%20order%3A%20${encodeURIComponent(name)}`;

  return (
    <Card 
      className={cn(
        "group overflow-hidden transition-all duration-300 rounded-2xl bg-white flex flex-col h-full",
        "border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
      )}
    >
      {/* Image Container - Strictly Fixed Aspect Ratio */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Link href={`/shop/${slug}`} className="block w-full h-full">
          {imageError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-100">
              <ImageIcon className="h-8 w-8 text-gray-300 mb-2" />
              <span className="text-[10px] text-gray-400 text-center uppercase leading-tight">{name}</span>
            </div>
          ) : (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={() => setImageError(true)}
              priority={isBestSeller}
            />
          )}
          
          {!inStock && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center z-10">
              <span className="text-white font-bold text-xs uppercase tracking-widest border border-white px-3 py-1">
                Sold Out
              </span>
            </div>
          )}
        </Link>

        {/* Badges - Adjusted for better mobile visibility */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-20">
          {isNew && (
            <Badge className="bg-[#00b140] text-white font-bold px-2 py-0.5 border-none text-[9px]">
              NEW
            </Badge>
          )}
          {isBestSeller && (
            <Badge className="bg-[#FFD700] text-black font-bold px-2 py-0.5 border-none text-[9px]">
              BEST SELLER
            </Badge>
          )}
        </div>
      </div>

      {/* Product Info - Clean Layout without overlapping */}
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <p className="text-[9px] text-[#00b140] font-bold uppercase tracking-widest mb-1">
          {brand}
        </p>

        <Link href={`/shop/${slug}`}>
          <h3 className="font-bold text-gray-900 text-sm line-clamp-2 leading-tight mb-2 h-9">
            {name}
          </h3>
        </Link>

        {/* Rating and Price Row */}
        <div className="flex items-center justify-between mb-4">
           <div className="flex flex-col">
              <span className="text-sm font-black text-gray-900">
                {price > 0 ? `Rs. ${price}` : "Check Price"}
              </span>
           </div>
           <div className="flex items-center">
              <StarRating rating={rating} reviewCount={reviewCount} size="sm" />
           </div>
        </div>

        {/* Action Buttons - Optimized for Mobile touch */}
        <div className="mt-auto flex gap-2">
          <Button
            onClick={() => {
              if (inStock) {
                addToCart(product);
                setJustAdded(true);
                setTimeout(() => setJustAdded(false), 1500);
              }
            }}
            className={cn(
              "flex-1 gap-2 font-bold text-[10px] uppercase h-10 rounded-xl transition-all shadow-sm",
              inStock
                ? justAdded
                  ? "bg-gray-900 text-white"
                  : "bg-[#00b140] text-white hover:bg-black"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
            disabled={!inStock}
          >
            {justAdded ? (
              <><Check className="h-3 w-3" /> Added</>
            ) : (
              <><ShoppingCart className="h-3 w-3" /> Add</>
            )}
          </Button>
          
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
            <Button
              variant="outline"
              className="h-10 w-10 p-0 rounded-xl border-[#00b140]/30 text-[#00b140] hover:bg-[#00b140] hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}