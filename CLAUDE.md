# CLAUDE.md — AYAN Cosmetics

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind 3 + shadcn/ui + Framer Motion + React Three Fiber. Deployed on Vercel. Live site — treat `main` as production.

## How to work
- Read `SPEC.md` first. Execute it **one phase at a time**, in order. After each phase: `npm run build`, `npm run lint`, summarize what changed, commit, then stop and wait for my "next".
- Always work on branch `premium-3d`. Never commit or push to `main`.
- Load the `frontend-design` skill before any UI/visual work (Phases 2, 3, 5).
- Show me only changed parts in chat, not whole files.
- Before starting any work, run `git pull origin main` and merge/rebase it into `premium-3d`.
- Never `git push` without asking me first. Never put tokens in the remote URL.

## Never
- Change product slugs, route paths, or the WhatsApp numbers in `lib/whatsapp.ts`.
- Hardcode API keys or secrets. Server-only secrets go in env vars without `NEXT_PUBLIC_`.
- Apply theme filters/opacity to product images or shade swatches.
- Add heavy deps without asking. Prefer what's installed.

## Conventions
- Colors only through theme tokens (CSS vars) — no raw `bg-white` / `text-black`.
- Client components only where needed (`"use client"`); 3D always via `next/dynamic` with `ssr: false` + static fallback.
- Respect `prefers-reduced-motion`.
- Prices: `number | null` in PKR; render via `components/Price.tsx`.
