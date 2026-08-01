import OceanGrid from "./OceanEngine/OceanGrid";
import OceanGlow from "./OceanEngine/OceanGlow";
import OceanEngine from "./OceanEngine/OceanEngine";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Ocean Base */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Premium Grid */}
      <OceanGrid />

      {/* Ambient Ocean Glow */}
      <OceanGlow />

      {/* Ocean Animation Engine */}
      <OceanEngine />

      {/* Dark Edge Vignette */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(5,8,22,.55)_100%)]
        "
      />

      {/* Top Fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-44
          bg-gradient-to-b
          from-[#050816]
          to-transparent
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-64
          bg-gradient-to-t
          from-[#050816]
          via-[#050816]/70
          to-transparent
        "
      />

    </div>
  );
}