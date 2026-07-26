import { motion } from "framer-motion";
import InteractiveCard from "./effects/InteractiveCard";


import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

function ProjectCard({ project, index, onCaseStudy }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7 }}
      className={`grid items-center gap-28 lg:grid-cols-2 ${
        index % 2 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* IMAGE */}

     <TiltCard>

<GlowCard>

<InteractiveCard>

  <motion.div
    whileHover={{
      y: -10,
    }}
    transition={{
      duration: 0.35,
    }}
    className="group relative"
  >
        {/* Glow */}

        <div className="absolute -inset-6 rounded-[40px] bg-cyan-400/10 opacity-0 blur-[90px] transition duration-500 group-hover:opacity-70" />

        {/* Card */}

        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/70 shadow-[0_40px_120px_rgba(6,182,212,.08)] backdrop-blur-xl">

          {/* Featured */}

          {project.featured && (
            <div className="absolute right-6 top-6 z-30 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
              Featured
            </div>
          )}

          {/* Image */}

          <div className="aspect-video overflow-hidden bg-slate-950">
  <img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
  />
</div>
          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />

          {/* Bottom Strip */}

          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl">

            <div className="flex flex-wrap items-center gap-y-3 px-7 py-5">

              {project.metadata.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center"
                >
                  <span
                    className={`text-sm ${
                      i === 0
                        ? "font-semibold text-cyan-300"
                        : "text-slate-300"
                    }`}
                  >
                    {item}
                  </span>

                  {i !== project.metadata.length - 1 && (
                    <span className="mx-4 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                  )}
                </div>
              ))}

            </div>

          </div>

        </div>

      </motion.div>

</GlowCard>

</TiltCard>

      {/* CONTENT */}

      <div className="relative">

        <div className="flex flex-wrap items-center gap-4">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            {project.category}
          </span>

          <span className="h-1 w-1 rounded-full bg-slate-600" />

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              project.status === "Completed"
                ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                : project.status === "In Progress"
                ? "border border-amber-500/20 bg-amber-500/10 text-amber-300"
                : "border border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
            }`}
          >
            {project.status}
          </span>

        </div>

        <h3 className="mt-4 text-6xl font-black leading-tight text-white">
          {project.title}
        </h3>

        <p className="mt-3 max-w-2xl text-2xl font-medium leading-9 text-slate-300">
          {project.subtitle}
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">

          {project.tech.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{
                y: -2,
              }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              {tech}
            </motion.span>
          ))}

        </div>
                <div className="mt-12 flex flex-wrap items-center gap-4">

          <motion.a
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900 hover:text-cyan-300"
          >
            <FaGithub className="text-lg" />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-300"
          >
            <FaExternalLinkAlt className="text-sm" />
            Live Demo
          </motion.a>

          <motion.button
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => onCaseStudy(project)}
            className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
          >
            Case Study

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.button>

        </div>

        <div className="mt-12 flex items-center gap-4">

          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 via-white/10 to-transparent" />

          <span className="text-sm font-medium tracking-wide text-slate-500">
            {project.duration}
          </span>

        </div>

      </div>

    </motion.article>
  );
}

export default ProjectCard;