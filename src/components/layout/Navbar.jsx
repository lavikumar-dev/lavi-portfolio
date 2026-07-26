import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaSpinner,
} from "react-icons/fa";
import { portfolio } from "../../data/portfolio";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loadingResume, setLoadingResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleResume = () => {
    if (loadingResume) return;

    setLoadingResume(true);

    setTimeout(() => {
      setLoadingResume(false);

      // Replace with your actual resume path
      window.open("/resume.pdf", "_blank");
    }, 500);
  };

  const handleNavClick = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-5 pt-5">
          <div
            className={`flex items-center justify-between rounded-2xl border transition-all duration-500 ${
              scrolled
                ? "border-cyan-400/25 bg-slate-900/85 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl"
                : "border-white/10 bg-slate-900/55 backdrop-blur-xl"
            } px-6 py-4`}
          >
            {/* Logo */}

            <button
              onClick={() => handleNavClick("home")}
              className="text-2xl font-bold tracking-wide text-white transition hover:text-cyan-400"
            >
              Lavi<span className="text-cyan-400">.</span>
            </button>

            {/* Desktop Navigation */}

            <ul className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
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

            {/* Right Side */}

            <div className="hidden items-center gap-4 md:flex">
              <a
                href={portfolio.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-xl text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <FaGithub />
              </a>

              <a
                href={portfolio.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-xl text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <FaLinkedin />
              </a>

              <button
                onClick={handleResume}
                disabled={loadingResume}
                className="flex min-w-[120px] items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95 disabled:cursor-not-allowed"
              >
                {loadingResume ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Opening
                  </>
                ) : (
                  "Resume"
                )}
              </button>

              <button
                onClick={() => setMenuOpen(true)}
                className="rounded-xl border border-white/10 p-2 text-xl text-white transition hover:border-cyan-400/30 hover:text-cyan-300 md:hidden"
              >
                <FaBars />
              </button>
            </div>

            {/* Mobile Toggle */}

            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-xl border border-white/10 p-2 text-xl text-white transition hover:border-cyan-400/30 hover:text-cyan-300 md:hidden"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Mobile Menu */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col border-l border-white/10 bg-slate-950/95 p-6 backdrop-blur-2xl md:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Navigation</h2>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg p-2 text-white transition hover:bg-white/10 hover:text-cyan-300"
                >
                  <FaTimes size={22} />
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`rounded-xl px-4 py-3 text-left text-base font-medium transition-all ${
                      activeSection === link.id
                        ? "bg-cyan-500/10 text-cyan-300"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <button
                  onClick={handleResume}
                  disabled={loadingResume}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition-all hover:bg-cyan-300 active:scale-95"
                >
                  {loadingResume ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Opening...
                    </>
                  ) : (
                    "Resume"
                  )}
                </button>

                <div className="flex justify-center gap-5 pt-2">
                  <a
                    href={portfolio.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-3 text-xl text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={portfolio.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-3 text-xl text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
