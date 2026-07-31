import { copy } from "./engine/copy";

const baseTypography = {
  bodyFont: '"Inter", sans-serif',
  displayFont: '"Space Grotesk", sans-serif',
  bodyWeight: 400,
  displayWeight: 700,
};

const baseSpacing = {
  section: "7rem",
  sectionCompact: "4.5rem",
  contentWidth: "80rem",
};

const createTheme = ({
  id,
  name,
  colors,
  atmosphere,
  surface,
  button,
  motion,
  typography = {},
  spacing = {},
  copy: themeCopy,
}) => ({
  id,
  name,
  colors,
  copy: themeCopy,
  tokens: {
    typography: { ...baseTypography, ...typography },
    spacing: { ...baseSpacing, ...spacing },
    surface,
    button,
    atmosphere,
    motion,
  },
});

const themes = {
  ocean: createTheme({
    id: "ocean",
    name: "Ocean",
    // Existing Ocean values: preserved as the baseline palette.
    colors: {
      bgPrimary: "#071424",
      bgSecondary: "#0b1d35",
      surface: "rgba(15,23,42,.72)",
      textPrimary: "#FFFFFF",
      textSecondary: "#CBD5E1",
      accent: "#22D3EE",
      accentHover: "#06B6D4",
      border: "rgba(34,211,238,.18)",
      glow: "rgba(34,211,238,.35)",
      grid: "rgba(255,255,255,.06)",
    },
    surface: {
      card: "rgba(15,23,42,.72)",
      elevated: "rgba(15,23,42,.88)",
      borderRadius: "1.5rem",
      shadow: "0 24px 70px rgba(2, 8, 23, .42)",
    },
    button: {
      radius: "0.9rem",
      textTransform: "none",
      shadow: "0 14px 35px rgba(34,211,238,.22)",
    },
    atmosphere: {
      treatment: "aurora-grid",
      primaryGlow: "rgba(34,211,238,.22)",
      secondaryGlow: "rgba(37,99,235,.16)",
      particleColor: "rgba(186,230,253,.75)",
      decoration: "soft-orbs",
    },
    motion: {
      easing: "cubic-bezier(.22, 1, .36, 1)",
      duration: "350ms",
      hoverLift: "-4px",
      ambientSpeed: "18s",
      particleDensity: 0.35,
    },
    copy: copy.ocean,
  }),

  bioluminescence: createTheme({
    id: "bioluminescence",
    name: "Bioluminescence",
    colors: {
      bgPrimary: "#020A1A",
      bgSecondary: "#062044",
      surface: "rgba(4,21,47,.74)",
      textPrimary: "#EAFBFF",
      textSecondary: "#A8C9DD",
      accent: "#31D7FF",
      accentHover: "#80EEFF",
      border: "rgba(49,215,255,.22)",
      glow: "rgba(29,185,255,.42)",
      grid: "rgba(125,211,252,.08)",
    },
    surface: {
      card: "linear-gradient(145deg, rgba(8,35,70,.8), rgba(2,13,33,.72))",
      elevated: "rgba(5,28,60,.92)",
      borderRadius: "1.35rem",
      shadow: "0 26px 80px rgba(0, 10, 32, .6)",
    },
    button: {
      radius: "1rem",
      textTransform: "none",
      shadow: "0 0 34px rgba(49,215,255,.32)",
    },
    atmosphere: {
      treatment: "luminous-tide",
      primaryGlow: "rgba(0,181,255,.28)",
      secondaryGlow: "rgba(56,189,248,.16)",
      particleColor: "rgba(103,232,249,.9)",
      decoration: "wave-reflections",
    },
    motion: {
      easing: "cubic-bezier(.16, 1, .3, 1)",
      duration: "420ms",
      hoverLift: "-5px",
      ambientSpeed: "14s",
      particleDensity: 0.55,
    },
    copy: copy.ocean,
  }),

  emerald: createTheme({
    id: "emerald",
    name: "Emerald",
    colors: {
      bgPrimary: "#04130D",
      bgSecondary: "#0A2017",
      surface: "rgba(6,26,20,.72)",
      textPrimary: "#FFFFFF",
      textSecondary: "#C9F7E3",
      accent: "#10B981",
      accentHover: "#059669",
      border: "rgba(16,185,129,.18)",
      glow: "rgba(16,185,129,.35)",
      grid: "rgba(255,255,255,.05)",
    },
    surface: {
      card: "linear-gradient(145deg, rgba(10,38,27,.84), rgba(3,20,13,.72))",
      elevated: "rgba(7,32,22,.94)",
      borderRadius: "1.6rem",
      shadow: "0 24px 72px rgba(0, 20, 10, .54)",
    },
    button: {
      radius: "1.25rem",
      textTransform: "none",
      shadow: "0 16px 38px rgba(16,185,129,.24)",
    },
    atmosphere: {
      treatment: "enchanted-forest",
      primaryGlow: "rgba(16,185,129,.24)",
      secondaryGlow: "rgba(163,230,53,.11)",
      particleColor: "rgba(167,243,208,.82)",
      decoration: "fireflies-and-leaves",
    },
    motion: {
      easing: "cubic-bezier(.2, .8, .2, 1)",
      duration: "500ms",
      hoverLift: "-3px",
      ambientSpeed: "22s",
      particleDensity: 0.48,
    },
    copy: copy.emerald,
  }),

  midnight: createTheme({
    id: "midnight",
    name: "Midnight",
    colors: {
      bgPrimary: "#09090F",
      bgSecondary: "#11111A",
      surface: "rgba(20,20,32,.72)",
      textPrimary: "#FFFFFF",
      textSecondary: "#A1A1AA",
      accent: "#8B5CF6",
      accentHover: "#7C3AED",
      border: "rgba(139,92,246,.18)",
      glow: "rgba(139,92,246,.35)",
      grid: "rgba(255,255,255,.05)",
    },
    surface: {
      card: "linear-gradient(145deg, rgba(35,27,57,.76), rgba(13,13,23,.78))",
      elevated: "rgba(22,18,36,.94)",
      borderRadius: "1.25rem",
      shadow: "0 24px 80px rgba(5, 3, 12, .6)",
    },
    button: {
      radius: "0.9rem",
      textTransform: "none",
      shadow: "0 16px 38px rgba(139,92,246,.25)",
    },
    atmosphere: {
      treatment: "moonlit-constellations",
      primaryGlow: "rgba(139,92,246,.2)",
      secondaryGlow: "rgba(196,181,253,.1)",
      particleColor: "rgba(221,214,254,.75)",
      decoration: "stars-and-violets",
    },
    motion: {
      easing: "cubic-bezier(.25, .46, .45, .94)",
      duration: "460ms",
      hoverLift: "-3px",
      ambientSpeed: "24s",
      particleDensity: 0.28,
    },
    copy: copy.midnight,
  }),

  blossom: createTheme({
    id: "blossom",
    name: "Blossom",
    colors: {
      bgPrimary: "#2A1722",
      bgSecondary: "#5A3348",
      surface: "rgba(74,41,57,.68)",
      textPrimary: "#FFF7FA",
      textSecondary: "#F2CAD9",
      accent: "#F58BB7",
      accentHover: "#FFB7D2",
      border: "rgba(255,203,224,.25)",
      glow: "rgba(245,139,183,.34)",
      grid: "rgba(255,242,247,.09)",
    },
    surface: {
      card: "linear-gradient(145deg, rgba(117,66,90,.6), rgba(54,29,41,.72))",
      elevated: "rgba(79,42,60,.9)",
      borderRadius: "1.8rem",
      shadow: "0 22px 70px rgba(58, 24, 42, .38)",
    },
    button: {
      radius: "999px",
      textTransform: "none",
      shadow: "0 14px 32px rgba(245,139,183,.28)",
    },
    atmosphere: {
      treatment: "sakura-mist",
      primaryGlow: "rgba(251,182,206,.28)",
      secondaryGlow: "rgba(255,239,246,.14)",
      particleColor: "rgba(255,222,235,.9)",
      decoration: "petals-and-mist",
    },
    motion: {
      easing: "cubic-bezier(.33, 1, .68, 1)",
      duration: "600ms",
      hoverLift: "-2px",
      ambientSpeed: "28s",
      particleDensity: 0.5,
    },
    copy: copy.light,
  }),

  professional: createTheme({
    id: "professional",
    name: "Professional",
    colors: {
      bgPrimary: "#F7F9FC",
      bgSecondary: "#FFFFFF",
      surface: "rgba(255,255,255,.9)",
      textPrimary: "#111827",
      textSecondary: "#475569",
      accent: "#0284C7",
      accentHover: "#0369A1",
      border: "rgba(2,132,199,.15)",
      glow: "rgba(2,132,199,.25)",
      grid: "rgba(15,23,42,.05)",
    },
    surface: {
      card: "rgba(255,255,255,.9)",
      elevated: "#FFFFFF",
      borderRadius: "1rem",
      shadow: "0 18px 45px rgba(15, 23, 42, .08)",
    },
    button: {
      radius: "0.75rem",
      textTransform: "none",
      shadow: "0 10px 24px rgba(2,132,199,.16)",
    },
    atmosphere: {
      treatment: "quiet-gradient",
      primaryGlow: "rgba(56,189,248,.1)",
      secondaryGlow: "rgba(148,163,184,.08)",
      particleColor: "rgba(2,132,199,.18)",
      decoration: "none",
    },
    motion: {
      easing: "cubic-bezier(.16, 1, .3, 1)",
      duration: "280ms",
      hoverLift: "-2px",
      ambientSpeed: "0s",
      particleDensity: 0,
    },
    typography: { displayFont: '"Inter", sans-serif', displayWeight: 700 },
    copy: copy.light,
  }),

  crimson: createTheme({
    id: "crimson",
    name: "Crimson Sword",
    colors: {
      bgPrimary: "#090303",
      bgSecondary: "#140606",
      surface: "rgba(28,8,8,.82)",
      textPrimary: "#F8F5F2",
      textSecondary: "#D6C7C7",
      accent: "#DC2626",
      accentHover: "#B91C1C",
      border: "rgba(220,38,38,.22)",
      glow: "rgba(220,38,38,.4)",
      grid: "rgba(255,255,255,.04)",
    },
    surface: {
      card: "linear-gradient(145deg, rgba(50,10,10,.88), rgba(18,4,4,.84))",
      elevated: "rgba(37,6,6,.96)",
      borderRadius: "0.4rem",
      shadow: "0 28px 90px rgba(0, 0, 0, .7)",
    },
    button: {
      radius: "0.25rem",
      textTransform: "uppercase",
      shadow: "0 14px 36px rgba(220,38,38,.3)",
    },
    atmosphere: {
      treatment: "ink-and-embers",
      primaryGlow: "rgba(220,38,38,.26)",
      secondaryGlow: "rgba(251,191,36,.08)",
      particleColor: "rgba(254,202,202,.78)",
      decoration: "embers-and-strokes",
    },
    motion: {
      easing: "cubic-bezier(.7, 0, .3, 1)",
      duration: "520ms",
      hoverLift: "-2px",
      ambientSpeed: "16s",
      particleDensity: 0.42,
    },
    typography: { displayFont: '"Space Grotesk", sans-serif', displayWeight: 800 },
    copy: copy.crimson,
  }),
};

export const defaultTheme = "ocean";

export const themeOrder = [
  "ocean",
  "bioluminescence",
  "emerald",
  "midnight",
  "blossom",
  "professional",
  "crimson",
];

export const getTheme = (themeName) => themes[themeName] ?? themes[defaultTheme];

export default themes;
