"use client";

import React from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SHOP_CONTACT, generateGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function ContactPage() {
  const whatsappLink = generateGeneralWhatsAppLink();
  const googleMapsUrl = "https://maps.google.com/?q=Shop+G-16+Saima+Shopping+Mall+Karachi";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#529538] overflow-x-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-16 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#529538]/10 blur-[130px] rounded-full -z-10" />
        
        <div className="container-custom">
          <h1 
            className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6 opacity-0"
            style={{ animation: "slideDown 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards" }}
          >
            Get In <span className="text-[#529538]">Touch</span>
          </h1>
          <p 
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto tracking-wide font-medium opacity-0"
            style={{ animation: "fadeIn 1s ease-out 0.4s forwards" }}
          >
            Have questions about premium cosmetics or need product guidance? Our expert team is ready to assist you.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTACT CONTENT ── */}
      <section className="container-custom pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Premium Contact Cards */}
          <div 
            className="lg:col-span-5 space-y-6 opacity-0"
            style={{ animation: "slideRight 0.8s ease-out 0.2s forwards" }}
          >
            <div className="inline-block px-4 py-2 bg-[#529538]/20 border border-[#529538]/40 rounded-full mb-2">
               <span className="text-[#529538] text-xs font-black uppercase tracking-[4px]">Store Details</span>
            </div>
            
            {/* Address Card */}
            <div className="group p-8 rounded-[30px] bg-zinc-900 border border-zinc-800 hover:border-[#529538]/50 transition-all duration-500 flex gap-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-zinc-800 group-hover:bg-[#529538] group-hover:border-[#529538] transition-colors duration-500 shrink-0">
                <MapPin className="h-5 w-5 text-[#529538] group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-zinc-400 mb-2">Our Location</h3>
                <p className="font-bold text-lg leading-snug">New AYAN Cosmetics</p>
                <p className="text-zinc-400 text-sm mt-1">
                  Shop No. G-16, Saima Shopping Mall, Main Rashid Minhas Road, Karachi, Pakistan
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group p-8 rounded-[30px] bg-zinc-900 border border-zinc-800 hover:border-[#529538]/50 transition-all duration-500 flex gap-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-zinc-800 group-hover:bg-[#529538] group-hover:border-[#529538] transition-colors duration-500 shrink-0">
                <Phone className="h-5 w-5 text-[#529538] group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-zinc-400 mb-2">Call Support</h3>
                <a 
                  href={`tel:${SHOP_CONTACT.phone}`} 
                  className="font-black text-xl hover:text-[#529538] transition-colors tracking-tight block"
                >
                  {SHOP_CONTACT.phone}
                </a>
                <p className="text-zinc-500 text-xs mt-1">Available for direct inquiries</p>
              </div>
            </div>

            {/* Timings Card */}
            <div className="group p-8 rounded-[30px] bg-zinc-900 border border-zinc-800 hover:border-[#529538]/50 transition-all duration-500 flex gap-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-zinc-800 group-hover:bg-[#529538] group-hover:border-[#529538] transition-colors duration-500 shrink-0">
                <Clock className="h-5 w-5 text-[#529538] group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-zinc-400 mb-2">Store Hours</h3>
                <p className="font-bold text-lg">11:00 AM — 11:00 PM</p>
                <p className="text-zinc-500 text-xs mt-1">Monday to Sunday</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Card & Actions */}
          <div 
            className="lg:col-span-7 opacity-0"
            style={{ animation: "slideLeft 0.8s ease-out 0.4s forwards" }}
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#529538]/5 blur-[80px] rounded-full -z-10" />
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-tight">
                  Skip the Forms.<br />Chat <span className="text-[#529538]">Live</span> instantly.
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  We believe in premium, direct assistance. Instead of waiting for email replies, connect straight with our beauty experts via WhatsApp or locate us immediately on Google Maps.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800 text-xs text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#529538]" /> Verified Business Account
                  </div>
                  <span>•</span>
                  <div>Fast response time</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-12">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full bg-[#529538] hover:bg-white hover:text-black text-white font-black uppercase tracking-widest h-16 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(82,149,56,0.2)] text-xs">
                    <MessageCircle className="mr-3 h-5 w-5 fill-current" />
                    Launch WhatsApp Chat
                  </Button>
                </a>
                
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full border-zinc-700 text-black hover:bg-white hover:text-black font-black uppercase tracking-[3px] h-16 px-8 rounded-full transition-all text-xs">
                    Open In Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MAP EMBED PLACEHOLDER OR PRE-STYLED FOOTER ── */}
      <section className="bg-zinc-950 border-t border-zinc-900 py-16 text-center">
        <p className="text-xs font-black uppercase tracking-[6px] text-zinc-600 mb-2">New AYAN Cosmetics</p>
        <p className="text-xs text-zinc-500">Saima Shopping Mall, Rashid Minhas Road, Karachi</p>
      </section>

      {/* ── STYLED TRANSITIONS ── */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}