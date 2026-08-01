import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

import { portfolio } from "../../../data/portfolio";
import { navigation } from "../config/navigation.config";

export default function NavMobile({
  open,
  close,
  active,
  navigate,
}) {
  if (!open) return <AnimatePresence />;

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
      />

      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 28,
        }}
        className="
          fixed
          right-0
          top-0
          z-50
          flex
          h-screen
          w-[85vw]
          max-w-sm
          flex-col
          border-l
          border-white/10
          bg-slate-950
          p-8
        "
      >

        <div className="mb-12 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Menu
          </h2>

          <button
            onClick={close}
            className="rounded-xl p-2 hover:bg-white/5"
          >
            <FaTimes size={22} />
          </button>

        </div>

        <nav className="flex flex-1 flex-col gap-3">

          {navigation.links.map((link) => (

            <button
              key={link.id}
              onClick={() => {
                navigate(link.id);
                close();
              }}
              className={`
                rounded-xl
                px-4
                py-3
                text-left
                transition-all
                duration-300

                ${
                  active === link.id
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-slate-300"
                }
              `}
            >
              {link.label}
            </button>

          ))}

        </nav>

        <div className="mt-10 flex justify-center gap-6">

          <a
            href={portfolio.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={portfolio.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>

        </div>

      </motion.aside>

    </AnimatePresence>
  );
}