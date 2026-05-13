"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/products/box1.png",
    alt: "Shop Interior",
    caption: "Experience the vibrant and welcoming atmosphere of our main shop, where beauty meets elegance",
  },
  {
    src: "/images/products/box2.jpg",
    alt: "Makeup Display",
    caption: "A wide range of beauty products for every need",
  },
  {
    src: "/images/products/box3.jpg",
    alt: "Fragrance Display",
    caption: "Exclusive fragrances for every occasion",
  },
  {
    src: "/images/products/box4.jpg",
    alt: "Makeup Display",
    caption: "Organized and elegant storage solutions",
  },
];

export default function ShopGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigate = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <Image src="/images/products/shopbg.png" fill className="object-cover" alt="bg" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mb-16 border-l-8 border-[#529538] pl-8">
          {/* Left to Right Animation for Heading */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
              Visit Our <span className="text-[#529538]">Shop</span>
            </h2>
            <p className="text-gray-400 uppercase tracking-widest text-sm max-w-2xl">
              Shop No- G-16 Saima shopping mall main Rashid Minhas Road Karachi
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {galleryImages.map((image, index) => (
    <motion.button
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => openLightbox(index)}
      // Border color yahan change kar di hai: border-[#529538]/30
      className="group relative aspect-[4/5] overflow-hidden border border-[#529538]/30 bg-zinc-900 shadow-2xl transition-all duration-500 hover:border-[#529538]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        // 'grayscale' class hata di hai taake colors nazar ayein
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 25vw"
      />

      {/* View Space Button Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-[2px]">
        <span className="text-white font-black uppercase tracking-widest border border-[#529538] bg-[#529538]/20 px-6 py-2">
          View Space
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <p className="text-white text-xs font-bold uppercase tracking-wider leading-relaxed">
          {image.caption}
        </p>
      </div>
    </motion.button>
  ))}
</div>
      </div>

      {/* Lightbox - Luxury Mode */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-8 right-8 text-white hover:text-[#529538] transition-colors z-[110]">
            <X size={48} strokeWidth={1} />
          </button>

          <button onClick={(e) => { e.stopPropagation(); navigate("prev"); }} className="absolute left-8 text-white hover:text-[#529538] transition-colors hidden md:block">
            <ChevronLeft size={64} strokeWidth={1} />
          </button>

          <button onClick={(e) => { e.stopPropagation(); navigate("next"); }} className="absolute right-8 text-white hover:text-[#529538] transition-colors hidden md:block">
            <ChevronRight size={64} strokeWidth={1} />
          </button>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-6xl w-full relative" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video md:aspect-[16/9] overflow-hidden rounded-sm border border-white/10">
                <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-contain"
                />
            </div>
            <div className="mt-8 text-center">
                <p className="text-[#529538] font-black uppercase tracking-[0.4em] text-sm mb-2">Ayan Store Karachi</p>
                <p className="text-white text-2xl font-light tracking-wide max-w-3xl mx-auto italic">
                "{galleryImages[currentIndex].caption}"
                </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}