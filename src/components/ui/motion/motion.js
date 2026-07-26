// Motion Design Tokens

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
  sm: 12,
  md: 20,
  lg: 32,
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: distances.md,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easing,
    },
  },
};