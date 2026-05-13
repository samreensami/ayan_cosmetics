"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, X, Minus } from "lucide-react";
import {
  getBotResponse,
  INITIAL_QUICK_REPLIES,
  WHATSAPP_CONTACT,
  type ChatMessage,
} from "@/lib/chatbot";

// ── Skin tone flow helpers ────────────────────────────────────────────────────

const SHADE_TRIGGER_RE =
  /💋.*lipstick shade|🟤.*foundation|🎨.*palette shade|shade dekhne|swatches dekhne|shade match|foundation match|lipstick shade chahiye|palette shades/i;

function extractProduct(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("foundation") || t.includes("🟤")) return "Foundation";
  if (t.includes("lipstick") || t.includes("💋")) return "Lipstick";
  if (t.includes("palette") || t.includes("🎨")) return "Eye Palette";
  if (t.includes("concealer")) return "Concealer";
  return "Product";
}

function buildSkinToneMsg(skinTone: string, product: string): ChatMessage {
  const clean = skinTone.replace(/[☀️🌤️🌙🌑❓]/gu, "").trim();
  const unsure = /pata nahi|help|unsure|don't know/i.test(skinTone);

  const waMsg = unsure
    ? `Assalam-o-Alaikum AYAN Cosmetics! ${product} ke liye shade match chahiye — skin tone identify karne mein bhi help karein! Asli swatches dekhna chahta/chahti hoon.`
    : `Assalam-o-Alaikum AYAN Cosmetics! ${product} ke liye shade matching chahiye. Meri skin tone ${clean} hai — kya aap matching real swatches WhatsApp pe bhej sakte hain? Shukriya!`;

  const text = unsure
    ? `Koi baat nahi! 😊 Skin tone identify karna thoda tricky hota hai.\n\nRehan bhai personally aapki help karenge — simply WhatsApp pe apni ek **selfie ya hand photo** bhejein:\n\n📸 Woh aapke exact skin ke liye best **${product}** shades suggest karenge!\n\nBilkul personal service — ekdum accurate match guaranteed! ✨`
    : `✅ **${clean} Skin Tone — Note kar liya!**\n\nRehan bhai aapki **${clean}** skin ke liye best **${product}** shades ki **real swatch photos** personally WhatsApp pe bhejenge!\n\n📸 Screen pe rang alag dikhta hai — hum aapko asli cheez dikhate hain. 100% accurate match! ✨\n\nAbhi message karein: 💬`;

  return {
    id: `b-${Date.now()}`,
    role: "bot",
    text,
    whatsappCTA: true,
    whatsappMessage: waMsg,
  };
}

// ── Welcome message ───────────────────────────────────────────────────────────

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "bot",
  text: "Assalam-o-Alaikum! 💄✨ Welcome to **AYAN Cosmetics**!\n\nMain hoon **Ayan AI** — aapka personal beauty consultant aur AYAN ka virtual manager.\n\nMain aapki help kar sakta hoon:\n• 💄 Shade matching & real swatch photos\n• 🎁 Customized beauty boxes\n• 📦 Orders & fast Karachi delivery\n• ✅ 100% original branded products\n\nAaj kya chahiye aapko? 😊",
  quickReplies: INITIAL_QUICK_REPLIES,
};

// ── Sub-components ────────────────────────────────────────────────────────────

