import { copy } from "./engine/copy";

const themes = {
  ocean: {
    id: "ocean",
    name: "Ocean",

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

    copy: copy.ocean,
  },

  midnight: {
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

    copy: copy.midnight,
  },

  emerald: {
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

    copy: copy.emerald,
  },

  light: {
    id: "light",
    name: "Light",

    colors: {
      bgPrimary: "#F7F9FC",
      bgSecondary: "#FFFFFF",
      surface: "rgba(255,255,255,.90)",

      textPrimary: "#111827",
      textSecondary: "#475569",

      accent: "#0284C7",
      accentHover: "#0369A1",

      border: "rgba(2,132,199,.15)",

      glow: "rgba(2,132,199,.25)",

      grid: "rgba(15,23,42,.05)",
    },

    copy: copy.light,
  },

  crimson: {
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

      glow: "rgba(220,38,38,.40)",

      grid: "rgba(255,255,255,.04)",
    },

    copy: copy.crimson,
  },
};

export default themes;