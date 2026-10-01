import { motion } from "framer-motion";
import { FaCode, FaGlobe, FaGamepad, FaRobot } from "react-icons/fa";
import ThemeSectionWorld from "../ui/ThemeSectionWorld";
import useTheme from "../../personalization/hooks/useTheme";
import { portfolio } from "../../data/portfolio";

const ICON_MAP = {
  code: <FaCode />,
  globe: <FaGlobe />,
  gamepad: <FaGamepad />,
  robot: <FaRobot />,
};

function Skills() {
  const { theme } = useTheme();
  return (
    <section id="skills" aria-labelledby="skills-heading" className={`theme-skills theme-skills-${theme} relative overflow-hidden py-28 md:py-36`}>
      <ThemeSectionWorld section="skills" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <p className="section-theme-eyebrow">Capabilities & Tools</p>
          <h2 id="skills-heading" className="section-theme-title mt-5">C, React, Unity, Godot — and Growing</h2>
          <p className="section-theme-description mx-auto mt-6 max-w-3xl">Every project at Chandigarh University and beyond teaches me something new. These are the technologies I use regularly and the areas I am actively developing.</p>
        </motion.div>

        <div className="mt-20 grid gap-7 md:grid-cols-2">
          {portfolio.skills.map((category, index) => (
            <motion.article
              key={category.key}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -8, rotateX: 1.5, rotateY: index % 2 ? -1 : 1 }}
              className="theme-skill-card"
            >
              <div className="theme-skill-card-glow" />
              <div className="relative z-10">
                <motion.div whileHover={{ rotate: -8, scale: 1.08 }} className="theme-skill-icon">
                  {ICON_MAP[category.iconKey] ?? <FaCode />}
                </motion.div>
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

