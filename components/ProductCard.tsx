"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ShoppingCart, Check, Star } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/CartContext";
// Import utilities for dynamic numbers
import { generateWhatsAppLink } from "@/lib/whatsapp"; 

export default function ProductCard({ product }: { product: Product }) {
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  // EDIT: Yahan price bhi pass kar rahe hain taake message complete jaye
  const orderViaWhatsApp = generateWhatsAppLink(product.name, product.price);

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <article
      className="isolate relative flex flex-col h-full min-h-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transform-gpu will-change-transform"
    >
      {/* IMAGE SECTION */}
      <div className="relative isolate flex-shrink-0 w-full aspect-square bg-gray-100 overflow-hidden">
        <Link
          href={`/shop/${product.slug}`}
          className="block absolute inset-0 z-0"
          aria-label={`View ${product.name}`}
        >
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={() => setImageError(true)}
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#00b140]/20 to-[#FFD700]/20 flex items-center justify-center">
              <span className="text-4xl">💄</span>
            </div>
          )}
        </Link>

        {/* Badges */}
        {(product.isNew || product.isBestSeller) && (
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-1 pointer-events-none">
            {product.isNew && (
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white bg-[#00b140] rounded-full">
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black bg-[#FFD700] rounded-full">
                Best
              </span>
            )}
          </div>
        )}

        {!product.inStock && (
          <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center pointer-events-none">
            <span className="px-3 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* CONTENT SECTION */}
      <div className="relative isolate flex flex-col flex-1 min-h-0 p-3 sm:p-4 overflow-hidden">
        <span className="flex-shrink-0 text-[10px] sm:text-xs font-bold text-[#00b140] uppercase tracking-wider truncate">
          {product.brand}
        </span>

        <Link href={`/shop/${product.slug}`} className="block mt-1 mb-2">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight line-clamp-2 min-h-[2.5rem] sm:min-h-[2.75rem] overflow-hidden">
            {product.name}
          </h3>
        </Link>

        <div className="flex-shrink-0 flex items-center justify-between gap-2 mb-3">
          <span className="text-base sm:text-lg font-black text-gray-900 truncate">
            Rs. {product.price.toLocaleString()}
          </span>
          <div className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 bg-gray-50 rounded-full">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold text-gray-600">
              {product.rating}
            </span>
          </div>
        </div>

        <div className="flex-1 min-h-0" />

        {/* Action Buttons */}
        <div className="flex-shrink-0 flex items-stretch gap-2 mt-auto">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`
              flex-1 flex items-center justify-center gap-2 h-10 sm:h-11 px-3 text-[10px] sm:text-xs font-bold uppercase tracking-wide rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
              ${justAdded ? "bg-black text-white focus:ring-black" : "bg-[#00b140] text-white hover:bg-black focus:ring-[#00b140]"}
            `}
          >
            {justAdded ? (
              <Check className="h-4 w-4 flex-shrink-0" />
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 flex-shrink-0 hidden sm:block" />
                <span>Add to Cart</span>
              </>
            )}
          </button>

          {/* EDIT: Ye button ab Order Number (03242162485) par message bheje ga */}
          <a
            href={orderViaWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center justify-center w-10 sm:w-11 h-10 sm:h-11 border border-[#00b140]/30 rounded-xl text-[#00b140] bg-white transition-all duration-200 hover:bg-[#00b140] hover:text-white"
          >
            <MessageCircle className="h-5 w-5 flex-shrink-0" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
    return (
      <div className="isolate relative flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="relative flex-shrink-0 w-full aspect-square bg-gray-200 animate-pulse" />
        <div className="flex flex-col flex-1 p-3 sm:p-4">
          <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
          <div className="mt-2 space-y-1.5">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex items-center justify-between mt-3 mb-3">
            <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-12 bg-gray-200 rounded-full animate-pulse" />
          </div>
          <div className="flex-1" />
          <div className="flex gap-2 mt-auto">
            <div className="flex-1 h-10 sm:h-11 bg-gray-200 rounded-xl animate-pulse" />
            <div className="w-10 sm:w-11 h-10 sm:h-11 bg-gray-200 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    );
}