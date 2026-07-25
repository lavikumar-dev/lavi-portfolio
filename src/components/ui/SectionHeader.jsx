import { motion } from "framer-motion";

function SectionHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.1 }}
        className="mt-5 text-5xl font-black text-white md:text-6xl"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400"
      >
        {description}
      </motion.p>
    </div>
  );
}

export default SectionHeader;