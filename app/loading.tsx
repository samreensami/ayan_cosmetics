/**
 * Global Loading Component
 *
 * Displayed during page transitions and initial loads
 * Uses AYAN Cosmetics brand colors
 */

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-6">
          <div className="inline-flex flex-col items-center">
            <span className="text-3xl font-bold text-primary animate-pulse">
              AYAN
            </span>
            <span className="text-xs tracking-[0.3em] text-gray-400">
              COSMETICS
            </span>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="relative w-12 h-12 mx-auto">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin" />
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}
