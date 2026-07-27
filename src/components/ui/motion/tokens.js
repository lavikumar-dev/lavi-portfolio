export const easing = [0.22, 1, 0.36, 1];

export const viewport = {
  once: true,
  amount: 0.25,
};

export const durations = {
  fast: 0.45,
  normal: 0.7,
  slow: 0.9,
};

export const distances = {
  sm: 16,
  md: 28,
  lg: 48,
};

export const entranceVariant = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easing,
    },
  },
};