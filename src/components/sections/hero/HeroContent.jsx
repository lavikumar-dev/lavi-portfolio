import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { portfolio } from "../../../data/portfolio";
import Button from "../../ui/Button";

function HeroContent() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          px-3.5
          py-1.5
          text-xs
          font-medium
          text-cyan-300
          backdrop-blur-xl
          sm:px-5
          sm:py-2
          sm:text-sm
        "
      >
        👋 Hello, I'm
      </span>

      {/* Name */}

      <h1
        className="
          mt-3
          text-4xl
          font-black
          leading-tight
          tracking-tight
          text-white
          xs:text-5xl
          sm:mt-6
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
          mt-3
          h-8
          text-lg
          font-semibold
          text-cyan-400
          xs:text-xl
          sm:mt-6
          sm:h-12
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
          mt-4
          max-w-xl
          text-sm
          leading-7
          text-slate-300
          sm:mt-6
          sm:text-base
          sm:leading-8
          lg:mx-0
          lg:text-lg
          lg:leading-9
        "
      >
        {portfolio.description}
      </p>

      {/* Buttons */}

      <div
        className="
          mt-6
          flex
          flex-wrap
          justify-center
          gap-3
          sm:mt-8
          sm:gap-4
          lg:justify-start
          lg:gap-5
        "
      >
        <Button onClick={() => scrollToSection("projects")}>
          {portfolio.buttons.primary}
        </Button>

        <Button variant="secondary" onClick={() => scrollToSection("contact")}>
          {portfolio.buttons.secondary}
        </Button>
      </div>
    </motion.div>
  );
}

export default HeroContent;