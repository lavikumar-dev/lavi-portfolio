import { copy } from "../../personalization/engine/copy";

const themes = {
  ocean: {
    id: "ocean",
    name: "Ocean",
    personality: "Professional, calm, trustworthy.",

    colors: {
      bgPrimary: "#020711",
      bgSecondary: "#04101F",

      surface: "rgba(5,18,35,.78)",
      surfaceStrong: "rgba(2,10,22,.94)",

      textPrimary: "#FFFFFF",
      textSecondary: "#D7E4F2",
      textMuted: "#8294AA",

      accent: "#22E6FF",
      accentHover: "#00CFEF",
      accentSoft: "rgba(34,230,255,.12)",

      border: "rgba(34,230,255,.28)",
      borderStrong: "rgba(34,230,255,.46)",

      glow: "rgba(34,210,255,.62)",
      grid: "rgba(130,220,255,.075)",

      selection: "rgba(34,230,255,.32)",

      scrollbar: "#22E6FF",

      cursor: "#67E8F9",
      cursorGlow: "rgba(34,230,255,.86)",
    },

    typography: {
      displayFont: "Space Grotesk",
      bodyFont: "Inter",
      displayWeight: 800,
      letterSpacing: "-0.035em",
    },

    surface: {
      radius: "24px",
      blur: "24px",
      shadow: "0 30px 90px rgba(0,0,0,.34)",
      borderStyle: "solid",
    },

    motion: {
      style: "flowing",
      intensity: 1,
      ambientDuration: 12,
      hoverLift: 4,
    },

    cursor: {
      shape: "ring",
      size: 26,
      hoverSize: 46,
      trail: "orbital",
      rotation: 0,
    },

    atmosphere: {
      type: "ocean",
      density: "medium",
      grid: true,
      particles: "spark",
    },

    heroVisual: {
      type: "orbit",
      scale: 1,
      pulse: "cyan",
    },

    aboutVisual: {
      type: "mountain",
      mood: "exploration",
    },

    copy: copy.ocean,
  },

  midnight: {
    id: "midnight",
    name: "Midnight",
    personality: "Minimal, elegant, focused.",

    colors: {
      bgPrimary: "#000000",
      bgSecondary: "#030305",

      surface: "rgba(8,8,13,.82)",
      surfaceStrong: "rgba(3,3,7,.96)",

      textPrimary: "#FFFFFF",
      textSecondary: "#D6D3E3",
      textMuted: "#777583",

      accent: "#C4B5FD",
      accentHover: "#A78BFA",
      accentSoft: "rgba(167,139,250,.12)",

      border: "rgba(167,139,250,.24)",
      borderStrong: "rgba(167,139,250,.42)",

      glow: "rgba(139,92,246,.58)",
      grid: "rgba(255,255,255,.018)",

      selection: "rgba(167,139,250,.30)",

      scrollbar: "#8B5CF6",

      cursor: "#DDD6FE",
      cursorGlow: "rgba(139,92,246,.78)",
    },

    typography: {
      displayFont: "Space Grotesk",
      bodyFont: "Inter",
      displayWeight: 700,
      letterSpacing: "-0.025em",
    },

    surface: {
      radius: "18px",
      blur: "18px",
      shadow: "0 24px 70px rgba(0,0,0,.42)",
      borderStyle: "solid",
    },

    motion: {
      style: "minimal",
      intensity: 0.42,
      ambientDuration: 20,
      hoverLift: 2,
    },

    cursor: {
      shape: "square",
      size: 20,
      hoverSize: 30,
      trail: "minimal",
      rotation: 45,
    },

    atmosphere: {
      type: "midnight",
      density: "low",
      grid: false,
      particles: "stars",
    },

    heroVisual: {
      type: "rings",
      scale: 0.92,
      pulse: "violet",
    },

    aboutVisual: {
      type: "architecture",
      mood: "precision",
    },

    copy: copy.midnight,
  },

  light: {
    id: "light",
    name: "Light",
    personality: "Clean, professional, highly readable.",

    colors: {
      bgPrimary: "#F7F9FC",
      bgSecondary: "#FFFFFF",

      surface: "rgba(255,255,255,.92)",
      surfaceStrong: "rgba(255,255,255,.98)",

      textPrimary: "#0B1220",
      textSecondary: "#334155",
      textMuted: "#5B6B82",

      accent: "#006FCC",
      accentHover: "#005AA8",
      accentSoft: "rgba(0,111,204,.10)",

      border: "rgba(0,84,160,.16)",
      borderStrong: "rgba(0,111,204,.32)",

      glow: "rgba(0,111,204,.30)",
      grid: "rgba(15,23,42,.045)",

      selection: "rgba(0,111,204,.22)",

      scrollbar: "#006FCC",

      cursor: "#005EA8",
      cursorGlow: "rgba(0,111,204,.42)",
    },

    typography: {
      displayFont: "Inter",
      bodyFont: "Inter",
      displayWeight: 800,
      letterSpacing: "-0.035em",
    },

    surface: {
      radius: "20px",
      blur: "18px",
      shadow: "0 24px 70px rgba(15,23,42,.10)",
      borderStyle: "solid",
    },

    motion: {
      style: "subtle",
      intensity: 0.35,
      ambientDuration: 18,
      hoverLift: 2,
    },

    cursor: {
      shape: "dot-ring",
      size: 18,
      hoverSize: 28,
      trail: "soft",
      rotation: 0,
    },

    atmosphere: {
      type: "light",
      density: "low",
      grid: false,
      particles: "dust",
    },

    heroVisual: {
      type: "architecture",
      scale: 0.94,
      pulse: "blue",
    },

    aboutVisual: {
      type: "clarity",
      mood: "simplicity",
    },

    copy: copy.light,
  },

  emerald: {
    id: "emerald",
    name: "Emerald",
    personality: "Natural, peaceful, organic.",

    colors: {
      bgPrimary: "#03110B",
      bgSecondary: "#071C12",

      surface: "rgba(7,31,20,.74)",
      surfaceStrong: "rgba(4,23,15,.90)",

      textPrimary: "#F2FFF8",
      textSecondary: "#C9F7E3",
      textMuted: "#76A995",

      accent: "#34D399",
      accentHover: "#10B981",
      accentSoft: "rgba(52,211,153,.09)",

      border: "rgba(52,211,153,.16)",
      borderStrong: "rgba(52,211,153,.30)",

      glow: "rgba(16,185,129,.28)",
      grid: "rgba(255,255,255,.025)",

      selection: "rgba(52,211,153,.25)",

      scrollbar: "#10B981",

      cursor: "#6EE7B7",
      cursorGlow: "rgba(16,185,129,.52)",
    },

    typography: {
      displayFont: "Space Grotesk",
      bodyFont: "Inter",
      displayWeight: 700,
      letterSpacing: "-0.025em",
    },

    surface: {
      radius: "26px",
      blur: "22px",
      shadow: "0 30px 90px rgba(0,0,0,.30)",
      borderStyle: "solid",
    },

    motion: {
      style: "breathing",
      intensity: 0.72,
      ambientDuration: 14,
      hoverLift: 5,
    },

    cursor: {
      shape: "leaf",
      size: 24,
      hoverSize: 40,
      trail: "organic",
      rotation: -25,
    },

    atmosphere: {
      type: "emerald",
      density: "medium",
      grid: false,
      particles: "leaves",
    },

    heroVisual: {
      type: "vines",
      scale: 0.96,
      pulse: "green",
    },

    aboutVisual: {
      type: "tree",
      mood: "growth",
    },

    copy: copy.emerald,
  },

  blossom: {
    id: "blossom",
    name: "Blossom",
    personality: "Soft, friendly, welcoming.",

    colors: {
      bgPrimary: "#160A12",
      bgSecondary: "#24101C",

      surface: "rgba(45,20,35,.72)",
      surfaceStrong: "rgba(30,12,23,.90)",

      textPrimary: "#FFF7FB",
      textSecondary: "#F4D9E7",
      textMuted: "#B58B9E",

      accent: "#F472B6",
      accentHover: "#EC4899",
      accentSoft: "rgba(244,114,182,.10)",

      border: "rgba(244,114,182,.17)",
      borderStrong: "rgba(244,114,182,.30)",

      glow: "rgba(236,72,153,.28)",
      grid: "rgba(255,255,255,.025)",

      selection: "rgba(244,114,182,.24)",

      scrollbar: "#EC4899",

      cursor: "#F9A8D4",
      cursorGlow: "rgba(236,72,153,.52)",
    },

    typography: {
      displayFont: "Space Grotesk",
      bodyFont: "Inter",
      displayWeight: 700,
      letterSpacing: "-0.025em",
    },

    surface: {
      radius: "30px",
      blur: "24px",
      shadow: "0 28px 80px rgba(0,0,0,.28)",
      borderStyle: "solid",
    },

    motion: {
      style: "soft",
      intensity: 0.62,
      ambientDuration: 16,
      hoverLift: 4,
    },

    cursor: {
      shape: "petal",
      size: 24,
      hoverSize: 42,
      trail: "petal",
      rotation: 0,
    },

    atmosphere: {
      type: "blossom",
      density: "medium",
      grid: false,
      particles: "petals",
    },

    heroVisual: {
      type: "petals",
      scale: 0.96,
      pulse: "pink",
    },

    aboutVisual: {
      type: "blossom",
      mood: "human",
    },

    copy: copy.blossom,
  },

  crimson: {
    id: "crimson",
    name: "The Crimson Sword",
    personality: "Disciplined, precise, powerful, handcrafted.",

    colors: {
      bgPrimary: "#070202",
      bgSecondary: "#120404",

      surface: "rgba(24,6,7,.82)",
      surfaceStrong: "rgba(15,3,4,.94)",

      textPrimary: "#FAF7F4",
      textSecondary: "#D8C8C8",
      textMuted: "#927D7D",

      accent: "#DC2626",
      accentHover: "#B91C1C",
      accentSoft: "rgba(220,38,38,.08)",

      border: "rgba(220,38,38,.18)",
      borderStrong: "rgba(220,38,38,.34)",

      glow: "rgba(220,38,38,.34)",
      grid: "rgba(255,255,255,.018)",

      selection: "rgba(220,38,38,.24)",

      scrollbar: "#B91C1C",

      cursor: "#F87171",
      cursorGlow: "rgba(220,38,38,.62)",
    },

    typography: {
      displayFont: "Space Grotesk",
      bodyFont: "Inter",
      displayWeight: 800,
      letterSpacing: "-0.035em",
    },

    surface: {
      radius: "16px",
      blur: "20px",
      shadow: "0 34px 100px rgba(0,0,0,.52)",
      borderStyle: "solid",
    },

    motion: {
      style: "deliberate",
      intensity: 0.55,
      ambientDuration: 18,
      hoverLift: 2,
    },

    cursor: {
      shape: "diamond",
      size: 22,
      hoverSize: 34,
      trail: "blade",
      rotation: 45,
    },

    atmosphere: {
      type: "crimson",
      density: "low",
      grid: false,
      particles: "embers",
    },

    heroVisual: {
      type: "sword",
      scale: 0.98,
      pulse: "crimson",
    },

    aboutVisual: {
      type: "sword",
      mood: "craftsmanship",
    },

    copy: copy.crimson,
  },
};

export default themes;