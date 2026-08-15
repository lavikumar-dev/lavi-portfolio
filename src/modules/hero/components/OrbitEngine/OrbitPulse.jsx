
import { motion } from "framer-motion";

export default function OrbitPulse({
  size = 10,
  duration = 30,
  reverse = false,
}) {
  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-1/2
        pointer-events-none
      "
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: 0,
        height: 0,
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: 300,
          top: -size / 2,
          width: size,
          height: size,
          borderRadius: "50%",
          background: "var(--accent)",
          boxShadow: "0 0 14px var(--glow), 0 0 30px var(--glow)",
        }}
      />
    </motion.div>
  );
}