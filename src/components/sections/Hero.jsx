import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";

import heroImage from "../../assets/images/hero.png";
import { portfolio } from "../../data/portfolio";
import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      {/* Aurora */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-0 h-[35rem] w-[35rem] rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full bg-blue-600/20 blur-[160px]" />

      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right,#ffffff 1px,transparent 1px),
              linear-gradient(to bottom,#ffffff 1px,transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-24 px-8 pt-36 lg:flex-row">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="max-w-2xl"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            👋 Hello, I'm
          </span>

          <h1 className="mt-8 text-6xl font-black leading-none tracking-tight text-white lg:text-8xl">
            {portfolio.name}
          </h1>

          <div className="mt-8 h-12 text-3xl font-semibold text-cyan-400">

            <Typewriter
              words={portfolio.roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1800}
            />

          </div>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">
            {portfolio.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Button>
              {portfolio.buttons.primary}
            </Button>

            <Button variant="secondary">
              {portfolio.buttons.secondary}
            </Button>

          </div>

          <div className="mt-10 flex gap-5">

            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: .95 }}
              href={portfolio.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900 p-4 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: .95 }}
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900 p-4 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </motion.a>

          </div>

        </motion.div>
                {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Glow */}
          <div className="absolute h-[34rem] w-[34rem] rounded-full bg-cyan-500/15 blur-[120px]" />

          {/* Floating Card */}
          <motion.div
            whileHover={{
              rotateX: 4,
              rotateY: -4,
              scale: 1.02,
            }}
            transition={{ duration: 0.25 }}
            className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/10" />

            <img
              src={heroImage}
              alt={portfolio.name}
              className="relative z-10 h-[520px] w-[390px] rounded-[1.6rem] object-cover"
            />
          </motion.div>

          {/* Floating Skill Card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -left-12 top-8 rounded-2xl border border-cyan-500/20 bg-slate-900/90 px-6 py-4 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Frontend
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              React
            </h3>
          </motion.div>

          {/* Floating Skill Card 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-12 top-36 rounded-2xl border border-cyan-500/20 bg-slate-900/90 px-6 py-4 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Game Dev
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Unity
            </h3>
          </motion.div>

          {/* Floating Skill Card 3 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            className="absolute bottom-12 -left-8 rounded-2xl border border-cyan-500/20 bg-slate-900/90 px-6 py-4 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              AI
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Generative AI
            </h3>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -right-6 top-10 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_35px_#22d3ee]" />

          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full border-2 border-cyan-400/20" />
        </motion.div>
              </div>

    </section>
  );
}

export default Hero;