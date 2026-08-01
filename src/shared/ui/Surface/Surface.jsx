import { motion } from "framer-motion";

import { glass, radius, shadow } from "../../foundation";

export default function Surface({
  children,
  className = "",
  hover = true,
  glassType = "light",
  radiusSize = "lg",
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
              y: -6,
            }
          : undefined
      }
      transition={{
        duration: 0.28,
      }}
      className={`
        relative

        overflow-hidden

        ${glass[glassType]}

        ${radius[radiusSize]}

        ${shadow.glow}

        ${paddings[padding]}

        transition-all
        duration-300

        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}
