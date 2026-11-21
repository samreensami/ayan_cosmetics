import type { NextConfig } from "next";

/**
 * Next.js configuration for AYAN Cosmetics.
 * All product images are served from /public, so no remote image hosts are allowed.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Three.js packages ship ESM that Next needs to transpile for the 3D hero.
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],

  experimental: {
    optimizePackageImports: ["lucide-react", "@react-three/drei"],
  },
};

export default nextConfig;
