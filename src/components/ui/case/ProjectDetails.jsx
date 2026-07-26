import { motion } from "framer-motion";
import {
  CalendarDays,
  FolderKanban,
  Clock3,
  ExternalLink,
  User,
  Code2,
} from "lucide-react";

export default function ProjectDetails({ project }) {
  const details = [
    {
      icon: <FolderKanban size={20} />,
      label: "Category",
      value: project.category || "N/A",
    },
    {
      icon: <Clock3 size={20} />,
      label: "Duration",
      value: project.duration || "N/A",
    },
    {
      icon: <CalendarDays size={20} />,
      label: "Status",
      value: project.status || "Completed",
    },
    {
      icon: <User size={20} />,
      label: "Role",
      value: project.metadata?.role || "Full Stack Developer",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          <FolderKanban size={16} />
          Project Information
        </div>

        <h2 className="mt-5 text-4xl font-bold text-white">
          Project Details
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
          A quick overview of the project's timeline, role, category,
          development status, and resources.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {details.map((detail, index) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all hover:border-cyan-500/30"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                {detail.icon}
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  {detail.label}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  {detail.value}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {(project.github || project.demo) && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.02] p-8"
        >
          <h3 className="text-2xl font-semibold text-white">
            Project Resources
          </h3>

          <p className="mt-3 text-slate-400">
            Explore the source code or experience the project live.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.github && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white transition-all hover:bg-white/10"
              >
                <Code2 size={18} />
                View Source
              </motion.a>
            )}

            {project.demo && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition-all hover:bg-cyan-400"
              >
                <ExternalLink size={18} />
                Live Demo
              </motion.a>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}