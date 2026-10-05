import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import useTheme from "../../../personalization/hooks/useTheme";

export default function CursorTrail() {
  const { design } = useTheme();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");

    const update = () => setDesktop(media.matches);
    update();

    media.addEventListener?.("change", update);

    return () => media.removeEventListener?.("change", update);
  }, []);

  if (!desktop || !design) return null;

  const trailOpacity = design.cursor.trail === "minimal" ? 0.22 : 0.42;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9995] rounded-full"
      style={{
        width: design.cursor.trail === "minimal" ? 56 : 76,
        height: design.cursor.trail === "minimal" ? 56 : 76,
        transform:
          "translate3d(var(--pointer-x, -100px), var(--pointer-y, -100px), 0) translate3d(-50%, -50%, 0)",
        background:
          "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--cursor-glow) 50%, transparent) 0%, color-mix(in srgb, var(--accent) 14%, transparent) 35%, transparent 72%)",
        filter: "blur(14px)",
        willChange: "transform",
      }}
      animate={{
        scale: [0.98, 1.03, 0.98],
        opacity: [trailOpacity * 0.75, trailOpacity, trailOpacity * 0.75],
      }}
      transition={{
        duration: design.motion.style === "minimal" ? 7 : 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
