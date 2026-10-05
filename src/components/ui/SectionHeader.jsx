import { motion } from "framer-motion";

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-theme-eyebrow"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08, duration: 0.55 }}
        className="section-theme-title mt-5"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.16, duration: 0.55 }}
        className="section-theme-description mx-auto mt-6 max-w-3xl"
      >
        {description}
      </motion.p>
    </div>
  );
}

export default SectionHeader;
