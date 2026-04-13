import React from "react";
import { Truck, Shield, BadgeCheck, Clock } from "lucide-react";

/**
 * TrustSignals Component
 *
 * Displays trust-building elements as per spec:
 * - Cash on Delivery Available
 * - 100% Genuine Products
 * - Fast Delivery in Karachi
 *
 * Used on home page and product detail pages
 */

const trustSignals = [
  {
    icon: Truck,
    title: "Cash on Delivery",
    description: "Pay when you receive",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: BadgeCheck,
    title: "100% Genuine",
    description: "Authentic products only",
    color: "text-primary",
    bgColor: "bg-green-50",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick shipping in Karachi",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "Your trust matters",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

interface TrustSignalsProps {
  variant?: "default" | "compact" | "banner";
}

export default function TrustSignals({ variant = "default" }: TrustSignalsProps) {
  if (variant === "banner") {
    return (
      <div className="bg-primary py-3">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-white">
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              Cash on Delivery Available
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              100% Genuine Products
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span>
              Fast Delivery in Karachi
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-4">
        {trustSignals.slice(0, 3).map((signal) => (
          <div key={signal.title} className="flex items-center gap-2">
            <signal.icon className={`h-5 w-5 ${signal.color}`} />
            <span className="text-sm font-medium text-gray-700">
              {signal.title}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.title}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`${signal.bgColor} p-4 rounded-full mb-4`}
                >
                  <Icon className={`h-6 w-6 ${signal.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {signal.title}
                </h3>
                <p className="text-sm text-gray-500">{signal.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
