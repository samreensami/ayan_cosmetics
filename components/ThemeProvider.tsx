"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { DEFAULT_THEME, THEMES } from "@/lib/themes";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      themes={[...THEMES]}
      defaultTheme={DEFAULT_THEME}
      enableSystem={false}
      storageKey="ayan-theme"
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
