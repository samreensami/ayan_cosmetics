"use client";

import { useSyncExternalStore } from "react";

/**
 * How the home page should present the 3D products:
 *  - "stage": scroll-driven fixed WebGL stage (default on capable devices)
 *  - "still": static 3D inside the hero arch (prefers-reduced-motion)
 *  - "image": plain hero photo (no WebGL)
 *  - null:    server render / before hydration
 */
export type StageMode = "stage" | "still" | "image" | null;

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

let cachedWebGL: boolean | null = null;
const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot(): StageMode {
  if (cachedWebGL === null) cachedWebGL = detectWebGL();
  if (!cachedWebGL) return "image";
  return window.matchMedia(REDUCED).matches ? "still" : "stage";
}

export function useStageMode(): StageMode {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}
