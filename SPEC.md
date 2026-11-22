# AYAN Cosmetics — Premium 3D Upgrade Spec

Repo: `samreensami/ayan_cosmetics` · Live: https://www.ayan-cosmetics.com (Vercel, Next.js 16 App Router)
Goal: same store, same URLs, same WhatsApp flow — but a premium, 3D-animated, light/dark luxury cosmetics experience with a real shade system and client-editable prices.

Reference for motion/3D feel: https://barzahs-magic-yarn.vercel.app (Sam's own build) — adapt the feel to **luxury cosmetics**, not crochet: glass, gloss, gold, soft light.

---

## 0. Ground rules (non-negotiable)

- Work on branch `premium-3d`. Never push to `main`. Every phase must pass `npm run build` and be checked on the Vercel preview URL.
- **Do not change** any product `slug`, any route path (`/`, `/shop`, `/shop/[slug]`, `/deals`, `/about`, `/contact`), or the two WhatsApp numbers in `lib/whatsapp.ts` (`ORDER_NUMBER` for orders, `CONTACT_NUMBER` for inquiries — both are intentional, set by the client).
- Do not break the cart (`lib/CartContext.tsx`) or WhatsApp ordering.
- Mobile-first. Most traffic is mobile in Pakistan — the 3D must never block content or tank LCP.
- Respect `prefers-reduced-motion` everywhere.
- Small commits per phase with clear messages.

---

## Phase 1 — Security & cleanup (do first)

