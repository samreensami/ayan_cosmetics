/**
 * WhatsApp Integration Utilities for AYAN Cosmetics
 *
 * Contact: Rehan bhai - 0333-2304145
 * WhatsApp Number: +92 333 2304145
 *
 * This file handles all WhatsApp-related functionality including:
 * - Generating WhatsApp order links
 * - Formatting product messages
 */

// AYAN Cosmetics WhatsApp number (Pakistan format without leading 0)
// Format: 92 (country code) + 333 (network) + 2304145 (number)
export const WHATSAPP_NUMBER = "923332304145";

// Shop contact details
export const SHOP_CONTACT = {
  name: "Rehan bhai",
  phone: "0333-2304145",
  whatsapp: WHATSAPP_NUMBER,
  instagram: "@AYANCOSMETICS.OFFICIAL",
};

/**
 * Generate a WhatsApp link for ordering a product
 *
 * @param productName - Name of the product
 * @returns Full WhatsApp URL with pre-filled message
 *
 * Example output:
 * https://wa.me/923332304345?text=Hi%20AYAN%20Cosmetics%2C%20I%20want%20to%20buy%20Lipstick
 */
export function generateWhatsAppLink(productName: string): string {
  // Create the message text
  const message = `Hi AYAN Cosmetics, I want to buy ${productName}`;

  // URL encode the message for safe transmission
  const encodedMessage = encodeURIComponent(message);

  // Return the complete WhatsApp URL
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Generate a general inquiry WhatsApp link
 * Used for the floating WhatsApp button
 *
 * @returns WhatsApp URL with general greeting
 */
export function generateGeneralWhatsAppLink(): string {
  const message = "Hi AYAN Cosmetics! I'm interested in your products.";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Generate a WhatsApp link for product inquiry (not purchase)
 *
 * @param productName - Name of the product
 * @returns WhatsApp URL with inquiry message
 */
export function generateInquiryLink(productName: string): string {
  const message = `Hi AYAN Cosmetics! I have a question about ${productName}. Is it available?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
