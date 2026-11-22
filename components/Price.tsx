import { cn } from "@/lib/utils";

const formatter = new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 });

interface PriceProps {
  /** PKR. 0 / null / undefined = price not published yet */
  value?: number | null;
  compareAt?: number | null;
  className?: string;
}

/**
 * Shows "Rs. 2,100" when a price is set in lib/products.ts, otherwise a friendly
 * "Price on WhatsApp" — never "Rs. 0".
 */
export default function Price({ value, compareAt, className }: PriceProps) {
  if (!value || value <= 0) {
    return <p className={cn("text-sm text-muted-foreground", className)}>Price on WhatsApp</p>;
  }
  return (
    <p className={cn("flex items-baseline gap-2 text-sm font-medium", className)}>
      <span>Rs. {formatter.format(value)}</span>
      {compareAt && compareAt > value && (
        <span className="text-xs font-normal text-muted-foreground line-through">Rs. {formatter.format(compareAt)}</span>
      )}
    </p>
  );
}
