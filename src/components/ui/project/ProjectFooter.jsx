import { motion } from "framer-motion";

function ProjectFooter({ duration, hovered }) {
  return (
    <div className="mt-14 flex items-center gap-4">
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0.5,
        }}
        className="h-px flex-1 bg-gradient-to-r from-cyan-400 via-cyan-400/20 to-transparent"
      />

      <span className="text-sm font-medium uppercase tracking-[0.15em] text-slate-500">
        {duration}
      </span>
    </div>
  );
}

export default ProjectFooter;