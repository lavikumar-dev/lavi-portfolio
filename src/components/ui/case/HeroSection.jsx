import { motion } from "framer-motion";
import {
  Calendar,
  FolderKanban,
  Clock3,
  Sparkles,
} from "lucide-react";

export default function HeroSection({ project }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
    </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid gap-14 lg:grid-cols-2 lg:items-center"
        >

          {/* LEFT CONTENT */}

          <div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .15 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
            >
              <Sparkles size={15} />
              Featured Project
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl"
            >
              {project.title}
            </motion.h1>

            {project.subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .3 }}
                className="mt-5 text-xl font-medium text-cyan-300"
              >
                {project.subtitle}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
              className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .55 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {project.tech?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

          </div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: .95,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: .6,
            }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl" />

            <motion.img
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: .35,
              }}
              src={project.image}
              alt={project.title}
              className="relative h-full w-full rounded-3xl border border-white/10 object-cover shadow-[0_30px_80px_rgba(0,0,0,.45)]"
            />

            {/* Floating Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .75,
              }}
              className="absolute -bottom-7 left-8 rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl"
            >

              <div className="grid gap-4 sm:grid-cols-3">

                <div className="flex items-center gap-3">
                  <FolderKanban
                    size={18}
                    className="text-cyan-400"
                  />
                  <div>
                    <p className="text-xs text-slate-400">
                      Category
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock3
                    size={18}
                    className="text-cyan-400"
                  />
                  <div>
                    <p className="text-xs text-slate-400">
                      Duration
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {project.duration}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar
                    size={18}
                    className="text-cyan-400"
                  />
                  <div>
                    <p className="text-xs text-slate-400">
                      Status
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {project.status}
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}