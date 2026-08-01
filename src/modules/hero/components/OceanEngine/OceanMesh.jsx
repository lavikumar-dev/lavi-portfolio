import { motion } from "framer-motion";

const nodes = Array.from({ length: 65 }, (_, i) => ({
  id: i,

  left: 4 + (i % 13) * 7.3,

  top: 72 + Math.floor(i / 13) * 4.2,

  delay: i * 0.08,

  duration: 5 + (i % 5),

  size: 2 + (i % 3),
}));

export default function OceanMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          animate={{
            opacity: [0.2, 1, 0.2],
            y: [0, -8, 0],
            scale: [1, 1.35, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: node.duration,
            delay: node.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: `${node.left}%`,
            top: `${node.top}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            boxShadow:
              "0 0 12px rgba(34,211,238,.95), 0 0 24px rgba(34,211,238,.45)",
          }}
        />
      ))}
    </div>
  );
}