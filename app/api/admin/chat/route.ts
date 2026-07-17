import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { products, Product, Category } from "@/lib/products";

// Gemini + fs both require the Node.js runtime (not Edge).
export const runtime = "nodejs";

/**
 * ⚠️ PERSISTENCE CAVEAT
 * This route rewrites `lib/products.ts` on disk with fs.writeFileSync. That only
 * works in a writable local dev environment — on serverless hosts (e.g. Vercel)
 * the filesystem is read-only, and the in-memory `products` array only reflects
 * the change after Next.js recompiles the module. Treat this as a dev-time
 * content editor, not a production data store (use a DB/CMS for that).
 */

// The allowed category union, mirrored from lib/products.ts for runtime validation.
const VALID_CATEGORIES: Category[] = [
  "Makeup",
  "Skincare",
  "Hair Care",
  "Electronic Devices",
  "Perfumes",
  "Bundles",
];

interface ProductBadge {
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface ExtractedAction {
  action: "add" | "delete" | "unknown";
  // Present for `add`
  name?: string;
  category?: string;
  badge?: ProductBadge;
  // Present for `delete`
  target?: {
    name?: string;
    id?: string;
  };
  notes?: string;
}

interface AdminChatBody {
  prompt?: string;
  fileBase64?: string;
  mimeType?: string;
}

const SYSTEM_INSTRUCTION = `
You are the backend command parser for the AYAN Cosmetics admin panel.
Convert the operator's natural-language request (and any attached product image)
into a single structured JSON object describing the catalog action to perform.

Return ONLY valid JSON matching this schema — no markdown, no prose:
{
  "action": "add" | "delete" | "unknown",
  "name": string,        // product name (for "add")
  "category": string,    // MUST be exactly one of the 6 categories below
  "badge": { "isNew": boolean, "isBestSeller": boolean },
  "target": { "name": string, "id": string },  // what to remove (for "delete")
  "notes": string        // short clarification if the request is ambiguous
}

Allowed categories (ALWAYS map the product into one of these — never reject a
product for not fitting; pick the closest match):
- "Makeup" — lipstick, lip tint, blush, foundation, face powder, eyeliner, mascara, eyeshadow, concealer, highlighter, and any color cosmetics.
- "Skincare" — serums, cleansers, moisturizers, sunscreen, toners, masks, treatments.
- "Hair Care" — shampoo, conditioner, hair oils, hair spray, hair mask, hair botox, keratin treatments.
- "Electronic Devices" — laser machines, shaving machines, hair clippers, trimmers, and any powered beauty tools/appliances.
- "Perfumes" — perfumes, fragrances, body mists, attar, oud.
- "Bundles" — beauty boxes, gift sets, curated multi-item packages, deals.

Rules:
- If the operator wants to create/add a product, set action="add" and fill name, category, badge.
- ALWAYS choose the single best-fitting category from the list above. Do NOT return "unknown" just because a product seems unusual — map it (e.g. a hair clipper → "Electronic Devices", a keratin treatment → "Hair Care").
- If the operator wants to remove/delete a product, set action="delete" and fill target.name or target.id.
- If an image is attached, use it to infer the product name/category when the text is vague.
- Only use action="unknown" when you genuinely cannot tell whether they want to add or delete anything.
- Omit fields that do not apply. Never invent an id that was not provided.
`.trim();

const PRODUCTS_FILE = path.join(process.cwd(), "lib", "products.ts");

// Fallback image for products added without a custom image. Must point to a file
// that actually exists in public/images/products/ (placeholder.png does not).
const DEFAULT_PRODUCT_IMAGE = "/images/products/shop3.png";

// ── Helpers ────────────────────────────────────────────────────────────────

// Turn "Silky Rose Blush" → "silky-rose-blush".
function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Guarantee a unique id even if the slug collides with an existing product.
function makeUniqueId(base: string, list: Product[]): string {
  const existing = new Set(list.map((p) => p.id));
  if (!existing.has(base)) return base;
  let i = 2;
  while (existing.has(`${base}-${i}`)) i++;
  return `${base}-${i}`;
}

// Coerce Gemini's free-text category onto the strict union, defaulting to Makeup.
function normalizeCategory(input?: string): Category {
  const match = VALID_CATEGORIES.find(
    (c) => c.toLowerCase() === (input ?? "").toLowerCase().trim()
  );
  return match ?? "Makeup";
}

/**
 * Serialize the array and write it back into lib/products.ts, replacing ONLY the
 * `export const products: Product[] = [ ... ];` block and leaving the types,
 * `PRODUCTS`, and helper exports untouched.
 */
function persistProducts(list: Product[]): void {
  const source = fs.readFileSync(PRODUCTS_FILE, "utf-8");

  const startMarker = "export const products: Product[] = [";
  const startIdx = source.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error("Could not locate products array in lib/products.ts");
  }
  // The array closes at the first line-leading `];` after the declaration.
  const closeIdx = source.indexOf("\n];", startIdx);
  if (closeIdx === -1) {
    throw new Error("Could not locate end of products array in lib/products.ts");
  }

  const before = source.slice(0, startIdx);
  const after = source.slice(closeIdx + "\n];".length);

