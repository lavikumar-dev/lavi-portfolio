function HeroBackground() {
  return (
    <>
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[35rem] w-[35rem] rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full bg-blue-600/20 blur-[160px]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right,#ffffff 1px,transparent 1px),
              linear-gradient(to bottom,#ffffff 1px,transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </>
  );
}

export default HeroBackground;