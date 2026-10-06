import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = (project.gallery ?? []).filter(Boolean).slice(0, 2);
  const displayImages = images.length === 1 ? [images[0], images[0]] : images;

  return (
    <AnimatePresence>
      <motion.div
        className="case-study-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="case-study-window"
          initial={{ opacity: 0, y: 26, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="case-study-window-topline">
            <div>
              <span className="case-study-window-kicker">Case Study</span>
              <h2>{project.title}</h2>
            </div>
            <button type="button" onClick={onClose} aria-label="Close case study" className="case-study-close">
              <FaTimes aria-hidden="true" />
            </button>
          </div>

          <div className="case-study-copy">
            <div className="case-study-copy-main">
              <p className="case-study-copy-label">In simple terms</p>
              <p>{project.caseStudyText ?? project.overview ?? project.description}</p>
            </div>
            <div className="case-study-copy-side">
              <p className="case-study-copy-label">What I learned</p>
              <p>{project.caseStudyLearning ?? project.learned?.slice(0, 4).join(", ")}</p>
            </div>
          </div>

          <div className="case-study-images">
            {displayImages.map((image, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                className={`case-study-image-card case-study-image-card-${index + 1}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.08 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.img
                  src={image}
                  alt={`${project.title} preview ${index + 1}`}
                  whileHover={index === 0 ? { scale: 1.025 } : undefined}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className={index === 1 ? "case-study-image-detail" : undefined}
                />
                <span>0{index + 1}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
