import { motion } from "framer-motion";
import FeaturedBadge from "./FeaturedBadge";

function ProjectImage({ project, tilt, isReversed }) {
  const {
    cardRef,
    hovered,
    rotateX,
    rotateY,
    imageX,
    imageY,
    glowX,
    glowY,
    reflectionX,
    handleMove,
    handleEnter,
    handleLeave,
  } = tilt;

  return (
    <motion.div
      initial={{ opacity: 0, x: isReversed ? 35 : -35, scale: 0.97, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1800, transformStyle: "preserve-3d", willChange: "transform" }}
      className="group relative theme-project-visual"
    >
      <motion.div
        style={{ left: glowX, top: glowY }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
        transition={{ duration: 0.35 }}
        className="theme-project-hover-glow"
      />

      <div className="theme-project-image-aura" />

      <div className="theme-project-image-shell">
        <motion.div animate={{ opacity: hovered ? 1 : 0.55 }} className="theme-project-image-border" />
        <motion.div style={{ x: reflectionX }} className="theme-project-image-reflection" />

        <FeaturedBadge show={project.featured} />

        <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--bg-primary)]">
          <motion.img
            src={project.image}
            alt={project.title}
            style={{ x: imageX, y: imageY, scale: hovered ? 1.055 : 1 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full object-cover object-center transition-transform duration-500"
          />
          <div className="theme-project-image-vignette" />
          <div className="theme-project-image-grain" />
        </div>

        <div className="theme-project-metadata">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 px-5 py-4 sm:px-6 sm:py-5">
            {project.metadata.map((item, index) => (
              <div key={item} className="flex items-center">
                <span className={index === 0 ? "theme-project-meta-primary" : "theme-project-meta-secondary"}>{item}</span>
                {index !== project.metadata.length - 1 && <span className="mx-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectImage;
