"use client";

import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { generateGeneralWhatsAppLink } from "@/lib/whatsapp";

// --- Orbiting Item Component ---
interface OrbitingItemProps {
  src: string;
  alt: string;
  angle: number;
  radius: number; // Ab radius dynamic pass hoga
}

function OrbitingItem({ src, alt, angle, radius }: OrbitingItemProps) {
  const x = useMemo(() => radius * Math.cos(angle * (Math.PI / 180)), [radius, angle]);
  const y = useMemo(() => radius * Math.sin(angle * (Math.PI / 180)), [radius, angle]);

  return (
    <div
      className="absolute p-1.5 sm:p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl transition-all duration-500"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {/* Mobile par w-12 aur computer par w-24 */}
      <div className="relative w-12 h-12 sm:w-24 sm:h-24">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  // Mobile responsive state
  const [radius, setRadius] = useState(420);

  useEffect(() => {
    const handleResize = () => {
      // Agar screen mobile hai toh radius 150-180 rakhein, warna 420
      setRadius(window.innerWidth < 768 ? 160 : 420);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const orbitItems = [
    { src: "/images/products/hs1.png", alt: "Product 1", angle: 0 },
    { src: "/images/products/hs2.png", alt: "Product 2", angle: 60 },
    { src: "/images/products/hs3.png", alt: "Product 3", angle: 120 },
    { src: "/images/products/hs4.png", alt: "Product 4", angle: 180 },
    { src: "/images/products/hs5.png", alt: "Product 5", angle: 240 },
    { src: "/images/products/hs6.png", alt: "Product 6", angle: 300 },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden hero-gradient-light bg-white flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,177,64,0.2),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,215,0,0.15),transparent_50%)] z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-screen">
        
        {/* ORBIT SYSTEM */}
        <div className="absolute flex items-center justify-center w-full h-full pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative flex items-center justify-center"
          >
            {orbitItems.map((item, idx) => (
              <OrbitingItem
                key={idx}
                src={item.src}
                alt={item.alt}
                angle={item.angle}
                radius={radius} 
              />
            ))}
          </motion.div>
        </div>

        {/* CENTER CONTENT */}
        <div className="relative z-20">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 tracking-[0.2em] sm:tracking-[0.4em] text-[10px] sm:text-xs font-bold uppercase mb-4">
            Karachi&apos;s Premium Beauty Store
          </motion.p>
          
          {/* Mobile par Heading size thora kam kiya taake products ke peechay na chhupay */}
          <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-5xl md:text-9xl font-black text-[#00b140] leading-none ayan-logo-text drop-shadow-2xl">
            AYAN
          </motion.h1>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl md:text-7xl font-bold text-gray-800 mb-8 sm:mb-12">
            COSMETICS
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pointer-events-auto">
            <Link href="/shop">
              <Button size="lg" className="px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-full bg-[#06adf0] hover:bg-black text-white shadow-xl transition-all hover:scale-105">
                <ShoppingBag className="mr-2" /> Shop Now
              </Button>
            </Link>
            <a href={generateGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-full bg-[#4bec0c] hover:bg-black text-white shadow-xl transition-all hover:scale-105">
                <MessageCircle className="mr-2" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/70 to-transparent z-30" />
    </section>
  );
}