import { motion } from "framer-motion";

import { hero } from "../config/hero.config";

import HeroFloatingTags from "./FloatingCards/FloatingTags";
import OrbitEngine from "./OrbitEngine";

export default function HeroPortrait() {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        w-full
        items-center
        justify-center

        lg:-translate-y-6
      "
    >
      {/* =======================================================
          BACKGROUND GLOW
      ======================================================= */}

      <div
        className="
          absolute
          z-0

          h-[720px]
          w-[720px]

          rounded-full

          bg-cyan-500/10

          blur-[150px]
        "
      />

      {/* =======================================================
          ORBIT ENGINE
      ======================================================= */}

      <div
        className="
          absolute
          inset-0
          z-10

          flex
          items-center
          justify-center

          pointer-events-none
          overflow-visible
        "
      >
        <OrbitEngine />
      </div>

      {/* =======================================================
          FLOATING TECH CARDS
      ======================================================= */}

      <div className="relative z-30">
        <HeroFloatingTags />
      </div>

      {/* =======================================================
          IMAGE FRAME
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20"
      >
        <div
          className="
            relative

            rounded-[34px]

            border
            border-cyan-400/15

            bg-white/[0.03]

            p-3

            backdrop-blur-2xl

            shadow-[0_30px_90px_rgba(0,0,0,.45)]
          "
        >
          {/* Inner Glass Border */}

          <div
            className="
              absolute
              inset-0

              rounded-[34px]

              border
              border-white/5
            "
          />

          {/* Outer Cyan Glow */}

          <div
            className="
              absolute
              inset-[-2px]

              rounded-[36px]

              border

              border-cyan-300/20

              shadow-[0_0_60px_rgba(34,211,238,.22)]
            "
          />

          {/* Portrait */}

          <motion.img
            src={hero.portrait.image}
            alt={hero.portrait.alt}
            animate={{
              y: [-4, 4, -4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10

              w-[330px]

              rounded-[26px]

              object-cover

              sm:w-[370px]

              lg:w-[405px]

              xl:w-[440px]
            "
          />
        </div>
      </motion.div>
    </div>
  );
}