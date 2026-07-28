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
      "Currently learning Python, Java, Generative AI, and building projects while continuously improving my skills through real-world projects.",
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
          Beyond The Code
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-center text-5xl font-black text-white"
        >
          The Mind Behind The Build
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <p className="text-lg leading-8 text-slate-300">
            I believe great software should do more than solve problems—it
            should leave an impression.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Every project I build begins with a simple question:
            <span className="font-semibold text-white">
              {" "}
              "How can this feel different?"
            </span>{" "}
            Not different because it's overloaded with effects, but because
            every interaction has purpose. I enjoy crafting interfaces that
            feel smooth, responsive, and alive, where thoughtful design meets
            clean engineering.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            As a Computer Science student, I'm constantly exploring web
            development, software engineering, game development, and modern
            technologies that challenge me to think beyond conventional
            solutions. Every project is another opportunity to refine my craft
            and build experiences that people genuinely enjoy using.
          </p>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-10 rounded-2xl border-l-4 border-cyan-400 bg-cyan-500/5 p-6"
          >
            <p className="text-xl font-semibold italic leading-9 text-white">
              "I don't build software just to make it functional.
              <br />
              I build software to make it unforgettable."
            </p>
          </motion.blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            The Journey So Far
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
            Every milestone has shaped the way I approach design, development,
            and problem solving. This journey is only getting started.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 lg:block" />

          <div className="space-y-20">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`relative flex items-center justify-center ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }`}
              >
                <div className="absolute left-1/2 z-20 hidden h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 text-2xl text-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.35)] lg:flex">
                  {item.icon}
                </div>

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