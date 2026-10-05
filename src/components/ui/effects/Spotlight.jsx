import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import useTheme from "../../../personalization/hooks/useTheme";

export default function Spotlight() {
  const { effects, design } = useTheme();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  if (!desktop || !effects.spotlight) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-[var(--pointer-x,-100px)] top-[var(--pointer-y,-100px)] z-0 h-[360px] w-[360px] rounded-full"
      style={{
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--accent) 11%, transparent) 0%, color-mix(in srgb, var(--accent) 4%, transparent) 35%, transparent 75%)",
        filter: "blur(56px)",
        opacity: design.motion.style === "minimal" ? 0.5 : 0.9,
        willChange: "left, top",
      }}
    />
  );
}
