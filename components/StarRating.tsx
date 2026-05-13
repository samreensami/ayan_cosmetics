"use client";

import React, { useState } from "react"; // React import fix
import { Star } from "lucide-react";     // Star icon import fix
import { cn } from "@/lib/utils";        // cn utility import fix

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  className?: string;
}

export default function StarRating({
  rating,
  reviewCount,
  size = "md",
  showCount = true,
  interactive = false,
  onRatingChange,
  className,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const displayRating = hoverRating !== null ? hoverRating : rating;

  const handleStarClick = (starIndex: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starIndex + 1);
    }
  };

  const renderStar = (index: number) => {
    const starValue = index + 1;
    const activeColor = "text-[#529538] fill-[#529538]"; 
    const fillPercentage = Math.min(Math.max(displayRating - index, 0), 1) * 100;

    return (
      <button
        key={index}
        type="button"
        onClick={() => handleStarClick(index)}
        onMouseEnter={() => interactive && setHoverRating(starValue)}
        onMouseLeave={() => interactive && setHoverRating(null)}
        disabled={!interactive}
        className={cn(
          "relative transition-all duration-300",
          interactive && "cursor-pointer hover:scale-125 active:scale-90",
          !interactive && "cursor-default"
        )}
      >
        <Star className={cn(sizeClasses[size], "text-zinc-700 fill-zinc-800")} />
        <div
          className="absolute inset-0 overflow-hidden transition-all duration-500"
          style={{ width: `${fillPercentage}%` }}
        >
          <Star className={cn(sizeClasses[size], activeColor)} />
        </div>
      </button>
    );
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map(renderStar)}
      </div>

      {showCount && (
        <div className="flex items-center gap-1.5 pt-0.5">
          <span className="text-[11px] font-black text-white tracking-tighter">
            {rating.toFixed(1)}
          </span>
          {reviewCount !== undefined && (
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest border-l border-zinc-700 pl-2">
              {reviewCount} Reviews
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------
// Interactive Version for Forms
// ---------------------------------------------------------

interface InteractiveStarRatingProps {
  value: number;
  onSelect: (rating: number) => void; 
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function InteractiveStarRating({
  value,
  onSelect,
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
            onClick={() => onSelect && onSelect(star)}
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