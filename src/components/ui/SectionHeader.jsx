import { motion, useReducedMotion } from "framer-motion";

/**
 * SectionHeader — shared section heading with mask/line reveal.
 * Heading text uses a clip-path "line reveal" on first view.
 * All motion is disabled under prefers-reduced-motion.
 */
function SectionHeader({ eyebrow, title, description }) {
  const reduced = useReducedMotion();

  const headingReveal = reduced
    ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
    : {};

  return (
    <div className="mx-auto max-w-4xl text-center">
      <motion.p
        initial={{ opacity: 0, y: reduced ? 0 : 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-theme-eyebrow"
      >
        {eyebrow}
      </motion.p>

      {/* Mask reveal: text slides up from behind a clipping box */}
      <div className="relative mt-5 overflow-hidden">
        <motion.h2
          initial={reduced ? { opacity: 1 } : { opacity: 0, clipPath: "inset(0 0% 100% 0)" }}
          whileInView={reduced ? {} : { opacity: 1, clipPath: "inset(0 0% 0% 0)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="section-theme-title"
          {...headingReveal}
        >
          {title}
        </motion.h2>
      </div>

      <motion.p
        initial={{ opacity: 0, y: reduced ? 0 : 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.22, duration: 0.55 }}
        className="section-theme-description mx-auto mt-6 max-w-3xl"
      >
        {description}
      </motion.p>
    </div>
  );
}

export default SectionHeader;
