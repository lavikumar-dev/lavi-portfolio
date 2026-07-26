import { motion } from "framer-motion";
import {
  easing,
  viewport,
  durations,
  distances,
} from "./motion";

const directionMap = {
  up: (d) => ({ x: 0, y: d }),
  down: (d) => ({ x: 0, y: -d }),
  left: (d) => ({ x: d, y: 0 }),
  right: (d) => ({ x: -d, y: 0 }),
  none: () => ({ x: 0, y: 0 }),
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  distance = "md",
  delay = 0,
  duration = "normal",
  scale = true,
}) {
  const offset = directionMap[direction](distances[distance]);

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...offset,
        scale: scale ? 0.985 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={viewport}
      transition={{
        delay,
        duration: durations[duration],
        ease: easing,
      }}
    >
      {children}
    </motion.div>
  );
}