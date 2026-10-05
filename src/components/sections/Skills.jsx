import { motion } from "framer-motion";
import { FaCode, FaGlobe, FaGamepad, FaRobot } from "react-icons/fa";
import ThemeSectionWorld from "../ui/ThemeSectionWorld";
import useTheme from "../../personalization/hooks/useTheme";

const categories = [
  { icon: <FaCode />, title: "Programming", description: "Building strong programming fundamentals through problem-solving, coursework, and real-world projects.", technologies: ["C", "C++", "Python (Learning)", "Java (Learning)"] },
  { icon: <FaGlobe />, title: "Web Development", description: "Creating responsive, modern web applications with clean architecture, smooth interactions, and performance in mind.", technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"] },
  { icon: <FaGamepad />, title: "Game Development", description: "Exploring gameplay programming, mechanics, and interactive experiences using modern game engines.", technologies: ["Unity", "Godot", "C#"] },
  { icon: <FaRobot />, title: "AI & Developer Tools", description: "Learning AI while using modern development tools that improve workflow, collaboration, and productivity.", technologies: ["Generative AI", "Git", "GitHub", "VS Code"] },
];

function Skills() {
  const { theme } = useTheme();
  return (
    <section id="skills" className={`theme-skills theme-skills-${theme} relative overflow-hidden py-28 md:py-36`}>
      <ThemeSectionWorld section="skills" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <p className="section-theme-eyebrow">Capabilities & Tools</p>
          <h2 className="section-theme-title mt-5">Building Skills, One Project at a Time</h2>
          <p className="section-theme-description mx-auto mt-6 max-w-3xl">Every project is an opportunity to learn something new. I enjoy exploring modern technologies, refining my workflow, and continuously improving technical skill and user experience.</p>
        </motion.div>

        <div className="mt-20 grid gap-7 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -8, rotateX: 1.5, rotateY: index % 2 ? -1 : 1 }}
              className="theme-skill-card"
            >
              <div className="theme-skill-card-glow" />
              <div className="relative z-10">
                <motion.div whileHover={{ rotate: -8, scale: 1.08 }} className="theme-skill-icon">{category.icon}</motion.div>
                <h3 className="theme-skill-title">{category.title}</h3>
                <p className="theme-skill-description">{category.description}</p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {category.technologies.map((tech) => <span key={tech} className="theme-skill-pill">{tech}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
