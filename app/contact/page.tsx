"use client";

import React from "react";
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SHOP_CONTACT, generateGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function ContactPage() {
  const whatsappLink = generateGeneralWhatsAppLink();
  const googleMapsUrl = "https://maps.google.com/?q=Shop+G-16+Saima+Shopping+Mall+Karachi";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary overflow-x-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-16 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[130px] rounded-full -z-10" />
        
        <div className="container-custom">
          <h1 
            className="text-5xl md:text-8xl font-semibold italic leading-none mb-6"
          >
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto tracking-wide font-medium"
          >
            Have questions about premium cosmetics or need product guidance? Our expert team is ready to assist you.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTACT CONTENT ── */}
      <section className="container-custom pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-22 gap-12 items-start">
          
          {/* Left Column: Premium Contact Cards */}
          <div 
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-2">
               <span className="text-primary text-xs font-semibold">Store Details</span>
            </div>
            
            {/* Address Card */}
            <div className="group p-8 rounded-[30px] bg-card border border-border hover:border-primary/50 transition-all duration-500 flex gap-6">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary transition-colors duration-500 shrink-0">
                <MapPin className="h-5 w-5 text-primary group-hover:text-background" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Our Location</h3>
                <p className="font-bold text-lg leading-snug">New AYAN Cosmetics</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Shop No. G-16, Saima Shopping Mall, Main Rashid Minhas Road, Karachi, Pakistan
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group p-8 rounded-[30px] bg-card border border-border hover:border-primary/50 transition-all duration-500 flex gap-6">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary transition-colors duration-500 shrink-0">
                <Phone className="h-5 w-5 text-primary group-hover:text-background" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Call Support</h3>
                <a 
                  href={`tel:${SHOP_CONTACT.phone}`} 
                  className="font-semibold text-xl hover:text-primary transition-colors tracking-tight block"
                >
                  {SHOP_CONTACT.phone}
                </a>
                <p className="text-muted-foreground text-xs mt-1">Available for direct inquiries</p>
              </div>
            </div>

            {/* Timings Card */}
            <div className="group p-8 rounded-[30px] bg-card border border-border hover:border-primary/50 transition-all duration-500 flex gap-6">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary transition-colors duration-500 shrink-0">
                <Clock className="h-5 w-5 text-primary group-hover:text-background" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Store Hours</h3>
                <p className="font-bold text-lg">11:00 AM — 11:00 PM</p>
                <p className="text-muted-foreground text-xs mt-1">Monday to Sunday</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Card & Actions */}
          <div 
            className="lg:col-span-7"
          >
            <div className="bg-card border border-border rounded-[40px] p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[80px] rounded-full -z-10" />
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-semibold italic leading-tight">
                  Skip the Forms.<br />Chat <span className="text-primary">Live</span> instantly.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in premium, direct assistance. Instead of waiting for email replies, connect straight with our beauty experts via WhatsApp or locate us immediately on Google Maps.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary" /> Verified Business Account
                  </div>
                  <span>•</span>
                  <div>Fast response time</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-12">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full bg-primary hover:bg-card hover:text-primary-foreground text-primary-foreground font-semibold h-16 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(82,149,56,0.2)] text-xs">
                    <MessageCircle className="mr-3 h-5 w-5 fill-current" />
                    Launch WhatsApp Chat
                  </Button>
                </a>
                
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full border-border text-foreground hover:bg-card hover:text-foreground font-semibold h-16 px-8 rounded-full transition-all text-xs">
                    Open In Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MAP EMBED PLACEHOLDER OR PRE-STYLED FOOTER ── */}
      <section className="bg-card border-t border-border py-16 text-center">
        <p className="text-xs font-semibold text-muted-foreground mb-2">New AYAN Cosmetics</p>
        <p className="text-xs text-muted-foreground">Saima Shopping Mall, Rashid Minhas Road, Karachi</p>
      </section>
    </div>
  );
}