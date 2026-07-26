import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorTrail() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Slow spring = trailing effect
  const x = useSpring(mouseX, {
    stiffness: 90,
    damping: 18,
    mass: 0.8,
  });

  const y = useSpring(mouseY, {
    stiffness: 90,
    damping: 18,
    mass: 0.8,
  });

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (window.innerWidth < 1024) return null;

  return (
    <motion.div
  className="pointer-events-none fixed left-0 top-0 z-[9995] rounded-full"
  style={{
    x,
    y,
    width: 90,
    height: 90,
    translateX: "-50%",
    translateY: "-50%",
    background: `
      radial-gradient(circle at 50% 50%,
        rgba(34,211,238,0.22) 0%,
        rgba(34,211,238,0.12) 22%,
        rgba(59,130,246,0.08) 45%,
        rgba(34,211,238,0.03) 70%,
        transparent 100%
      ),
      radial-gradient(circle at 35% 35%,
        rgba(125,211,252,0.16),
        transparent 60%
      ),
      radial-gradient(circle at 70% 65%,
        rgba(6,182,212,0.10),
        transparent 70%
      )
    `,
    filter: "blur(18px)",
    willChange: "transform",
  }}
  animate={{
    scale: [0.96, 1.04, 0.96],
    opacity: [0.45, 0.7, 0.45],
    rotate: [0, 8, -8, 0],
  }}
  transition={{
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
  );
}