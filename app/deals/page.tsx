"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowLeft, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ── No business logic changes ─────────────────────────────────────────────────

const WHATSAPP_NUMBER = "923332304345";

interface Deal {
  id: number;
  name: string;
  actualPrice: number;
  dealPrice: number;
  imagePath: string;
}

const AYAN_DEALS: Deal[] = [
  { id: 1, name: "cosmetic with box",              actualPrice: 3500,  dealPrice: 2499, imagePath: "/images/products/lipstic.jpg"      },
  { id: 2, name: "Huda Beauty Rose Gold Palette",  actualPrice: 6500,  dealPrice: 4499, imagePath: "/images/products/blush1.jpeg"      },
  { id: 3, name: "Royal Oud Luxury Perfume",        actualPrice: 5500,  dealPrice: 3999, imagePath: "/images/products/p1.jpg"           },
  { id: 4, name: "Floral Bloom Premium Fragrance",  actualPrice: 7000,  dealPrice: 4999, imagePath: "/images/products/p2.jpeg"          },
  { id: 5, name: "Liquid Blush — Natural Glow",     actualPrice: 2500,  dealPrice: 1799, imagePath: "/images/products/liquidblush.jpg"  },
  { id: 6, name: "Bridal Beauty Box — Premium",     actualPrice: 12000, dealPrice: 8999, imagePath: "/images/products/box2.jpg"         },
  { id: 7, name: "Deep Cleansing Face Wash",        actualPrice: 1800,  dealPrice: 1199, imagePath: "/images/products/deepcleaning.jpg" },
  { id: 8, name: "Velvet Finish Lipstick",          actualPrice: 2800,  dealPrice: 1999, imagePath: "/images/products/lipstic1.jpg"     },
];

function discountPct(actual: number, deal: number) {
  return Math.round(((actual - deal) / actual) * 100);
}

function openWhatsApp(name: string, dealPrice: number) {
  const msg = `Assalam-o-Alaikum AYAN Cosmetics, I want to avail the deal for ${name} at the special price of Rs. ${dealPrice}. Is this available?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ── Framer Motion — clean fade-in-up with stagger ────────────────────────────

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Top bar ── */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

          <motion.div whileHover={{ x: -3 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-200"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </motion.div>

          <div className="flex items-center gap-2">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <Zap size={13} className="text-amber-500 fill-amber-400" />
            </motion.div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
              Flash Deals — Limited Stock
            </span>
          </div>

        </div>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#529538] mb-4"
        >
          Exclusive Deals — AYAN Cosmetics
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-5xl sm:text-6xl font-extrabold uppercase tracking-widest text-black leading-tight mb-5"
        >
          Today&apos;s{" "}
          <span className="text-[#529538]">Offers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-sm text-gray-400 tracking-wide max-w-lg mx-auto"
        >
          100% original branded cosmetics at unbeatable prices.{" "}
          <span className="text-gray-600 font-semibold">
            Order on WhatsApp — same-day Karachi delivery.
          </span>
        </motion.p>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-16 h-px bg-black mx-auto mt-8"
        />

      </section>

      {/* ── Deals Grid ── */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {AYAN_DEALS.map((deal) => {
            const saved   = deal.actualPrice - deal.dealPrice;
            const discount = discountPct(deal.actualPrice, deal.dealPrice);

            return (
              <motion.article
                key={deal.id}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  zIndex: 10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.10)",
                  transition: { duration: 0.25 },
                }}
                className="group relative flex flex-col bg-white"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <Image
                    src={deal.imagePath}
                    alt={deal.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Save badge — top left */}
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 text-white"
                    style={{ background: "#529538" }}
                  >
                    Save {discount}%
                  </span>

                  {/* New Arrival badge — shown for first 2 items */}
                  {deal.id <= 2 && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-black text-white">
                      New Arrival
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">

                  {/* Product name */}
                  <h3 className="text-xs font-bold uppercase tracking-widest text-black leading-snug line-clamp-2 mb-4">
                    {deal.name}
                  </h3>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-lg font-extrabold text-black">
                      Rs. {deal.dealPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      Rs. {deal.actualPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* Save label */}
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#529538] mb-5">
                    You Save Rs. {saved.toLocaleString()}
                  </p>

                  {/* CTA — Maybelline style sharp rectangle */}
                  <motion.button
                    onClick={() => openWhatsApp(deal.name, deal.dealPrice)}
                    whileTap={{ scale: 0.97 }}
                    className="mt-auto w-full py-3 rounded-none text-xs font-bold uppercase tracking-[0.15em] text-white bg-black transition-colors duration-300 hover:bg-[#529538] flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={13} />
                    Order on WhatsApp
                  </motion.button>

                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-20 border border-gray-100 p-12 text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#529538] mb-3">
            Can&apos;t Find What You&apos;re Looking For?
          </p>
          <p className="text-xl font-extrabold uppercase tracking-widest text-black mb-6">
            Ask For A Custom Deal
          </p>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            Chat with Ayan AI or message Rehan directly — we&apos;ll curate a personalised beauty deal for you.
          </p>
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Assalam-o-Alaikum AYAN Cosmetics! I want to inquire about a custom deal.")}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ backgroundColor: "#529538" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-none text-xs font-bold uppercase tracking-[0.15em] text-white bg-black transition-colors duration-300 hover:bg-[#529538]"
          >
            <ShoppingBag size={13} />
            Chat on WhatsApp
          </motion.a>
        </motion.div>

      </section>
    </main>
  );
}
