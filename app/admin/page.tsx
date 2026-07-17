"use client";

import React, { useState, useEffect } from "react";
import { Lock, ShieldCheck } from "lucide-react";
import AdminChat from "@/components/AdminChat";

/**
 * ⚠️ SECURITY NOTE
 * This is a lightweight CLIENT-SIDE gate for a dev/admin convenience screen.
 * NEXT_PUBLIC_* vars are embedded in the browser bundle, so the password is NOT
 * secret from a determined user. The real protection is on the write path
 * (the /api/admin/chat route runs server-side). For production, put this behind
 * proper server-side auth (middleware, a session cookie, or an auth provider).
 */
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "ayan-admin";
const SESSION_KEY = "ayan-admin-unlocked";

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Restore unlock state on refresh (per browser tab/session).
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") setUnlocked(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  const handleLock = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setUnlocked(false);
    setPassword("");
  };

  // ── LOCKED: password screen ────────────────────────────────────────────────
  if (!unlocked) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-[28px] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.85)]"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-pink-400" />
            </div>
            <h1 className="text-white font-black uppercase tracking-[0.15em] text-sm">
              Admin Access
            </h1>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mt-1">
              AYAN Cosmetics — Catalog Manager
            </p>
          </div>

          <input
            type="password"
            value={password}
            autoFocus
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Enter password"
            className={`w-full bg-zinc-900 border ${
              error ? "border-red-500/70" : "border-zinc-800 focus:border-pink-500/50"
            } text-white placeholder-zinc-600 text-sm rounded-full h-12 px-5 focus:outline-none transition-all font-medium text-center`}
          />

          {error && (
            <p className="text-red-400 text-[10px] uppercase tracking-widest font-bold text-center mt-3">
              Incorrect password
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full h-12 rounded-full bg-pink-500 hover:bg-pink-400 text-white font-black uppercase text-xs tracking-widest transition-all active:scale-95"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  // ── UNLOCKED: admin chat interface ──────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black px-4 py-10">
      <div className="max-w-2xl mx-auto flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-[#529538]">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-[11px] font-black uppercase tracking-[0.15em]">
            Admin Unlocked
          </span>
        </div>
        <button
          onClick={handleLock}
          className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-pink-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
        >
          Lock
        </button>
      </div>

      <AdminChat />
    </div>
  );
}
