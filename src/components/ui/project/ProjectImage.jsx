import { motion } from "framer-motion";
import FeaturedBadge from "./FeaturedBadge";

function ProjectImage({ project, tilt, isReversed }) {
  const {
    cardRef,
    hovered,
    rotateX,
    rotateY,
    imageX,
    imageY,
    glowX,
    glowY,
    reflectionX,
    handleMove,
    handleEnter,
    handleLeave,
  } = tilt;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isReversed ? 35 : -35,
        scale: 0.97,
        filter: "blur(4px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1800,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="group relative"
    >
      {/* Ambient Glow */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
        }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.7,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/20
          blur-[90px]
          sm:h-[340px]
          sm:w-[340px]
          lg:h-[420px]
          lg:w-[420px]
          lg:blur-[120px]
        "
      />

      {/* Ambient Background */}
      <div
        className="
          absolute
          -inset-4
          sm:-inset-6
          lg:-inset-8
          rounded-[42px]
          bg-gradient-to-br
          from-cyan-400/5
          via-transparent
          to-blue-500/5
          blur-3xl
        "
      />

      {/* Glass Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          sm:rounded-[32px]
          lg:rounded-[36px]
          border
          border-white/10
          bg-slate-900/70
          shadow-[0_30px_80px_rgba(0,0,0,.45)]
          lg:shadow-[0_40px_120px_rgba(0,0,0,.55)]
          backdrop-blur-2xl
        "
      >
        {/* Border */}
        <motion.div
          animate={{
            opacity: hovered ? 1 : 0.4,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[28px]
            sm:rounded-[32px]
            lg:rounded-[36px]
            border
            border-cyan-400/30
          "
        />

        {/* Reflection */}
        <motion.div
          style={{
            x: reflectionX,
          }}
          className="
            pointer-events-none
            absolute
            inset-y-0
            w-40
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
            blur-xl
          "
        />

        <FeaturedBadge show={project.featured} />

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              x: imageX,
              y: imageY,
              scale: hovered ? 1.05 : 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-500
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        {/* Metadata */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            border-t
            border-white/10
            bg-slate-950/75
            backdrop-blur-3xl
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              px-4
              py-4
              sm:px-6
              sm:py-5
              lg:px-7
            "
          >
            {project.metadata.map((item, index) => (
              <div
                key={item}
                className="flex items-center"
              >
                <span
                  className={`text-xs sm:text-sm ${
                    index === 0
                      ? "font-semibold text-cyan-300"
                      : "text-slate-300"
                  }`}
                >
                  {item}
                </span>

                {index !== project.metadata.length - 1 && (
                  <span className="mx-2 sm:mx-4 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectImage;