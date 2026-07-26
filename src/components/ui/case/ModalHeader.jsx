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
      transition={{ duration: 0.35 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="min-w-0">
          <h2 className="truncate text-xl font-bold text-white">
            {project.title}
          </h2>

          <div className="mt-2 flex flex-wrap items-center gap-3">
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

        <div className="flex items-center gap-3">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-all hover:bg-white/10"
            >
              <Code2 size={16} />
              GitHub
            </motion.a>
          )}

          {project.demo && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition-all hover:bg-cyan-400"
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}

          <motion.button
            whileHover={{ rotate: 90, scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-red-500/20"
          >
            <X size={18} />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}