import { motion } from "framer-motion";

export default function Button({
  children,
  icon,
  loading = false,
  disabled = false,
  fullWidth = false,
  variant = "primary",
  size = "md",
  as: Component = motion.button,
  className = "",
  ...props
}) {
  const variants = {
    primary: `
      bg-cyan-400
      text-slate-950

      hover:bg-cyan-300
    `,

    secondary: `
      border
      border-white/10

      bg-white/5

      text-white

      hover:bg-white/10
    `,

    ghost: `
      text-white

      hover:bg-white/5
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3",

    lg: "px-8 py-4 text-lg",
  };

  return (
    <Component
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-3

        rounded-2xl

        font-semibold

        transition-all

        duration-300

        ${variants[variant]}

        ${sizes[size]}

        ${fullWidth ? "w-full" : ""}

        ${
          disabled
            ? "cursor-not-allowed opacity-60"
            : ""
        }

        ${className}
      `}
      {...props}
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          {icon}

          {children}
        </>
      )}
    </Component>
  );
}