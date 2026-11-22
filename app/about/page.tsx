"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Award, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrustSignals from "@/components/TrustSignals";
import { generateGeneralWhatsAppLink, SHOP_CONTACT } from "@/lib/whatsapp";

const shopValues = [
  {
    icon: ShieldCheck,
    title: "100% Genuine",
    description: "Every product is sourced directly from verified distributors. No fakes, just beauty.",
  },
  {
    icon: Zap,
    title: "Karachi Fast-Track",
    description: "Orders before 2 PM are dispatched the same day for lightning-fast delivery.",
  },
  {
    icon: Award,
    title: "Expert Curation",
    description: "Hand-picked cosmetics and fragrances that match global beauty standards.",
  },
];

export default function AboutPage() {
  const whatsappLink = generateGeneralWhatsAppLink();
  const googleMapsUrl = "https://maps.google.com";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary overflow-x-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl md:text-8xl font-semibold italic leading-none mb-8"
            >
              Legacy of <span className="text-primary">Beauty</span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide max-w-2xl mx-auto leading-relaxed"
            >
              Serving Karachi with authentic luxury and premium beauty essentials since our inception at Saima Mall.
            </p>
          </div>
        </div>
      </section>

      {/* ── OWNER SECTION ── */}
      <section className="container-custom py-24">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-16 items-center">
          <div 
            className="relative group"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-card relative border border-border transition-all duration-700 hover:border-primary/50 shadow-2xl">
              <Image
                src="/images/products/rehan.png"
                alt="Rehan Khan - Founder"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-primary -z-10 rounded-bl-3xl animate-pulse" />
          </div>

          <div 
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/40 rounded-full">
               <span className="text-primary text-xs font-semibold">The Founder</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold italic leading-tight">
              Rehan <br /> Khan
            </h2>
            <div className="prose prose-invert lg:prose-lg text-muted-foreground">
              <p>&quot;Quality shouldn&apos;t be a luxury. At New AYAN Cosmetics, we bridge the gap between premium global brands and our local beauty enthusiasts.&quot;</p>
              <p className="mt-4">Our flagship store at **Saima Mall** isn&apos;t just a shop—it&apos;s a destination for authenticity in Karachi&apos;s cosmetics landscape.</p>
            </div>

            <div className="pt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-card hover:text-primary-foreground text-primary-foreground font-semibold px-10 py-8 rounded-full text-sm transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(82,149,56,0.3)]">
                  <MessageCircle className="mr-3 h-5 w-5 fill-current" />
                  Direct Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES (Staggered Animation) ── */}
      <section className="bg-card/50 py-24 border-y border-border">
        <div className="container-custom text-center mb-16">
           <h2 className="text-3xl font-semibold text-foreground">Our Core Values</h2>
        </div>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {shopValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="group p-10 rounded-[40px] bg-background border border-border hover:border-primary transition-colors duration-500"
                >
                  <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                    <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VISIT SECTION ── */}
      <section className="container-custom py-24">
        <div 
          className="bg-card rounded-[50px] p-8 md:p-16 border border-border overflow-hidden relative scale-95"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />
          
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold italic mb-10">Experience It <br /> In-Store</h2>
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <MapPin className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground font-bold text-[10px] md:text-xs">
                    Shop No- G-16 Saima shopping mall main Rashid Minhas Road Karachi
                  </p>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                  </div>
                  <a href={`tel:${SHOP_CONTACT.phone}`} className="text-foreground font-semibold text-xl hover:text-primary transition-colors italic">
                    {SHOP_CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="mt-12">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-foreground hover:bg-card hover:text-foreground font-semibold text-[10px] h-14 px-8 rounded-full transition-all">
                    Open in Maps
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-video bg-gradient-to-br from-background to-background rounded-3xl p-10 border border-primary shadow-2xl flex flex-col justify-between transform transition-transform group-hover:rotate-1 group-hover:scale-105">
                <div>
                   <h3 className="text-3xl font-semibold italic text-primary">NEW AYAN</h3>
                   <p className="text-[10px] font-semibold text-muted-foreground">Cosmetics & Fragrances</p>
                </div>
                <div className="space-y-1">
                   <p className="font-semibold text-xl tracking-tight text-foreground">Rehan Khan</p>
                   <p className="text-sm text-muted-foreground font-bold">Proprietor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-card py-10">
        <TrustSignals variant="banner" />
      </div>
    </div>
  );
}