"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useStageMode } from "@/lib/useStageMode";
import { DEFAULT_THEME, THEME_META, isThemeName } from "@/lib/themes";

const ScrollStage = dynamic(() => import("@/components/three/ScrollStage"), {
  ssr: false,
  loading: () => null,
});

/** Mounts the scroll-driven 3D stage on the home page when the device supports it. */
export default function HomeStage() {
  const mode = useStageMode();
  const { resolvedTheme } = useTheme();
  if (mode !== "stage") return null;
  const theme = isThemeName(resolvedTheme) ? resolvedTheme : DEFAULT_THEME;
  return <ScrollStage colors={THEME_META[theme].scene} />;
}
