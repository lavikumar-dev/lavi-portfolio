import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer({ title, onScrollTop }) {
  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
      }}
      className="border-t border-white/10"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <div>
          <p className="text-lg font-semibold text-white">{title}</p>

          <p className="mt-2 text-slate-400">
            Thanks for taking the time to explore this case study.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            Built with
            <Heart size={16} className="fill-red-500 text-red-500" />
            React & Framer Motion
          </div>

          <motion.button
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onScrollTop}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}
