"use client";

import { MapPin, Phone, Instagram, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TrustSignals from "@/components/TrustSignals";

// Fixed Numbers for Inquiry and Order
const INQUIRY_NUMBER = "923332304145";
const ORDER_NUMBER = "923242162485";

const WHATSAPP_ORDER_LINK = `https://wa.me/${ORDER_NUMBER}?text=Hello%2C%20I%20want%20to%20place%20an%20order.`;
const WHATSAPP_GENERAL_LINK = `https://wa.me/${INQUIRY_NUMBER}?text=Hello%2C%20I%20have%20a%20general%20inquiry.`;

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp (Inquiry)",
    value: "0333-2304145",
    description: "General questions & help",
    href: WHATSAPP_GENERAL_LINK,
    color: "bg-[#25D366]",
    iconColor: "text-white",
    external: true,
  },
  {
    icon: Facebook,
    title: "Facebook",
    value: "AYAN Cosmetics",
    description: "Connect on Facebook",
    href: "https://www.facebook.com/share/1An9ucPzHR/",
    color: "bg-[#1877F2]",
    iconColor: "text-white",
    external: true,
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@AYANCOSMETICS.OFFICIAL",
    description: "Follow us for updates",
    href: "https://instagram.com/AYANCOSMETICS.OFFICIAL",
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    iconColor: "text-white",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary/10 via-white to-gold/10 pt-20 pb-10 md:pt-32 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 uppercase">
              Get in <span className="text-[#00b140]">Touch</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Have a question about our products? Want to place an order? Reach out via WhatsApp for the fastest response.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Contact Cards Grid - Fix for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="block group"
              >
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 ${method.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-7 w-7 md:h-8 md:w-8 ${method.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                    <p className="text-[#00b140] font-medium mb-2 text-sm md:text-base">{method.value}</p>
                    <p className="text-xs md:text-sm text-gray-500">{method.description}</p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Order Section */}
          <Card className="overflow-hidden border-none shadow-md">
            <div className="bg-[#25D366] p-6 md:p-8 text-white text-center">
              <MessageCircle className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4" fill="white" />
              <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase">Order on WhatsApp</h2>
              <p className="text-sm md:text-base opacity-90 mb-6">
                Direct Order Number: <strong>0324-2162485</strong>
              </p>
              <a href={WHATSAPP_ORDER_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#25D366] hover:bg-gray-100 font-bold px-10 py-6 text-lg rounded-full shadow-lg">
                   Start Order
                </Button>
              </a>
            </div>
            <CardContent className="p-6 bg-white">
              <h3 className="font-semibold text-gray-900 mb-4">Easy Steps:</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">✅ Click the button above</li>
                <li className="flex items-center gap-2">✅ Share product details</li>
                <li className="flex items-center gap-2">✅ Confirm your location</li>
              </ul>
            </CardContent>
          </Card>

          {/* Location & Phone */}
          <div className="space-y-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Direct Inquiry</h3>
                  <p className="text-blue-600 font-bold">0333-2304145</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-green-50 rounded-full">
                  <MapPin className="h-6 w-6 text-[#00b140]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Shop Address</h3>
                  <address className="text-gray-600 not-italic text-sm">
                    Shop NO-G-16, Saima Mall, Rashid Minhas Road, Karachi
                  </address>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <TrustSignals variant="banner" />
    </div>
  );
}