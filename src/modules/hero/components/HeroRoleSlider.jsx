import { AnimatePresence, motion } from "framer-motion";

import { hero } from "../config/hero.config";
import useHeroRoles from "../hooks/useHeroRoles";

export default function HeroRoleSlider() {
  const role = useHeroRoles(hero.rotatingRoles);

  return (
    <div className="relative h-12 overflow-hidden">
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
            inset-0
            flex
            items-center
          "
        >
          <span
            className="
              bg-gradient-to-r
              from-cyan-300
              via-cyan-400
              to-sky-500
              bg-clip-text
              text-3xl
              font-bold
              tracking-tight
              text-transparent

              sm:text-4xl
            "
          >
            {role}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}