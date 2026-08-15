import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import useTheme from "../../../personalization/hooks/useTheme";

export default function Spotlight() {
  const { effects, design } = useTheme();
  const [desktop, setDesktop] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const update = () => {
      setDesktop(window.innerWidth >= 1024);
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    };

    update();
    window.addEventListener("resize", update);

    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  if (!desktop || !effects.spotlight) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-0 h-[420px] w-[420px] rounded-full"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--accent) 13%, transparent) 0%, color-mix(in srgb, var(--accent) 5%, transparent) 35%, transparent 75%)",
        filter: "blur(70px)",
        opacity: design.motion.style === "minimal" ? 0.55 : 1,
      }}
    />
  );
}
