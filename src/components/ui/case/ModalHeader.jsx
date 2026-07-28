import { motion } from "framer-motion";
import {
  X,
  Code2,
  ExternalLink,
  Clock3,
} from "lucide-react";

export default function ModalHeader({ project, onClose }) {
  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-slate-950/80
        backdrop-blur-2xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-5
          px-4
          py-4
          sm:px-6
          lg:flex-row
          lg:items-start
          lg:justify-between
        "
      >
        {/* ========================= */}
        {/* Left Side */}
        {/* ========================= */}

        <div className="min-w-0 flex-1">
          <h2
            className="
              break-words
              text-xl
              font-bold
              text-white
              sm:text-2xl
            "
          >
            {project.title}
          </h2>

          <div
            className="
              mt-3
              flex
              flex-wrap
              items-center
              gap-2
              sm:gap-3
            "
          >
            {project.category && (
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                {project.category}
              </span>
            )}

            {project.status && (
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                {project.status}
              </span>
            )}

            {project.duration && (
              <div className="flex items-center gap-1 text-sm text-slate-400">
                <Clock3 size={14} />
                {project.duration}
              </div>
            )}
          </div>
        </div>

        {/* ========================= */}
        {/* Right Side */}
        {/* ========================= */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-start
            gap-3
            lg:flex-nowrap
            lg:justify-end
          "
        >
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-white
                transition-all
                hover:bg-white/10
              "
            >
              <Code2 size={16} />
              <span className="hidden sm:inline">
                GitHub
              </span>
            </motion.a>
          )}

          {project.demo && (
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-cyan-500
                px-4
                py-2
                text-sm
                font-medium
                text-slate-950
                transition-all
                hover:bg-cyan-400
              "
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">
                Live Demo
              </span>
            </motion.a>
          )}

          <motion.button
            whileHover={{
              rotate: 90,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.92,
            }}
            onClick={onClose}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              hover:bg-red-500/20
            "
          >
            <X size={18} />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}