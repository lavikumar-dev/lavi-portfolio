import { motion } from "framer-motion";

import ProjectImage from "./project/ProjectImage";
import ProjectContent from "./project/ProjectContent";

import useProjectTilt from "../../hooks/useProjectTilt";

function ProjectCard({
  project,
  index,
  onCaseStudy,
}) {
  const tilt = useProjectTilt();

  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        grid
        items-center
        gap-20
        lg:grid-cols-[1.15fr_0.85fr]
        ${
          isReversed
            ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : ""
        }
      `}
    >
      <ProjectImage
        project={project}
        tilt={tilt}
        isReversed={isReversed}
      />

      <ProjectContent
        project={project}
        hovered={tilt.hovered}
        onCaseStudy={onCaseStudy}
        isReversed={isReversed}
      />
    </motion.article>
  );
}

export default ProjectCard;