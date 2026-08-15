import { motion } from "framer-motion";

import { hero } from "../config/hero.config";

import HeroButtons from "./HeroButtons";
import HeroRoleSlider from "./HeroRoleSlider";

export default function HeroContent() {
  return (
    <div
      className="
        relative
        z-10

        flex
        w-full
        max-w-[700px]

        flex-col
      "
    >
      {/* =========================================================
          GREETING
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          inline-flex
          w-fit

          items-center
          gap-2.5

          rounded-full

          border
          border-[color:var(--border)]

          bg-[color:var(--accent-soft)]

          px-4
          py-2.5
        "
      >
        <span className="text-base">
          👋
        </span>

        <span
          className="
            text-sm
            font-medium
            tracking-wide
            text-[color:var(--text-secondary)]
          "
        >
          Hello, I'm
        </span>
      </motion.div>

      {/* =========================================================
          NAME
      ========================================================== */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 22,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.12,
        }}
        className="
          mt-7

          text-[64px]
          sm:text-[70px]
          lg:text-[76px]
          xl:text-[84px]

          font-black

          leading-[0.95]

          tracking-[-0.045em]

          text-[color:var(--text-primary)]
        "
      >
        {hero.name}
      </motion.h1>

      {/* =========================================================
          FIXED ROLE
      ========================================================== */}

      <motion.h2
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.22,
        }}
        className="
          mt-5

          text-[26px]
          sm:text-[28px]
          lg:text-[30px]

          font-semibold

          leading-none

          text-[color:var(--text-secondary)]
        "
      >
        {hero.role}
      </motion.h2>

      {/* =========================================================
          ANIMATED ROLE
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.32,
        }}
        className="
          mt-2

          h-10

          overflow-hidden
        "
      >
        <HeroRoleSlider />
      </motion.div>

      {/* =========================================================
          DESCRIPTION
      ========================================================== */}

      <motion.p
        initial={{
          opacity: 0,
          y: 14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.42,
        }}
        className="
          mt-6

          max-w-[630px]

          text-[17px]
          sm:text-[18px]
          lg:text-[18px]

          leading-[1.7]

          text-[color:var(--text-muted)]
        "
      >
        {hero.description}
      </motion.p>

      {/* =========================================================
          BUTTONS
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.55,
        }}
        className="
          mt-8
        "
      >
        <HeroButtons />
      </motion.div>

      {/* =========================================================
          AVAILABILITY
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
        }}
        className="
          mt-7

          flex
          items-center
          gap-3
        "
      >
        <span
          className="
            h-3
            w-3

            rounded-full

            bg-[color:var(--accent)]

            shadow-[0_0_14px_var(--glow)]
          "
        />

        <span
          className="
            text-sm

            font-medium

            text-[color:var(--text-muted)]
          "
        >
          Available for Internships
        </span>
      </motion.div>
    </div>
  );
}