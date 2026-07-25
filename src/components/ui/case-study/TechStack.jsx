import { motion } from "framer-motion";
import { Cpu, Code2, Layers3 } from "lucide-react";

export default function TechStack({ tech = [] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          <Cpu size={17} />
          Technology Stack
        </div>

        <h2 className="mt-5 text-4xl font-bold text-white">
          Built with modern technologies.
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
          Every technology used in this project was selected to balance
          performance, maintainability, scalability, and developer experience.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {tech.map((item, index) => (
          <motion.div
            key={item}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
            }}
            className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(6,182,212,.15)]"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 transition-all duration-300 group-hover:bg-cyan-500/20">
              <Code2
                size={26}
                className="text-cyan-400"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              {item}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Integrated as a core part of the application architecture
              to improve reliability, maintainability, and performance.
            </p>

            <div className="mt-6 flex items-center gap-2 text-cyan-300">
              <Layers3 size={17} />
              <span className="text-sm font-medium">
                Production Ready
              </span>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}