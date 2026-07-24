import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-slate-900/70 backdrop-blur-xl px-6 py-4 shadow-lg shadow-cyan-500/10">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-wide text-white"
          >
            Lavi<span className="text-cyan-400">.</span>
          </a>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <li>
              <a href="#home" className="transition hover:text-cyan-400">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="transition hover:text-cyan-400">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="transition hover:text-cyan-400">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="transition hover:text-cyan-400">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="transition hover:text-cyan-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition hover:text-cyan-400 text-xl"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition hover:text-cyan-400 text-xl"
            >
              <FaLinkedin />
            </a>

            <button className="rounded-xl bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              Resume
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
