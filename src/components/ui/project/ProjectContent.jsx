import { motion } from "framer-motion";
import TechStackPills from "./TechStackPills";
import ProjectButtons from "./ProjectButtons";
import ProjectFooter from "./ProjectFooter";

function ProjectContent({ project, hovered, onCaseStudy, isReversed }) {
  const statusClass =
    project.status === "Completed"
      ? "theme-project-status theme-project-status-success"
      : project.status === "In Progress"
      ? "theme-project-status theme-project-status-progress"
      : "theme-project-status";

  return (
    <motion.div
      initial={{ opacity: 0, x: isReversed ? -35 : 35, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative text-center lg:text-left"
    >
      <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
        <span className="theme-project-category">{project.category}</span>
        <span className="h-1 w-1 rounded-full" style={{ background: "var(--text-muted)" }} />
        <span className={statusClass}>{project.status}</span>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="theme-project-title mt-6 text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
      >
        {project.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="theme-project-subtitle mx-auto mt-5 max-w-2xl text-lg sm:text-xl lg:mx-0 lg:text-2xl"
      >
        {project.subtitle}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.16 }}
        className="theme-project-description mx-auto mt-8 max-w-2xl text-base sm:text-lg lg:mx-0"
      >
        {project.description}
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.18 }}>
        <TechStackPills tech={project.tech} />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.22 }}>
        <ProjectButtons github={project.github} demo={project.demo} project={project} hovered={hovered} onCaseStudy={onCaseStudy} />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.26 }}>
        <ProjectFooter duration={project.duration} hovered={hovered} />
      </motion.div>
    </motion.div>
  );
}

export default ProjectContent;
