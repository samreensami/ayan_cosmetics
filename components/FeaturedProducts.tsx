"use client";

import { getFeaturedProducts } from "@/lib/products";
import ProductCard, { ProductCardSkeleton } from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeaturedProductsProps {
  title?: string;
  limit?: number;
  showViewAll?: boolean;
}

export default function FeaturedProducts({
  title = "Featured Products",
  limit = 8,
  showViewAll = true,
}: FeaturedProductsProps) {
  const products = getFeaturedProducts(limit);

  return (
    <section className="relative py-28 overflow-hidden bg-black">
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/products/shopbg.png" 
          alt="Ayan Cosmetics Background" 
          fill 
          className="object-cover opacity-60 scale-105" 
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      <div className="container-custom relative z-10">
        {/* 2. Header Section - Error Fixed Here */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20 border-l-8 border-[#529538] pl-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[12px] font-black text-[#529538] uppercase tracking-[0.6em] mb-4">
              Premium Beauty Selection
            </p>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85]">
              THE <br/> <span className="text-gray-300">COLLECTION</span>
            </h2>
          </motion.div>

          {showViewAll && (
            <Link
              href="/shop"
              className="group relative inline-flex items-center justify-center px-10 py-4 font-black uppercase tracking-[0.3em] text-[13px] transition-all duration-500"
            >
              <span className="absolute inset-0 bg-[#529538] transition-transform duration-500 group-hover:scale-105"></span>
              <span className="relative flex items-center gap-3 text-white">
                Visit Our Shop
                <motion.span 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </span>
              <span className="absolute -bottom-2 -right-2 w-full h-full border border-white/30 group-hover:border-[#529538] transition-all duration-500"></span>
            </Link>
          )}
        </div> 

        {/* 3. Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products && products.length > 0 ? (
            products.map((product) =>
              product?.id ? (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -15 }}
                  className="bg-green-800 p-2 shadow-2xl transition-all duration-500"
                >
                  <ProductCard product={product} />
                </motion.div>
              ) : null
            )
          ) : (
            [...Array(limit)].map((_, i) => (
              <ProductCardSkeleton key={`skeleton-${i}`} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}