"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

// Variants with "as const" to fix the Framer Motion transition error
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const 
    } 
  },
};

const trustSignals = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Karachi same day dispatch",
  },
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    description: "Genuine branded products",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Hassle-free 7-day policy",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Direct WhatsApp assistance",
  },
];

interface TrustSignalsProps {
  variant?: "banner" | "compact";
}

export default function TrustSignals({ variant = "banner" }: TrustSignalsProps) {
  return (
    <section className={cn(
      "relative overflow-hidden border-y border-white/5",
      variant === "compact" ? "py-8 bg-black/20" : "py-16 bg-black"
    )}>
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#529538]/30 to-transparent z-0" />

      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.title}
              variants={cardVariants}
              className={cn(
                "flex flex-col items-center text-center p-6 group transition-all",
                index !== trustSignals.length - 1 && "lg:border-r lg:border-white/10"
              )}
            >
              {/* Animated Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#529538] blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative bg-zinc-900 border border-white/10 p-4 rounded-full group-hover:border-[#529538]/50 group-hover:text-[#529538] transition-all duration-500">
                  <signal.icon className="h-6 w-6 text-white group-hover:text-[#529538]" strokeWidth={1} />
                </div>
              </div>

              <h3 className="font-black text-white mb-2 uppercase tracking-[0.3em] text-[10px] group-hover:text-[#529538] transition-colors">
                {signal.title}
              </h3>
              <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}