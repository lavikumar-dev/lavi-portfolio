import { motion } from "framer-motion";
import FeaturedBadge from "./FeaturedBadge";

function ProjectImage({
  project,
  tilt,
  isReversed,
}) {
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
    x: isReversed ? 60 : -60,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.35,
  }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
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
  }}
  className="group relative"
>
      {/* ========================= */}
      {/* Ambient Glow */}
      {/* ========================= */}

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
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/20
          blur-[120px]
        "
      />

      {/* ========================= */}
      {/* Ambient Background */}
      {/* ========================= */}

      <div
        className="
          absolute
          -inset-8
          rounded-[42px]
          bg-gradient-to-br
          from-cyan-400/5
          via-transparent
          to-blue-500/5
          blur-3xl
        "
      />

      {/* ========================= */}
      {/* Main Glass Card */}
      {/* ========================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-slate-900/70
          shadow-[0_40px_120px_rgba(0,0,0,.55)]
          backdrop-blur-2xl
        "
      >
        {/* Animated Border */}

        <motion.div
          animate={{
            opacity: hovered ? 1 : 0.4,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[36px]
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

        {/* Featured Badge */}

        <FeaturedBadge show={project.featured} />

        {/* ========================= */}
        {/* Image Section */}
        {/* ========================= */}

        <div className="relative aspect-video overflow-hidden bg-slate-950">
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
            className="h-full w-full object-contain"
          />

          {/* Image Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

          {/* Noise Texture */}

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        {/* ========================= */}
        {/* Bottom Metadata */}
        {/* ========================= */}

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
          <div className="flex flex-wrap items-center gap-y-3 px-7 py-5">
            {project.metadata.map((item, index) => (
              <div
                key={item}
                className="flex items-center"
              >
                <span
                  className={`text-sm ${
                    index === 0
                      ? "font-semibold text-cyan-300"
                      : "text-slate-300"
                  }`}
                >
                  {item}
                </span>

                {index !== project.metadata.length - 1 && (
                  <span className="mx-4 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
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