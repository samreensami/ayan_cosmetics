"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { DEFAULT_THEME, THEMES, THEME_META, isThemeName } from "@/lib/themes";

const subscribeNoop = () => () => {};

/** true only after hydration — avoids a server/client mismatch on the theme swatch */
function useHydrated() {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}

function Swatch({ colors, size = 18 }: { colors: [string, string]; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="relative inline-block shrink-0 overflow-hidden rounded-full"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${colors[0]} 0 50%, ${colors[1]} 50% 100%)`,
        boxShadow: "0 0 0 1px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.25)",
      }}
    />
  );
}

export default function ThemePicker({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const hydrated = useHydrated();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const active = hydrated && isThemeName(theme) ? theme : DEFAULT_THEME;
  const activeMeta = THEME_META[active];

  // Keep the mobile browser chrome in sync with the theme.
  useEffect(() => {
    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = activeMeta.metaColor;
  }, [activeMeta.metaColor]);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Change theme (current: ${activeMeta.label})`}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur transition-colors hover:border-foreground/30"
      >
        <Swatch colors={activeMeta.swatch} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="radiogroup"
            aria-label="Site theme"
            initial={reduceMotion ? false : { opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-11 z-[60] w-52 origin-top-right rounded-2xl border border-border bg-popover p-1.5 text-popover-foreground shadow-soft"
          >
            {THEMES.map((name) => {
              const meta = THEME_META[name];
              const selected = name === active;
              return (
                <button
                  key={name}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => {
                    setTheme(name);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                    selected ? "bg-secondary font-medium" : "hover:bg-secondary/70"
                  )}
                >
                  <Swatch colors={meta.swatch} size={22} />
                  <span className="flex-1">{meta.label}</span>
                  {selected && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
