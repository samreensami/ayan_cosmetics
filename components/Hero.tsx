"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { generateGeneralWhatsAppLink } from "@/lib/whatsapp";

// Shared luxury fade-in-left animation factory
const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.95,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    delay,
  },
});

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* ── Background Image ── */}
      {!imgError ? (
        <Image
          src="/images/products/hero1.png"
          alt="AYAN Cosmetics – Dewy Glow Collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-right-top"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a00] via-[#003d00] to-[#00b140]" />
      )}

      {/* ── Overlays ── */}
      {/* Left-heavy gradient so right side (girl's face) stays clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10 z-10" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/70 to-transparent z-10" />

      {/* ── Content Grid ── */}
      {/*
        Desktop: 2-col grid. Text lives in col-1 (left ~45%).
        Right col is intentionally empty — the girl's face shows there.
        Mobile: single column, centered.
      */}
      <div className="relative z-20 h-full w-full grid grid-cols-1 md:grid-cols-[48%_52%]">

        {/* LEFT COLUMN — Text Block */}
        <div className="flex flex-col justify-center px-6 sm:px-8 md:pl-8 lg:pl-12
                        items-center text-center
                        md:items-start md:text-left">

          {/* Tag line */}
          <motion.p
            {...fadeLeft(0.1)}
            className="text-[#00b140] tracking-[0.35em] text-[10px] sm:text-xs md:text-sm
                       font-bold uppercase mb-4 md:mb-5"
          >
            Karachi&apos;s Premium Beauty Store
          </motion.p>

          {/* Main headline */}
          <motion.h1
            {...fadeLeft(0.3)}
            className="text-white font-black uppercase leading-[0.88] tracking-tighter
                       text-[2.4rem] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            THE SECRET TO
            <br />
            <span className="text-[#00b140]">KARACHI&apos;S</span>
            <br />
            BEST DEWY
            <br />
            GLOW
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...fadeLeft(0.55)}
            className="text-gray-300 mt-5 md:mt-6 max-w-xs md:max-w-sm
                       text-sm sm:text-base md:text-lg italic font-light"
          >
            Experience the AYAN Glass Skin Collection.
          </motion.p>

          {/* Buttons — move with text block */}
          <motion.div
            {...fadeLeft(0.75)}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10
                       w-full sm:w-auto"
          >
            <Link href="/shop" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto flex items-center justify-center gap-2
                           px-8 py-4 text-sm sm:text-base font-bold rounded-none
                           bg-black text-white border-2 border-black
                           hover:bg-[#00b140] hover:border-[#00b140]
                           transition-colors duration-300"
              >
                <ShoppingBag size={17} />
                Shop Now
              </button>
            </Link>

            <a
              href={generateGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button
                className="w-full sm:w-auto flex items-center justify-center gap-2
                           px-8 py-4 text-sm sm:text-base font-bold rounded-none
                           bg-transparent text-white border-2 border-white
                           hover:bg-white hover:text-black
                           transition-colors duration-300"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </button>
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — intentionally empty, shows the model/girl */}
      </div>
    </section>
  );
}
