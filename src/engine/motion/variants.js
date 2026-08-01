import {
  easing,
  duration,
  distance,
} from "./motion.config";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: distance.md,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: duration.normal,
      ease: easing,
    },
  },
};

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -distance.md,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: duration.normal,
      ease: easing,
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -distance.md,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: duration.normal,
      ease: easing,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: distance.md,
  },

    visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: duration.normal,
      ease: easing,
    },
  },
};

export const pop = {
  hidden: {
    opacity: 0,
    scale: .96,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: duration.fast,
      ease: easing,
    },
  },
};