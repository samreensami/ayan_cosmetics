"use client";

import Image from "next/image";
import { MapPin, Phone, MessageCircle, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrustSignals from "@/components/TrustSignals";
import { generateGeneralWhatsAppLink, SHOP_CONTACT } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const shopValues = [
  {
    icon: Star,
    title: "100% Genuine Products",
    description: "We only sell authentic products from verified sources. Your trust is our priority.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick delivery across Karachi. Same-day dispatch for orders placed before 2 PM.",
  },
  {
    icon: Phone,
    title: "Excellent Support",
    description: "Got questions? Reach out to us on WhatsApp anytime. We&apos;re here to help!",
  },
];

export default function AboutPage() {
  const whatsappLink = generateGeneralWhatsAppLink();
  const googleMapsUrl = "https://maps.google.com";

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#00B140]/10 via-white to-gold/10 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#00B140]">AYAN</span> Cosmetics
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your trusted destination for genuine cosmetics, premium fragrances,
              and beauty accessories in Karachi since we opened our doors.
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white relative shadow-2xl border-2 border-[#00B140]/20 group-hover:border-[#00B140] transition-all duration-500">
               <Image
                src="/images/products/rehan.png"
                alt="Rehan Khan - Owner of AYAN Cosmetics"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              /> 
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00B140]/10 rounded-full -z-10 group-hover:bg-[#00B140]/20 transition-colors" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#00B140]/5 rounded-full -z-10" />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Meet the Owner</h2>
            <h3 className="text-xl text-[#00B140] font-bold mb-6 tracking-tight">Rehan Khan</h3>
            <div className="prose prose-gray">
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to New AYAN Cosmetics! I am Rehan Khan, and I am passionate
                about bringing you the best quality cosmetics and fragrances at competitive prices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our shop at Saima Mall has been serving beauty enthusiasts across Karachi with genuine products from top brands.
              </p>
            </div>

            <div className="mt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg" className="bg-[#00B140] hover:bg-black text-white gap-2 shadow-lg hover:scale-105 transition-all rounded-xl px-8 py-6">
                  <MessageCircle className="h-5 w-5" />
                  Chat with Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50/50 py-12 md:py-20">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shopValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className={cn(
                    "bg-white p-8 rounded-2xl transition-all duration-300 text-center border border-[#00B140]/20 shadow-sm hover:border-[#00B140] hover:shadow-xl hover:-translate-y-2"
                  )}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00B140]/10 rounded-2xl mb-6">
                    <Icon className="h-8 w-8 text-[#00B140]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-custom py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Visit Our Shop</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#00B140]/10 rounded-xl group-hover:bg-[#00B140] group-hover:text-white transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">Shop NO-G-16, Saima Mall, Rashid Minhas Road, Karachi</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#00B140]/10 rounded-xl group-hover:bg-[#00B140] group-hover:text-white transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a href={`tel:${SHOP_CONTACT.phone}`} className="text-[#00B140] hover:underline font-bold">{SHOP_CONTACT.phone}</a>
                </div>
              </div>
            </div>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-[#00B140] hover:bg-black text-white px-8 py-6 rounded-xl shadow-xl transition-all">
                Get Directions
                <MapPin className="h-5 w-5" />
              </Button>
            </a>
          </div>
          <div className="relative group">
            <div className="aspect-[3/2] rounded-3xl overflow-hidden bg-white relative shadow-2xl border-2 border-[#00B140]/20 group-hover:border-[#00B140] transition-all duration-500">
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-black text-[#00B140] mb-2 italic tracking-tighter">NEW AYAN COSMETICS</h3>
                <div className="w-20 h-1 bg-red-600 mb-4 rounded-full"></div>
                <p className="font-black text-gray-800 text-xl tracking-tight">Rehan Khan</p>
                <p className="text-[#00B140] font-bold">0333-2304345</p>
                <p className="text-xs text-gray-400 mt-6 max-w-[250px] uppercase font-bold tracking-widest leading-loose">
                  Shop G-16, Saima Mall, Rashid Minhas Road, Karachi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals variant="banner" />
    </div>
  );
}