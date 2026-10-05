import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  hover = true,
  blur = true,
  padding = "lg",
  as: Component = motion.div,
  ...props
}) {
  const paddings = {
    sm: "p-5",
    md: "p-7",
    lg: "p-9",
    xl: "p-12",
  };

  return (
    <Component
      whileHover={
        hover
          ? {
              y: -8,
            }
          : undefined
      }
      transition={{
        duration: 0.28,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl

        border
        border-white/10

        bg-white/[0.03]

        ${blur ? "backdrop-blur-2xl" : ""}

        ${paddings[padding]}

        transition-all
        duration-300

        hover:border-cyan-500/25
        hover:shadow-[0_20px_60px_rgba(34,211,238,.10)]

        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}