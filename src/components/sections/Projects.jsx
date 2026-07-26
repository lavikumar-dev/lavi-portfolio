import { useState } from "react";
import { motion } from "framer-motion";

import { portfolio } from "../../data/portfolio";

import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import CaseStudyModal from "../ui/case/CaseStudyModal";


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openCaseStudy = (project) => {
  setSelectedProject(project);
};

const closeCaseStudy = () => {
  setSelectedProject(null);
};

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden bg-slate-950 py-36"
      >
        {/* Background */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[180px]" />

          <div className="absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full bg-blue-600/10 blur-[200px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(to right,#ffffff 1px,transparent 1px),
                linear-gradient(to bottom,#ffffff 1px,transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-6">

          <SectionHeader
            eyebrow="Featured Projects"
            title="Learning By Building"
            description="Every project represents another milestone in my journey as a developer. Each one challenged me to learn new technologies, solve real problems, and become a better engineer."
          />

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: .6,
            }}
            className="mt-24"
          >

            <div className="space-y-44">

              {portfolio.projects.map((project, index) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onCaseStudy={openCaseStudy}
                />

              ))}

            </div>

          </motion.div>

        </div>

      </section>
           {selectedProject && (
  <CaseStudyModal
    project={selectedProject}
    onClose={closeCaseStudy}
  />
)}
    </>
  );
}

export default Projects;