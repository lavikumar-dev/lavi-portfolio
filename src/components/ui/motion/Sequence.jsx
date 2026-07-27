import { motion } from "framer-motion";
import { viewport } from "./tokens";

export default function Stagger({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
