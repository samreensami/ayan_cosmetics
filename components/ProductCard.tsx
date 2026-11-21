"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, MessageCircle, Plus } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/CartContext";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  if (!product || !product.id) return null;

  // Prices are wired in Phase 4 (see SPEC.md); until then the WhatsApp message omits price.
  const orderViaWhatsApp = generateWhatsAppLink(product.name);

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const badge = product.isNew ? "New in" : product.isBestSeller ? "Bestseller" : null;

  return (
    <article className="group flex h-full flex-col">
      {/* Image — neutral frame, never tinted by theme */}
      <Link
        href={`/shop/${product.slug}`}
        className="product-frame relative block aspect-[4/5] overflow-hidden rounded-2xl"
        aria-label={product.name}
      >
        {!imageError ? (
          <Image
            src={product.image}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-sm text-neutral-500">
            Photo coming soon
          </span>
        )}

        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-neutral-900 backdrop-blur">
            {badge}
          </span>
        )}
        {!product.inStock && (
          <span className="absolute inset-x-3 bottom-3 rounded-full bg-neutral-900/80 py-1.5 text-center text-xs text-white">
            Out of stock
          </span>
        )}
      </Link>

      {/* Text */}
      <div className="mt-3 flex flex-1 flex-col">
        <p className="text-xs text-muted-foreground">{product.brand || "AYAN Cosmetics"}</p>
        <h3 className="mt-1 line-clamp-2 font-sans text-sm font-medium leading-snug md:text-[15px]">
          <Link href={`/shop/${product.slug}`} className="hover:underline underline-offset-4">
            {product.name}
          </Link>
        </h3>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-2 pt-4">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={cn(
              "inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full text-xs font-medium transition-colors md:text-sm",
              justAdded
                ? "bg-primary/15 text-primary"
                : "bg-primary text-primary-foreground hover:opacity-90",
              "disabled:cursor-not-allowed disabled:opacity-40"
            )}
          >
            {justAdded ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" /> Added
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" aria-hidden="true" /> Add to bag
              </>
            )}
          </button>

          <a
            href={orderViaWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-whatsapp hover:bg-whatsapp hover:text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col">
      <div className="aspect-[4/5] w-full rounded-2xl bg-secondary" />
      <div className="mt-3 h-3 w-1/3 rounded bg-secondary" />
      <div className="mt-2 h-4 w-3/4 rounded bg-secondary" />
      <div className="mt-4 h-10 w-full rounded-full bg-secondary" />
    </div>
  );
}
