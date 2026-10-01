import { motion } from "framer-motion";

import { hero } from "../config/hero.config";

import ThemeHeroVisual from "./ThemeHeroVisual";

import FloatingCard from "./FloatingCards";
import { FLOATING_TAGS } from "./FloatingCards";

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

        lg:-translate-x-10
        xl:-translate-x-14

        lg:translate-y-0
      "
    >
      {/* =========================================================
          AMBIENT GLOW
      ========================================================== */}

      <div
        className="
          absolute
          z-0

          h-[clamp(540px,52vw,820px)]
          w-[clamp(540px,52vw,820px)]

          rounded-full

          bg-[color:var(--accent-soft)]

          blur-[180px]
        "
      />

      {/* =========================================================
          ORBIT ENGINE
      ========================================================== */}

      <div
        className="
          absolute
          inset-0

          z-10

          flex
          items-center
          justify-center

          overflow-visible

          pointer-events-none

          scale-[1.10]
          xl:scale-[1.16]
        "
      >
        <ThemeHeroVisual />
      </div>

      {/* =========================================================
          PORTRAIT COMPOSITION
      =========================================================
      
      The portrait and floating cards share this wrapper.

      Moving this composition moves the portrait and all cards
      together.
      ========================================================== */}

      <div
        className="
          relative
          z-20

          w-[min(76vw,460px)]

          sm:w-[min(66vw,460px)]

          lg:w-[min(29vw,425px)]

          xl:w-[min(28vw,450px)]
        "
      >
        {/* =======================================================
            FLOATING CARDS
        ======================================================== */}

        {FLOATING_TAGS.map((tag) => (
          <FloatingCard
            key={tag.id}
            tag={tag}
          />
        ))}

        {/* =======================================================
            PORTRAIT
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.95,
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
          className="relative w-full"
        >
          {/* =====================================================
              GLASS FRAME
          ====================================================== */}

          <div
            className="
              relative

              w-full

              rounded-[38px]

              border
              border-[color:var(--border)]

              bg-[color:var(--surface)]

              p-4

              backdrop-blur-2xl

              shadow-[var(--surface-shadow)]
            "
          >
            {/* ===================================================
                INNER GLASS BORDER
            ==================================================== */}

            <div
              className="
                pointer-events-none

                absolute
                inset-0

                rounded-[38px]

                border
                border-[color:var(--border)]
              "
            />

            {/* ===================================================
                CYAN RIM
            ==================================================== */}

            <div
              className="
                pointer-events-none

                absolute

                inset-[-3px]

                rounded-[40px]

                border

                border-[color:var(--border)]

                shadow-[0_0_80px_var(--glow)]
              "
            />

            {/* ===================================================
                PORTRAIT IMAGE
            ==================================================== */}

            <motion.img
              src={hero.portrait.image}
              alt={hero.portrait.alt}
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10

                block

                w-full

                aspect-[470/610]

                rounded-[30px]

                object-cover
              "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}