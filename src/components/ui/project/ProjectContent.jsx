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
        x: isReversed ? -35 : 35,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        text-center
        lg:text-left
      "
    >
      {/* ========================= */}
      {/* Header */}
      {/* ========================= */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.35,
          delay: 0.05,
        }}
        className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-3
          lg:justify-start
        "
      >
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
      </motion.div>

      {/* ========================= */}
      {/* Title */}
      {/* ========================= */}

      <motion.h3
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.45,
          delay: 0.08,
        }}
        className="
          mt-6
          text-3xl
          sm:text-4xl
          md:text-5xl
          xl:text-6xl
          font-black
          leading-tight
          text-white
        "
      >
        {project.title}
      </motion.h3>

      {/* ========================= */}
      {/* Subtitle */}
      {/* ========================= */}

      <motion.p
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.45,
          delay: 0.12,
        }}
        className="
          mt-5
          mx-auto
          max-w-2xl
          text-lg
          sm:text-xl
          lg:mx-0
          lg:text-2xl
          font-medium
          leading-8
          lg:leading-10
          text-slate-300
        "
      >
        {project.subtitle}
      </motion.p>

      {/* ========================= */}
      {/* Description */}
      {/* ========================= */}

      <motion.p
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.45,
          delay: 0.16,
        }}
        className="
          mt-8
          lg:mt-10
          mx-auto
          max-w-2xl
          text-base
          sm:text-lg
          leading-8
          lg:leading-9
          text-slate-400
          lg:mx-0
        "
      >
        {project.description}
      </motion.p>
            {/* ========================= */}
      {/* Tech Stack */}
      {/* ========================= */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.18,
        }}
      >
        <TechStackPills tech={project.tech} />
      </motion.div>

      {/* ========================= */}
      {/* Action Buttons */}
      {/* ========================= */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.22,
        }}
      >
        <ProjectButtons
          github={project.github}
          demo={project.demo}
          project={project}
          hovered={hovered}
          onCaseStudy={onCaseStudy}
        />
      </motion.div>

      {/* ========================= */}
      {/* Footer */}
      {/* ========================= */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.26,
        }}
      >
        <ProjectFooter
          duration={project.duration}
          hovered={hovered}
        />
      </motion.div>
    </motion.div>
  );
}

export default ProjectContent;