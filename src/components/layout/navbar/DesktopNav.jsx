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
      {navLinks.map((link) => {
        const isActive = activeSection === link.id;

        return (
          <li key={link.id}>
            <button
              onClick={() => onNavigate(link.id)}
              className={`
                relative
                rounded-xl
                px-3
                py-2
                text-sm
                font-medium
                transition-all
                duration-300
                xl:px-4
                ${
                  isActive
                    ? "nav-text-active"
                    : "nav-text"
                }
              `}
            >
              {link.label}

              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                  }}
                  className="nav-pill absolute inset-0 -z-10 rounded-xl"
                />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default DesktopNav;