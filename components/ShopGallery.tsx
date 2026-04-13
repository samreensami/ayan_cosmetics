"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";


const galleryImages = [
  {
    src: "/images/products/box1.jpg",
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
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Shop</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Shop NO-G-16, Saeed Shopping Mall / Saima Mall, Rashid Minhas Road, Karachi
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <span className="text-white font-medium">View Full</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white">
            <X size={40} />
          </button>

          <button onClick={(e) => { e.stopPropagation(); navigate("prev"); }} className="absolute left-6 text-white">
            <ChevronLeft size={50} />
          </button>

          <button onClick={(e) => { e.stopPropagation(); navigate("next"); }} className="absolute right-6 text-white">
            <ChevronRight size={50} />
          </button>

          <div className="max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              width={1200}
              height={800}
              className="rounded-2xl"
            />
            <p className="text-white text-center mt-6 text-xl">
              {galleryImages[currentIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}