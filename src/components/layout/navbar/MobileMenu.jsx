import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";

import ResumeButton from "./ResumeButton";

function MobileMenu({
  open,
  onClose,
  navLinks,
  activeSection,
  onNavigate,
  loadingResume,
  onResume,
  socials,
}) {
  const handleNavigate = (id) => {
    onNavigate(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="mobile-backdrop md:hidden"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="mobile-drawer md:hidden"
          >
            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-primary text-xl font-bold tracking-wide">
                Navigation
              </h2>

              <button
                onClick={onClose}
                aria-label="Close navigation"
                className="mobile-close-button"
              >
                <FaTimes size={22} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavigate(link.id)}
                    className={`
                      mobile-nav-link
                      ${isActive ? "mobile-nav-active" : ""}
                    `}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="mobile-footer">
              <ResumeButton
                loading={loadingResume}
                onClick={onResume}
                fullWidth
              />

              <div className="mt-6 flex items-center justify-center gap-6">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="nav-icon"
                >
                  <FaGithub />
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="nav-icon"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;