import type { Product } from "@/lib/products";

export type MediaFit = "cover" | "showcase";

/**
 * Wide, in-store photos (vanity cases / beauty boxes) look oversized and cropped when
 * forced into a portrait card, so they get the "showcase" treatment (whole photo on a
 * blurred copy of itself). Plain function — safe to call from server components.
 */
export function mediaFitFor(product: Pick<Product, "category">): MediaFit {
  return product.category === "Bundles" ? "showcase" : "cover";
}
