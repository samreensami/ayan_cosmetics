import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, MapPin, MessageCircle, Mail } from "lucide-react";
import { SHOP_CONTACT } from "@/lib/whatsapp";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All products" },
    { href: "/shop?category=Makeup", label: "Makeup" },
    { href: "/shop?category=Skincare", label: "Skincare" },
    { href: "/shop?category=Perfumes", label: "Perfumes" },
    { href: "/shop?category=Hair%20Care", label: "Hair care" },
    { href: "/shop?category=Bundles", label: "Beauty boxes" },
  ],
  concerns: [
    { href: "/shop?concern=Glass%20Skin%20Glow", label: "Glass skin glow" },
    { href: "/shop?concern=Acne%20Prone", label: "Acne-prone skin" },
    { href: "/shop?concern=Dark%20Spots", label: "Dark spots" },
    { href: "/shop?concern=Dry%20Skin", label: "Dry skin" },
  ],
  help: [
    { href: "/deals", label: "Deals" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact" },
  ],
};

function LinkColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 font-sans text-sm font-medium">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-border bg-secondary/50">
      <div className="container-custom grid gap-10 py-14 md:grid-cols-12 md:py-20">
        {/* Brand */}
        <div className="md:col-span-4">
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="AYAN Cosmetics home">
            <span className="flex items-center rounded-full px-1.5 py-0.5 dark:bg-[#FBF8F3]">
              <Image src="/images/products/logo.png" alt="" width={110} height={42} className="h-9 w-auto" />
            </span>
            <span className="font-display text-2xl">Ayan</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Genuine cosmetics, skincare and fragrances from our shop in Saima Mall, Karachi.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={`tel:${SHOP_CONTACT.phone}`} className="inline-flex items-center gap-3 hover:text-primary">
                <Phone className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                {SHOP_CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${SHOP_CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                WhatsApp us
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/AYANCOSMETICS.OFFICIAL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-primary"
              >
                <Instagram className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                {SHOP_CONTACT.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-5">
          <LinkColumn title="Shop" links={footerLinks.shop} />
          <LinkColumn title="Shop by concern" links={footerLinks.concerns} />
          <LinkColumn title="Help" links={footerLinks.help} />
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-4 font-sans text-sm font-medium">Visit the shop</h3>
          <address className="flex items-start gap-3 text-sm not-italic leading-relaxed text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              <span className="block text-foreground">New AYAN Cosmetics</span>
              Shop No. G-16, Saima Shopping Mall,
              <br />
              Main Rashid Minhas Road, Karachi
            </span>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-custom space-y-4 py-6 text-xs text-muted-foreground">
          <p className="max-w-3xl leading-relaxed">
            We are an independent retailer based in Saima Mall, Karachi. All brand names, trademarks and
            images belong to their respective owners. We sell genuine products.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© {year} AYAN Cosmetics. Owner: Rehan Khan, {SHOP_CONTACT.phone}</p>
            <p className="inline-flex items-center gap-2">
              Built by Samreen Sami
              <a
                href="mailto:samreen.sami84@gmail.com"
                className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-foreground"
              >
                <Mail className="h-3 w-3" aria-hidden="true" />
                samreen.sami84@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
