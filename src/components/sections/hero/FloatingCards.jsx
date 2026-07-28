import LivingFloat from "../../animations/LivingFloat";

function FloatingCards() {
  return (
    <>
      {/* ========================= */}
      {/* React */}
      {/* ========================= */}

      <LivingFloat
        radius={8}
        speed={0.55}
        rotation={1.2}
        phase={0}
        className="
          absolute
          z-30

          left-0
          top-6

          sm:left-2

          md:-left-10
          md:top-8

          lg:-left-20
          lg:top-8

          xl:-left-24
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-cyan-500/20
            bg-slate-900/90
            px-4
            py-3
            backdrop-blur-xl
          "
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
            Frontend
          </p>

          <h3 className="mt-2 text-lg font-bold text-white">
            React
          </h3>
        </div>
      </LivingFloat>

      {/* ========================= */}
      {/* Unity */}
      {/* ========================= */}

      <LivingFloat
        radius={11}
        speed={0.42}
        rotation={0.9}
        phase={2.1}
        className="
          absolute
          z-30

          right-0
          top-28

          sm:right-2

          md:-right-10
          md:top-32

          lg:-right-20
          lg:top-36

          xl:-right-24
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-cyan-500/20
            bg-slate-900/90
            px-4
            py-3
            backdrop-blur-xl
          "
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
            Game Dev
          </p>

          <h3 className="mt-2 text-lg font-bold text-white">
            Unity
          </h3>
        </div>
      </LivingFloat>

      {/* ========================= */}
      {/* AI */}
      {/* ========================= */}

      <LivingFloat
        radius={7}
        speed={0.68}
        rotation={1.1}
        phase={4.4}
        className="
          absolute
          z-30

          left-2
          bottom-4

          sm:left-4

          md:-left-8
          md:bottom-8

          lg:-left-16
          lg:bottom-12

          xl:-left-20
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-cyan-500/20
            bg-slate-900/90
            px-4
            py-3
            backdrop-blur-xl
          "
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
            AI
          </p>

          <h3 className="mt-2 text-lg font-bold text-white">
            Generative AI
          </h3>
        </div>
      </LivingFloat>
    </>
  );
}

export default FloatingCards;