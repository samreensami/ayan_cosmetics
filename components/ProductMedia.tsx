"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaFit } from "@/lib/media";

interface ProductMediaProps {
  src: string;
  alt: string;
  fit?: MediaFit;
  sizes: string;
  priority?: boolean;
  /** Zoom slightly on parent `.group:hover` */
  hoverZoom?: boolean;
  className?: string;
}

/**
 * Product photo inside a neutral frame. "showcase" shows the whole photo (contain),
 * floating on a soft blurred copy of itself; "cover" fills the frame.
 */
export default function ProductMedia({
  src,
  alt,
  fit = "cover",
  sizes,
  priority = false,
  hoverZoom = true,
  className,
}: ProductMediaProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={cn("absolute inset-0 flex flex-col items-center justify-center gap-2 text-neutral-500", className)}>
        <span className="font-display text-3xl text-neutral-400">AYAN</span>
        <span className="text-xs">Photo coming soon</span>
      </div>
    );
  }

  const zoom = hoverZoom ? "transition-transform duration-700 ease-out group-hover:scale-[1.04]" : "";

  if (fit === "showcase") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        {/* Blurred backdrop from the same photo */}
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          fill
          sizes="64px"
          quality={30}
          className="scale-125 object-cover opacity-60 blur-2xl saturate-150"
        />
        <div className="absolute inset-0 bg-white/25" />
        {/* The whole product, floating with a soft shadow */}
        <div className="absolute inset-[10%]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            onError={() => setFailed(true)}
            className={cn("object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.25)]", zoom)}
          />
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn("object-cover", zoom, className)}
    />
  );
}
