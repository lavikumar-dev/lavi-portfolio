import { motion } from "framer-motion";

function DesktopNav({
  navLinks,
  activeSection,
  onNavigate,
}) {
  return (
    <ul
      className="
        hidden
        lg:flex
        items-center
        gap-1
        xl:gap-2
      "
    >
      {navLinks.map((link) => (
        <li key={link.id}>
          <button
            onClick={() => onNavigate(link.id)}
            className={`relative rounded-xl px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeSection === link.id
                ? "text-cyan-300"
                : "text-slate-300 hover:text-cyan-300"
            }`}
          >
            {link.label}

            {activeSection === link.id && (
              <motion.span
                layoutId="active-pill"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                }}
                className="absolute inset-0 -z-10 rounded-xl border border-cyan-400/20 bg-cyan-500/10"
              />
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DesktopNav;