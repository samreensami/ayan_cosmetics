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
      className="fixed bottom-4 right-4 z-50 group md:bottom-6 md:right-6"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card text-foreground text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
        {/* Tooltip arrow */}
        <span className="absolute top-1/2 -translate-y-1/2 -right-2 border-8 border-transparent border-l-card" />
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse ring animation */}
        
        {/* Main button */}
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp shadow-lg transition-all duration-300 hover:scale-110 hover:bg-whatsapp-dark md:h-14 md:w-14">
          <MessageCircle className="h-6 w-6 text-white" fill="white" />
        </div>
      </div>
    </a>
  );
}
