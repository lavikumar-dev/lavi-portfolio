import { AnimatePresence, motion } from "framer-motion";

import useTheme from "../../personalization/hooks/useTheme";

export default function ThemeTransitionOverlay() {
  const { isTransitioning, transitionType } = useTheme();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key={transitionType}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionType === "crimson-enter" ? 0.65 : 0.35 }}
          className="pointer-events-none fixed inset-0 z-[100000] overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/80" />

          {transitionType === "crimson-enter" && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.72 }}
                animate={{ opacity: [0, 0.35, 0.12], scale: [0.72, 1.15, 1] }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 top-1/2 h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "radial-gradient(circle, var(--accent) 0%, transparent 64%)",
                  filter: "blur(80px)",
                }}
              />

              <motion.div
                initial={{ opacity: 0, scaleX: 0.15 }}
                animate={{ opacity: [0, 0.75, 0], scaleX: [0.15, 1, 1.2] }}
                transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 top-1/2 h-px w-[72vw] -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
                  boxShadow: "0 0 32px var(--glow)",
                }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