function renderText(text: string) {
  return text.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={j}>{part.slice(2, -2)}</strong>
        ) : (
          part
        )
      )}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start items-end gap-2">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0"
        style={{ background: "#00b140" }}
      >
        💄
      </div>
      <div
        className="px-4 py-3 rounded-2xl rounded-bl-sm"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <div className="flex gap-1 items-center">
          {[0, 150, 300].map((d) => (
            <span
              key={d}
              className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: `${d}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

type ConvoStep = "idle" | "awaiting_skin_tone";

export default function AyanAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [convoStep, setConvoStep] = useState<ConvoStep>("idle");
  const [pendingProduct, setPendingProduct] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  const openWhatsApp = useCallback((customMsg?: string) => {
    const msg =
      customMsg ??
      "Assalamualaikum! AYAN Cosmetics se rabta karna chahta/chahti hoon.";
    window.open(
      `https://wa.me/${WHATSAPP_CONTACT}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const userMsg: ChatMessage = {
        id: `u-${Date.now()}`,
        role: "user",
        text: text.trim(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      const delay = 700 + Math.random() * 500;

      // ── Step 2: user is answering skin tone question ──
      if (convoStep === "awaiting_skin_tone") {
        setTimeout(() => {
          setMessages((prev) => [...prev, buildSkinToneMsg(text.trim(), pendingProduct)]);
          setIsTyping(false);
          setConvoStep("idle");
          setPendingProduct("");
        }, delay);
        return;
      }

      // ── Step 1: shade quick reply → inject skin tone question ──
      if (SHADE_TRIGGER_RE.test(text)) {
        const product = extractProduct(text);
        setPendingProduct(product);
        setTimeout(() => {
          const skinToneQ: ChatMessage = {
            id: `b-${Date.now()}`,
            role: "bot",
            text: `💄 Perfect! Sahi **${product}** shade match ke liye ek quick sawal:\n\n**Aapki skin tone kya hai?**\n\n_(Screen pe rang alag dikhta hai — isliye hum **asli swatch photos** personally bhejte hain!)_ 📸`,
            quickReplies: ["☀️ Fair", "🌤️ Medium", "🌙 Dusky", "🌑 Dark", "❓ Pata nahi / Help chahiye"],
          };
          setMessages((prev) => [...prev, skinToneQ]);
          setIsTyping(false);
          setConvoStep("awaiting_skin_tone");
        }, delay);
        return;
      }

      // ── Normal flow ──
      setTimeout(() => {
        const response = getBotResponse(text);
        setMessages((prev) => [
          ...prev,
          { id: `b-${Date.now()}`, role: "bot", ...response },
        ]);
        setIsTyping(false);
        if (!isOpen || isMinimized) setHasUnread(true);
      }, delay);
    },
    [convoStep, isOpen, isMinimized, pendingProduct]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const toggleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      setHasUnread(false);
    } else {
      setIsOpen(false);
    }
  };

  // Glassmorphism styles
  const glassWindow = {
    background: "rgba(255, 255, 255, 0.88)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow:
      "0 20px 60px rgba(0,177,64,0.18), 0 4px 20px rgba(0,0,0,0.08)",
  } as React.CSSProperties;

  const glassMsgs = {
    background: "rgba(241, 245, 249, 0.65)",
  };

  const glassBotBubble = {
    background: "rgba(255, 255, 255, 0.92)",
    border: "1px solid rgba(255, 255, 255, 0.7)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  };

  const glassInput = {
    background: "rgba(255, 255, 255, 0.92)",
    borderTop: "1px solid rgba(0,177,64,0.12)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  } as React.CSSProperties;

  return (
    <>
      {/* ── Chat Window ── */}
      {isOpen && (
        <div
          className="fixed z-50 left-3 sm:left-4 rounded-2xl flex flex-col overflow-hidden transition-all duration-300"
          style={{
            // 16px (bottom-4 toggle) + 56px (h-14 toggle) + 16px gap = 88px
            bottom: "88px",
            width: "min(calc(100vw - 24px), 420px)",
            height: isMinimized ? "56px" : "560px",
            maxHeight: "calc(100vh - 110px)",
            ...glassWindow,
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0 cursor-pointer select-none"
            style={{
              background: "linear-gradient(135deg, #00b140 0%, #008a30 100%)",
              borderRadius: isMinimized ? "inherit" : "16px 16px 0 0",
            }}
            onClick={() => setIsMinimized((v) => !v)}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg flex-shrink-0 shadow-inner">
                💄
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-none tracking-wide">
                  Ayan AI
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                  <p className="text-green-100 text-xs">
                    AYAN Cosmetics &nbsp;•&nbsp; Online
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              <button
                onClick={(e) => { e.stopPropagation(); setIsMinimized((v) => !v); }}
                className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-all"
                aria-label="Minimize"
              >
                <Minus size={14} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-all"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto p-3 space-y-3"
                style={glassMsgs}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}
                  >
                    {msg.role === "bot" && (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                        style={{ background: "#00b140" }}
                      >
                        💄
                      </div>
                    )}

                    <div className="max-w-[85%] space-y-1.5">
                      {/* Bubble */}
                      <div
                        className={`px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "text-white rounded-br-sm"
                            : "text-gray-800 rounded-bl-sm"
                        }`}
                        style={
                          msg.role === "user"
                            ? { background: "#00b140" }
                            : glassBotBubble
                        }
                      >
                        {renderText(msg.text)}
                      </div>

                      {/* Quick replies */}
                      {msg.quickReplies && msg.quickReplies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {msg.quickReplies.map((reply) => (
                            <button
                              key={reply}
                              onClick={() => sendMessage(reply)}
                              className="text-xs px-2.5 py-1 rounded-full border transition-all duration-150"
                              style={{
                                borderColor: "#00b140",
                                color: "#00b140",
                                background: "rgba(255,255,255,0.85)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#00b140";
                                e.currentTarget.style.color = "white";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background =
                                  "rgba(255,255,255,0.85)";
                                e.currentTarget.style.color = "#00b140";
                              }}
                            >
                              {reply}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* WhatsApp CTA */}
                      {msg.whatsappCTA && (
                        <button
                          onClick={() => openWhatsApp(msg.whatsappMessage)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] mt-1 shadow-sm"
                          style={{ background: "#25D366" }}
                        >
                          <WhatsAppIcon />
                          WhatsApp pe Order Karen
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="p-3 flex gap-2 flex-shrink-0"
                style={glassInput}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    convoStep === "awaiting_skin_tone"
                      ? "Skin tone batayein ya chip select karein..."
                      : "Message karein..."
                  }
                  className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 outline-none focus:border-green-500 transition-colors"
                  style={{ background: "rgba(249,250,251,0.8)" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white disabled:opacity-40 transition-all hover:opacity-90 hover:scale-105 flex-shrink-0 shadow-sm"
                  style={{ background: "#00b140" }}
                  aria-label="Send"
                >
                  <Send size={14} />
                </button>
              </form>
            </>
          )}
        </div>
      )}

      {/* ── Floating Toggle Button ── */}
      <button
        onClick={toggleOpen}
        className="fixed bottom-4 left-3 sm:left-4 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        style={{
          background: isOpen
            ? "#374151"
            : "linear-gradient(135deg, #00b140 0%, #008a30 100%)",
          boxShadow: isOpen
            ? "0 4px 20px rgba(0,0,0,0.25)"
            : "0 4px 20px rgba(0,177,64,0.4)",
        }}
        aria-label="Chat with Ayan AI"
      >
        {isOpen ? (
          <X size={22} className="text-white" />
        ) : (
          <span className="text-2xl leading-none">💄</span>
        )}

        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow" />
        )}

        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none"
            style={{ background: "#00b140" }}
          />
        )}
      </button>
    </>
  );
}
