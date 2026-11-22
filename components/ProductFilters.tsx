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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <span className="font-bold text-foreground">Filters</span>
          <span className="text-sm text-muted-foreground font-medium">
            ({filteredCount} of {totalProducts} products)
          </span>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-destructive hover:bg-destructive">
            Clear All
          </Button>
        )}
      </div>

      <div>
        <h3 className="font-bold text-foreground mb-3">Shop by Concern</h3>
        <div className="flex flex-wrap gap-2">
          {concernOptions.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => toggleConcern(value)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold border transition-all shadow-sm",
                filters.concerns.includes(value)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-primary/30 hover:border-primary hover:text-primary"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-bold text-foreground mb-2">Category</label>
          <Select value={filters.category} onValueChange={(value) => updateFilter("category", value)}>
            <SelectTrigger className="bg-card border-primary/30">
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
          <label className="block text-sm font-bold text-foreground mb-2">Brand</label>
          <Select value={filters.brand} onValueChange={(value) => updateFilter("brand", value)}>
            <SelectTrigger className="bg-card border-primary/30">
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
          <label className="block text-sm font-bold text-foreground mb-2">Sort By</label>
          <Select value={filters.sortBy} onValueChange={(value) => updateFilter("sortBy", value)}>
            <SelectTrigger className="bg-card border-primary/30">
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
        <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/10">
          {filters.category && filters.category !== "all" && (
            <Badge className="bg-primary text-primary-foreground gap-1">
              {filters.category}
              <button type="button" onClick={() => updateFilter("category", "")} aria-label="Remove category filter" className="-my-1.5 -mr-2 ml-0.5 rounded-full p-1.5 hover:bg-foreground/10"><X className="h-3.5 w-3.5" /></button>
            </Badge>
          )}
          {filters.brand && filters.brand !== "all" && (
            <Badge className="bg-gold text-foreground gap-1">
              {filters.brand}
              <button type="button" onClick={() => updateFilter("brand", "")} aria-label="Remove brand filter" className="-my-1.5 -mr-2 ml-0.5 rounded-full p-1.5 hover:bg-foreground/10"><X className="h-3.5 w-3.5" /></button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}