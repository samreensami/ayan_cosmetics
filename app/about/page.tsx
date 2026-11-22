import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Clock, MapPin, MessageCircle, Phone, ShieldCheck, Truck } from "lucide-react";
import LabelHeading from "@/components/LabelHeading";
import { generateGeneralWhatsAppLink, SHOP_CONTACT } from "@/lib/whatsapp";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "About us",
  description:
    "AYAN Cosmetics is a genuine-brands cosmetics shop at Saima Mall, Karachi, run by Rehan Khan. Original makeup, skincare and fragrances with same-day Karachi delivery.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "100% genuine",
    text: "Every product comes from verified distributors. No copies, no grey stock.",
  },
  {
    icon: Truck,
    title: "Same-day in Karachi",
    text: "Orders confirmed before 2 PM are dispatched the same day, cash on delivery.",
  },
  {
    icon: Award,
    title: "Picked with care",
    text: "Korean skincare, everyday makeup and fragrances we would use ourselves.",
  },
];

export default function AboutPage() {
  const whatsappLink = generateGeneralWhatsAppLink();

  return (
    <div className="pt-header">
      {/* Intro */}
      <section className="border-b border-border">
        <div className="container-custom py-12 md:py-20">
          <h1 className="max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl text-balance">
            Genuine beauty, from Saima Mall to your door.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
            AYAN Cosmetics brings original international and Korean beauty brands to Karachi, at fair prices and
            with honest advice, from our shop on Rashid Minhas Road.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="container-custom grid items-center gap-10 py-14 md:grid-cols-12 md:gap-14 md:py-20">
        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-3xl border border-border bg-secondary md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "radial-gradient(60% 50% at 50% 40%, hsl(var(--rose) / 0.45), transparent 70%)" }}
            />
            <Image
              src="/images/products/rehan.png"
              alt="Rehan Khan, founder of AYAN Cosmetics"
              fill
              sizes="(max-width: 768px) 340px, 40vw"
              className="object-contain object-bottom pt-6"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="text-sm text-muted-foreground">Founder &amp; proprietor</p>
          <h2 className="mt-2 font-display text-4xl md:text-6xl">Rehan Khan</h2>
          <blockquote className="mt-6 border-l-2 border-primary pl-5 font-display text-2xl italic leading-snug md:text-3xl">
            &ldquo;Quality shouldn&rsquo;t be a luxury.&rdquo;
          </blockquote>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            At New AYAN Cosmetics, we bridge the gap between premium global brands and Karachi&rsquo;s beauty lovers.
            Our store at Saima Mall isn&rsquo;t just a shop. It&rsquo;s a place you can count on for the real thing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Ask Rehan on WhatsApp
            </a>
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-7 text-sm font-medium transition-colors hover:border-foreground/50"
            >
              Browse the shop
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/50 py-14 md:py-20" aria-labelledby="values-title">
        <div className="container-custom">
          <LabelHeading id="values-title" className="mb-10">
            What we stand for
          </LabelHeading>
          <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
            {values.map((v) => (
              <li key={v.title} className="rounded-3xl border border-border bg-card p-6 md:p-8">
                <v.icon className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visit */}
      <section className="container-custom py-14 md:py-20" aria-labelledby="visit-store-title">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:items-center md:p-12">
          <div>
            <h2 id="visit-store-title" className="font-display text-3xl md:text-5xl">
              Visit the shop
            </h2>
            <p className="mt-3 text-muted-foreground">Try shades in person and get advice for your skin.</p>
          </div>

          <ul className="space-y-5 text-sm md:text-base">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block font-medium">{STORE.name}</span>
                <span className="text-muted-foreground">
                  {STORE.addressLines[0]}, {STORE.addressLines[1]}
                </span>
              </span>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block font-medium">{STORE.hours}</span>
                <span className="text-muted-foreground">{STORE.days}</span>
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={`tel:${SHOP_CONTACT.phone}`} className="font-medium hover:text-primary">
                {SHOP_CONTACT.phone}
              </a>
            </li>
            <li className="pt-2">
              <a
                href={STORE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-full border border-foreground/20 px-6 text-sm font-medium transition-colors hover:border-foreground/50"
              >
                Get directions
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
