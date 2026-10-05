export default function OceanGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="ocean-glow ocean-glow-main absolute left-1/2 top-[42%] h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent-soft)] blur-[150px]" />
      <div className="ocean-glow ocean-glow-left absolute left-[-280px] top-[15%] h-[900px] w-[900px] rounded-full bg-[color:var(--accent-soft)] blur-[190px]" />
      <div className="ocean-glow ocean-glow-right absolute right-[-260px] bottom-[6%] h-[900px] w-[900px] rounded-full bg-[color:var(--accent-soft)] blur-[200px]" />
      <div className="ocean-glow ocean-glow-bottom absolute bottom-[-280px] left-1/2 h-[700px] w-[1600px] -translate-x-1/2 rounded-full bg-[color:var(--accent-soft)] blur-[170px]" />
    </div>
  );
}
