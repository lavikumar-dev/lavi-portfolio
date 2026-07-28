import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        opacity: {
          delay: 1.5,
          duration: 0.6,
        },
        y: {
          duration: 2,
          repeat: Infinity,
        },
      }}
      className="
        absolute
        bottom-8
        left-1/2
        hidden
        -translate-x-1/2
        text-slate-400
        transition-colors
        duration-300
        hover:text-cyan-400
        lg:flex
      "
      aria-label="Scroll to About section"
    >
      <FaArrowDown className="text-2xl" />
    </motion.a>
  );
}

export default ScrollIndicator;