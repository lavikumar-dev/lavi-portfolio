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
      "Strengthening problem-solving and programming fundamentals through coursework and personal projects.",
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
      "Building responsive and interactive web applications while exploring modern frontend technologies.",
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
      "Learning game development by creating 2D and 3D projects and understanding gameplay systems.",
    technologies: [
      "Unity",
      "Godot",
      "C#",
    ],
  },

  {
    icon: <FaRobot />,
    title: "AI & Tools",
    description:
      "Exploring AI while using modern development tools to build and manage projects efficiently.",
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
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-semibold uppercase tracking-[0.35em] text-cyan-400"
        >
          Technologies I'm Working With
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-center text-5xl font-black text-white"
        >
          Learning Through Building
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-400"
        >
          I'm continuously learning and applying these technologies through
          coursework, personal projects, hackathons, and hands-on practice.
          Every project helps me grow as a developer.
        </motion.p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {categories.map((category) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">
                {category.icon}
              </div>

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
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  >
                    {tech}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;