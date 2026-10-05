import { motion } from "framer-motion";

import {
  viewport,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  pop,
} from "../../engine/motion";

const variants = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  pop,
};

export default function Reveal({
  children,
  className = "",
  variant = "up",
  as: Component = motion.div,
  ...props
}) {
  return (
    <Component
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...props}
    >
      {children}
    </Component>
  );
}