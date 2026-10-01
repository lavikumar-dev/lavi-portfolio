export default function OceanGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-100" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--accent) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--accent) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="ocean-grid-glow absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent-soft)] blur-[120px]" />
      <div className="absolute inset-0 ocean-grid-fade" />
    </div>
  );
}
