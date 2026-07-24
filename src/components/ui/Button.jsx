import { motion } from "framer-motion";

function Button({
  children,
  href,
  target = "_self",
  variant = "primary",
  onClick,
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30",

    secondary:
      "border border-cyan-500 text-white hover:bg-cyan-500/10",
  };

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;