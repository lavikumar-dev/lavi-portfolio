/* ===========================================
   PROJECT NOVA DESIGN TOKENS
=========================================== */

export const container = {
  narrow: "max-w-[1360px]",

  default: "max-w-[1720px]",

  wide: "max-w-[1840px]",

  full: "max-w-none",
};

export const section = {
  hero: "pt-36 pb-28",

  xl: "py-32",

  lg: "py-24",

  md: "py-16",

  sm: "py-12",

  none: "",
};

export const radius = {
  xs: "rounded-md",

  sm: "rounded-xl",

  md: "rounded-2xl",

  lg: "rounded-3xl",

  xl: "rounded-[32px]",

  full: "rounded-full",
};

export const typography = {
  hero: `
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
    font-black
    tracking-tight
    leading-[.92]
  `,

  section: `
    text-3xl
    sm:text-4xl
    lg:text-5xl
    font-bold
  `,

  card: `
    text-xl
    lg:text-2xl
    font-semibold
  `,

  body: `
    text-base
    md:text-lg
    leading-8
  `,

  lead: `
    text-lg
    md:text-xl
    leading-9
  `,

  caption: `
    text-xs
    uppercase
    tracking-[0.35em]
    font-semibold
  `,
};

export const spacing = {
  xs: "gap-2",

  sm: "gap-4",

  md: "gap-6",

  lg: "gap-8",

  xl: "gap-12",

  xxl: "gap-20",
};

export const glass = {
  light: `
    bg-white/[0.03]
    backdrop-blur-xl
    border
    border-white/10
  `,

  heavy: `
    bg-white/[0.05]
    backdrop-blur-2xl
    border
    border-white/10
  `,
};

export const shadow = {
  glow:
    "hover:shadow-[0_25px_70px_rgba(34,211,238,.14)]",

  soft:
    "shadow-[0_10px_35px_rgba(0,0,0,.20)]",
};