import { motion } from "framer-motion";

function FeaturedBadge({ show }) {
  if (!show) return null;

  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        top-6
        right-6
        z-30
        rounded-full
        border
        border-cyan-400/30
        bg-cyan-400/10
        px-5
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-[0.3em]
        text-cyan-300
        backdrop-blur-xl
        shadow-[0_0_25px_rgba(34,211,238,0.15)]
      "
    >
      Featured
    </motion.div>
  );
}

export default FeaturedBadge;