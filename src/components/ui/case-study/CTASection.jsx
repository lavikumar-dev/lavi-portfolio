import { motion } from "framer-motion";
import {
  ArrowRight,
  FolderOpen,
  Mail,
} from "lucide-react";

export default function CTASection({
  onClose,
  contactId = "contact",
}) {
  const handleContact = () => {
    onClose?.();

    setTimeout(() => {
      const section = document.getElementById(contactId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 250);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-violet-500/10 p-10 lg:p-14"
      >
        {/* Background Glow */}

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

        <div className="relative">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              <ArrowRight size={16} />
              What's Next?
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Interested in working together?
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Thanks for taking the time to explore this project. If you enjoyed
              this case study, feel free to browse more projects or reach out if
              you'd like to collaborate on something exciting.
            </p>
          </motion.div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <motion.button
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={onClose}
              className="flex items-center gap-3 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition-all hover:bg-cyan-400"
            >
              <FolderOpen size={20} />
              Explore More Projects
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={handleContact}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition-all hover:bg-white/10"
            >
              <Mail size={20} />
              Contact Me
            </motion.button>

          </div>

          {/* Stats */}

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                100%
              </h3>

              <p className="mt-2 text-slate-400">
                Passion for creating quality software experiences.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                Modern
              </h3>

              <p className="mt-2 text-slate-400">
                Built with scalable tools, clean architecture, and thoughtful
                UI design.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                Always Learning
              </h3>

              <p className="mt-2 text-slate-400">
                Continuously exploring new technologies and improving every
                project with each iteration.
              </p>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}