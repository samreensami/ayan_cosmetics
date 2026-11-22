"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { generateGeneralWhatsAppLink } from "@/lib/whatsapp";
import { DEFAULT_THEME, THEME_META, isThemeName } from "@/lib/themes";
import { useStageMode } from "@/lib/useStageMode";

// Static arch scene only for reduced motion; the moving stage lives in HomeStage.
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const reduceMotion = useReducedMotion() ?? false;
  const mode = useStageMode();
  const theme = isThemeName(resolvedTheme) ? resolvedTheme : DEFAULT_THEME;
  const colors = THEME_META[theme].scene;

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease, delay },
        };

  return (
    <section className="relative overflow-hidden pt-header" aria-labelledby="hero-title">
      <div className="container-custom grid items-center gap-y-6 pb-14 pt-6 md:grid-cols-12 md:gap-x-12 md:py-16 lg:py-20">
        {/* ── 3D products (no frame) — a soft pool of light behind them ── */}
        <motion.div
          className="relative order-1 mx-auto aspect-[4/5] w-full max-w-[260px] md:order-2 md:col-span-5 md:max-w-[380px] lg:max-w-[420px]"
          data-stage="hero"
          data-stage-set="glass"
          data-stage-fill="0.56"
          data-stage-cap="0.35"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-10%] rounded-full opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(50% 45% at 50% 45%, hsl(var(--rose) / 0.6), transparent 70%), radial-gradient(40% 25% at 50% 85%, hsl(var(--gold) / 0.3), transparent 70%)",
            }}
          />

          {mode === "image" && (
            <div className="absolute inset-[8%] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/products/hero1.png"
                alt="Glowing, dewy skin — AYAN Glass Skin Collection"
                fill
                priority
                sizes="(max-width: 768px) 260px, 420px"
                className="object-cover object-[70%_center]"
              />
            </div>
          )}
          {mode === "still" && (
            <div className="absolute inset-[10%]">
              <HeroScene colors={colors} />
            </div>
          )}
        </motion.div>

        {/* ── Copy ── */}
        <div className="order-2 md:order-1 md:col-span-7">
          <motion.p {...rise(0.15)} className="mb-5 text-sm text-muted-foreground">
            Glass Skin Collection, now in store
          </motion.p>

          <h1
            id="hero-title"
            className="font-display text-[2.5rem] leading-[1] sm:text-5xl lg:text-[4.25rem] text-balance"
          >
            <motion.span {...rise(0.25)} className="block">
              Dewy skin,
            </motion.span>
            <motion.span {...rise(0.4)} className="block italic">
              genuine brands.
            </motion.span>
          </h1>

          <motion.p {...rise(0.6)} className="mt-6 max-w-[34rem] text-base leading-relaxed text-muted-foreground md:text-lg">
            Korean serums, everyday makeup and fragrances from our counter in Saima Mall.
            Same-day dispatch across Karachi, and you pay cash when it arrives.
          </motion.p>

          <motion.div {...rise(0.75)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Shop the collection
            </Link>
            <a
              href={generateGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/20 px-8 text-sm font-medium transition-colors hover:border-foreground/50"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Ask us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
