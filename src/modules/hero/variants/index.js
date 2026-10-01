/**
 * Hero variant registry — lazy-loaded by theme id.
 * All variants read from the same hero.config.js so content is shared.
 */
import { lazy } from "react";

export const heroVariants = {
  ocean:    lazy(() => import("./HeroOcean")),
  midnight: lazy(() => import("./HeroMidnight")),
  emerald:  lazy(() => import("./HeroEmerald")),
  light:    lazy(() => import("./HeroLight")),
  blossom:  lazy(() => import("./HeroBlossom")),
  crimson:  lazy(() => import("./HeroCrimson")),
};

export default heroVariants;
