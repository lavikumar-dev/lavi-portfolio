import { motion } from "framer-motion";

function TechStackPills({ tech = [] }) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {tech.map((item) => (
        <motion.span
          key={item}
          whileHover={{
            y: -6,
            scale: 1.05,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
          }}
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            px-5
            py-2.5
            text-sm
            font-medium
            text-slate-300
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-500/10
            hover:text-cyan-300
            hover:shadow-[0_0_30px_rgba(34,211,238,.15)]
          "
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}

export default TechStackPills;