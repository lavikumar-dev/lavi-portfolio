import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import CursorParticles from "./CursorParticles";
import useTheme from "../../../personalization/hooks/useTheme";

function getCursorShape(shape) {
  switch (shape) {
    case "square":
      return "6px";
    case "leaf":
      return "100% 0 100% 0";
    case "petal":
      return "70% 30% 70% 30%";
    case "diamond":
      return "5px";
    case "dot-ring":
      return "50%";
    default:
      return "50%";
  }
}

export default function Cursor() {
  const { design } = useTheme();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [desktop, setDesktop] = useState(false);

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
    const update = () => setDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!desktop || !design) return undefined;

    document.body.style.cursor = "none";

    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);
    const hoverStart = () => setHovering(true);
    const hoverEnd = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);

    const elements = document.querySelectorAll("button, a, img, .project-card");

    elements.forEach((element) => {
      element.addEventListener("mouseenter", hoverStart);
      element.addEventListener("mouseleave", hoverEnd);
    });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);

      elements.forEach((element) => {
        element.removeEventListener("mouseenter", hoverStart);
        element.removeEventListener("mouseleave", hoverEnd);
      });
    };
  }, [desktop, design, mouseX, mouseY]);

  if (!desktop) return null;

  const cursor = design.cursor;
  const shape = getCursorShape(cursor.shape);
  const isDiamond = cursor.shape === "diamond";

  return (
    <>
      <CursorParticles />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "var(--cursor)",
          borderRadius: shape,
          rotate: isDiamond ? 45 : cursor.rotation,
        }}
        animate={{
          width: hovering ? cursor.hoverSize : cursor.size,
          height: hovering ? cursor.hoverSize : cursor.size,
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.08 : 1,
          boxShadow: hovering
            ? `0 0 10px var(--cursor-glow), 0 0 28px var(--cursor-glow), inset 0 0 10px color-mix(in srgb, var(--cursor-glow) 45%, transparent)`
            : `0 0 8px var(--cursor-glow), 0 0 18px color-mix(in srgb, var(--cursor-glow) 55%, transparent)`,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: "var(--cursor)",
        }}
        animate={{
          width: hovering ? 9 : 7,
          height: hovering ? 9 : 7,
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.15 : 1,
          boxShadow: hovering
            ? "0 0 12px var(--cursor), 0 0 30px var(--cursor-glow)"
            : "0 0 10px var(--cursor), 0 0 22px var(--cursor-glow)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}
