"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
  drift: number;
  star: boolean;
  tone: 0 | 1;
}

/** Read an HSL-channel CSS variable ("38 39% 47%") from <html>. */
function readToken(name: string, fallback: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

/**
 * Subtle theme-coloured glitter behind the whole site (2D canvas, very cheap).
 * - Colours follow the active theme (gold + rose tokens)
 * - Pauses when the tab is hidden
 * - Static single frame under prefers-reduced-motion
 */
export default function GlitterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let particles: Particle[] = [];
    let colors: [string, string] = ["38 39% 47%", "349 63% 86%"];
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;

    const refreshColors = () => {
      colors = [readToken("--gold", colors[0]), readToken("--rose", colors[1])];
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(140, Math.round((width * height) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.5 + Math.random() * 1.4,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 1.6,
        drift: 4 + Math.random() * 10,
        star: Math.random() < 0.18,
        tone: Math.random() < 0.6 ? 0 : 1,
      }));
    };

    const drawStar = (x: number, y: number, r: number) => {
      const l = r * 3.2;
      ctx.beginPath();
      ctx.moveTo(x, y - l);
      ctx.quadraticCurveTo(x, y, x + l, y);
      ctx.quadraticCurveTo(x, y, x, y + l);
      ctx.quadraticCurveTo(x, y, x - l, y);
      ctx.quadraticCurveTo(x, y, x, y - l);
      ctx.fill();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = time / 1000;
      for (const p of particles) {
        const twinkle = reduced ? 0.6 : 0.35 + 0.65 * Math.max(0, Math.sin(t * p.speed + p.phase));
        const y = reduced ? p.y : (p.y - t * p.drift + height) % height;
        ctx.fillStyle = `hsl(${colors[p.tone]} / ${(twinkle * (p.star ? 0.85 : 0.55)).toFixed(3)})`;
        if (p.star) {
          drawStar(p.x, y, p.r);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (time: number) => {
      if (!running) return;
      draw(time);
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      running = !document.hidden && !reduced;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(loop);
    };

    refreshColors();
    resize();
    if (reduced) draw(0);
    else raf = requestAnimationFrame(loop);

    // Theme switches change the class on <html>.
    const observer = new MutationObserver(() => {
      refreshColors();
      if (reduced) draw(0);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const onResize = () => {
      resize();
      if (reduced) draw(0);
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-20" aria-hidden="true" />;
}
