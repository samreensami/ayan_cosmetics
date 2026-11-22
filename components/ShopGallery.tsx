"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LabelHeading from "@/components/LabelHeading";

const galleryImages = [
  {
    src: "/images/products/box1.png",
    alt: "Inside the AYAN Cosmetics shop at Saima Mall, Karachi",
    caption: "Our counter at Saima Mall",
  },
  {
    src: "/images/products/box2.jpg",
    alt: "Branded makeup display at AYAN Cosmetics",
    caption: "Makeup from brands you know",
  },
  {
    src: "/images/products/box3.jpg",
    alt: "Perfume and fragrance display at AYAN Cosmetics",
    caption: "Fragrances for every occasion",
  },
  {
    src: "/images/products/box4.jpg",
    alt: "Makeup counter at the AYAN Cosmetics shop",
    caption: "Try before you buy, in store",
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Saima+Shopping+Mall+Rashid+Minhas+Road+Karachi";

export default function ShopGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const navigate = useCallback((direction: "next" | "prev") => {
    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % galleryImages.length
        : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  // Lock page scroll + keyboard controls while the lightbox is open.
  useEffect(() => {
    if (!lightboxOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, closeLightbox, navigate]);

  const current = galleryImages[currentIndex];

  return (
    <section className="relative py-16 md:py-24" aria-labelledby="visit-title">
      {/* 3D stage anchor with fill 0: products bow out before the gallery */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40" data-stage="gallery" data-stage-set="perfume" data-stage-fill="0" data-stage-rot="8.2" aria-hidden="true" />
      <div className="container-custom">
        <div className="mb-8 grid gap-6 md:mb-12 md:grid-cols-2 md:items-end">
          <div>
            <LabelHeading id="visit-title" tilt={-1}>
              Come see us in Saima Mall
            </LabelHeading>
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground md:text-right">
            <p>Shop G-16, Saima Shopping Mall, Main Rashid Minhas Road, Karachi</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-foreground underline underline-offset-4 hover:text-primary"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Get directions
            </a>
          </div>
        </div>

        {/* Asymmetric gallery: one large frame, three smaller */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`Open photo: ${image.caption}`}
              className={
                "group relative overflow-hidden rounded-2xl bg-secondary text-left " +
                (index === 0
                  ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto"
                  : "aspect-square " + (index === 3 ? "md:col-span-2 md:aspect-[2/1]" : ""))
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10 text-sm text-white">
                {image.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close photo"
              className="absolute right-4 top-4 rounded-full p-2 text-white/80 hover:text-white md:right-8 md:top-8"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
              aria-label="Previous photo"
              className="absolute left-2 rounded-full p-2 text-white/80 hover:text-white md:left-8"
            >
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
              aria-label="Next photo"
              className="absolute right-2 rounded-full p-2 text-white/80 hover:text-white md:right-8"
            >
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>

            <figure className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
              </div>
              <figcaption className="mt-4 text-center font-display text-xl text-white">{current.caption}</figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
