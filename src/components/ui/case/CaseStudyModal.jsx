import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ModalHeader from "./ModalHeader";
import HeroSection from "./HeroSection";
import TechStack from "./TechStack";
import Overview from "./Overview";
import Highlights from "./Highlights";
import Challenges from "./Challenges";
import Gallery from "./Gallery";
import ProjectDetails from "./ProjectDetails";
import CTASection from "./CTASection";
import Footer from "./Footer";
import ImageLightbox from "./ImageLightbox";

export default function CaseStudyModal({
  project,
  onClose,
}) {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (selectedImage !== null) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, selectedImage, onClose]);

  const scrollToTop = () => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!project) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/80
            backdrop-blur-xl
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={containerRef}
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-2
              sm:inset-4
              lg:inset-8
              overflow-y-auto
              rounded-2xl
              sm:rounded-3xl
              border
              border-white/10
              bg-slate-950
              shadow-[0_40px_120px_rgba(0,0,0,.55)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader
              project={project}
              onClose={onClose}
            />

            <HeroSection
              project={project}
            />

            <TechStack
              tech={project.tech}
            />

            <Overview
              project={project}
            />

            <Highlights
              highlights={project.highlights}
            />

            <Challenges
              challenges={project.challenges}
              learned={project.learned}
            />

            <Gallery
              images={project.gallery}
              onImageClick={setSelectedImage}
            />

            <ProjectDetails
              project={project}
            />

            <CTASection
              onClose={onClose}
            />

            <Footer
              title={project.title}
              onScrollTop={scrollToTop}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <ImageLightbox
        images={project.gallery}
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}