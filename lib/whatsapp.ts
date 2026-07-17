/**
 * WhatsApp Integration Utilities for AYAN Cosmetics
 */

// 1. ORDER Number (Used for Add to Cart / Buy Now)
// Is number par product ka order jaye ga
export const ORDER_NUMBER = "923242162485";

// 2. CONTACT Number (Used for General Inquiry / Rehan Bhai)
// Is number par general sawal ya help ke liye msg jaye ga
export const CONTACT_NUMBER = "923332304145";

export const SHOP_CONTACT = {
  name: "Rehan bhai",
  phone: "0333-2304145",
  whatsapp: CONTACT_NUMBER,
  instagram: "@AYANCOSMETICS.OFFICIAL",
};

/**
 * Generate a WhatsApp link for ordering a product (Uses ORDER_NUMBER)
 * @param productName - The name of the product
 * @param price - (Optional) Price to include in the message
 */
export function generateWhatsAppLink(productName: string, price?: number): string {
  const priceText = price ? ` for Rs. ${price}` : "";
  const message = `Assalam-o-Alaikum AYAN Cosmetics, I want to order: ${productName}${priceText}`;
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
 * Build a WhatsApp link with a custom message (Uses CONTACT_NUMBER by default).
 * @param message - The message text (will be URL-encoded)
 * @param phone   - Optional override for the destination number
 */
export function buildWhatsAppLink(message: string, phone: string = CONTACT_NUMBER): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp link for product inquiry (Uses CONTACT_NUMBER)
 */
export function generateInquiryLink(productName: string): string {
  const message = `Hi AYAN Cosmetics! I have a question about ${productName}. Is it available?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_NUMBER}?text=${encodedMessage}`;
}