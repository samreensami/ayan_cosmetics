import Link from "next/link";
import Marquee from "@/components/Marquee";

const promises = ["Glass skin", "100% genuine", "Cash on delivery", "Same-day Karachi", "7-day returns", "Shade help on WhatsApp"];
const brands = ["Dr. Rashel", "Skin1004", "Anua", "Glow Recipe", "e.l.f.", "Maybelline", "KIKO Milano", "Rivaj", "CeraVe"];

/**
 * Crossed satin ribbons + a quiet stage where the 3D products spin and the lipstick uncaps.
 * The empty box on the right is a ScrollStage anchor (see components/three/ScrollStage.tsx).
 */
export default function RibbonInterlude() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14" aria-labelledby="interlude-title">
      {/* Ribbons */}
      <div className="relative h-28 md:h-36" aria-label="Our promises">
        <Marquee
          items={promises}
          duration={36}
          className="absolute inset-x-[-5%] top-4 -rotate-[3deg] bg-primary py-3 text-primary-foreground shadow-soft md:top-6 md:py-4"
          itemClassName="font-display text-2xl italic md:text-4xl"
        />
        <Marquee
          items={brands}
          duration={44}
          reverse
          className="absolute inset-x-[-5%] top-14 rotate-[2deg] bg-sage py-2.5 text-foreground md:top-[4.75rem] md:py-3"
          itemClassName="text-sm font-medium md:text-base"
          separator={<span aria-hidden="true">•</span>}
        />
      </div>

      <div className="container-custom mt-10 grid items-center gap-8 md:mt-16 md:grid-cols-12">
        <div className="md:col-span-6 lg:col-span-5">
          <h2 id="interlude-title" className="font-display text-4xl leading-[1.02] md:text-6xl text-balance">
            Sealed, original, at your door the same day.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Every bottle comes from authorised distributors and reaches you sealed. Not sure about a shade? Send us a
            selfie on WhatsApp and we&apos;ll match it before we pack.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex h-12 items-center rounded-full border border-foreground/20 px-8 text-sm font-medium transition-colors hover:border-foreground/50"
          >
            Browse the shop
          </Link>
        </div>

        {/* 3D stage anchor: a powder compact spins a full turn and opens to its mirror here */}
        <div
          className="relative mx-auto aspect-square w-full max-w-[260px] md:col-span-6 md:max-w-[420px] lg:col-span-7"
          data-stage="interlude"
          data-stage-set="compact"
          data-stage-fill="0.9"
          data-stage-rot="6.283"
          data-stage-cap="1"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
