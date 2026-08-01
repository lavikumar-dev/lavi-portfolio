import { motion } from "framer-motion";

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: 5 + (i % 8) * 12,
  top: 62 + Math.floor(i / 8) * 10,
  duration: 8 + (i % 5),
  delay: i * 0.25,
  size: 3 + (i % 2),
}));

export default function OceanParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: "0 0 18px rgba(34,211,238,.9)",
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, 8, 0],
            opacity: [0.15, 1, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}