import { motion } from "framer-motion";

function FeaturedBadge({ show }) {
  if (!show) return null;

  return (
    <motion.div
      animate={{
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        inline-flex
        items-center
        gap-1.5
        rounded-full
        border
        border-[color:var(--accent)]/30
        bg-[color:var(--accent-soft)]
        px-3
        py-1
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.25em]
        text-[color:var(--accent)]
      "
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"
        style={{ boxShadow: "0 0 8px var(--glow)" }}
        aria-hidden="true"
      />
      Featured
    </motion.div>
  );
}

export default FeaturedBadge;
