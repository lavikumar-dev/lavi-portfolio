/**
 * Hero — picks the theme-specific variant and lazy-loads it.
 * All variants read shared data from hero.config.js.
 * The Section/id="home" wrapper is preserved for nav IntersectionObserver.
 */
import { Suspense } from "react";

import useTheme from "../../personalization/hooks/useTheme";
import heroVariants from "./variants";
import HeroBackground from "./components/HeroBackground";

/** Minimal loading state that matches the hero dimensions */
function HeroSkeleton() {
  return <div className="min-h-screen" aria-hidden="true" />;
}

export default function Hero() {
  const { theme } = useTheme();
  const Variant = heroVariants[theme] ?? heroVariants.ocean;

  return (
    <section id="home" aria-labelledby="hero-name" className="relative isolate overflow-hidden">
      {/* Shared ambient background (particles, grid, atmosphere) */}
      <HeroBackground />

      {/* Theme-specific hero layout */}
      <Suspense fallback={<HeroSkeleton />}>
        <Variant />
      </Suspense>
    </section>
  );
}
