"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/CartContext";
import ThemePicker from "@/components/ThemePicker";
import Marquee from "@/components/Marquee";

const announcements = [
  "Cash on delivery across Karachi",
  "100% genuine, sealed products",
  "Same-day dispatch",
  "7-day returns",
  "Free shade matching on WhatsApp",
];

const navLinks: { href: string; label: string; highlight?: boolean }[] = [
  { href: "/shop", label: "Shop" },
  // Highlighted: beauty boxes & deals are the shop's best sellers
  { href: "/deals", label: "Deals", highlight: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Visit us" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="AYAN Cosmetics home">
      {/* The logo artwork is black/red — dark themes get an ivory medallion so it stays visible.
          The artwork itself is never recoloured. */}
      <span className="flex items-center rounded-full px-1.5 py-0.5 dark:bg-[#FBF8F3]">
        <Image
          src="/images/products/logo.png"
          alt=""
          width={96}
          height={36}
          className="h-6 w-auto sm:h-7 md:h-8"
          priority
        />
      </span>
      <span className="font-display text-lg leading-none tracking-tight sm:text-xl md:text-2xl">
        AYAN <span className="italic">Cosmetics</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        isScrolled || isMenuOpen
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/0"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Announcement bar — collapses once you scroll */}
      <div
        className={cn(
          "overflow-hidden bg-primary text-primary-foreground transition-[height] duration-300",
          isScrolled || isMenuOpen ? "h-0" : "h-8"
        )}
      >
        <Marquee
          items={announcements}
          duration={45}
          className="h-8 items-center text-xs"
          separator={<span aria-hidden="true" className="opacity-60">✦</span>}
        />
      </div>

      <nav className="container-custom flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.highlight ? (
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5",
                    isActive(link.href) && "ring-2 ring-primary/40 ring-offset-2 ring-offset-background"
                  )}
                >
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {link.label}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "relative py-1 text-sm transition-colors",
                    isActive(link.href)
                      ? "text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-1.5 md:gap-2">
          <Link
            href="/shop"
            aria-label="Search products"
            className="hidden md:flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </Link>

          <ThemePicker />

          <button
            type="button"
            onClick={toggleCart}
            aria-label={`Open bag (${totalItems} items)`}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingBag className="h-[18px] w-[18px]" aria-hidden="true" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary"
          >
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 h-px w-5 bg-current transition-transform duration-300",
                  isMenuOpen ? "top-1.5 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-5 bg-current transition-transform duration-300",
                  isMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-y-auto bg-background transition-[height] duration-500 ease-out",
          isMenuOpen ? "h-[calc(100svh-4rem)]" : "h-0"
        )}
      >
        <ul className="container-custom flex flex-col pb-8 pt-2">
          {[{ href: "/", label: "Home" }, ...navLinks].map((link) => (
            <li key={link.href} className="border-b border-border">
              <Link
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive(link.href) && link.href !== "/" ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between py-4 font-display text-3xl",
                  "highlight" in link && link.highlight && "text-primary"
                )}
              >
                {link.label}
                {"highlight" in link && link.highlight && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 font-sans text-xs font-medium text-primary-foreground">
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    Beauty boxes
                  </span>
                )}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link
              href="/shop"
              onClick={closeMenu}
              className="flex h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
            >
              Browse all products
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
