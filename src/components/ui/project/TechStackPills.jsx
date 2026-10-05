import { motion } from "framer-motion";

function TechStackPills({ tech = [] }) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {tech.map((item) => (
        <motion.span
          key={item}
          whileHover={{ y: -4, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="theme-project-tech"
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}

export default TechStackPills;
