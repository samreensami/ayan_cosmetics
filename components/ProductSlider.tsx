"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ShoppingCart,
  Check,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/CartContext";
import { generateWhatsAppLink } from "@/lib/whatsapp";

// ─── Slider Card ──────────────────────────────────────────────────────────────

function SliderCard({
  product,
  isCenter,
}: {
  product: Product;
  isCenter: boolean;
}) {
  const [imageError, setImageError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();
  const whatsappLink = generateWhatsAppLink(product.name, product.price);

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <motion.article
      animate={{
        scale: isCenter ? 1.05 : 0.88,
        opacity: isCenter ? 1 : 0.58,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative flex flex-col bg-white rounded-3xl overflow-hidden h-full"
      style={{
        boxShadow: isCenter
          ? "0 24px 64px rgba(0,177,64,0.13), 0 8px 32px rgba(0,0,0,0.11)"
          : "0 4px 16px rgba(0,0,0,0.06)",
      }}
    >
      {/* ── Image Area (≈70% of card) ── */}
      <div className="relative mx-3 mt-3 aspect-[3/4] bg-[#F5F5F5] rounded-2xl overflow-hidden flex-shrink-0">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-5"
            sizes="(max-width: 768px) 90vw, 35vw"
            onError={() => setImageError(true)}
            priority={isCenter}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#00b140]/10 to-[#FFD700]/10 flex items-center justify-center">
            <span className="text-7xl">💄</span>
          </div>
        )}

        {/* Badges */}
        {(product.isNew || product.isBestSeller) && (
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
            {product.isNew && (
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white bg-[#00b140] rounded-full shadow">
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black bg-[#FFD700] rounded-full shadow">
                Best Seller
              </span>
            )}
          </div>
        )}

        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
            <span className="px-4 py-1.5 text-xs font-black text-white bg-red-500 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* ── Content Area (≈30% of card) ── */}
      <div className="flex flex-col flex-1 px-5 py-4">
        <span className="text-[10px] font-black text-[#00b140] uppercase tracking-widest">
          {product.brand}
        </span>

        <Link href={`/shop/${product.slug}`} className="block mt-1.5 mb-3">
          <h3 className="text-sm md:text-base font-black text-gray-900 uppercase tracking-wide leading-snug line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-4">
          <span className="text-base md:text-lg font-black text-gray-900">
            Rs.&nbsp;{product.price.toLocaleString()}
          </span>
          <div className="flex items-center gap-1 bg-gray-50 rounded-full px-2.5 py-1">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-black text-gray-600">
              {product.rating}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={[
              "flex-1 flex items-center justify-center gap-2 h-11 md:h-12 px-3 text-xs md:text-sm font-black uppercase tracking-wider rounded-2xl transition-all duration-200 focus:outline-none",
              justAdded
                ? "bg-black text-white"
                : "bg-[#00b140] text-white hover:bg-black",
              !product.inStock ? "opacity-40 cursor-not-allowed" : "",
            ].join(" ")}
          >
            {justAdded ? (
              <Check className="h-5 w-5 flex-shrink-0" />
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span>Add to Cart</span>
              </>
            )}
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 md:w-12 h-11 md:h-12 border-2 border-[#00b140]/25 rounded-2xl text-[#00b140] hover:bg-[#00b140] hover:text-white hover:border-transparent transition-all duration-200"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Product Slider ────────────────────────────────────────────────────────────

export default function ProductSlider({ products }: { products: Product[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      setContainerWidth(el.offsetWidth);
      setIsMobile(window.innerWidth < 768);
      setVisible(true);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (!products.length) return null;

  const GAP = 48; // gap-12 = 3rem
  const cardWidth = containerWidth
    ? isMobile
      ? containerWidth * 0.86
      : (containerWidth - GAP * 2) / 3
    : 340;

  const step = cardWidth + GAP;
  const trackX = containerWidth
    ? -(currentIndex * step) + containerWidth / 2 - cardWidth / 2
    : 0;

  const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goNext = () =>
    setCurrentIndex((i) => Math.min(products.length - 1, i + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  return (
    <div className="relative px-7 md:px-10">
      {/* Slider Track */}
      <div
        ref={containerRef}
        className="overflow-hidden py-12 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex items-stretch"
          animate={{ x: trackX }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 28,
            mass: 0.7,
          }}
          style={{ gap: GAP }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0"
              style={{ width: cardWidth }}
            >
              <SliderCard product={product} isCenter={index === currentIndex} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Left Arrow ── */}
      <button
        onClick={goPrev}
        disabled={currentIndex === 0}
        aria-label="Previous product"
        className={[
          "absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 transition-all duration-200",
          currentIndex === 0
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-800 hover:bg-[#00b140] hover:text-white hover:border-[#00b140] hover:shadow-xl active:scale-95",
        ].join(" ")}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* ── Right Arrow ── */}
      <button
        onClick={goNext}
        disabled={currentIndex === products.length - 1}
        aria-label="Next product"
        className={[
          "absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 transition-all duration-200",
          currentIndex === products.length - 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-800 hover:bg-[#00b140] hover:text-white hover:border-[#00b140] hover:shadow-xl active:scale-95",
        ].join(" ")}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* ── Progress Dots ── */}
      <div className="flex justify-center items-center gap-2 mt-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to product ${index + 1}`}
            className={[
              "rounded-full transition-all duration-300",
              index === currentIndex
                ? "w-7 h-2 bg-[#00b140]"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
