import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolio } from "../../../data/portfolio";
import Button from "../../ui/Button";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
        max-w-2xl
        text-center
        lg:text-left
      "
    >
      {/* Greeting */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/10
          px-4
          py-2
          text-xs
          font-medium
          text-cyan-300
          backdrop-blur-xl
          sm:px-5
          sm:text-sm
        "
      >
        👋 Hello, I'm
      </span>

      {/* Name */}

      <h1
        className="
          mt-8
          text-5xl
          font-black
          leading-none
          tracking-tight
          text-white
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
        "
      >
        {portfolio.name}
      </h1>

      {/* Typewriter */}

      <div
        className="
          mt-8
          h-12
          text-xl
          font-semibold
          text-cyan-400
          sm:text-2xl
          lg:text-3xl
        "
      >
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

      {/* Description */}

      <p
        className="
          mx-auto
          mt-8
          max-w-xl
          text-base
          leading-8
          text-slate-300
          sm:text-lg
          lg:mx-0
          lg:leading-9
        "
      >
        {portfolio.description}
      </p>

      {/* Buttons */}

      <div
        className="
          mt-10
          flex
          flex-wrap
          justify-center
          gap-4
          lg:justify-start
          lg:gap-5
        "
      >
        <Button>
          {portfolio.buttons.primary}
        </Button>

        <Button variant="secondary">
          {portfolio.buttons.secondary}
        </Button>
      </div>

      {/* Socials */}

      <div
        className="
          mt-10
          flex
          justify-center
          gap-5
          lg:justify-start
        "
      >
        <motion.a
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          href={portfolio.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-full
            border
            border-slate-700
            bg-slate-900
            p-4
            text-2xl
            text-white
            transition
            hover:border-cyan-400
            hover:text-cyan-400
          "
        >
          <FaGithub />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          href={portfolio.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-full
            border
            border-slate-700
            bg-slate-900
            p-4
            text-2xl
            text-white
            transition
            hover:border-cyan-400
            hover:text-cyan-400
          "
        >
          <FaLinkedin />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default HeroContent;