import { motion } from "framer-motion";
import {
  distances,
  durations,
  easing,
  viewport,
} from "./tokens";

const directionMap = {
  up: { x: 0, y: distances.md },
  down: { x: 0, y: -distances.md },
  left: { x: -distances.md, y: 0 },
  right: { x: distances.md, y: 0 },
};

function Reveal({
  children,
  direction = "up",
  distance = "md",
  duration = "normal",
  delay = 0,
  scale = 1,
  className = "",
  once = true,
  amount = viewport.amount,
  ...props
}) {
  const offset = directionMap[direction] || directionMap.up;

  const multiplier =
    distance === "sm"
      ? distances.sm / distances.md
      : distance === "lg"
      ? distances.lg / distances.md
      : 1;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: offset.x * multiplier,
        y: offset.y * multiplier,
        scale: scale === 1 ? 0.985 : scale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: durations[duration] ?? durations.normal,
        delay,
        ease: easing,
      }}
      viewport={{
        once,
        amount,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;