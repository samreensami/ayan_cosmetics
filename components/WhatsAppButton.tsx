"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { generateGeneralWhatsAppLink } from "@/lib/whatsapp";

/**
 * Floating WhatsApp Button Component
 *
 * Appears on the bottom right corner of all pages
 * Allows customers to quickly contact AYAN Cosmetics on WhatsApp
 *
 * Features:
 * - Fixed position at bottom right
 * - Pulse glow animation to attract attention
 * - Tooltip on hover
 * - Links to WhatsApp with pre-filled message
 */

export default function WhatsAppButton() {
  const whatsappLink = generateGeneralWhatsAppLink();

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
        {/* Tooltip arrow */}
        <span className="absolute top-1/2 -translate-y-1/2 -right-2 border-8 border-transparent border-l-gray-900" />
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

        {/* Main button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-lg whatsapp-pulse transition-all duration-300 hover:scale-110">
          <MessageCircle className="h-7 w-7 text-white" fill="white" />
        </div>
      </div>
    </a>
  );
}
