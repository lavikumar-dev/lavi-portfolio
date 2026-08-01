import { motion } from "framer-motion";

import { hero } from "../config/hero.config";

import HeroButtons from "./HeroButtons";
import HeroRoleSlider from "./HeroRoleSlider";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex max-w-2xl flex-col">

      {/* Greeting */}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="
          inline-flex
          w-fit
          items-center
          gap-2
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/5
          px-4
          py-2
        "
      >
        <span className="text-lg">👋</span>

        <span
          className="
            text-sm
            font-medium
            tracking-wide
            text-slate-300
          "
        >
          Hello, I'm
        </span>
      </motion.div>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        className="
          mt-6

          text-5xl

          font-black

          tracking-tight

          leading-none

          sm:text-6xl

          xl:text-7xl
        "
      >
        {hero.name}
      </motion.h1>

      {/* Fixed Role */}

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .22 }}
        className="
          mt-5

          text-xl

          font-semibold

          text-slate-300

          sm:text-2xl
        "
      >
        {hero.role}
      </motion.h2>

      {/* Animated Role */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .32 }}
        className="mt-2 h-12 overflow-hidden"
      >
        <HeroRoleSlider />
      </motion.div>

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .42,
        }}
        className="
          mt-7

          max-w-xl

          text-base

          leading-8

          text-slate-400

          sm:text-lg
        "
      >
        {hero.description}
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .55,
        }}
      >
        <HeroButtons />
      </motion.div>

      {/* Availability */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: .7,
        }}
        className="
          mt-8

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

            bg-emerald-400

            shadow-[0_0_12px_#4ade80]
          "
        />

        <span
          className="
            text-sm

            font-medium

            text-slate-400
          "
        >
          Available for Internships
        </span>

      </motion.div>

    </div>
  );
}