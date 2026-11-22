/**
 * Theme registry for AYAN Cosmetics.
 * CSS tokens for each theme live in app/globals.css (class on <html>).
 * The 3D hero reads its material/lighting colours from `scene` below.
 */

export const THEMES = ["blush", "ivory", "noir", "rose", "emerald"] as const;
export type ThemeName = (typeof THEMES)[number];
export const DEFAULT_THEME: ThemeName = "blush";

export interface ThemeMeta {
  name: ThemeName;
  label: string;
  /** Swatch shown in the theme picker: [background, accent] */
  swatch: [string, string];
  /** Browser UI colour (address bar on mobile) */
  metaColor: string;
  scene: {
    liquid: string;
    metal: string;
    lipstick: string;
    glow: string;
    shadow: string;
  };
}

export const THEME_META: Record<ThemeName, ThemeMeta> = {
  blush: {
    name: "blush",
    label: "Blush & Sage",
    swatch: ["#F8E3E3", "#8FAF97"],
    metaColor: "#FDF8F6",
    scene: {
      liquid: "#f6c1cb",
      metal: "#d4b07a",
      lipstick: "#c45f74",
      glow: "#fff4f2",
      shadow: "#8a5a66",
    },
  },
  ivory: {
    name: "ivory",
    label: "Ivory Glow",
    swatch: ["#FBF8F3", "#0B5D3B"],
    metaColor: "#FBF8F3",
    scene: {
      liquid: "#9fd8b8",
      metal: "#c9a96e",
      lipstick: "#b5525e",
      glow: "#ffffff",
      shadow: "#6b5b45",
    },
  },
  noir: {
    name: "noir",
    label: "Noir Gold",
    swatch: ["#0F0E0D", "#D9BC85"],
    metaColor: "#0F0E0D",
    scene: {
      liquid: "#e3c58f",
      metal: "#d9bc85",
      lipstick: "#8e2a36",
      glow: "#ffe3b0",
      shadow: "#000000",
    },
  },
  rose: {
    name: "rose",
    label: "Rose Blush",
    swatch: ["#FBF1EF", "#9E4F5A"],
    metaColor: "#FBF1EF",
    scene: {
      liquid: "#f2b8bd",
      metal: "#c9a96e",
      lipstick: "#c2606d",
      glow: "#fff1ee",
      shadow: "#7a4b4e",
    },
  },
  emerald: {
    name: "emerald",
    label: "Emerald",
    swatch: ["#0B3D2E", "#E6C980"],
    metaColor: "#0B3D2E",
    scene: {
      liquid: "#3fbf84",
      metal: "#e6c980",
      lipstick: "#a83c4a",
      glow: "#e9ffe9",
      shadow: "#021a12",
    },
  },
};

export function isThemeName(value: string | undefined): value is ThemeName {
  return !!value && (THEMES as readonly string[]).includes(value);
}
