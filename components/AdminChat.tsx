"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Loader2, X, BotMessageSquare } from "lucide-react";

interface AdminMessage {
  id: string;
  role: "user" | "bot";
  text: string;
}

// Example admin commands surfaced as quick-reply chips.
const ADMIN_QUICK_COMMANDS = [
  "Add a new matte lipstick called Rosewood",
  "Add best-seller perfume Royal Musk",
  "Delete product Velvet Touch Blush",
];

// FileReader gives a "data:<mime>;base64,<data>" URI — the API wants the raw
// base64 payload, so we split off the prefix here.
function readFileAsBase64(file: File): Promise<{ base64: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1] ?? "";
      resolve({ base64, mimeType: file.type || "image/png" });
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export default function AdminChat() {
  const [messages, setMessages] = useState<AdminMessage[]>([
    {
      id: "init",
      role: "bot",
      text: "**Ayan AI — Catalog Manager** 🛠️\n\nType a command to **add** or **delete** a product, and optionally attach a product image.\n\n• *Add a new best-seller lipstick called Rosewood*\n• *Delete product Velvet Touch Blush*",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageData, setImageData] = useState<{ base64: string; mimeType: string } | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 60);
  }, [messages]);

  const pushBot = (text: string) =>
    setMessages((prev) => [...prev, { id: `bot-${Date.now()}`, role: "bot", text }]);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const encoded = await readFileAsBase64(file);
      setImageData(encoded);
      setImagePreview(URL.createObjectURL(file));
    } catch {
      pushBot("⚠️ Couldn't read that image. Please try another file.");
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const clearAttachment = () => {
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImagePreview(null);
    setImageData(null);
  };

  const handleSend = async (textToSend: string) => {
    const prompt = textToSend.trim();
    if ((!prompt && !imageData) || isLoading) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        role: "user",
        text: prompt || "🖼️ (image attached)",
      },
    ]);

    const attachment = imageData;
    setInputValue("");
    clearAttachment();
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          fileBase64: attachment?.base64,
          mimeType: attachment?.mimeType,
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        const detail =
          data?.error ||
          (data?.action === "unknown"
            ? data?.notes || "I couldn't tell whether you want to add or delete a product."
            : "Something went wrong.");
        pushBot(`⚠️ **${detail}**`);
        return;
      }

      if (data.action === "add" && data.product) {
        pushBot(
          `✅ **Added:** ${data.product.name}\n\n• **ID:** ${data.product.id}\n• **Category:** ${data.product.category}\n• **New:** ${data.product.isNew ? "Yes" : "No"} · **Best Seller:** ${data.product.isBestSeller ? "Yes" : "No"}\n\nCatalog now has **${data.total}** products.`
        );
      } else if (data.action === "delete") {
        pushBot(
          `🗑️ **Deleted ${data.removed} product(s).**\n\nCatalog now has **${data.total}** products.`
        );
      } else {
        pushBot("✅ Done.");
      }
    } catch {
      pushBot("⚠️ **Network error** — couldn't reach the server.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatText = (raw: string) =>
    raw.split("\n").map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g).map((chunk, j) =>
        j % 2 === 1 ? (
          <strong key={j} className="font-black text-pink-400">
            {chunk}
          </strong>
        ) : (
          chunk
        )
      );
      return (
        <span key={i} className="block min-h-[4px]">
          {parts}
        </span>
      );
    });

  return (
    <div className="w-full max-w-2xl mx-auto h-[70vh] max-h-[720px] bg-zinc-950 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
      {/* ── HEADER ── */}
      <div className="px-5 py-4 bg-black border-b border-zinc-800/70 flex items-center gap-3 shrink-0">
        <div className="relative w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
          <BotMessageSquare className="w-5 h-5 text-pink-400" strokeWidth={1.8} />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-pink-500 border-2 border-black animate-pulse" />
        </div>
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.15em] text-white leading-none mb-0.5">
            Ayan AI
          </p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-pink-400/75 leading-none">
            Catalog Manager
          </p>
        </div>
      </div>

      {/* ── MESSAGES ── */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
          >
            <div
              className={`max-w-[88%] rounded-2xl px-4 py-3 text-[12px] leading-[1.65] ${
                msg.role === "user"
                  ? "bg-pink-500 text-white font-semibold rounded-br-[4px]"
                  : "bg-zinc-900 text-zinc-200 border border-zinc-800/80 rounded-bl-[4px]"
              }`}
            >
              {formatText(msg.text)}
            </div>
          </div>
        ))}

        {/* Quick commands (shown once, under the intro) */}
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-1.5 max-w-[95%]">
            {ADMIN_QUICK_COMMANDS.map((cmd, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(cmd)}
                disabled={isLoading}
                className="text-[10px] font-bold text-zinc-400 hover:text-pink-300 bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800 hover:border-pink-500/30 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {cmd}
              </button>
            ))}
          </div>
        )}

        {isLoading && (
          <div className="flex items-start">
            <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl rounded-bl-[4px] px-4 py-3 flex items-center gap-2 text-[11px] text-zinc-400">
              <Loader2 size={13} className="animate-spin text-pink-400" />
              Processing command…
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* ── ATTACHMENT PREVIEW ── */}
      {imagePreview && (
        <div className="px-4 pt-3 bg-black shrink-0">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl p-1.5 pr-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imagePreview} alt="attachment preview" className="w-9 h-9 rounded-lg object-cover" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Image attached
            </span>
            <button
              onClick={clearAttachment}
              className="text-zinc-500 hover:text-pink-400 transition-colors"
              aria-label="Remove attachment"
            >
              <X size={13} />
            </button>
          </div>
        </div>
      )}

      {/* ── INPUT ── */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(inputValue);
        }}
        className="px-4 py-3 bg-black border-t border-zinc-800/70 flex items-center gap-2 shrink-0"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
          className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-pink-400 hover:border-pink-500/40 flex items-center justify-center transition-all shrink-0 disabled:opacity-40"
          aria-label="Attach image"
        >
          <Paperclip size={15} />
        </button>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
          placeholder="Add or delete a product…"
          className="flex-1 bg-zinc-900 border border-zinc-800 focus:border-pink-500/50 text-white placeholder-zinc-600 text-xs rounded-full h-11 px-4 focus:outline-none transition-all font-medium disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || (!inputValue.trim() && !imageData)}
          className="w-11 h-11 rounded-full bg-pink-500 disabled:bg-zinc-800 disabled:opacity-30 text-white flex items-center justify-center transition-all hover:bg-pink-400 active:scale-95 shrink-0"
          aria-label="Send command"
        >
          {isLoading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} className="stroke-[2.5]" />}
        </button>
      </form>
    </div>
  );
}
