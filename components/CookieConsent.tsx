"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

/**
 * Cookie Consent Banner Component
 *
 * Appears at the bottom of the page for first-time visitors
 * Small, elegant design with Accept All / Reject All options
 *
 * Features:
 * - Stores consent in localStorage
 * - Smooth slide-up animation
 * - Close button for dismissing
 * - AYAN Cosmetics branding
 */

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  // Check if user has already made a choice
  useEffect(() => {
    const consent = localStorage.getItem("ayan-cookie-consent");
    if (!consent) {
      // Small delay before showing for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle user consent choice
  const handleConsent = (accepted: boolean) => {
    localStorage.setItem(
      "ayan-cookie-consent",
      JSON.stringify({
        accepted,
        timestamp: new Date().toISOString(),
      })
    );
    setShowBanner(false);
  };

  // Don't render if banner shouldn't be shown
  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 p-4 transition-transform duration-500"
      style={{
        transform: showBanner ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 md:p-5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon and Text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  We use cookies
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use cookies to enhance your browsing experience and analyze
                  our traffic. By clicking &quot;Accept All&quot;, you consent to our use
                  of cookies.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleConsent(false)}
                className="flex-1 md:flex-none"
              >
                Reject All
              </Button>
              <Button
                size="sm"
                onClick={() => handleConsent(true)}
                className="flex-1 md:flex-none"
              >
                Accept All
              </Button>

              {/* Close button */}
              <button
                onClick={() => setShowBanner(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
