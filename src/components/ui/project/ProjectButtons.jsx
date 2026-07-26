import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

function ProjectButtons({
  github,
  demo,
  project,
  hovered,
  onCaseStudy,
}) {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-5">
      {/* ---------------- Github ---------------- */}

      <motion.a
        href={github}
        target="_blank"
        rel="noreferrer"
        whileHover={{
          y: -5,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          group
          relative
          inline-flex
          items-center
          gap-3
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-slate-900/80
          px-7
          py-3.5
          font-medium
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400
          hover:text-cyan-300
        "
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0"
          animate={{
            x: hovered ? "120%" : "-120%",
          }}
          transition={{
            duration: 0.8,
          }}
        />

        <FaGithub className="relative z-10 text-lg" />

        <span className="relative z-10">
          GitHub
        </span>
      </motion.a>

      {/* ---------------- Demo ---------------- */}

      <motion.a
        href={demo}
        target="_blank"
        rel="noreferrer"
        whileHover={{
          y: -5,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          bg-cyan-400
          px-7
          py-3.5
          font-semibold
          text-slate-950
          shadow-[0_15px_40px_rgba(34,211,238,.35)]
        "
      >
        <motion.div
          className="absolute inset-0 bg-white/30"
          animate={{
            x: hovered ? "130%" : "-130%",
          }}
          transition={{
            duration: 0.8,
          }}
        />

        <span className="relative z-10 flex items-center gap-3">
          <FaExternalLinkAlt />
          Live Demo
        </span>
      </motion.a>

      {/* ---------------- Case Study ---------------- */}

      <motion.button
        whileHover={{
          y: -5,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={() => onCaseStudy(project)}
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          px-7
          py-3.5
          font-medium
          text-slate-300
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/40
          hover:bg-cyan-500/10
          hover:text-cyan-300
        "
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{
            x: hovered ? "130%" : "-130%",
          }}
          transition={{
            duration: 0.9,
          }}
        />

        <span className="relative z-10 flex items-center gap-3">
          Case Study

          <motion.div
            whileHover={{
              x: 4,
            }}
          >
            <FaArrowRight />
          </motion.div>
        </span>
      </motion.button>
    </div>
  );
}

export default ProjectButtons;