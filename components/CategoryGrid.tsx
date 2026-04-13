"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Droplets, Eye, Heart, ShoppingBag, Scissors, SprayCan } from "lucide-react";

/**
 * CategoryGrid Component for Home Page
 *
 * Displays product categories with icons in a visually appealing grid
 * Links to the shop page with category filter applied
 *
 * Categories based on spec:
 * - Lipstick, Foundation, Mascara, Eyeshadow, Blush, Concealer
 * - Highlighter, Skincare, Haircare, Perfume, Cosmetic Bags
 */

// Category configuration with icons and colors
const categories = [
  {
    name: "Lipstick",
    slug: "Lipstick",
    icon: Heart,
    color: "bg-red-50 text-red-500 hover:bg-red-100",
    borderColor: "border-red-200",
  },
  {
    name: "Foundation",
    slug: "Foundation",
    icon: Droplets,
    color: "bg-amber-50 text-amber-600 hover:bg-amber-100",
    borderColor: "border-amber-200",
  },
  {
    name: "Skincare",
    slug: "Skincare",
    icon: Sparkles,
    color: "bg-green-50 text-green-500 hover:bg-green-100",
    borderColor: "border-green-200",
  },
  {
    name: "Perfumes",
    slug: "Perfume",
    icon: SprayCan,
    color: "bg-purple-50 text-purple-500 hover:bg-purple-100",
    borderColor: "border-purple-200",
  },
  {
    name: "Eye Makeup",
    slug: "Eyeshadow",
    icon: Eye,
    color: "bg-pink-50 text-pink-500 hover:bg-pink-100",
    borderColor: "border-pink-200",
  },
  {
    name: "Cosmetic Bags",
    slug: "Cosmetic+Bags",
    icon: ShoppingBag,
    color: "bg-blue-50 text-blue-500 hover:bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    name: "Mascara",
    slug: "Mascara",
    icon: Eye,
    color: "bg-gray-50 text-gray-600 hover:bg-gray-100",
    borderColor: "border-gray-200",
  },
  {
    name: "Haircare",
    slug: "Haircare",
    icon: Scissors,
    color: "bg-orange-50 text-orange-500 hover:bg-orange-100",
    borderColor: "border-orange-200",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of genuine cosmetics, fragrances, and beauty accessories
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                className={`group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl border ${category.borderColor} ${category.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className="mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
                </div>

                {/* Category Name */}
                <h3 className="font-medium text-gray-800 text-sm md:text-base text-center">
                  {category.name}
                </h3>
              </Link>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Products
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
