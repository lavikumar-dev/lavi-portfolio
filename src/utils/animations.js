export const animations = {
  fadeUp: {
    initial: {
      opacity: 0,
      y: 50,
    },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: false,
      amount: 0.25,
    },

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },

  slideLeft: {
    initial: {
      opacity: 0,
      x: -60,
    },

    whileInView: {
      opacity: 1,
      x: 0,
    },

    viewport: {
      once: false,
      amount: 0.25,
    },

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },

  slideRight: {
    initial: {
      opacity: 0,
      x: 60,
    },

    whileInView: {
      opacity: 1,
      x: 0,
    },

    viewport: {
      once: false,
      amount: 0.25,
    },

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },

  card: {
    initial: {
      opacity: 0,
      y: 35,
      scale: 0.96,
    },

    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
    },

    viewport: {
      once: false,
      amount: 0.25,
    },

    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};
