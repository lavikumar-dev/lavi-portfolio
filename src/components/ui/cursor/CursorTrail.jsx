import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import useTheme from "../../../personalization/hooks/useTheme";

export default function CursorTrail() {
  const { design } = useTheme();
  const [desktop, setDesktop] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 90, damping: 18, mass: 0.8 });
  const y = useSpring(mouseY, { stiffness: 90, damping: 18, mass: 0.8 });

  useEffect(() => {
    const update = () => setDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!desktop) return undefined;

    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [desktop, mouseX, mouseY]);

  if (!desktop || !design.effects?.cursor) return null;

  const trailOpacity = design.cursor.trail === "minimal" ? 0.25 : 0.5;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9995] rounded-full"
      style={{
        x,
        y,
        width: design.cursor.trail === "minimal" ? 64 : 90,
        height: design.cursor.trail === "minimal" ? 64 : 90,
        translateX: "-50%",
        translateY: "-50%",
        background: `radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--cursor-glow) 55%, transparent) 0%, color-mix(in srgb, var(--accent) 20%, transparent) 35%, transparent 72%)`,
        filter: "blur(18px)",
        willChange: "transform",
      }}
      animate={{
        scale: [0.96, 1.04, 0.96],
        opacity: [trailOpacity * 0.7, trailOpacity, trailOpacity * 0.7],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: design.motion.style === "minimal" ? 7 : 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
