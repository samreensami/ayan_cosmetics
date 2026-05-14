"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Display-only StarRating component (default export)
interface StarRatingProps {
  rating: number;
  reviewCount?: number; // FIXED: Added this to resolve image_e79d09.png error
  showCount?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function StarRating({
  rating,
  reviewCount, // FIXED: Added this
  showCount = false,
  size = "md",
  className,
}: StarRatingProps) {
  const sizeClasses = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" };
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {stars.map((star) => (
          <Star
            key={star}
            className={cn(
              sizeClasses[size],
              "transition-colors duration-200",
              star <= rating
                ? "text-[#529538] fill-[#529538]"
                : "text-gray-300 fill-gray-300"
            )}
          />
        ))}
      </div>
      
      {/* FIXED: Logic to show rating and review count if needed */}
      {(showCount || reviewCount !== undefined) && (
        <div className="ml-2 flex items-center gap-2 text-sm text-gray-500">
          {showCount && <span>{rating.toFixed(1)}/5</span>}
          {reviewCount !== undefined && (
            <span className="border-l border-gray-300 pl-2">
              {reviewCount} Reviews
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// Interactive star rating component (named export)
interface InteractiveStarRatingProps {
  value: number;
  updateAction: (rating: number) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function InteractiveStarRating({
  value,
  updateAction,
  size = "lg",
  className,
}: InteractiveStarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const sizeClasses = { sm: "h-5 w-5", md: "h-7 w-7", lg: "h-10 w-10" };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = (hoverValue ?? value) >= star;
        return (
          <button
            key={star}
            type="button"
            onClick={() => updateAction && updateAction(star)}
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(null)}
            className="transition-transform hover:scale-110 active:scale-95 outline-none"
          >
            <Star
              className={cn(
                sizeClasses[size],
                "transition-all duration-300",
                isActive
                  ? "text-[#529538] fill-[#529538] drop-shadow-[0_0_8px_rgba(82,149,56,0.5)]"
                  : "text-zinc-700 fill-zinc-900 hover:text-[#529538]/50"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}