import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: ReactNode[];
  /** Seconds for one full loop */
  duration?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
}

/**
 * Seamless CSS ticker. Content is duplicated once; the second copy is hidden from
 * screen readers. Pauses on hover, and stops under prefers-reduced-motion (globals.css).
 */
export default function Marquee({
  items,
  duration = 40,
  reverse = false,
  className,
  itemClassName,
  separator = <span aria-hidden="true">✦</span>,
}: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className={cn("flex items-center gap-[0.75em] whitespace-nowrap pr-[0.75em]", itemClassName)}>
          {item}
          {separator}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
