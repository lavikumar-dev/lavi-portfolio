import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import CursorParticles from "./CursorParticles";

export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, {
    stiffness: 350,
    damping: 24,
    mass: 0.45,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 350,
    damping: 24,
    mass: 0.45,
  });

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    document.body.style.cursor = "none";

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    const hoverStart = () => setHovering(true);
    const hoverEnd = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);

    const elements = document.querySelectorAll(
      "button, a, img, .project-card"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", hoverStart);
      el.addEventListener("mouseleave", hoverEnd);
    });

    return () => {
      document.body.style.cursor = "";

      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", hoverStart);
        el.removeEventListener("mouseleave", hoverEnd);
      });
    };
  }, []);

  if (window.innerWidth < 1024) return null;

  return (
    <>
    <CursorParticles />
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-cyan-300"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 46 : 24,
          height: hovering ? 46 : 24,
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.08 : 1,
          boxShadow: hovering
            ? `
              0 0 10px rgba(34,211,238,.95),
              0 0 24px rgba(34,211,238,.80),
              0 0 50px rgba(34,211,238,.55),
              inset 0 0 10px rgba(34,211,238,.35)
            `
            : `
              0 0 8px rgba(34,211,238,.60),
              0 0 18px rgba(34,211,238,.35)
            `,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 22,
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-cyan-300"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 9 : 7,
          height: hovering ? 9 : 7,
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.15 : 1,
          boxShadow: hovering
            ? `
              0 0 12px #22d3ee,
              0 0 28px rgba(34,211,238,.95),
              0 0 55px rgba(34,211,238,.75)
            `
            : `
              0 0 10px #22d3ee,
              0 0 22px rgba(34,211,238,.75)
            `,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </>
  );
}