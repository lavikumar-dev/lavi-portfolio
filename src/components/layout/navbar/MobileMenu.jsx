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
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
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
            className="fixed right-0 top-0 z-50 flex h-screen w-[85vw] max-w-sm flex-col border-l border-white/10 bg-slate-950/95 px-6 pt-6 pb-10 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
          >
            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-wide text-white">
                Navigation
              </h2>

              <button
                onClick={onClose}
                aria-label="Close navigation"
                className="rounded-xl p-2 text-white transition-all duration-300 hover:bg-white/10 hover:text-cyan-300"
              >
                <FaTimes size={22} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-1 flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`rounded-xl px-4 py-3 text-left text-base font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/20"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-10 border-t border-white/10 pt-6">
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
                  className="rounded-full p-3 text-xl text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300"
                >
                  <FaGithub />
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full p-3 text-xl text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300"
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