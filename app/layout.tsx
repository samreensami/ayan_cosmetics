import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { CartProvider } from "@/lib/CartContext";
import FloatingCart from "@/components/FloatingCart";
import AyanAIChat from "@/components/AyanAIChat";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Display face for headings — fashion-magazine Didone, used only at large sizes.
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#FBF8F3",
};

export const metadata: Metadata = {
  title: {
    default: "AYAN Cosmetics Karachi | 100% Original Branded Makeup & Skincare",
    template: "%s | AYAN Cosmetics Karachi",
  },
  description:
    "Shop 100% genuine Dr. Rashel, Skin1004, Anua, Glow Recipe, e.l.f., Maybelline, KIKO Milano & Rivaj in Karachi. Customized beauty boxes, shade matching on WhatsApp, cash on delivery and same-day Karachi dispatch.",
  keywords: [
    "branded cosmetics Karachi",
    "original makeup Karachi",
    "korean skincare Karachi",
    "customized beauty boxes Karachi",
    "genuine perfumes Karachi",
    "Rivaj cosmetics Karachi",
    "Dr Rashel Karachi",
    "AYAN Cosmetics",
    "Saima Mall cosmetics",
    "shade matching Karachi",
  ],
  authors: [{ name: "AYAN Cosmetics" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "AYAN Cosmetics",
    title: "AYAN Cosmetics Karachi | 100% Original Branded Makeup & Skincare",
    description:
      "Genuine branded makeup, skincare & fragrances with customized beauty boxes in Karachi. Cash on delivery and same-day Karachi dispatch.",
  },
  metadataBase: new URL("https://www.ayan-cosmetics.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bodoni.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans" suppressHydrationWarning>
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main id="main" className="min-h-screen">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieConsent />
            <FloatingCart />
            <AyanAIChat />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
