import { motion } from "framer-motion";

function ProjectFooter({ duration, hovered }) {
  return (
    <div className="mt-14 flex items-center gap-4">
      <motion.div animate={{ opacity: hovered ? 1 : 0.45 }} className="theme-project-footer-line" />
      <span className="theme-project-footer-label">{duration}</span>
    </div>
  );
}

export default ProjectFooter;
