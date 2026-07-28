function HeroDecorations() {
  return (
    <>
      {/* Cyan Glow Dot */}

      <div
        className="
          absolute
          -right-8
          top-10
          hidden
          h-5
          w-5
          rounded-full
          bg-cyan-400
          shadow-[0_0_35px_#22d3ee]
          lg:block
        "
      />

      {/* Bottom Ring */}

      <div
        className="
          absolute
          -left-6
          bottom-0
          hidden
          h-24
          w-24
          rounded-full
          border-2
          border-cyan-400/20
          lg:block
        "
      />

      {/* Soft Accent Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          hidden
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-3xl
          xl:block
        "
      />
    </>
  );
}

export default HeroDecorations;