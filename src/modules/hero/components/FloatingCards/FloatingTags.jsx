import { motion } from "framer-motion";

const tags = [
  {
    category: "FRONTEND",
    value: "React",
    x: -135,
    y: -115,
    duration: 8,
  },
  {
    category: "GAME DEV",
    value: "Unity",
    x: 145,
    y: -20,
    duration: 10,
  },
  {
    category: "AI",
    value: "Generative AI",
    x: -125,
    y: 135,
    duration: 9,
  },
];

export default function HeroFloatingTags() {
  return (
    <>
      {tags.map((tag) => (
        <motion.div
          key={tag.value}
          className="absolute z-30 hidden lg:block"
          initial={{
            opacity: 0,
            x: tag.x,
            y: tag.y,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: tag.x,
            y: [tag.y, tag.y - 6, tag.y],
            scale: [1, 1.02, 1],
          }}
          transition={{
            opacity: {
              duration: 0.6,
            },
            y: {
              duration: tag.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: tag.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div
            className="
              rounded-xl
              border
              border-white/10
              bg-slate-900/75
              px-4
              py-3
              backdrop-blur-xl
              shadow-[0_10px_30px_rgba(0,0,0,.25)]
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:-translate-y-1
            "
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-slate-500
              "
            >
              {tag.category}
            </p>

            <h4
              className="
                mt-1
                text-base
                font-semibold
                text-white
              "
            >
              {tag.value}
            </h4>
          </div>
        </motion.div>
      ))}
    </>
  );
}