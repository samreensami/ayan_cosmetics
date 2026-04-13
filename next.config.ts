import type { NextConfig } from "next";

/**
 * Next.js 15 Configuration for AYAN Cosmetics
 *
 * Optimized for:
 * - Fast loading with image optimization
 * - 3D performance with React Three Fiber
 * - Mobile-first approach
 */
const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization settings
  images: {
    // TODO: Add your actual image domains here if using external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Optimize images for faster loading
    formats: ["image/avif", "image/webp"],
  },

  // Transpile Three.js packages for proper SSR handling
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/postprocessing",
  ],

  // Experimental features for better performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ["lucide-react", "@react-three/drei"],
  },
};

export default nextConfig;
