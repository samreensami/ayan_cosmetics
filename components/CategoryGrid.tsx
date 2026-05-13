"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart, Droplets, Sparkles, SprayCan,
  Eye, ShoppingBag, Layers, Scissors,
} from "lucide-react";

const categories = [
  { name: "Lipstick",       slug: "Lipstick",       icon: Heart       },
  { name: "Foundation",     slug: "Foundation",     icon: Droplets    },
  { name: "Skincare",       slug: "Skincare",       icon: Sparkles    },
  { name: "Perfumes",       slug: "Perfume",        icon: SprayCan    },
  { name: "Eye Makeup",     slug: "Eyeshadow",      icon: Eye         },
  { name: "Cosmetic Bags",  slug: "Cosmetic+Bags",  icon: ShoppingBag },
  { name: "Mascara",        slug: "Mascara",        icon: Layers      },
  { name: "Haircare",       slug: "Haircare",       icon: Scissors    },
];

const row1 = [...categories.slice(0, 4), ...categories.slice(0, 4)];
const row2 = [...categories.slice(4, 8), ...categories.slice(4, 8)];

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-[#529538] overflow-hidden border-t border-white/10"> 
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight uppercase">
            Shop by Category
          </h2>
          <div className="h-1 w-24 bg-white/30 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-10">
          {/* Row 1: Right to Left */}
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            >
              {row1.map((category, index) => (
                <CategoryCard key={`row1-${index}`} category={category} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            >
              {row2.map((category, index) => (
                <CategoryCard key={`row2-${index}`} category={category} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/shop"
            className="px-10 py-3 bg-white text-[#529538] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 inline-block rounded-none shadow-lg"
          >
            View All Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: any }) {
  const Icon = category.icon;
  return (
    <Link
      href={`/shop?category=${category.slug}`}
      className="
        flex flex-col items-center justify-center gap-4
        w-[200px] h-[160px] rounded-xl border border-white/20
        bg-white/10 backdrop-blur-md
        hover:bg-white hover:scale-105
        transition-all duration-500 group
      "
    >
      <Icon
        className="h-10 w-10 text-white group-hover:text-[#529538] transition-colors duration-300"
        strokeWidth={1.2}
      />
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-white group-hover:text-[#529538] transition-colors duration-300">
        {category.name}
      </span>
    </Link>
  );
}