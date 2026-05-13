import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { CartProvider } from "@/lib/CartContext";
import FloatingCart from "@/components/FloatingCart";
import AyanAIChat from "@/components/AyanAIChat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "AYAN Cosmetics Karachi | 100% Original Branded Makeup & Perfumes",
    template: "%s | AYAN Cosmetics Karachi",
  },
  description:
    "Shop 100% genuine MAC, Huda Beauty & NYX in Karachi. Customized bridal & birthday beauty boxes, free shade matching, same-day delivery. WhatsApp: 0333-2304145.",
  keywords: [
    "branded cosmetics Karachi",
    "original makeup Karachi",
    "customized beauty boxes Karachi",
    "bridal beauty box Pakistan",
    "genuine perfumes Karachi",
    "Huda Beauty Karachi",
    "MAC cosmetics Karachi",
    "beauty box gift Karachi",
    "AYAN Cosmetics",
    "Saima Mall cosmetics",
    "shade matching Karachi",
    "foundation shades Pakistan",
  ],
  authors: [{ name: "AYAN Cosmetics" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "AYAN Cosmetics",
    title: "AYAN Cosmetics Karachi | 100% Original Branded Makeup & Perfumes",
    description:
      "Genuine branded cosmetics, fragrances & customized beauty boxes in Karachi. Bridal sets, birthday gifts & shade matching. Fast delivery nationwide.",
  },
  metadataBase: new URL("https://ayancosmetics.pk"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} bg-white`} suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
          <FloatingCart />
          <AyanAIChat />
        </CartProvider>
      </body>
    </html>
  );
}
