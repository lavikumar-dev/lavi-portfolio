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
      className="pointer-events-none fixed left-0 top-0 z-[9997] h-14 w-14 rounded-full"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(34,211,238,.18) 0%, rgba(34,211,238,.08) 45%, transparent 75%)",
        filter: "blur(22px)",
      }}
    />
  );
}