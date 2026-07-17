"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag, Search, ShoppingCart } from "lucide-react";
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-green-700/95 backdrop-blur-xl shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
          : "bg-green-800"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-14 md:h-14">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center shrink-0 z-10">
            <Image
              src="/images/products/logo.png"
              alt="AYAN Cosmetics"
              width={160}
              height={60}
              className="h-8 md:h-9 lg:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── DESKTOP NAV LINKS ── */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[10px] lg:text-sm font-medium text-white/75 hover:text-white tracking-widest uppercase transition-colors duration-200 group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-pink-300 group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}

            {/* Deals pill */}
            <Link
              href="/deals"
              className="relative inline-flex items-center gap-1.5 px-3 lg:px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #ff3b3b 0%, #cc0000 100%)",
                boxShadow: "0 2px 16px rgba(220,0,0,0.5)",
              }}
            >
              🔥 <span className="hidden lg:inline">Deals</span>
            </Link>
          </div>

          {/* ── DESKTOP ACTIONS ── */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 z-10">
            {/* Search */}
            <Link href="/shop">
              <button className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/8 transition-all">
                <Search className="h-4 w-4" />
              </button>
            </Link>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-full text-white/60 hover:text-white hover:bg-white/8 transition-all"
            >
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 rounded-full bg-pink-500 text-white text-[9px] font-black flex items-center justify-center px-1">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Shop Now */}
            <Link href="/shop" className="ml-1 lg:ml-2">
              <button className="flex items-center gap-2 px-3 lg:px-5 py-2 lg:py-2.5 rounded-full bg-white text-black text-[10px] lg:text-xs font-black uppercase tracking-widest hover:bg-pink-50 transition-all shadow-md whitespace-nowrap">
                <ShoppingBag className="h-3 lg:h-3.5 w-3 lg:w-3.5" />
                <span className="hidden sm:inline">Shop Now</span>
              </button>
            </Link>
          </div>

          {/* ── MOBILE: CART + HAMBURGER (PERFECTLY ALIGNED) ── */}
          <div className="md:hidden flex items-center gap-1 z-10">
            {/* Cart Button */}
            <button 
              onClick={toggleCart} 
              className="relative p-2 text-white/80 flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 rounded-full bg-pink-500 text-white text-[9px] flex items-center justify-center font-black">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-white/80 flex items-center justify-center"
            >
              <div className="relative w-6 h-6">
                {/* Top line */}
                <span 
                  className={cn(
                    "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300", 
                    isMenuOpen ? "top-3 rotate-45" : "top-1"
                  )} 
                />
                {/* Middle line */}
                <span 
                  className={cn(
                    "absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300", 
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  )} 
                />
                {/* Bottom line */}
                <span 
                  className={cn(
                    "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300", 
                    isMenuOpen ? "top-3 -rotate-45" : "top-5"
                  )} 
                />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div className={cn("md:hidden overflow-hidden transition-all duration-500 bg-black/95", isMenuOpen ? "max-h-[520px]" : "max-h-0")}>
        <div className="px-5 pt-4 pb-8 space-y-1 border-t border-white/8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-4 text-white/70 uppercase tracking-widest text-sm">{link.label}</Link>
          ))}
          <Link href="/deals" onClick={() => setIsMenuOpen(false)} className="block py-4 text-center bg-red-600 text-white font-black rounded-xl uppercase tracking-widest text-sm">🔥 Deals — Limited Time</Link>
          <button onClick={() => { toggleCart(); setIsMenuOpen(false); }} className="w-full flex justify-between py-4 text-white/70 uppercase tracking-widest text-sm"><span className="flex gap-3"><ShoppingCart /> Cart</span>{totalItems > 0 && <span>{totalItems}</span>}</button>
          <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="block pt-2"><button className="w-full py-4 bg-white text-black font-black rounded-full uppercase tracking-widest text-xs">Shop Now</button></Link>
        </div>
      </div>
    </nav>
  );
}