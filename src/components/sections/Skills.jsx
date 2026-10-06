import { motion } from "framer-motion";
import { FaCode, FaGamepad, FaGlobe, FaRobot } from "react-icons/fa";

import ThemeSectionWorld from "../ui/ThemeSectionWorld";
import LivingCard from "../ui/LivingCard";
import useTheme from "../../personalization/hooks/useTheme";
import { playUiSound } from "../../shared/ui/interaction/sound";

const categories = [
  {
    icon: FaCode,
    title: "Programming",
    description: "Building strong programming fundamentals through problem-solving, coursework, and real-world projects.",
    technologies: ["C", "C++", "Python (Learning)", "Java (Learning)"],
  },
  {
    icon: FaGlobe,
    title: "Web Development",
    description: "Creating responsive, modern web applications with clean architecture, smooth interactions, and performance in mind.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"],
  },
  {
    icon: FaGamepad,
    title: "Game Development",
    description: "Exploring gameplay programming, mechanics, and interactive experiences using modern game engines.",
    technologies: ["Unity", "Godot", "C#"],
  },
  {
    icon: FaRobot,
    title: "AI & Developer Tools",
    description: "Learning AI while using modern development tools that improve workflow, collaboration, and productivity.",
    technologies: ["Generative AI", "Git", "GitHub", "VS Code"],
  },
];

function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className={`theme-skills theme-skills-${theme} relative overflow-hidden py-28 md:py-36`}>
      <ThemeSectionWorld section="skills" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="skills-section-intro"
        >
          <p className="section-theme-eyebrow">Capabilities & Tools</p>
          <h2 className="section-theme-title mt-5">Building Skills, One Project at a Time</h2>
          <p className="section-theme-description mx-auto mt-6 max-w-3xl">
            Every project is an opportunity to learn something new. I enjoy exploring modern technologies, refining my workflow, and continuously improving technical skill and user experience.
          </p>
        </motion.div>

        <div className="skills-living-grid mt-16 md:mt-20">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <LivingCard
                  className="skills-living-card"
                  onHover={() => playUiSound("hover")}
                >
                  <div className="skills-card-orbit" aria-hidden="true">
                    <span />
                    <span />
                  </div>
                  <div className="skills-card-content">
                    <motion.div
                      whileHover={{ y: -4, rotate: -5, scale: 1.05 }}
                      transition={{ duration: 0.25 }}
                      className="skills-card-icon"
                    >
                      <Icon aria-hidden="true" />
                    </motion.div>

                    <p className="skills-card-index">0{index + 1}</p>
                    <h3>{category.title}</h3>
                    <p className="skills-card-description">{category.description}</p>

                    <div className="skills-card-tech" aria-label={`${category.title} technologies`}>
                      {category.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </LivingCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
