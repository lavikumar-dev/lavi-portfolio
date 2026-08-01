import { motion } from "framer-motion";

export default function OceanGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {/* Main Hero Glow */}
      <motion.div
        animate={{
          opacity: [0.28, 0.45, 0.28],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[42%]
          -translate-x-1/2
          -translate-y-1/2
          h-[950px]
          w-[950px]
          rounded-full
          bg-cyan-500/8
          blur-[180px]
        "
      />

      {/* Left Ocean Light */}
      <motion.div
        animate={{
          x: [-25, 25, -25],
          opacity: [0.06, 0.15, 0.06],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-280px]
          top-[15%]
          h-[900px]
          w-[900px]
          rounded-full
          bg-sky-400/10
          blur-[230px]
        "
      />

      {/* Right Ocean Light */}
      <motion.div
        animate={{
          x: [25, -25, 25],
          opacity: [0.05, 0.13, 0.05],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-260px]
          bottom-[6%]
          h-[900px]
          w-[900px]
          rounded-full
          bg-cyan-500/10
          blur-[240px]
        "
      />

      {/* Bottom Ocean Fog */}
      <motion.div
        animate={{
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-280px]
          left-1/2
          -translate-x-1/2
          h-[700px]
          w-[1600px]
          rounded-full
          bg-cyan-400/8
          blur-[200px]
        "
      />

      {/* Small Ambient Lights */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.6,
          }}
          className="absolute rounded-full bg-cyan-300"
          style={{
            width: 5,
            height: 5,
            left: `${10 + i * 8}%`,
            top: `${15 + (i % 5) * 14}%`,
            boxShadow: "0 0 22px rgba(34,211,238,.95)",
          }}
        />
      ))}
    </div>
  );
}