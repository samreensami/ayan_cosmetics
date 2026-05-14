"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, BotMessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getBotResponse, ChatMessage, INITIAL_QUICK_REPLIES } from "@/lib/chatbot";

export default function AyanAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init",
      role: "bot",
      text: "Assalam-o-Alaikum! 💄✨ Welcome to **AYAN Cosmetics**!\n\nMain hoon **Ayan AI** — aapka personal luxury beauty consultant.\n\nAaj main aapki selection mein kya help karoon? 🥂",
      quickReplies: INITIAL_QUICK_REPLIES,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 60);
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: textToSend,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(textToSend);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "bot",
          text: response.text,
          quickReplies: response.quickReplies,
          whatsappCTA: response.whatsappCTA,
        },
      ]);
    }, 850);
  };

  const openWhatsApp = (customText?: string) => {
    const msg =
      customText ||
      "Assalam-o-Alaikum AYAN Cosmetics! Main Ayan AI chatbot ke zariye contact kar rahi/raha hoon. Ordering mein help chahiye.";
    window.open(`https://wa.me/923332304345?text=${encodeURIComponent(msg)}`, "_blank");
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
    /* ── BOTTOM-LEFT — keeps WhatsApp button on right free ── */
    <div className="fixed bottom-6 left-6 z-50 font-sans antialiased">

      {/* ── TRIGGER BUTTON ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            className="relative w-16 h-16 rounded-full bg-[#00b140] flex items-center justify-center shadow-[0_8px_32px_rgba(0,177,64,0.45)] group cursor-pointer"
            aria-label="Open Ayan AI chat"
          >
            <span className="absolute inset-0 rounded-full bg-[#00b140] animate-ping opacity-30" />
            <span className="absolute -inset-1.5 rounded-full border border-[#00b140]/40 animate-pulse" />
            <BotMessageSquare className="w-7 h-7 text-white relative z-10" strokeWidth={1.8} />

            {/* tooltip — appears to the right */}
            <span className="pointer-events-none absolute left-[calc(100%+14px)] top-1/2 -translate-y-1/2 bg-black border border-zinc-800 text-white text-[9px] uppercase tracking-[0.2em] font-black px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ayan AI ✨
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── CHAT WINDOW ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.93 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="w-[92vw] sm:w-[440px] h-[72vh] max-h-[640px] bg-zinc-950 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_24px_80px_rgba(0,0,0,0.85),0_0_50px_rgba(236,72,153,0.07)] origin-bottom-left"
          >
            {/* ── HEADER ── */}
            <div className="px-5 py-4 bg-black border-b border-zinc-800/70 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                  <span className="text-[15px]">💄</span>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-pink-500 border-2 border-black animate-pulse" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.15em] text-white leading-none mb-0.5">
                    Ayan AI
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-pink-400/75 leading-none">
                    Luxury Beauty Consultant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => openWhatsApp()}
                  className="text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-pink-400 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/5"
                >
                  Live Help
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-all"
                  aria-label="Close chat"
                >
                  <X size={13} />
                </button>
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

                    {msg.whatsappCTA && msg.role === "bot" && (
                      <button
                        onClick={() => openWhatsApp()}
                        className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-black/50 hover:bg-pink-500/12 border border-zinc-700/80 hover:border-pink-500/35 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-pink-300 transition-all duration-300"
                      >
                        <span>💬</span> Order via WhatsApp
                      </button>
                    )}
                  </div>

                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                      {msg.quickReplies.map((reply, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(reply)}
                          className="text-[10px] font-bold text-zinc-400 hover:text-pink-300 bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800 hover:border-pink-500/30 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start">
                  <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl rounded-bl-[4px] px-4 py-3 flex items-center gap-1.5">
                    {[0, 150, 300].map((delay) => (
                      <span
                        key={delay}
                        className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* ── INPUT ── */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="px-4 py-3 bg-black border-t border-zinc-800/70 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about shades, products, delivery..."
                className="flex-1 bg-zinc-900 border border-zinc-800 focus:border-pink-500/50 text-white placeholder-zinc-600 text-xs rounded-full h-11 px-4 focus:outline-none transition-all font-medium"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-11 h-11 rounded-full bg-pink-500 disabled:bg-zinc-800 disabled:opacity-30 text-white flex items-center justify-center transition-all hover:bg-pink-400 active:scale-95 shrink-0"
                aria-label="Send message"
              >
                <Send size={14} className="stroke-[2.5]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
