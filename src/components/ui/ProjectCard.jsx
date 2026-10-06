import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";

import LivingCard from "./LivingCard";
import { playUiSound } from "../../shared/ui/interaction/sound";

function ProjectCard({ project, index = 0, active = false, onCaseStudy }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={false}
      className={`project-carousel-item ${active ? "is-active" : ""}`}
      onMouseLeave={() => setHovered(false)}
    >
      <LivingCard
        className="project-showcase-card"
        onHover={() => {
          setHovered(true);
          playUiSound("hover");
        }}
        onClick={() => onCaseStudy(project)}
      >
        <div className="project-showcase-media">
          <motion.img
            src={project.image}
            alt={`${project.title} project preview`}
            animate={{ scale: hovered ? 1.045 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="project-showcase-image"
          />
          <div className="project-showcase-image-vignette" aria-hidden="true" />

          <div className="project-showcase-topline">
            <span className="project-showcase-category">{project.category}</span>
            {project.featured && <span className="project-showcase-featured">Featured</span>}
          </div>

          <div className="project-showcase-meta">
            <span>{project.status}</span>
            <span className="project-showcase-meta-dot" aria-hidden="true" />
            <span>{project.duration}</span>
          </div>
        </div>

        <div className="project-showcase-body">
          <div className="project-showcase-heading">
            <div>
              <p className="project-showcase-kicker">Case Study {String(index + 1).padStart(2, "0")}</p>
              <h3>{project.title}</h3>
            </div>
            <motion.span
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.25 }}
              className="project-showcase-arrow"
              aria-hidden="true"
            >
              <FaArrowRight />
            </motion.span>
          </div>

          <p className="project-showcase-subtitle">{project.subtitle}</p>
          <p className="project-showcase-description">{project.description}</p>

          <div className="project-showcase-tech" aria-label="Technologies used">
            {project.tech.slice(0, 5).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-showcase-footer">
            <span className="project-showcase-duration">
              <FaClock aria-hidden="true" /> {project.duration}
            </span>
            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={(event) => {
                event.stopPropagation();
                playUiSound("click");
                onCaseStudy(project);
              }}
              className="project-showcase-button"
            >
              Inspect Case Study <FaArrowRight aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </LivingCard>
    </motion.article>
  );
}

export default ProjectCard;
