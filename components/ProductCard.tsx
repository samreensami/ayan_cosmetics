"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Heart, ImageIcon, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "@/components/StarRating";
import { Product } from "@/lib/products";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-white animate-pulse">
      <div className="aspect-square bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-2/3 bg-gray-200 rounded" />
        <div className="h-10 w-full bg-gray-200 rounded-xl mt-4" />
      </div>
    </div>
  );
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
  } = product;

  const whatsappLink = generateWhatsAppLink(name);

  return (
    <Card 
      className={cn(
        "group overflow-hidden transition-all duration-300 rounded-2xl bg-white",
        // Bager hover ke halka green border, hover par dark green aur shadow
        "border border-[#00b140]/20 shadow-sm",
        "hover:border-[#00b140] hover:shadow-xl hover:-translate-y-1 hover:ring-1 hover:ring-[#00b140]"
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50/50">
        <Link href={`/shop/${slug}`}>
          <div className="relative w-full h-full">
            {imageError ? (
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b140]/5 to-[#FFD700]/5 flex flex-col items-center justify-center">
                <ImageIcon className="h-12 w-12 text-gray-300 mb-2" />
                <span className="text-[10px] font-bold text-gray-400 text-center px-4 uppercase tracking-tighter">
                  {name}
                </span>
              </div>
            ) : (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                onError={() => setImageError(true)}
              />
            )}
            
            {!inStock && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                <span className="text-white font-black text-sm uppercase tracking-widest border-2 border-white px-4 py-1">
                  Sold Out
                </span>
              </div>
            )}
          </div>
        </Link>

        {/* Badges - Styled more boldly */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
          {isNew && (
            <Badge className="bg-[#00b140] hover:bg-[#00b140] text-white font-bold px-3 py-1 border-none shadow-md">
              NEW
            </Badge>
          )}
          {isBestSeller && (
            <Badge className="bg-[#FFD700] hover:bg-[#FFD700] text-black font-bold px-3 py-1 border-none shadow-md">
              BEST SELLER
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 hover:bg-[#e60012] hover:text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-x-4 group-hover:translate-x-0"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4 transition-colors" />
        </button>
      </div>

      {/* Product Info */}
      <CardContent className="p-5">
        <p className="text-[10px] text-[#00b140] font-black uppercase tracking-[0.2em] mb-2">
          {brand}
        </p>

        <Link href={`/shop/${slug}`}>
          <h3 className="font-bold text-gray-900 group-hover:text-[#00b140] transition-colors line-clamp-2 min-h-[44px] text-sm mb-3 leading-tight">
            {name}
          </h3>
        </Link>

        <div className="mb-5 flex items-center justify-between">
          <StarRating rating={rating} reviewCount={reviewCount} size="sm" />
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => {
              if (inStock) {
                addToCart(product);
                setJustAdded(true);
                setTimeout(() => setJustAdded(false), 1500);
              }
            }}
            className={cn(
              "flex-1 gap-3 font-black text-xs uppercase tracking-widest h-12 rounded-xl transition-all shadow-md",
              inStock
                ? justAdded
                  ? "bg-gray-900 text-white"
                  : "bg-[#00b140] text-white hover:bg-black hover:shadow-lg"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
            disabled={!inStock}
          >
            {justAdded ? (
              <>
                <Check className="h-4 w-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </>
            )}
          </Button>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
            <Button
              variant="outline"
              className={cn(
                "h-12 w-12 p-0 rounded-xl border-[#00b140]/30 hover:bg-[#00b140] hover:text-white hover:border-[#00b140] transition-all",
              )}
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}