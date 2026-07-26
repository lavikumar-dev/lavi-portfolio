import { useState, useRef } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function useProjectTilt() {
  const cardRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  // -------------------------
  // Mouse Motion Values
  // -------------------------

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // -------------------------
  // Card Rotation
  // -------------------------

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [12, -12]),
    {
      stiffness: 220,
      damping: 24,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-12, 12]),
    {
      stiffness: 220,
      damping: 24,
    }
  );

  // -------------------------
  // Image Parallax
  // -------------------------

  const imageX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-18, 18]),
    {
      stiffness: 120,
      damping: 18,
    }
  );

  const imageY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-18, 18]),
    {
      stiffness: 120,
      damping: 18,
    }
  );

  // -------------------------
  // Glow Position
  // -------------------------

  const glowX = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["20%", "80%"]
  );

  const glowY = useTransform(
    mouseY,
    [-0.5, 0.5],
    ["20%", "80%"]
  );

  // -------------------------
  // Reflection Sweep
  // -------------------------

  const reflectionX = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["-40%", "140%"]
  );

  // -------------------------
  // Mouse Events
  // -------------------------

  function handleMove(event) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);

    setHovered(false);
  }

  function handleEnter() {
    setHovered(true);
  }

  return {
    cardRef,

    hovered,
    setHovered,

    rotateX,
    rotateY,

    imageX,
    imageY,

    glowX,
    glowY,

    reflectionX,

    handleMove,
    handleEnter,
    handleLeave,
  };
}