import { motion } from "framer-motion";
import {
  FaCode,
  FaGamepad,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";

const timeline = [
  {
    year: "2025",
    title: "Started Computer Science",
    description:
      "Began my B.E. in Computer Science at Chandigarh University and built a strong foundation in programming, algorithms, and software engineering.",
    icon: <FaCode />,
  },
  {
    year: "2025",
    title: "Built My First Game",
    description:
      "Started exploring Unity and Godot by creating interactive 2D and 3D games, learning gameplay programming and game mechanics.",
    icon: <FaGamepad />,
  },
  {
    year: "2026",
    title: "Web Development Journey",
    description:
      "Moved into modern web technologies, creating responsive websites with React, Tailwind CSS, and interactive UI design.",
    icon: <FaGlobe />,
  },
  {
    year: "Present",
    title: "AI & Software Development",
    description:
      "Currently learning Python, Java, Generative AI, and building projects while actively looking for internship opportunities.",
    icon: <FaRobot />,
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-semibold uppercase tracking-[0.35em] text-cyan-400"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .1 }}
          className="mt-5 text-center text-5xl font-black text-white"
        >
          My Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-400"
        >
          Every project has been another step toward becoming a software
          engineer capable of building impactful products, immersive games,
          and AI-powered solutions.
        </motion.p>

        <div className="relative mt-24">

          {/* Center Line */}
          <div className="absolute left-1/2 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 lg:block" />
                    <div className="space-y-20">

            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                } justify-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 z-20 hidden h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 text-2xl text-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.35)] lg:flex">
                  {item.icon}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:w-[44%] ${
                    index % 2 === 0
                      ? "lg:mr-auto"
                      : "lg:ml-auto"
                  }`}
                >
                  <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                    {item.year}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}

          </div>
                  </div>
      </div>
    </section>
  );
}

export default About;