import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import LabelHeading from "@/components/LabelHeading";
import { generateGeneralWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Beauty boxes & deals",
  description:
    "Customised beauty boxes, vanity cases and bundle deals from AYAN Cosmetics, Saima Mall Karachi. Cash on delivery, same-day dispatch.",
};

const steps = [
  { title: "Pick a box", text: "Choose a vanity case or bundle below." },
  { title: "Tell us what goes in", text: "Send your list, budget or occasion on WhatsApp." },
  { title: "We pack and deliver", text: "Same-day dispatch in Karachi, cash on delivery." },
];

export default function DealsPage() {
  const boxes = products.filter((p) => p.category === "Bundles");

  return (
    <div className="pt-header pb-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container-custom grid gap-8 py-12 md:grid-cols-12 md:items-end md:py-16">
          <div className="md:col-span-7">
            <h1 className="font-display text-5xl leading-none md:text-7xl">Beauty boxes &amp; deals</h1>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Vanity cases and gift boxes, filled with the genuine products you choose. Perfect for bridal, Eid and
              birthday gifting.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <a
              href={generateGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-whatsapp px-7 text-sm font-medium text-white transition-colors hover:bg-whatsapp-dark"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Build a custom box on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* How custom boxes work — a real 3-step sequence */}
      <section className="container-custom py-10 md:py-14" aria-label="How custom boxes work">
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="font-display text-3xl leading-none text-primary">{i + 1}</span>
              <div>
                <p className="font-medium">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Boxes */}
      <section className="container-custom" aria-labelledby="boxes-title">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <LabelHeading id="boxes-title">All boxes</LabelHeading>
          <Link href="/shop" className="shrink-0 text-sm underline underline-offset-4 hover:text-primary">
            Shop single products
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-6 lg:grid-cols-4">
          {boxes.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
