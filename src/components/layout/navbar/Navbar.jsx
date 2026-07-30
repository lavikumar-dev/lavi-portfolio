import { useEffect, useState } from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import { portfolio } from "../../../data/portfolio";

import { navLinks } from "./navLinks";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import ResumeButton from "./ResumeButton";
import ThemeSwitcher from "./ThemeSwitcher";


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

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleResume = () => {
    if (loadingResume) return;

    setLoadingResume(true);

    setTimeout(() => {
      setLoadingResume(false);
      window.open("/resume.pdf", "_blank");
    }, 500);
  };

  const handleNavClick = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto w-full max-w-7xl px-4 pt-5 sm:px-5 lg:px-6">
          <div
            className={`flex items-center justify-between rounded-3xl border px-4 py-3 transition-all duration-300 ease-out sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 ${
              scrolled
                ? "border-cyan-400/25 bg-slate-900/85 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl"
                : "border-white/10 bg-slate-900/55 backdrop-blur-xl"
            }`}
          >
            <Logo onClick={() => handleNavClick("home")} />

            <DesktopNav
              navLinks={navLinks}
              activeSection={activeSection}
              onNavigate={handleNavClick}
            />

            <div
  className="
    hidden
    lg:flex
    items-center
    gap-2
    xl:gap-4
  "
>
              <ThemeSwitcher />

              <a
                href={portfolio.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 text-xl text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <FaGithub />
              </a>

              <a
                href={portfolio.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-xl text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <FaLinkedin />
              </a>

              <ResumeButton
                loading={loadingResume}
                onClick={handleResume}
              />
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="
  rounded-xl
  border
  border-white/10
  p-2.5
  text-xl
  text-white
  transition-all
  duration-300
  hover:border-cyan-400/30
  hover:text-cyan-300
  lg:hidden
"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        onNavigate={handleNavClick}
        loadingResume={loadingResume}
        onResume={handleResume}
        socials={portfolio.socials}
      />
    </>
  );
}

export default Navbar;