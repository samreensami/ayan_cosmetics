import type { Metadata } from "next";
import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { generateGeneralWhatsAppLink, SHOP_CONTACT } from "@/lib/whatsapp";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "Visit us",
  description:
    "Visit AYAN Cosmetics at Shop G-16, Saima Shopping Mall, Rashid Minhas Road, Karachi. Open every day 11 AM – 11 PM. Call or WhatsApp 0333-2304145.",
};

export default function ContactPage() {
  const whatsappLink = generateGeneralWhatsAppLink();

  const details = [
    {
      icon: MapPin,
      label: "Address",
      value: STORE.name,
      sub: `${STORE.addressLines[0]}, ${STORE.addressLines[1]}`,
      href: STORE.mapsUrl,
      external: true,
    },
    { icon: Clock, label: "Opening hours", value: STORE.hours, sub: STORE.days },
    { icon: Phone, label: "Phone", value: SHOP_CONTACT.phone, sub: "Call or WhatsApp", href: `tel:${SHOP_CONTACT.phone}` },
    {
      icon: Instagram,
      label: "Instagram",
      value: SHOP_CONTACT.instagram,
      sub: "New arrivals and shade swatches",
      href: "https://instagram.com/AYANCOSMETICS.OFFICIAL",
      external: true,
    },
  ];

  return (
    <div className="pt-header">
      {/* Intro */}
      <section className="border-b border-border">
        <div className="container-custom py-12 md:py-20">
          <h1 className="font-display text-5xl leading-[1.02] md:text-7xl">Visit or message us</h1>
          <p className="mt-5 max-w-xl text-muted-foreground md:text-lg">
            Questions about a product, a shade or an order? WhatsApp is the quickest way to reach us. Or drop by the
            shop and try things in person.
          </p>
        </div>
      </section>

      <section className="container-custom grid gap-6 py-12 md:grid-cols-12 md:gap-8 md:py-16">
        {/* Left: WhatsApp + details */}
        <div className="space-y-6 md:col-span-6 lg:col-span-5">
          <div className="rounded-3xl bg-primary p-6 text-primary-foreground md:p-8">
            <h2 className="font-display text-3xl leading-tight md:text-4xl">Chat with us on WhatsApp</h2>
            <p className="mt-3 text-sm opacity-85">
              Send a product name or a photo and we&apos;ll confirm price, stock and delivery.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-medium text-white transition-colors hover:bg-whatsapp-dark"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Open WhatsApp
              </a>
              <a
                href={`tel:${SHOP_CONTACT.phone}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {SHOP_CONTACT.phone}
              </a>
            </div>
          </div>

          <ul className="divide-y divide-border rounded-3xl border border-border bg-card">
            {details.map((d) => {
              const body = (
                <>
                  <d.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{d.label}</span>
                    <span className="mt-0.5 block font-medium">{d.value}</span>
                    <span className="block text-sm text-muted-foreground">{d.sub}</span>
                  </span>
                </>
              );
              return (
                <li key={d.label}>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.external ? "_blank" : undefined}
                      rel={d.external ? "noopener noreferrer" : undefined}
                      className="flex gap-4 p-5 transition-colors hover:bg-secondary/60 md:p-6"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex gap-4 p-5 md:p-6">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: map */}
        <div className="md:col-span-6 lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <iframe
              title="Map showing AYAN Cosmetics at Saima Shopping Mall, Karachi"
              src={STORE.mapsEmbedUrl}
              className="block aspect-square w-full md:aspect-auto md:h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border p-4 md:p-5">
              <p className="text-sm text-muted-foreground">Saima Shopping Mall, Rashid Minhas Road</p>
              <a
                href={STORE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full border border-foreground/20 px-5 text-sm font-medium transition-colors hover:border-foreground/50"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
