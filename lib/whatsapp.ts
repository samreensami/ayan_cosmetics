/**
 * WhatsApp Integration Utilities for AYAN Cosmetics
 */

// 1. ORDER Number (Add to Cart / Purchase)
// Format: 923242162485
export const ORDER_NUMBER = "923242162485";

// 2. CONTACT Number (General Inquiry / Rehan Bhai)
// Format: 923332304145
export const CONTACT_NUMBER = "923332304145";

export const SHOP_CONTACT = {
  name: "Rehan bhai",
  phone: "0333-2304145",
  whatsapp: CONTACT_NUMBER,
  instagram: "@AYANCOSMETICS.OFFICIAL",
};

/**
 * Generate a WhatsApp link for ordering a product (Uses ORDER_NUMBER)
 */
export function generateWhatsAppLink(productName: string): string {
  const message = `Assalam-o-Alaikum AYAN Cosmetics, I want to order: ${productName}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${ORDER_NUMBER}?text=${encodedMessage}`;
}

/**
 * Generate a general inquiry link (Uses CONTACT_NUMBER - Rehan Bhai)
 */
export function generateGeneralWhatsAppLink(): string {
  const message = "Assalam-o-Alaikum AYAN Cosmetics! I'm interested in your products.";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_NUMBER}?text=${encodedMessage}`;
}

/**
 * Generate a WhatsApp link for product inquiry (Uses CONTACT_NUMBER)
 */
export function generateInquiryLink(productName: string): string {
  const message = `Hi AYAN Cosmetics! I have a question about ${productName}. Is it available?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_NUMBER}?text=${encodedMessage}`;
}