import { motion } from "framer-motion";

export default function OceanGrid() {
  return (
    <>
      {/* Main Grid */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
          opacity-100
        "
      >
        {/* Vertical */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,rgba(40,170,255,.065)_1px,transparent_1px)]
            bg-[size:64px_64px]
          "
        />

        {/* Horizontal */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_bottom,rgba(40,170,255,.065)_1px,transparent_1px)]
            bg-[size:64px_64px]
          "
        />

        {/* Center Highlight */}
        <motion.div
          animate={{
            opacity: [0.18, 0.32, 0.18],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[900px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/5
            blur-[140px]
          "
        />

        {/* Left Ocean Glow */}
        <motion.div
          animate={{
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="
            absolute
            left-[-220px]
            top-[10%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-cyan-400/10
            blur-[170px]
          "
        />

        {/* Right Ocean Glow */}
        <motion.div
          animate={{
            opacity: [0.05, 0.14, 0.05],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="
            absolute
            right-[-180px]
            bottom-[8%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-sky-500/10
            blur-[180px]
          "
        />

        {/* Floating Stars */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.15, 1, 0.15],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.35,
            }}
            className="absolute rounded-full bg-cyan-300"
            style={{
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              left: `${(i * 17) % 100}%`,
              top: `${(i * 11) % 100}%`,
              boxShadow: "0 0 12px rgba(34,211,238,.9)",
            }}
          />
        ))}
      </div>
    </>
  );
}