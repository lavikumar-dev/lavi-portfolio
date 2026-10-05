import { motion } from "framer-motion";

import heroImage from "../../../assets/images/hero.png";
import { portfolio } from "../../../data/portfolio";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="
        relative
        flex
        items-center
        justify-center
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          h-[24rem]
          w-[24rem]
          rounded-full
          bg-cyan-500/15
          blur-[90px]

          sm:h-[28rem]
          sm:w-[28rem]

          lg:h-[34rem]
          lg:w-[34rem]
          lg:blur-[120px]
        "
      />

      {/* Main Card */}

      <motion.div
        whileHover={{
          rotateX: 4,
          rotateY: -4,
          scale: 1.02,
        }}
        transition={{ duration: 0.25 }}
        className="
          relative
          z-20

          rounded-[1.6rem]
          border
          border-white/10
          bg-white/5

          p-3
          sm:p-4

          backdrop-blur-2xl
        "
      >
        <div className="absolute inset-0 rounded-[1.6rem] border border-cyan-400/10" />

        <img
          src={heroImage}
          alt={portfolio.name}
          className="
            relative
            z-10

            h-[360px]
            w-[270px]

            rounded-[1.3rem]
            object-cover

            sm:h-[430px]
            sm:w-[320px]

            md:h-[480px]
            md:w-[360px]

            lg:h-[520px]
            lg:w-[390px]

            lg:rounded-[1.6rem]
          "
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroImage;