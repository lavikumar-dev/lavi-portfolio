import ThemeHeroBackground from "./ThemeHeroBackground";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <ThemeHeroBackground />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 42%, color-mix(in srgb, var(--bg-primary) 62%, transparent) 100%)",
        }}
      />

      <div
        className="absolute inset-x-0 top-0 h-44"
        style={{
          background: "linear-gradient(to bottom, var(--bg-primary), transparent)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{
          background: "linear-gradient(to top, var(--bg-primary), color-mix(in srgb, var(--bg-primary) 72%, transparent), transparent)",
        }}
      />
    </div>
  );
}
