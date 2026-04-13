"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag, Search, Phone, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // Dono colors ko #00B140 kar diya hai taake logo blend ho jaye
        isScrolled
          ? "bg-[#00B140]/95 backdrop-blur-md shadow-lg py-2"
          : "bg-[#00B140] py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section - Removed white box background and padding */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/images/products/logo.png"
                alt="AYAN Cosmetics Logo"
                width={160}
                height={60}
                className="h-12 md:h-16 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-white transition-colors hover:text-black/70"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0333-2304145"
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-black/70 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>0333-2304145</span>
            </a>
            
            <Link href="/shop">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <Search className="h-5 w-5" />
              </Button>
            </Link>

            {/* Cart Button with Badge */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#e60012] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <Link href="/shop">
              <Button
                className="bg-white text-[#00B140] hover:bg-black hover:text-white font-bold rounded-full gap-2 transition-all shadow-lg border-none"
              >
                <ShoppingBag className="h-4 w-4" />
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-[#00B140] rounded-b-2xl shadow-2xl",
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-white font-bold hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="px-4 py-3 border-t border-white/10 mt-2">
              <a href="tel:0333-2304145" className="flex items-center gap-2 text-white font-bold">
                <Phone className="h-4 w-4" />
                <span>0333-2304145</span>
              </a>
            </div>

            {/* Mobile Cart Button */}
            <div className="px-4 py-2">
              <button
                onClick={() => { toggleCart(); setIsMenuOpen(false); }}
                className="w-full flex items-center justify-between px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white font-bold"
              >
                <span className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Cart
                </span>
                {totalItems > 0 && (
                  <span className="bg-[#e60012] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            <div className="pt-2 px-4">
              <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-white text-[#00B140] hover:bg-black hover:text-white font-bold rounded-full gap-2 shadow-md border-none">
                  <ShoppingBag className="h-4 w-4" />
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}