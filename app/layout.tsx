import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { CartProvider } from "@/lib/CartContext";
import FloatingCart from "@/components/FloatingCart";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "AYAN Cosmetics - Premium Beauty Store in Karachi",
    template: "%s | AYAN Cosmetics",
  },
  description:
    "Your trusted destination for genuine cosmetics, premium fragrances, and beauty accessories in Karachi. Cash on Delivery available.",
  keywords: [
    "cosmetics Karachi",
    "genuine makeup Karachi",
    "perfumes Pakistan",
    "AYAN Cosmetics",
    "beauty products Karachi",
  ],
  authors: [{ name: "AYAN Cosmetics" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "AYAN Cosmetics",
    title: "AYAN Cosmetics - Premium Beauty Store in Karachi",
    description: "Genuine cosmetics, fragrances & skincare in Karachi.",
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
        </CartProvider>
      </body>
    </html>
  );
}
