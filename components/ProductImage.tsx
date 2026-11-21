"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

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
}

export default function ProductImage({
  src,
  alt,
  isNew,
  isBestSeller,
  priority = false,
}: ProductImageProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="product-frame relative aspect-[4/5] overflow-hidden rounded-3xl">
      {imageError ? (
        // Fallback placeholder when image fails to load
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <ImageIcon className="mb-4 h-16 w-16 text-neutral-300" />
          <span className="max-w-[220px] px-4 text-center text-sm text-neutral-500">
            {alt}
          </span>
          <span className="mt-2 text-xs text-neutral-400">
            Photo coming soon
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          onError={() => setImageError(true)}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Ams0t0JRgjCgDxiqoowzp//Z"
        />
      )}

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
