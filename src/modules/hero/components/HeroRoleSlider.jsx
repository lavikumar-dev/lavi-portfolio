import { AnimatePresence, motion } from "framer-motion";

import { hero } from "../config/hero.config";
import useHeroRoles from "../hooks/useHeroRoles";

export default function HeroRoleSlider() {
  const role = useHeroRoles(hero.rotatingRoles);

  return (
    /* Container must be tall enough for the rendered text + descenders.
       Using min-h instead of a fixed h so the slider never clips itself.
       pb-2 on the inner wrapper adds breathing room below the baseline so
       descenders on "g" and "p" are always fully painted.              */
    <div className="relative min-h-[3.8rem] overflow-visible sm:min-h-[4.3rem]">
      <AnimatePresence mode="wait">
        <motion.div
          key={role}
          initial={{
            y: 45,
            opacity: 0,
            filter: "blur(6px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            y: -45,
            opacity: 0,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-x-0
            top-0
            flex
            items-start
            pb-2
          "
        >
          {/* inline-block + explicit line-height avoids background-clip:text
              cropping descenders to a box that is shorter than the glyph.
              padding-bottom gives the gradient paint area room for descenders. */}
          <span
            className="inline-block pb-[0.2em] text-3xl font-bold leading-[1.35] tracking-tight sm:text-4xl"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 55%, var(--text-primary)))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              /* Explicit color as fallback for browsers that don't support bg-clip text */
              color: "var(--accent)",
            }}
          >
            {role}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}