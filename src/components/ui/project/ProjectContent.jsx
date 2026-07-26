import { motion } from "framer-motion";

import TechStackPills from "./TechStackPills";
import ProjectButtons from "./ProjectButtons";
import ProjectFooter from "./ProjectFooter";

function ProjectContent({
  project,
  hovered,
  onCaseStudy,
  isReversed,
}) {
  return (
    <motion.div
  initial={{
    opacity: 0,
    x: isReversed ? -60 : 60,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.35,
  }}
  transition={{
    duration: 0.8,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative"
>

      {/* ========================= */}
      {/* Header */}
      {/* ========================= */}

      <div className="flex flex-wrap items-center gap-4">

        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          {project.category}
        </span>

        <span className="h-1 w-1 rounded-full bg-slate-600" />

        <span
          className={`rounded-full px-4 py-1.5 text-xs font-semibold backdrop-blur-xl ${
            project.status === "Completed"
              ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
              : project.status === "In Progress"
              ? "border border-amber-500/20 bg-amber-500/10 text-amber-300"
              : "border border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
          }`}
        >
          {project.status}
        </span>

      </div>

      {/* ========================= */}
      {/* Title */}
      {/* ========================= */}

      <motion.h3
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
        className="mt-6 text-6xl font-black leading-[1.05] text-white"
      >
        {project.title}
      </motion.h3>

      {/* ========================= */}
      {/* Subtitle */}
      {/* ========================= */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.18,
        }}
        className="mt-5 max-w-2xl text-2xl font-medium leading-10 text-slate-300"
      >
        {project.subtitle}
      </motion.p>

      {/* ========================= */}
      {/* Description */}
      {/* ========================= */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.26,
        }}
        className="mt-10 max-w-2xl text-lg leading-9 text-slate-400"
      >
        {project.description}
      </motion.p>
            {/* ========================= */}
      {/* Tech Stack */}
      {/* ========================= */}

      <TechStackPills tech={project.tech} />

      {/* ========================= */}
      {/* Action Buttons */}
      {/* ========================= */}

      <ProjectButtons
        github={project.github}
        demo={project.demo}
        project={project}
        hovered={hovered}
        onCaseStudy={onCaseStudy}
      />

      {/* ========================= */}
      {/* Footer */}
      {/* ========================= */}

      <ProjectFooter
        duration={project.duration}
        hovered={hovered}
      />
    </motion.div>
  );
}

export default ProjectContent;