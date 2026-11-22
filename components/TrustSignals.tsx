import { Truck, ShieldCheck, RotateCcw, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const trustSignals = [
  { icon: ShieldCheck, title: "100% genuine", description: "Original branded products only" },
  { icon: Truck, title: "Same-day dispatch", description: "Across Karachi, cash on delivery" },
  { icon: RotateCcw, title: "7-day returns", description: "Unopened items, no hassle" },
  { icon: MessageCircle, title: "Help on WhatsApp", description: "Shade and skin-type advice" },
];

interface TrustSignalsProps {
  variant?: "banner" | "compact";
}

export default function TrustSignals({ variant = "banner" }: TrustSignalsProps) {
  return (
    <section
      aria-label="Why shop with AYAN"
      className={cn("border-y border-border", variant === "compact" ? "py-6" : "py-8 md:py-10")}
    >
      <ul className="container-custom grid grid-cols-2 gap-y-6 lg:grid-cols-4">
        {trustSignals.map((signal, index) => (
          <li
            key={signal.title}
            className={cn(
              "flex items-start gap-3 px-2 md:px-6",
              index > 0 && "lg:border-l lg:border-border"
            )}
          >
            <signal.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
            <div>
              <p className="text-sm font-medium">{signal.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">{signal.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
