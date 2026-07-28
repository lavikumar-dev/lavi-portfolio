import { motion } from "framer-motion";
import {
  FaCode,
  FaGlobe,
  FaGamepad,
  FaRobot,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaCode />,
    title: "Programming",
    description:
      "Building strong programming fundamentals through problem-solving, coursework, and real-world projects.",
    technologies: [
      "C",
      "C++",
      "Python (Learning)",
      "Java (Learning)",
    ],
  },
  {
    icon: <FaGlobe />,
    title: "Web Development",
    description:
      "Creating responsive, modern web applications with clean architecture, smooth interactions, and performance in mind.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    icon: <FaGamepad />,
    title: "Game Development",
    description:
      "Exploring gameplay programming, mechanics, and interactive experiences using modern game engines.",
    technologies: [
      "Unity",
      "Godot",
      "C#",
    ],
  },
  {
    icon: <FaRobot />,
    title: "AI & Developer Tools",
    description:
      "Learning AI while using modern development tools that improve workflow, collaboration, and productivity.",
    technologies: [
      "Generative AI",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />
    </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400"
        >
          Technologies I Work With
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-center text-5xl font-black text-white"
        >
          Building Skills, One Project at a Time
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-400"
        >
          Every project is an opportunity to learn something new. I enjoy
          exploring modern technologies, refining my development workflow, and
          continuously improving both technical skills and user experience.
        </motion.p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{
                    rotate: -8,
                    scale: 1.08,
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400"
                >
                  {category.icon}
                </motion.div>

                <h3 className="mt-6 text-3xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {category.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {category.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:text-white"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;