"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
      {imageError ? (
        // Fallback placeholder when image fails to load
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-gray-100 to-gold/10 flex flex-col items-center justify-center">
          <ImageIcon className="h-20 w-20 text-gray-300 mb-4" />
          <span className="text-sm text-gray-400 text-center px-4 max-w-[200px]">
            {alt}
          </span>
          <span className="text-xs text-gray-300 mt-2">
            (Image coming soon)
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
        {isNew && <Badge variant="new">New Arrival</Badge>}
        {isBestSeller && <Badge variant="bestseller">Best Seller</Badge>}
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
      onClick={onClick}
      className={`relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border-2 transition-colors ${
        isActive ? "border-primary" : "border-transparent hover:border-gray-300"
      }`}
    >
      {imageError ? (
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center text-xs text-gray-400">
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