  // JSON.stringify emits valid TS object literals (quoted keys are accepted).
  const serialized = `export const products: Product[] = ${JSON.stringify(
    list,
    null,
    2
  )};`;

  fs.writeFileSync(PRODUCTS_FILE, `${before}${serialized}${after}`, "utf-8");
}

// ── Route ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // ── 1. Parse and validate the incoming request ──────────────────────────
    const body = (await req.json()) as AdminChatBody;
    const prompt = body.prompt?.trim();

    if (!prompt && !body.fileBase64) {
      return NextResponse.json(
        { success: false, error: "A text prompt or a file is required." },
        { status: 400 }
      );
    }

    // ⚠️ TEMPORARY: hardcoded key for testing. DO NOT COMMIT — remove before any
    // git commit/push. Prefer process.env.GEMINI_API_KEY (from .env.local).
    const apiKey = "AQ.Ab8RN6KJqHRAFEAFDdR923r2TbQntuINcaXjT-khcLJproxdhw";

    // ── 2. Initialise the Google Gen AI SDK ─────────────────────────────────
    const ai = new GoogleGenAI({ apiKey });

    const parts: Array<
      { text: string } | { inlineData: { mimeType: string; data: string } }
    > = [];
    if (prompt) parts.push({ text: prompt });
    if (body.fileBase64) {
      parts.push({
        inlineData: {
          mimeType: body.mimeType ?? "image/png",
          data: body.fileBase64,
        },
      });
    }

    // ── 3. Ask Gemini to extract the structured action ──────────────────────
    // Model is configurable via GEMINI_MODEL_NAME. Falls back to a current,
    // valid model — note the 1.5 series is retired and "turbo" is not a real
    // Gemini model name.
    const model = process.env.GEMINI_MODEL_NAME || "gemini-2.5-flash";
    const response = await ai.models.generateContent({
      model,
      contents: [{ role: "user", parts }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
      },
    });

    const raw = response.text ?? "";

    let extracted: ExtractedAction;
    try {
      extracted = JSON.parse(raw) as ExtractedAction;
    } catch {
      return NextResponse.json(
        { success: false, error: "Gemini did not return valid JSON.", raw },
        { status: 502 }
      );
    }

    // ── 4. Apply the action to a working copy of the catalog ────────────────
    // Work on a copy so a validation failure never leaves a half-mutated list.
    const list: Product[] = [...products];

    if (extracted.action === "add") {
      if (!extracted.name?.trim()) {
        return NextResponse.json(
          { success: false, error: "Add action is missing a product name." },
          { status: 422 }
        );
      }

      const id = makeUniqueId(slugify(extracted.name), list);
      const newProduct: Product = {
        id,
        slug: id,
        name: extracted.name.trim(),
        brand: "AYAN Cosmetics",
        category: normalizeCategory(extracted.category),
        price: 0, // prices are hidden across the catalog
        image: DEFAULT_PRODUCT_IMAGE,
        shortDescription: extracted.name.trim(),
        concern: ["All Skin Types"],
        isNew: extracted.badge?.isNew ?? false,
        isBestSeller: extracted.badge?.isBestSeller ?? false,
        inStock: true,
        rating: 5,
        reviewCount: 0,
      };

      list.push(newProduct);
      persistProducts(list);

      console.log("[admin/chat] ADD product:", newProduct.id, newProduct.name);
      return NextResponse.json({
        success: true,
        action: "add",
        product: newProduct,
        total: list.length,
      });
    }

    if (extracted.action === "delete") {
      const { name, id } = extracted.target ?? {};
      if (!name?.trim() && !id?.trim()) {
        return NextResponse.json(
          { success: false, error: "Delete action needs a target name or id." },
          { status: 422 }
        );
      }

      const wantId = id?.trim().toLowerCase();
      const wantName = name?.trim().toLowerCase();
      const filtered = list.filter((p) => {
        const matchId = wantId ? p.id.toLowerCase() === wantId : false;
        const matchName = wantName ? p.name.toLowerCase() === wantName : false;
        return !(matchId || matchName);
      });

      if (filtered.length === list.length) {
        return NextResponse.json(
          { success: false, error: "No product matched the delete target." },
          { status: 404 }
        );
      }

      persistProducts(filtered);

      console.log(
        "[admin/chat] DELETE product:",
        extracted.target,
        `(${list.length - filtered.length} removed)`
      );
      return NextResponse.json({
        success: true,
        action: "delete",
        removed: list.length - filtered.length,
        total: filtered.length,
      });
    }

    // ── 5. Unknown / unclear intent ─────────────────────────────────────────
    console.log("[admin/chat] UNKNOWN action:", extracted.notes ?? raw);
    return NextResponse.json(
      { success: false, action: "unknown", notes: extracted.notes ?? null },
      { status: 422 }
    );
  } catch (err) {
    // Surface the real reason (e.g. an invalid/retired model name, bad API key)
    // instead of an opaque message, so failures are diagnosable.
    const detail = err instanceof Error ? err.message : String(err);
    console.error("[admin/chat] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: `Failed to process admin chat request: ${detail}` },
      { status: 500 }
    );
  }
}
