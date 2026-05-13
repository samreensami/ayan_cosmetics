"use client";

import React from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllBrands, getAllCategories, Concern } from "@/lib/products";
import { cn } from "@/lib/utils";

export interface FilterState {
  category: string;
  brand: string;
  concerns: Concern[];
  sortBy: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  // Prop ka naam badal kar updateAction kar diya taake serialization error khatam ho jaye
  updateAction: (filters: FilterState) => void; 
  totalProducts: number;
  filteredCount: number;
}

const concernOptions: { value: Concern; label: string }[] = [
  { value: "All Skin Types", label: "All Skin Types" },
  { value: "Dry Skin", label: "Dry Skin" },
  { value: "Oily Skin", label: "Oily Skin" },
  { value: "Acne Prone", label: "Acne Prone" },
  { value: "Anti-Aging", label: "Anti-Aging" },
  { value: "Fragrance", label: "Fragrance" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

export default function ProductFilters({
  filters,
  updateAction, // Yahan bhi update kar diya
  totalProducts,
  filteredCount,
}: ProductFiltersProps) {
  const categories: string[] = getAllCategories();
  const brands = getAllBrands();

  const hasActiveFilters =
    filters.category !== "" ||
    filters.brand !== "" ||
    filters.concerns.length > 0;

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    updateAction({ ...filters, [key]: value });
  };

  const toggleConcern = (concern: Concern) => {
    const newConcerns = filters.concerns.includes(concern)
      ? filters.concerns.filter((c) => c !== concern)
      : [...filters.concerns, concern];
    updateFilter("concerns", newConcerns);
  };

  const clearFilters = () => {
    updateAction({
      category: "",
      brand: "",
      concerns: [],
      sortBy: "featured",
    });
  };

  return (
    <div className="space-y-6 p-6 bg-[#f7fff9] rounded-2xl border border-[#00b140]/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-[#00b140]" />
          <span className="font-bold text-gray-900">Filters</span>
          <span className="text-sm text-gray-500 font-medium">
            ({filteredCount} of {totalProducts} products)
          </span>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-[#e60012] hover:bg-red-50">
            Clear All
          </Button>
        )}
      </div>

      <div>
        <h3 className="font-bold text-gray-900 mb-3">Shop by Concern</h3>
        <div className="flex flex-wrap gap-2">
          {concernOptions.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => toggleConcern(value)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold border transition-all shadow-sm",
                filters.concerns.includes(value)
                  ? "bg-[#00b140] text-white border-[#00b140]"
                  : "bg-white text-gray-700 border-[#00b140]/30 hover:border-[#00b140] hover:text-[#00b140]"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
          <Select value={filters.category} onValueChange={(value) => updateFilter("category", value)}>
            <SelectTrigger className="bg-white border-[#00b140]/30">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Brand</label>
          <Select value={filters.brand} onValueChange={(value) => updateFilter("brand", value)}>
            <SelectTrigger className="bg-white border-[#00b140]/30">
              <SelectValue placeholder="All Brands" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>{brand}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Sort By</label>
          <Select value={filters.sortBy} onValueChange={(value) => updateFilter("sortBy", value)}>
            <SelectTrigger className="bg-white border-[#00b140]/30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-[#00b140]/10">
          {filters.category && filters.category !== "all" && (
            <Badge className="bg-[#00b140] text-white gap-1">
              {filters.category}
              <button onClick={() => updateFilter("category", "")} className="ml-1"><X className="h-3 w-3" /></button>
            </Badge>
          )}
          {filters.brand && filters.brand !== "all" && (
            <Badge className="bg-[#FFD700] text-black gap-1">
              {filters.brand}
              <button onClick={() => updateFilter("brand", "")} className="ml-1"><X className="h-3 w-3" /></button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}