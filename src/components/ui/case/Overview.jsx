import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function Overview({ project }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      {/* Section Header */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          <Target size={16} />
          Project Overview
        </span>

        <h2 className="mt-5 text-4xl font-bold text-white">
          From idea to execution.
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
          Every successful project begins with a clear understanding of the
          problem. This section outlines the motivation, approach, and outcome
          behind the project.
        </p>
      </motion.div>

      {/* Main Layout */}

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        {/* Overview */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
            <Lightbulb className="text-cyan-400" size={26} />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-white">
            Overview
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            {project.overview}
          </p>
        </motion.div>

        {/* Goal */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
            <Target className="text-emerald-400" size={26} />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-white">
            Goal
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            The objective was to create a solution that not only delivers the
            required functionality but also emphasizes usability, performance,
            scalability, and an engaging user experience.
          </p>
        </motion.div>

        {/* Outcome */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
            <Rocket className="text-violet-400" size={26} />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-white">
            Outcome
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            The final product demonstrates a complete development workflow,
            combining thoughtful design, clean implementation, and modern
            technologies into a polished experience suitable for real-world
            deployment and future expansion.
          </p>
        </motion.div>

      </div>

      {/* Bottom Highlight */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-cyan-500/10 p-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h3 className="text-2xl font-semibold text-white">
              Turning concepts into impactful digital experiences.
            </h3>

            <p className="mt-3 max-w-3xl leading-8 text-slate-300">
              Every feature was designed with a balance of functionality,
              maintainability, and user experience, resulting in a project that
              showcases both technical capability and thoughtful product design.
            </p>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-xl">
            <ArrowRight size={26} />
          </div>

        </div>
      </motion.div>

    </section>
  );
}