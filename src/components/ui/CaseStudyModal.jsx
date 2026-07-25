import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur-xl"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[32px] border border-white/10 bg-slate-900 shadow-2xl"
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <FaTimes />
            </button>

            {/* Hero */}

            <div className="relative">

              <img
                src={project.image}
                alt={project.title}
                className="h-[420px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-10">

                <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
                  {project.category}
                </p>

                <h2 className="mt-4 text-5xl font-black text-white">
                  {project.title}
                </h2>

                <p className="mt-4 max-w-3xl text-xl text-slate-300">
                  {project.subtitle}
                </p>

              </div>

            </div>

            <div className="space-y-14 p-10">
                              {/* Overview */}

              <section>

                <h3 className="mb-5 text-3xl font-bold text-white">
                  Overview
                </h3>

                <p className="max-w-4xl text-lg leading-8 text-slate-400">
                  {project.overview}
                </p>

              </section>

              {/* Highlights */}

              <section>

                <h3 className="mb-6 text-3xl font-bold text-white">
                  Highlights
                </h3>

                <div className="grid gap-4 md:grid-cols-2">

                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-cyan-500/10 bg-slate-950/60 p-5"
                    >
                      <span className="text-cyan-300">●</span>

                      <span className="ml-3 text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </section>

              {/* Challenges */}

              <section>

                <h3 className="mb-6 text-3xl font-bold text-white">
                  Challenges
                </h3>

                <div className="grid gap-4 md:grid-cols-2">

                  {project.challenges.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
                    >
                      <span className="text-cyan-300">●</span>

                      <span className="ml-3 text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </section>

              {/* What I Learned */}

              <section>

                <h3 className="mb-6 text-3xl font-bold text-white">
                  What I Learned
                </h3>

                <div className="grid gap-4 md:grid-cols-2">

                  {project.learned.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-emerald-500/10 bg-slate-950/60 p-5"
                    >
                      <span className="text-emerald-300">●</span>

                      <span className="ml-3 text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </section>

              {/* Gallery */}

              <section>

                <h3 className="mb-6 text-3xl font-bold text-white">
                  Gallery
                </h3>

                <div className="grid gap-6 md:grid-cols-3">

                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl border border-white/10"
                    >
                      <img
                        src={image}
                        alt={`${project.title}-${index}`}
                        className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  ))}

                </div>

              </section>
                            {/* Actions */}

              <section className="flex flex-wrap gap-4 border-t border-white/10 pt-10">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </section>

            </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CaseStudyModal;
        