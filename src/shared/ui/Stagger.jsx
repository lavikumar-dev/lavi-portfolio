import { motion } from "framer-motion";

import { viewport } from "../../engine/motion";

export default function Stagger({
  children,
  className = "",
  stagger = .08,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},

        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}