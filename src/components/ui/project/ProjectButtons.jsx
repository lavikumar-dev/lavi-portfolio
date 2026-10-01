import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

/** Returns true when a URL is a real external link (not "#", null, undefined or empty string). */
function isRealUrl(href) {
  return Boolean(href && href !== "#");
}

function ProjectButtons({ github, demo, project, onCaseStudy }) {
  const hasGithub = isRealUrl(github);
  const hasDemo = isRealUrl(demo);

  return (
    <div className="mt-12 flex flex-wrap items-center gap-4">
      {hasGithub && (
        <motion.a
          href={github}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="theme-project-button theme-project-button-ghost"
        >
          <FaGithub className="relative z-10" />
          <span className="relative z-10">GitHub</span>
        </motion.a>
      )}

      {hasDemo && (
        <motion.a
          href={demo}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="theme-project-button theme-project-button-primary"
        >
          <span className="relative z-10 flex items-center gap-3"><FaExternalLinkAlt /> Live Demo</span>
        </motion.a>
      )}

      <motion.button
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onCaseStudy(project)}
        className="theme-project-button theme-project-button-ghost"
      >
        <span className="relative z-10 flex items-center gap-3">Case Study <FaArrowRight /></span>
      </motion.button>
    </div>
  );
}

export default ProjectButtons;
