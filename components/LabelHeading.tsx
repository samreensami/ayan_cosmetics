import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LabelHeadingProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Tilt in degrees (kept small — this is a product label, not a sticker bomb) */
  tilt?: number;
}

/**
 * Section heading set on a cosmetic "price tag": a card-coloured label with a punched
 * hole and a slight tilt. The text stays a real <h2> for SEO and screen readers.
 */
export default function LabelHeading({ id, children, className, tilt = -1.5 }: LabelHeadingProps) {
  return (
    <div className={cn("inline-block", className)} style={{ transform: `rotate(${tilt}deg)` }}>
      <h2
        id={id}
        className="relative inline-flex items-center gap-4 rounded-2xl border border-border bg-card py-3 pl-11 pr-6 font-display text-3xl leading-none text-foreground shadow-soft md:py-4 md:pl-14 md:pr-8 md:text-5xl"
      >
        <span
          aria-hidden="true"
          className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-border bg-background md:left-5 md:h-4 md:w-4"
        />
        {children}
      </h2>
    </div>
  );
}
