import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, MapPin, MessageCircle, Mail } from "lucide-react";
import { SHOP_CONTACT } from "@/lib/whatsapp";

/**
 * Footer Component for AYAN Cosmetics
 */

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=Lipstick", label: "Lipstick" },
    { href: "/shop?category=Foundation", label: "Foundation" },
    { href: "/shop?category=Skincare", label: "Skincare" },
    { href: "/shop?category=Perfume", label: "Perfumes" },
    { href: "/shop?category=Cosmetic+Bags", label: "Cosmetic Bags" },
  ],
  support: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/shop", label: "Shop by Concern" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Signals Bar */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-white">
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              Cash on Delivery Available
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              100% Genuine Products
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              Fast Delivery in Karachi
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/products/logo.png"
                alt="AYAN Cosmetics"
                width={140}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Your trusted destination for genuine cosmetics, fragrances, and
              beauty accessories in Karachi.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${SHOP_CONTACT.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">{SHOP_CONTACT.phone}</span>
              </a>
              <a
                href={`https://wa.me/${SHOP_CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/AYANCOSMETICS.OFFICIAL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">{SHOP_CONTACT.instagram}</span>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Visit Us</h3>
            <div className="flex items-start gap-3 text-gray-400">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-white">New AYAN Cosmetics</p>
                <p>Shop No. G-16, Saima Shopping Mall,</p>
                <p>Main Rashid Minhas Road,</p>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer & Copyright */}
      <div className="border-t border-gray-800 bg-gray-950/50">
        <div className="container-custom py-6">
          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center mb-4 leading-relaxed max-w-3xl mx-auto">
            We are an independent retailer based in Saima Mall, Karachi. All
            brand names, trademarks, and images belong to their respective
            owners. We sell genuine products.
          </p>

          {/* Copyright & Developer Signature */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-900 pt-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} AYAN Cosmetics. All rights reserved.
            </p>
            
            {/* Developer Credit Line */}
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900/60 px-4 py-2 rounded-full border border-gray-800">
              <span>Built by Samreen Sami</span>
              <span className="text-gray-600">|</span>
              <a 
                href="mailto:samreen.sami84@gmail.com" 
                className="flex items-center gap-1 hover:text-primary transition-colors"
                title="Contact Developer"
              >
                <Mail className="h-3 w-3" />
                samreen.sami84@gmail.com
              </a>
            </div>

            <p className="text-sm text-gray-500">
              Owner: Rehan Khan — {SHOP_CONTACT.phone}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}