1. **Delete admin completely** (it was temporary):
   - `app/admin/page.tsx`
   - `components/AdminChat.tsx`
   - `app/api/admin/` (whole folder — it has a hardcoded Gemini key and no server auth; `fs.writeFileSync` doesn't work on Vercel anyway)
   - Remove any env usage of `NEXT_PUBLIC_ADMIN_PASSWORD`.
   - grep for `admin` afterwards — zero references should remain.
2. Delete the accidentally committed build folder `Fayan-cosmetics/` (contains `.next`). Make sure `.gitignore` covers `.next/` at any depth (`**/.next/`), plus `.sixth/` and `*.tsbuildinfo`.
3. `next.config.ts`: replace `remotePatterns: [{ hostname: "**" }]` with only the domains actually used (if all images are in `/public`, remove `remotePatterns`). Remove the unused `@react-three/postprocessing` from `transpilePackages` if not used later.
4. `app/layout.tsx` metadata — make it truthful:
   - `metadataBase` → `https://www.ayan-cosmetics.com` (currently wrong: `ayancosmetics.pk`).
   - Remove claims not in the catalog (MAC, Huda Beauty, NYX, "nationwide") unless the client confirms. Use brands actually in `lib/products.ts` (Dr. Rashel, Skin1004, Anua, Glow Recipe, e.l.f., Maybelline, KIKO Milano, Charlotte Tilbury, Rivaj, CeraVe…). Keep "Karachi same-day delivery".
5. Navbar: remove the stray "Loading…" label and duplicated links / stray `/shop` text link.
6. "Shop by Concern" must link to `/shop?concern=<value>` and the shop page must read that param and pre-filter (concern data already exists on every product).
7. Fix generic alt texts ("bg", "Makeup Display") with descriptive ones.
8. Dependency alignment (React 19 / Next 16):
   - `@react-three/fiber` → v9, `@react-three/drei` → v10 (v8/v9 don't support React 19).
   - `@types/react`, `@types/react-dom` → 19.
   - `eslint-config-next` → match Next 16.
   - Run `npm run build` + `npm run lint` and fix all errors.

**Manual step for Sam (not Claude):** revoke/rotate the Gemini key that was committed in `app/api/admin/chat/route.ts` in Google AI Studio. It's in git history of a public repo, so deleting the file is not enough.

---

## Phase 2 — Design system + theme toggle

### Palette (keep brand identity, make it premium)
Keep the brand green family but deepen it; swap bright `#FFD700` for champagne gold.

| Token (CSS var) | Light | Dark |
|---|---|---|
| `--background` | `#FBF8F3` (ivory) | `#0C0F0D` (near-black green) |
| `--surface` | `#FFFFFF` | `#141A17` |
| `--foreground` | `#141414` | `#F3EEE6` |
| `--muted` | `#6B6B6B` | `#A39E95` |
| `--primary` (brand green) | `#0B5D3B` emerald | `#3FBF84` |
| `--primary-bright` | `#00B140` (visiting-card green, accents only) | `#00B140` |
| `--accent` (gold) | `#C9A96E` champagne | `#D9BC85` |
| `--rose` (beauty accent) | `#E8C4C0` | `#5A3B3A` |
| `--border` | `#E8E2D9` | `#26302B` |

- Define as CSS variables in `app/globals.css` under `:root` and `.dark`, map them in `tailwind.config.ts` (`background: "hsl/var(--background)"` style), and **replace hardcoded `bg-white`, `text-black`, `bg-green-800`, `border-gray-200` etc.** across components with tokens.
- Remove the `bg-green-800` wrapper in `app/page.tsx` and `bg-white` on `<body>`.

### Typography
- Headings: `Cormorant Garamond` (or `Playfair Display`) via `next/font/google`, weights 500–700.
- Body/UI: keep `Inter`.
- Luxury rules: generous letter-spacing on small caps labels, large serif headings, more whitespace. Drop the heavy `font-black uppercase tracking-tighter` brutalist look on product cards.

### Theme toggle
- `next-themes` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`. `ThemeProvider` as a client component wrapping the app in `layout.tsx` (keep `suppressHydrationWarning` on `<html>`).
- `ThemeToggle` component in Navbar (desktop + mobile menu): sun/moon icon (lucide), animated swap with Framer Motion, `aria-label`, avoid hydration mismatch (render after mount).
- Set `<meta name="theme-color">` for both schemes.
- **Cosmetics rule:** product images and shade swatches must look identical in both themes — never apply filters/opacity/blend to them. Swatches sit inside a neutral ring (`ring-1 ring-[#E8E2D9]` fixed, not theme-dependent) so colors read correctly on dark backgrounds.

---

## Phase 3 — 3D hero + premium motion

### Hero (`components/Hero.tsx` → rebuild)
- Layout: text left (serif headline, "Glass Skin Collection", Shop Now + WhatsApp CTA — keep existing copy & links), 3D canvas right. Mobile: canvas behind/above text, smaller.
- 3D scene (`components/three/HeroScene.tsx`), built **procedurally** (no external GLB needed):
  - A glass serum dropper bottle: `MeshPhysicalMaterial` / drei `MeshTransmissionMaterial` (transmission, roughness ~0.05, ior ~1.45, thickness), liquid inside tinted brand-green/rose, gold cap.
  - A lipstick bullet (cylinder + angled cap) in gold metal + rose satin.
  - 2–3 floating small spheres/droplets (dew drops) and soft sparkles (drei `Sparkles`).
  - drei `Float` for gentle bob, slow auto-rotation, subtle mouse parallax on desktop, scroll-linked rotation via `useScroll`/Framer `useScroll`.
  - Lighting: `Environment preset="studio"` (or `"city"`), soft `ContactShadows` under objects. Colors adapt to theme (read theme via `next-themes`).
- Performance:
  - Load the canvas with `next/dynamic(..., { ssr: false })` + a static gradient/image placeholder so LCP is the text, not WebGL.
  - `dpr={[1, 1.75]}`, `frameloop="demand"` when off-screen (IntersectionObserver), drei `PerformanceMonitor` to drop quality on weak phones.
  - `prefers-reduced-motion` or no WebGL → static hero image (`/images/products/hero1.png`).
- Keep the existing hero image available as fallback.

### Motion across the site (Framer Motion, already installed)
- Section reveals: fade + 24px rise, staggered children, `viewport={{ once: true }}`.
- Product cards: subtle 3D tilt on hover (desktop only), image zoom, gold shimmer sweep on badges.
- Category grid: hover lift + soft glow.
- Marquee announcement bar (like Barzah's): "Cash on Delivery · 100% Genuine · Same-day Karachi Dispatch · 7-day Returns".
- Smooth page transitions are optional; don't add Lenis unless it stays smooth on mobile.

---

## Phase 4 — Prices (client fills them in)

- `Product.price` → `price: number | null`. In `lib/products.ts` add a clear comment block at the top:
  `// PRICE: write the number in PKR (e.g. 2100). Leave null to show "Price on request".`
  Keep the existing numbers (they're already there) — client will update them.
- New `components/Price.tsx`: formats `Rs. 2,100` with `Intl.NumberFormat("en-PK")`; `null` → "Price on request" in muted text. Support optional `compareAtPrice?: number | null` for deals (strike-through).
- Show price on: product card, product detail page, cart drawer (`FloatingCart`), deals page.
- WhatsApp: `ProductCard` currently passes `0` to `generateWhatsAppLink` — pass the real price (or the selected shade's price) so the message includes it; omit price text when null.
- Cart total: if any item has `null` price, show "Total confirmed on WhatsApp" instead of a wrong sum.

---

## Phase 5 — Shade system

### Data model (`lib/products.ts`)
```ts
export type Undertone = "Warm" | "Cool" | "Neutral" | "Olive";

export interface Shade {
  id: string;          // "rose-nude-03"
  name: string;        // "Rose Nude 03"
  hex: string;         // "#C98B7E" — swatch color (PLACEHOLDER until client gives real)
  undertone?: Undertone;
  image?: string;      // shade-specific product/swatch photo
  price?: number | null; // override product price if this shade costs differently
  inStock: boolean;
}

export interface Product {
  // ...existing fields
  shades?: Shade[];
  shadeLabel?: string; // "Shade" | "Color" | "Tone" (default "Shade")
}
```
- Add `shades` to every shade-based product: lipsticks, lip gloss, lip tint, lip/eye pencils, foundations, concealer, powders, blush, contour, nail color (Rivaj, Maybelline, KIKO, Charlotte Tilbury items). Use **placeholder** shades (3–6 per product, realistic names/hex) and mark each with `// TODO client: confirm shade name/hex/photo`.
- Products like the Maybelline concealer "– Sand 122" / foundation "– 110" → move the shade out of the name into `shades`, keep the slug unchanged.

### UI
- `components/ShadeSelector.tsx`: round swatches (32px mobile / 28px desktop), selected = gold ring + check, out-of-stock = diagonal strike + disabled, hover/focus tooltip with shade name + undertone. Full keyboard support (radio-group semantics, `aria-checked`).
- Product detail page: selector under the title; selecting a shade swaps the main image (if `shade.image`), price (if override), and stock state. Selected shade in URL: `/shop/[slug]?shade=rose-nude-03` (shareable, slug untouched).
- Product card: show up to 5 mini swatches + "+N", clicking opens the product with that shade.
- Undertone filter in shop filters (Warm/Cool/Neutral/Olive).
- Cart: a cart line = product + shade. Update `CartContext` key to `${productId}:${shadeId ?? "default"}`; show the shade dot + name in the cart. Migrate old localStorage cart entries safely (try/catch).
- WhatsApp message includes shade: `I want to order: Rivaj Classy Lipstick — Shade: Rose Nude 03 for Rs. 1,950`.
- Optional (stretch): "Find my shade" mini quiz (skin tone → undertone → suggested shades), result CTA = WhatsApp "free shade matching" (this is promised in the site metadata, so it should exist somewhere — at minimum a "Free shade matching on WhatsApp" link near the selector).

---

## Phase 6 — Polish & QA

- Lighthouse mobile on the preview: Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95.
- Check both themes on: home, shop, product with shades, product without shades, deals, about, contact, cart, 404, AI chat widget, cookie banner, floating WhatsApp button.
- Check product JSON-LD / OG images still work; add `Product` JSON-LD with `offers` only when price is not null.
- Test on a real Android phone (Chrome) — 3D smooth, no layout shift, text readable.
- `npm run build` clean, `npm run lint` clean, no console errors.
- Then open a PR `premium-3d → main` with screenshots (light/dark, mobile/desktop). Sam reviews preview, then merges.

---

## Open decisions (defaults used — Sam can override)
- Colors: emerald + champagne gold (above). If client insists on the exact visiting-card green everywhere, set `--primary` to `#00B140`.
- 3D objects: glass serum bottle + lipstick + dew drops.
- Default theme: system.
- Shades: placeholders until the client sends real names/hex/photos.
- AI chat widget (`AyanAIChat`) stays as is.
