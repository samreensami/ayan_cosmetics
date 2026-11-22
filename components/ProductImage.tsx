"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductMedia from "@/components/ProductMedia";
import type { MediaFit } from "@/lib/media";

/**
 * ProductImage Component
 *
 * A client component that handles image loading and errors gracefully
 * Shows a placeholder when the image fails to load
 */

interface ProductImageProps {
  src: string;
  alt: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  priority?: boolean;
  /** "showcase" for wide in-store photos such as beauty boxes */
  fit?: MediaFit;
}

export default function ProductImage({
  src,
  alt,
  isNew,
  isBestSeller,
  priority = false,
  fit = "cover",
}: ProductImageProps) {
  return (
    <div className="product-frame relative aspect-[4/5] overflow-hidden rounded-3xl">
      <ProductMedia
        src={src}
        alt={alt}
        fit={fit}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={priority}
        hoverZoom={false}
      />

      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {isNew && (
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">New in</span>
        )}
        {isBestSeller && (
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">Bestseller</span>
        )}
      </div>
    </div>
  );
}

/**
 * ProductThumbnail Component for gallery thumbnails
 */
interface ProductThumbnailProps {
  src: string;
  alt: string;
  index: number;
  isActive?: boolean;
  onClick?: () => void;
}

export function ProductThumbnail({
  src,
  alt,
  index,
  isActive = false,
  onClick,
}: ProductThumbnailProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View photo ${index + 1}`}
      className={`product-frame relative h-24 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
        isActive ? "border-foreground" : "border-transparent hover:border-border"
      }`}
    >
      {imageError ? (
        <div className="flex h-full w-full items-center justify-center text-xs text-neutral-500">
          {index + 1}
        </div>
      ) : (
        <Image
          src={src}
          alt={`${alt} - View ${index + 1}`}
          fill
          className="object-cover"
          sizes="80px"
          onError={() => setImageError(true)}
        />
      )}
    </button>
  );
}
