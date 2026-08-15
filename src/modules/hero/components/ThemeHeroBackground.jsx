import { motion } from "framer-motion";

import useTheme from "../../../personalization/hooks/useTheme";

import OceanGrid from "./OceanEngine/OceanGrid";
import OceanGlow from "./OceanEngine/OceanGlow";
import OceanEngine from "./OceanEngine/OceanEngine";

function MidnightHero() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(167,139,250,.06),transparent_48%)]" />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: "var(--border)" }}
      />
    </>
  );
}

function LightHero() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_42%,rgba(2,132,199,.08),transparent_42%)]" />
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to top, black, transparent)",
        }}
      />
    </>
  );
}

function EmeraldHero() {
  return (
    <>
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{ background: "var(--glow)" }}
      />
      <motion.div
        animate={{ rotate: [0, 8, -8, 0], y: [0, -14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[7%] top-[18%] h-40 w-24 rounded-[100%_0_100%_0] border"
        style={{ borderColor: "var(--border)", background: "var(--accent-soft)" }}
      />
      <motion.div
        animate={{ rotate: [0, -10, 10, 0], y: [0, 12, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-[8%] bottom-[14%] h-32 w-20 rounded-[100%_0_100%_0] border"
        style={{ borderColor: "var(--border)", background: "var(--accent-soft)" }}
      />
    </>
  );
}

function BlossomHero() {
  return (
    <>
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.10, 0.22, 0.10] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[170px]"
        style={{ background: "var(--glow)" }}
      />
      {Array.from({ length: 8 }, (_, index) => (
        <motion.span
          key={index}
          className="absolute h-3 w-5 rounded-[100%_0_100%_0]"
          style={{
            left: `${10 + index * 11}%`,
            top: `${18 + (index % 4) * 17}%`,
            background: "var(--accent)",
            opacity: 0.14,
            rotate: index * 35,
          }}
          animate={{ y: [0, -18, 0], x: [0, 8, 0], rotate: [index * 35, index * 35 + 20, index * 35] }}
          transition={{ duration: 6 + index % 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
        />
      ))}
    </>
  );
}

function CrimsonHero() {
  return (
    <>
      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08], scale: [0.98, 1.03, 0.98] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[170px]"
        style={{ background: "var(--glow)" }}
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[690px] w-[690px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: "var(--border-strong)" }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[1px] w-[72%] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)", opacity: 0.24 }}
      />
    </>
  );
}

export default function ThemeHeroBackground() {
  const { design } = useTheme();

  if (design.atmosphere.type === "ocean") {
    return (
      <>
        <div className="absolute inset-0 bg-[var(--bg-primary)]" />
        <OceanGrid />
        <OceanGlow />
        <OceanEngine />
      </>
    );
  }

  const backgrounds = {
    midnight: MidnightHero,
    light: LightHero,
    emerald: EmeraldHero,
    blossom: BlossomHero,
    crimson: CrimsonHero,
  };

  const Background = backgrounds[design.atmosphere.type] ?? MidnightHero;

  return (
    <>
      <div className="absolute inset-0 bg-[var(--bg-primary)]" />
      <Background />
    </>
  );
}
