import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

function LivingFloat({
  children,
  radius = 8,
  speed = 0.6,
  rotation = 1,
  phase = 0,
  className = "",
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  const time = useRef(phase);

  useAnimationFrame((_, delta) => {
    time.current += (delta / 1000) * speed;

    const t = time.current;

    // Smooth orbital movement
    x.set(Math.sin(t) * radius);

    // Slightly different frequency prevents robotic motion
    y.set(Math.cos(t * 0.82) * radius * 0.75);

    // Gentle breathing rotation
    rotate.set(Math.sin(t * 0.55) * rotation);
  });

  return (
    <motion.div
      className={className}
      style={{
        x,
        y,
        rotate,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}

export default LivingFloat;