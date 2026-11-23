import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { portfolio } from "../../data/portfolio";
import ProjectCard from "../ui/ProjectCard";
import CaseStudyModal from "../ui/case/CaseStudyModal";
import ThemeSectionWorld from "../ui/ThemeSectionWorld";
import useTheme from "../../personalization/hooks/useTheme";
import { playUiSound } from "../../shared/ui/interaction/sound";
import "../../styles/PortfolioPerformance.css";

const SERVICE_LABELS = {
  web: "Web Development",
  software: "Software Development",
  game: "Game Development",
  ai: "AI & Innovation",
};

function Projects() {
  const { design } = useTheme();
  const carouselRef = useRef(null);
  const motionFrame = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [focusService, setFocusService] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const projectCopy = design?.copy?.projects ?? {
    title: "Selected Projects",
    description:
      "A collection of work built through curiosity, iteration and careful execution.",
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

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return undefined;

    const syncScrollState = () => {
      const maxScroll = Math.max(0, element.scrollWidth - element.clientWidth);
      const nextCanScrollLeft = element.scrollLeft > 2;
      const nextCanScrollRight = element.scrollLeft < maxScroll - 2;

      setCanScrollLeft((current) =>
        current === nextCanScrollLeft ? current : nextCanScrollLeft
      );
      setCanScrollRight((current) =>
        current === nextCanScrollRight ? current : nextCanScrollRight
      );

      const viewport = element.getBoundingClientRect();
      const viewportCenter = viewport.left + element.clientLeft + element.clientWidth / 2;
      const items = element.querySelectorAll(".project-carousel-item");
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const distance = rect.left + rect.width / 2 - viewportCenter;
        const normalized = Math.min(
          Math.abs(distance) / Math.max(element.clientWidth, 1),
          1
        );
        const direction = distance === 0 ? 0 : distance > 0 ? 1 : -1;

        if (Math.abs(distance) < closestDistance) {
          closestDistance = Math.abs(distance);
          closestIndex = index;
        }

        item.style.setProperty("--project-distance", normalized.toFixed(4));
        item.style.setProperty("--project-scale", (1 - normalized * 0.075).toFixed(4));
        item.style.setProperty("--project-opacity", (1 - normalized * 0.56).toFixed(4));
        item.style.setProperty("--project-y", `${(normalized * 14).toFixed(2)}px`);
        item.style.setProperty(
          "--project-rotate",
          `${(-direction * normalized * 2.4).toFixed(2)}deg`
        );
        item.style.setProperty("--project-blur", `${(normalized * 2.4).toFixed(2)}px`);
        item.style.setProperty("--project-z", String(100 - Math.round(normalized * 20)));
      });

      setActiveIndex((current) =>
        current === closestIndex ? current : closestIndex
      );
    };

    const scheduleSync = () => {
      if (motionFrame.current !== null) return;

      motionFrame.current = window.requestAnimationFrame(() => {
        motionFrame.current = null;
        syncScrollState();
      });
    };

    element.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync, { passive: true });

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(scheduleSync)
        : null;

    resizeObserver?.observe(element);
    scheduleSync();

    return () => {
      element.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      resizeObserver?.disconnect();

      if (motionFrame.current !== null) {
        window.cancelAnimationFrame(motionFrame.current);
        motionFrame.current = null;
      }
    };
  }, []);

  const moveCarousel = (direction) => {
    const element = carouselRef.current;
    if (!element) return;

    const maxScroll = Math.max(0, element.scrollWidth - element.clientWidth);
    const targetScroll = Math.min(
      maxScroll,
      Math.max(0, element.scrollLeft + direction * element.clientWidth)
    );

    if (Math.abs(targetScroll - element.scrollLeft) < 2) return;

    element.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    playUiSound("click");
  };

  const handleCarouselKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveCarousel(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveCarousel(-1);
    }
  };

  const focusLabel = SERVICE_LABELS[focusService] ?? null;

  const openCaseStudy = (project) => {
    playUiSound("click");
    setSelectedProject(project);
  };

  return (
    <>
      <section
        id="projects"
        className="projects-world relative overflow-hidden py-32 text-primary md:py-40"
        data-focus-service={focusService ?? undefined}
      >
        <ThemeSectionWorld section="projects" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="section-theme-eyebrow">Selected Work</p>
            <h2 className="section-theme-title">{projectCopy.title}</h2>
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
              style={{
                borderColor: "var(--border-strong)",
                background: "var(--accent-soft)",
                color: "var(--accent)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 10px var(--glow)",
                }}
              />
              Exploring {focusLabel}
            </motion.div>
          )}

          <div className="projects-carousel-wrap mt-20 md:mt-24">
            <button
              type="button"
              className="projects-carousel-control projects-carousel-control-left"
              onClick={() => moveCarousel(-1)}
              disabled={!canScrollLeft}
              aria-label="Show previous project"
              aria-controls="projects-carousel"
              title="Previous project"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>

            <div
              id="projects-carousel"
              ref={carouselRef}
              className="projects-carousel"
              tabIndex={0}
              onKeyDown={handleCarouselKeyDown}
              aria-label="Project showcase"
              aria-roledescription="carousel"
            >
              {portfolio.projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  active={index === activeIndex}
                  onCaseStudy={openCaseStudy}
                />
              ))}
            </div>

            <button
              type="button"
              className="projects-carousel-control projects-carousel-control-right"
              onClick={() => moveCarousel(1)}
              disabled={!canScrollRight}
              aria-label="Show next project"
              aria-controls="projects-carousel"
              title="Next project"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>

          <div className="projects-carousel-hint" aria-live="polite">
            <span>Drag or use the arrows</span>
            <span className="projects-carousel-hint-line" aria-hidden="true" />
            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(portfolio.projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default Projects;
