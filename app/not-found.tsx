import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ShoppingBag } from "lucide-react";

/**
 * 404 Not Found Page
 *
 * Displayed when a user navigates to a non-existent page
 * Provides helpful navigation back to main sections
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-gold/5 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been
          moved or deleted.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg" className="gap-2 min-w-[160px]">
              <Home className="h-5 w-5" />
              Go Home
            </Button>
          </Link>
          <Link href="/shop">
            <Button variant="outline" size="lg" className="gap-2 min-w-[160px]">
              <ShoppingBag className="h-5 w-5" />
              Browse Shop
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
