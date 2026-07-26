import { motion } from "framer-motion";
import {
  AlertTriangle,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function Challenges({
  challenges = [],
  learned = [],
}) {
  if (!challenges.length && !learned.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-orange-300">
          <AlertTriangle size={16} />
          Development Journey
        </div>

        <h2 className="mt-5 text-4xl font-bold text-white">
          Challenges & Learnings
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
          Every project presents obstacles that shape the final product.
          Overcoming these challenges not only improved the application but
          also strengthened technical and problem-solving skills.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        {/* Challenges */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-red-500/15 bg-gradient-to-br from-red-500/5 to-transparent p-8 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
              <AlertTriangle
                size={26}
                className="text-red-400"
              />
            </div>

            <h3 className="text-2xl font-semibold text-white">
              Challenges
            </h3>
          </div>

          <div className="mt-8 space-y-5">

            {challenges.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5"
              >
                <div className="mt-1 h-3 w-3 rounded-full bg-red-400" />

                <p className="leading-7 text-slate-300">
                  {item}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* Learnings */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-emerald-500/5 to-transparent p-8 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
              <GraduationCap
                size={26}
                className="text-emerald-400"
              />
            </div>

            <h3 className="text-2xl font-semibold text-white">
              Key Learnings
            </h3>
          </div>

          <div className="mt-8 space-y-5">

            {learned.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5"
              >
                <ArrowRight
                  size={18}
                  className="mt-1 shrink-0 text-emerald-400"
                />

                <p className="leading-7 text-slate-300">
                  {item}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>

      {/* Bottom Quote */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="mt-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-500/10 p-10"
      >
        <blockquote className="text-center">
          <p className="text-2xl font-semibold leading-10 text-white">
            "The biggest lessons don't come from writing perfect code—they
            come from debugging imperfect code."
          </p>

          <p className="mt-5 text-slate-400">
            Every challenge solved becomes experience for the next project.
          </p>
        </blockquote>
      </motion.div>

    </section>
  );
}