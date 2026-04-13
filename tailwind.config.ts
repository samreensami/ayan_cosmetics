import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration for AYAN Cosmetics
 * * Updated: Added Light Green (ayan-light) to replace Off-white
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // --- NAYA LIGHT GREEN SECTION (Off-white Replacement) ---
        ayan: {
          light: "#f7fff9", // Bilkul halka green jo white ki jagah use hoga
          soft: "#ecfdf5",  // Thoda sa wazeh green sections ke liye
        },

        // Primary brand green - exact #00b140 from visiting card
        primary: {
          DEFAULT: "#00b140",
          50: "#d4ffe6",
          100: "#a3ffcc",
          200: "#72ffb3",
          300: "#41ff99",
          400: "#10ff80",
          500: "#00b140",
          600: "#009e39",
          700: "#008b32",
          800: "#00782b",
          900: "#005620",
          foreground: "#ffffff",
        },

        // Accent gold - premium, vibrant
        gold: {
          DEFAULT: "#FFD700",
          50: "#fffde6",
          100: "#fff9c4",
          200: "#fff59d",
          300: "#fff176",
          400: "#ffee58",
          500: "#FFD700",
          600: "#ffc107",
          700: "#ffab00",
          800: "#ff8f00",
          900: "#ff6f00",
        },

        // Red for "New AYAN" text
        brand: {
          DEFAULT: "#e60012",
          50: "#ffe6e8",
          100: "#ffccd1",
          200: "#ff99a3",
          300: "#ff6675",
          400: "#ff3347",
          500: "#e60012",
          600: "#cc0010",
          700: "#b3000e",
          800: "#99000c",
          900: "#660008",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 177, 64, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 177, 64, 0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 177, 64, 0.15)",
        "glass-lg": "0 16px 48px 0 rgba(0, 177, 64, 0.2)",
        gold: "0 4px 20px rgba(255, 215, 0, 0.4)",
        "gold-glow": "0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;