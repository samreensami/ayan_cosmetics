"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Clock, Star, Award, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrustSignals from "@/components/TrustSignals";
import { generateGeneralWhatsAppLink, SHOP_CONTACT } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen bg-black text-white selection:bg-[#529538] overflow-x-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#529538]/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8 opacity-0"
              style={{ animation: "slideDown 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards" }}
            >
              Legacy of <span className="text-[#529538]">Beauty</span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-400 font-medium tracking-wide max-w-2xl mx-auto leading-relaxed opacity-0"
              style={{ animation: "fadeIn 1s ease-out 0.4s forwards" }}
            >
              Serving Karachi with authentic luxury and premium beauty essentials since our inception at Saima Mall.
            </p>
          </div>
        </div>
      </section>

      {/* ── OWNER SECTION ── */}
      <section className="container-custom py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className="relative group opacity-0"
            style={{ animation: "slideRight 0.8s ease-out 0.2s forwards" }}
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-zinc-900 relative border border-zinc-800 transition-all duration-700 hover:border-[#529538]/50 shadow-2xl">
              <Image
                src="/images/products/rehan.png"
                alt="Rehan Khan - Founder"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-[#529538] -z-10 rounded-bl-3xl animate-pulse" />
          </div>

          <div 
            className="space-y-8 opacity-0"
            style={{ animation: "slideLeft 0.8s ease-out 0.4s forwards" }}
          >
            <div className="inline-block px-4 py-2 bg-[#529538]/20 border border-[#529538]/40 rounded-full">
               <span className="text-[#529538] text-xs font-black uppercase tracking-[4px]">The Founder</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight">
              Rehan <br /> Khan
            </h2>
            <div className="prose prose-invert lg:prose-lg text-gray-400">
              <p>&quot;Quality shouldn&apos;t be a luxury. At New AYAN Cosmetics, we bridge the gap between premium global brands and our local beauty enthusiasts.&quot;</p>
              <p className="mt-4">Our flagship store at **Saima Mall** isn&apos;t just a shop—it&apos;s a destination for authenticity in Karachi&apos;s cosmetics landscape.</p>
            </div>

            <div className="pt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#529538] hover:bg-white hover:text-black text-white font-black uppercase tracking-widest px-10 py-8 rounded-full text-sm transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(82,149,56,0.3)]">
                  <MessageCircle className="mr-3 h-5 w-5 fill-current" />
                  Direct Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES (Staggered Animation) ── */}
      <section className="bg-zinc-900/50 py-24 border-y border-zinc-800">
        <div className="container-custom text-center mb-16">
           <h2 className="text-3xl font-black uppercase tracking-widest text-white">Our Core Values</h2>
        </div>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {shopValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="group p-10 rounded-[40px] bg-black border border-zinc-800 hover:border-[#529538] transition-all duration-500 opacity-0 translate-y-10"
                  style={{ animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.2}s forwards` }}
                >
                  <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#529538] transition-colors duration-500">
                    <Icon className="h-8 w-8 text-[#529538] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{value.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VISIT SECTION ── */}
      <section className="container-custom py-24">
        <div 
          className="bg-zinc-900 rounded-[50px] p-8 md:p-16 border border-zinc-800 overflow-hidden relative opacity-0 scale-95"
          style={{ animation: "fadeIn 1s ease-out 0.6s forwards" }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#529538]/5 blur-[100px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-10">Experience It <br /> In-Store</h2>
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-[#529538] group-hover:border-[#529538] transition-all">
                    <MapPin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                    Shop No- G-16 Saima shopping mall main Rashid Minhas Road Karachi
                  </p>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-[#529538] group-hover:border-[#529538] transition-all">
                    <Phone className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </div>
                  <a href={`tel:${SHOP_CONTACT.phone}`} className="text-white font-black text-xl hover:text-[#529538] transition-colors uppercase italic tracking-tighter">
                    {SHOP_CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="mt-12">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-green-800 text-black hover:bg-white hover:text-black font-black uppercase tracking-[3px] text-[10px] h-14 px-8 rounded-full transition-all">
                    Open in Maps
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-video bg-gradient-to-br from-zinc-800 to-black rounded-3xl p-10 border border-green-900 shadow-2xl flex flex-col justify-between transform transition-transform group-hover:rotate-1 group-hover:scale-105">
                <div>
                   <h3 className="text-3xl font-black italic tracking-tighter text-[#529538]">NEW AYAN</h3>
                   <p className="text-[10px] font-black uppercase tracking-[5px] text-zinc-500">Cosmetics & Fragrances</p>
                </div>
                <div className="space-y-1">
                   <p className="font-black text-xl tracking-tight text-white">Rehan Khan</p>
                   <p className="text-sm text-zinc-400 font-bold tracking-widest uppercase">Proprietor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-zinc-950 py-10">
        <TrustSignals variant="banner" />
      </div>

      {/* ── TRANSITION ANIMATIONS ── */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}