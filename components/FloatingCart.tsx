"use client";

import React from "react";
import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/lib/CartContext";
// Yahan humne purana WHATSAPP_NUMBER hata kar ORDER_NUMBER import kiya hai
import { ORDER_NUMBER } from "@/lib/whatsapp";
import Image from "next/image";

export default function FloatingCart() {
  const { items, isOpen, toggleCart, closeCart, updateQuantity, removeFromCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = "*🛍️ New Order from AYAN Cosmetics*\n\n";
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `    Qty: ${item.quantity}\n\n`;
    });
    message += `───────────────\n`;
    message += `Please confirm prices and availability. Thank you!`;

    const encoded = encodeURIComponent(message);
    // Yahan ORDER_NUMBER use ho raha hai jo export ho chuka hai
    window.open(`https://wa.me/${ORDER_NUMBER}?text=${encoded}`, "_blank");
  };

  if (items.length === 0 && !isOpen) return null;

  return (
    <>
      {/* Floating Cart Button */}
      {!isOpen && items.length > 0 && (
        <button
          onClick={toggleCart}
          className="fixed bottom-6 right-6 z-50 bg-[#00b140] text-white p-4 rounded-full shadow-2xl hover:bg-[#009936] transition-all hover:scale-110"
          aria-label="Open cart"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-[#e60012] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </button>
      )}

      {/* Cart Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closeCart} />

          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#00b140]/20">
              <h2 className="text-xl font-bold text-gray-900">Shopping Cart ({items.length})</h2>
              <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-4 bg-[#f7fff9] rounded-xl border border-[#00b140]/20">
                  {/* Product Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm truncate">{item.product.name}</h3>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-bold text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto p-1 text-[#e60012] hover:bg-white rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#00b140]/20 space-y-4 bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Prices will be confirmed on WhatsApp</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#00b140] text-white font-black py-4 rounded-xl hover:bg-[#009936] transition-all shadow-lg uppercase tracking-widest text-sm"
                >
                  Checkout via WhatsApp 💬
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}