import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TrustSignals from "@/components/TrustSignals";
import { generateGeneralWhatsAppLink, SHOP_CONTACT } from "@/lib/whatsapp";

/**
 * Contact Page for AYAN Cosmetics
 *
 * Content:
 * - WhatsApp contact button
 * - Shop address and directions
 * - Instagram QR code
 * - Phone number
 * - Business hours (if available)
 *
 * Route: /contact
 *
 * TODO: Add actual Instagram QR code image
 */

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AYAN Cosmetics via WhatsApp or visit our shop at Saima Mall, Rashid Minhas Road, Karachi. Phone: 0333-2304345",
};

// Contact methods
const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "0333-2304345",
    description: "Chat with us instantly",
    href: generateGeneralWhatsAppLink(),
    color: "bg-[#25D366]",
    iconColor: "text-white",
    external: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "0333-2304345",
    description: "Call us directly",
    href: "tel:03332304345",
    color: "bg-blue-500",
    iconColor: "text-white",
    external: false,
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
  const whatsappLink = generateGeneralWhatsAppLink();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-gold/10 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have a question about our products? Want to place an order? We&apos;d
              love to hear from you! Reach out via WhatsApp for the fastest
              response.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${method.color} rounded-full mb-4`}
                    >
                      <Icon className={`h-8 w-8 ${method.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {method.value}
                    </p>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp CTA */}
          <Card className="overflow-hidden">
            <div className="bg-[#25D366] p-8 text-white text-center">
              <MessageCircle className="h-16 w-16 mx-auto mb-4" fill="white" />
              <h2 className="text-2xl font-bold mb-2">Order on WhatsApp</h2>
              <p className="opacity-90 mb-6">
                The fastest way to reach us! Send us a message and we&apos;ll respond
                within minutes.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="xl"
                  className="bg-white text-[#25D366] hover:bg-gray-100 gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start Chat
                </Button>
              </a>
            </div>
            <CardContent className="p-6 bg-white">
              <h3 className="font-semibold text-gray-900 mb-4">
                How it works:
              </h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                    1
                  </span>
                  <span>Click the button to open WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                    2
                  </span>
                  <span>Tell us which products you&apos;re interested in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                    3
                  </span>
                  <span>We&apos;ll confirm availability and total price</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                    4
                  </span>
                  <span>
                    Share your address for Cash on Delivery!
                  </span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Instagram QR & Address */}
          <div className="space-y-6">
            {/* Instagram QR Code */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    {/* TODO: Replace with actual Instagram QR code */}
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center relative">
                      <div className="text-center">
                        <Instagram className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                        <p className="text-xs text-gray-500">QR Code</p>
                      </div>
                      {/* Uncomment when actual QR code is available */}
                      {/* <Image
                        src="/images/instagram-qr.png"
                        alt="Instagram QR Code"
                        fill
                        className="object-contain p-2"
                      /> */}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Follow Us on Instagram
                    </h3>
                    <a
                      href="https://instagram.com/AYANCOSMETICS.OFFICIAL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:underline font-medium"
                    >
                      @AYANCOSMETICS.OFFICIAL
                    </a>
                    <p className="text-sm text-gray-500 mt-2">
                      Scan the QR code or click to follow us for new arrivals,
                      offers, and beauty tips!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shop Address */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Visit Our Shop
                    </h3>
                    <address className="text-gray-600 not-italic leading-relaxed">
                      <strong>New AYAN Cosmetics</strong>
                      <br />
                      Shop NO-G-16
                      <br />
                      Saeed Shopping Mall / Saima Mall
                      <br />
                      Rashid Minhas Road
                      <br />
                      Karachi, Pakistan
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Owner Contact */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/20 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Contact Person
                    </h3>
                    <p className="text-gray-600">
                      <strong>{SHOP_CONTACT.name}</strong>
                      <br />
                      <a
                        href={`tel:${SHOP_CONTACT.phone}`}
                        className="text-primary hover:underline"
                      >
                        {SHOP_CONTACT.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals variant="banner" />
    </div>
  );
}
