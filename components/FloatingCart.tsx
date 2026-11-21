"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCart } from "@/lib/CartContext";
import { ORDER_NUMBER } from "@/lib/whatsapp";

export default function FloatingCart() {
  const { items, isOpen, toggleCart, closeCart, updateQuantity, removeFromCart } = useCart();
  const reduceMotion = useReducedMotion();
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  // Lock scroll + Escape to close while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = "*🛍️ New Order from AYAN Cosmetics*\n\n";
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `    Qty: ${item.quantity}\n\n`;
    });
    message += `───────────────\n`;
    message += `Please confirm prices and availability. Thank you!`;

    window.open(`https://wa.me/${ORDER_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Floating bag button (mobile thumb zone) */}
      {!isOpen && items.length > 0 && (
        <button
          type="button"
          onClick={toggleCart}
          className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105"
          aria-label={`Open bag (${totalQty} items)`}
        >
          <ShoppingBag className="h-6 w-6" aria-hidden="true" />
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-[11px] font-semibold text-background">
            {totalQty}
          </span>
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40"
              onClick={closeCart}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-labelledby="cart-title"
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-soft"
              initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <h2 id="cart-title" className="font-display text-2xl">
                  Your bag {items.length > 0 && <span className="text-muted-foreground">({totalQty})</span>}
                </h2>
                <button
                  type="button"
                  onClick={closeCart}
                  aria-label="Close bag"
                  className="rounded-full p-2 hover:bg-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {items.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                  <p className="font-display text-xl">Your bag is empty</p>
                  <p className="text-sm text-muted-foreground">Add products from the shop, then order in one WhatsApp message.</p>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="mt-3 rounded-full border border-border px-6 py-2.5 text-sm hover:bg-secondary"
                  >
                    Keep shopping
                  </button>
                </div>
              ) : (
                <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
                  {items.map((item) => (
                    <li key={item.product.id} className="flex gap-4 py-5">
                      <div className="product-frame relative h-20 w-16 shrink-0 overflow-hidden rounded-xl">
                        <Image src={item.product.image} alt="" fill sizes="64px" className="object-cover" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground">{item.product.brand}</p>
                        <h3 className="line-clamp-2 font-sans text-sm font-medium">{item.product.name}</h3>

                        <div className="mt-3 flex items-center gap-2">
                          <div className="flex items-center rounded-full border border-border">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              aria-label={`Decrease quantity of ${item.product.name}`}
                              className="p-2 hover:text-primary"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-6 text-center text-sm tabular-nums" aria-live="polite">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              aria-label={`Increase quantity of ${item.product.name}`}
                              className="p-2 hover:text-primary"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            aria-label={`Remove ${item.product.name}`}
                            className="ml-auto rounded-full p-2 text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {items.length > 0 && (
                <div className="space-y-3 border-t border-border px-6 py-5">
                  <p className="text-sm text-muted-foreground">Prices and delivery are confirmed on WhatsApp.</p>
                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="flex h-12 w-full items-center justify-center rounded-full bg-whatsapp text-sm font-medium text-white transition-colors hover:bg-whatsapp-dark"
                  >
                    Send order on WhatsApp
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
