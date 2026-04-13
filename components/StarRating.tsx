"use client";

import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * StarRating Component for AYAN Cosmetics
 *
 * Displays a 5-star rating system with gold stars
 * Used on product cards and product detail pages
 *
 * Props:
 * - rating: number (0-5, can be decimal like 4.5)
 * - reviewCount: optional number to display total reviews
 * - size: 'sm' | 'md' | 'lg' for different star sizes
 * - showCount: boolean to show/hide review count
 * - interactive: boolean for interactive rating input
 * - onRatingChange: callback for interactive mode
 */

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
  const [hoverRating, setHoverRating] = React.useState<number | null>(null);

  // Size configurations
  const sizeClasses = {
    sm: "h-3.5 w-3.5",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  // Calculate which rating to display (hover or actual)
  const displayRating = hoverRating !== null ? hoverRating : rating;

  // Handle star click in interactive mode
  const handleStarClick = (starIndex: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starIndex + 1);
    }
  };

  // Render a single star
  const renderStar = (index: number) => {
    const starValue = index + 1;
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
          "relative",
          interactive && "cursor-pointer hover:scale-110 transition-transform",
          !interactive && "cursor-default"
        )}
        aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
      >
        {/* Empty star (background) */}
        <Star
          className={cn(sizeClasses[size], "text-gray-300 fill-gray-300")}
        />
        {/* Filled star (overlay with clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${fillPercentage}%` }}
        >
          <Star
            className={cn(sizeClasses[size], "text-gold fill-gold")}
          />
        </div>
      </button>
    );
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map(renderStar)}
      </div>

      {/* Rating value and review count */}
      {showCount && (
        <div className={cn("flex items-center gap-1 ml-1", textSizeClasses[size])}>
          <span className="font-medium text-gray-700">
            {rating.toFixed(1)}
          </span>
          {reviewCount !== undefined && (
            <span className="text-gray-500">
              ({reviewCount.toLocaleString()} {reviewCount === 1 ? "review" : "reviews"})
            </span>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Interactive Star Rating for Review Form
 * Separate component for cleaner review submission
 */
interface InteractiveStarRatingProps {
  value: number;
  onChange: (rating: number) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function InteractiveStarRating({
  value,
  onChange,
  size = "lg",
  className,
}: InteractiveStarRatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = (hoverValue ?? value) >= star;
        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(null)}
            className="transition-transform hover:scale-110"
            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
          >
            <Star
              className={cn(
                sizeClasses[size],
                "transition-colors",
                isActive
                  ? "text-gold fill-gold"
                  : "text-gray-300 fill-gray-300 hover:text-gold/50"
              )}
            />
          </button>
        );
      })}
      {value > 0 && (
        <span className="ml-2 text-sm text-gray-600">
          {value} {value === 1 ? "star" : "stars"}
        </span>
      )}
    </div>
  );
}
