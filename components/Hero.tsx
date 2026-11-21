"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { generateGeneralWhatsAppLink } from "@/lib/whatsapp";
import { DEFAULT_THEME, THEME_META, isThemeName } from "@/lib/themes";

// WebGL scene is client-only and never blocks first paint — the headline is the LCP.
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const subscribeNoop = () => () => {};

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/** null on the server / first render, then true|false after hydration */
function useWebGLSupport(): boolean | null {
  return useSyncExternalStore(subscribeNoop, detectWebGL, () => null);
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const reduceMotion = useReducedMotion() ?? false;
  const webgl = useWebGLSupport();
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
    <section className="relative overflow-hidden pt-16" aria-labelledby="hero-title">
      <div className="container-custom grid items-center gap-y-6 pb-14 pt-6 md:grid-cols-12 md:gap-x-12 md:py-16 lg:py-20">
        {/* ── Vanity-mirror arch with the 3D scene ── */}
        <motion.div
          className="relative order-1 mx-auto aspect-[4/5] w-full max-w-[280px] md:order-2 md:col-span-5 md:max-w-[400px] lg:max-w-[440px]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-t-full border border-border bg-secondary">
            {/* soft light pooling inside the arch */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 45% at 50% 38%, hsl(var(--rose) / 0.55), transparent 70%), radial-gradient(50% 30% at 50% 100%, hsl(var(--gold) / 0.25), transparent 70%)",
              }}
            />

            {webgl === false ? (
              <Image
                src="/images/products/hero1.png"
                alt="Glowing, dewy skin — AYAN Glass Skin Collection"
                fill
                priority
                sizes="(max-width: 768px) 280px, 440px"
                className="object-cover object-[70%_center]"
              />
            ) : (
              webgl && <HeroScene colors={colors} still={reduceMotion} />
            )}
          </div>

          {/* Mirror rim */}
          <div className="pointer-events-none absolute -inset-2 rounded-t-full border border-gold/40" aria-hidden="true" />
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
