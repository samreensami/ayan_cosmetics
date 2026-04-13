import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes with tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price in Pakistani Rupees (PKR)
 * @param price - The price as a number
 * @returns Formatted price string with PKR prefix
 */
export function formatPrice(price: number): string {
  return `PKR ${price.toLocaleString("en-PK")}`;
}

/**
 * Generate a URL-friendly slug from a string
 * @param text - The text to convert to slug
 * @returns URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}
