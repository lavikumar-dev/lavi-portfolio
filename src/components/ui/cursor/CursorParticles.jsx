import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MAX_PARTICLES = 18;
const SPAWN_DISTANCE = 12;

export default function CursorParticles() {
  const [particles, setParticles] = useState([]);

  const lastMouse = useRef({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const handleMove = (e) => {
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < SPAWN_DISTANCE) return;

      lastMouse.current = {
        x: e.clientX,
        y: e.clientY,
      };

      const particle = {
        id: crypto.randomUUID(),

        x: e.clientX,
        y: e.clientY,

        size: Math.random() * 4 + 2,

        angle: Math.random() * Math.PI * 2,

        distance: Math.random() * 16 + 6,

        duration: Math.random() * 0.25 + 0.25,
      };

      setParticles((prev) => {
        const updated = [...prev, particle];

        return updated.slice(-MAX_PARTICLES);
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);
    return (
    <AnimatePresence>
      {particles.map((particle) => {
        const moveX =
          Math.cos(particle.angle) * particle.distance;

        const moveY =
          Math.sin(particle.angle) * particle.distance;

        return (
          <motion.div
            key={particle.id}
            initial={{
              opacity: 0.9,
              scale: 1,
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              opacity: 0,
              scale: 0,
              x: particle.x + moveX,
              y: particle.y + moveY,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: particle.duration,
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              setParticles((prev) =>
                prev.filter((p) => p.id !== particle.id)
              );
            }}
            className="pointer-events-none fixed left-0 top-0 z-[9996] rounded-full bg-cyan-300"
            style={{
              width: particle.size,
              height: particle.size,
              translateX: "-50%",
              translateY: "-50%",
              boxShadow: `
                0 0 6px rgba(34,211,238,.9),
                0 0 14px rgba(34,211,238,.6),
                0 0 24px rgba(34,211,238,.35)
              `,
            }}
          />
        );
      })}
    </AnimatePresence>
  );
}