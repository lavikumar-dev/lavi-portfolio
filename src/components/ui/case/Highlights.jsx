import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Trophy,
} from "lucide-react";

export default function Highlights({ highlights = [] }) {
  if (!highlights.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .45 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-amber-300">
          <Trophy size={16} />
          Key Highlights
        </div>

        <h2 className="mt-5 text-4xl font-bold text-white">
          What makes this project stand out.
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
          Every project has defining features that make it unique. These
          highlights showcase the most impactful technical and design
          achievements delivered during development.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {highlights.map((item, index) => (

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
              y: -8,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_25px_60px_rgba(6,182,212,.15)]"
          >

            {/* Glow */}

            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Sparkles size={24} />
              </div>

              <h3 className="mt-6 flex items-center gap-3 text-xl font-semibold text-white">

                <CheckCircle2
                  size={20}
                  className="text-emerald-400"
                />

                Highlight {index + 1}

              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {item}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Bottom Banner */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: .25,
        }}
        className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-500/10 p-8"
      >

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h3 className="text-2xl font-bold text-white">
              Designed for performance, built for scalability.
            </h3>

            <p className="mt-3 max-w-3xl leading-8 text-slate-300">
              Every highlight reflects practical engineering decisions that
              improve usability, maintainability, responsiveness, and overall
              user experience.
            </p>

          </div>

          <div className="rounded-full bg-cyan-500/15 p-5">
            <Trophy
              size={34}
              className="text-cyan-400"
            />
          </div>

        </div>

      </motion.div>

    </section>
  );
}