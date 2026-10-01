import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { portfolio } from "../../data/portfolio";
import ProjectCard from "../ui/ProjectCard";
import CaseStudyModal from "../ui/case/CaseStudyModal";
import ThemeSectionWorld from "../ui/ThemeSectionWorld";
import useTheme from "../../personalization/hooks/useTheme";
import { playUiSound } from "../../shared/ui/interaction/sound";

const SERVICE_LABELS = {
  web: "Web Development",
  software: "Software Development",
  game: "Game Development",
  ai: "AI & Innovation",
};

function Projects() {
  const { design } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [focusService, setFocusService] = useState(null);
  const projectCopy = design?.copy?.projects ?? {
    title: "Selected Projects",
    description: "A collection of work built through curiosity, iteration and careful execution.",
    cta: "Explore the work.",
  };

  useEffect(() => {
    const handleFocus = (event) => {
      const next = event.detail?.serviceKey;
      if (!next) return;
      setFocusService(next);
      window.setTimeout(() => setFocusService(null), 1800);
    };

    window.addEventListener("portfolio:focus-projects", handleFocus);
    return () => window.removeEventListener("portfolio:focus-projects", handleFocus);
  }, []);

  const focusLabel = useMemo(() => SERVICE_LABELS[focusService] ?? null, [focusService]);

  const openCaseStudy = (project) => {
    playUiSound("click");
    setSelectedProject(project);
  };

  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="projects-world relative overflow-hidden py-32 text-primary md:py-40"
        data-focus-service={focusService ?? undefined}
      >
        <ThemeSectionWorld section="projects" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="section-theme-eyebrow">Selected Work</p>
            <h2 id="projects-heading" className="section-theme-title">{projectCopy.title}</h2>
            <p className="section-theme-description">{projectCopy.description}</p>
            <div className="section-theme-cta" aria-hidden="true">
              <span className="section-theme-cta-mark">✦</span>
              {projectCopy.cta}
            </div>
          </motion.div>

          {focusLabel && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-[0_0_30px_var(--glow)]"
              style={{ borderColor: "var(--border-strong)", background: "var(--accent-soft)", color: "var(--accent)" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)", boxShadow: "0 0 10px var(--glow)" }} />
              Exploring {focusLabel}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-24"
          >
            <div className="space-y-36 md:space-y-44">
              {portfolio.projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onCaseStudy={openCaseStudy}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {selectedProject && (
        <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}

export default Projects;
