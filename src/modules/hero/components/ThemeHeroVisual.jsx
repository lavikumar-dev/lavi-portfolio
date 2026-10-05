import { motion } from "framer-motion";

import useTheme from "../../../personalization/hooks/useTheme";

import OrbitEngine from "./OrbitEngine";

function MidnightVisual() {
  return (
    <motion.div
      animate={{ rotate: [0, -360] }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
      style={{ borderColor: "var(--border)", boxShadow: "0 0 90px var(--glow)" }}
    >
      <motion.span
        animate={{ scale: [1, 1.4, 1], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--accent)", boxShadow: "0 0 24px var(--glow)" }}
      />
    </motion.div>
  );
}

function LightVisual() {
  return (
    <>
      <div
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: "var(--border-strong)" }}
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-[42%] border"
        style={{ borderColor: "var(--border)" }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--accent)", boxShadow: "0 0 28px var(--glow)" }}
      />
    </>
  );
}

function EmeraldVisual() {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <motion.div
          key={index}
          animate={{ rotate: index % 2 ? -360 : 360, scale: [1, 1.025, 1] }}
          transition={{ duration: 45 + index * 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 rounded-[100%_0_100%_0] border"
          style={{
            width: 360 + index * 65,
            height: 240 + index * 50,
            transform: "translate(-50%, -50%) rotate(20deg)",
            borderColor: "var(--border)",
            opacity: 0.75 - index * 0.1,
          }}
        />
      ))}
    </>
  );
}

function BlossomVisual() {
  return (
    <>
      {Array.from({ length: 7 }, (_, index) => (
        <motion.div
          key={index}
          animate={{ rotate: [index * 50, index * 50 + 360], scale: [1, 1.05, 1] }}
          transition={{ duration: 42 + index * 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: 300 + index * 62,
            height: 220 + index * 46,
            transform: "translate(-50%, -50%) rotate(24deg)",
            borderColor: "var(--border)",
            opacity: 0.7 - index * 0.07,
          }}
        />
      ))}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--accent)", boxShadow: "0 0 30px var(--glow)" }}
      />
    </>
  );
}

function CrimsonVisual() {
  return (
    <>
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[44%] border"
        style={{ borderColor: "var(--border-strong)" }}
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: "var(--border)" }}
      />
      <motion.div
        animate={{ opacity: [0.18, 0.65, 0.18], scaleX: [0.7, 1, 0.7] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-px w-[520px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)", boxShadow: "0 0 26px var(--glow)" }}
      />
    </>
  );
}

export default function ThemeHeroVisual() {
  const { design } = useTheme();

  if (design.heroVisual.type === "orbit") {
    return <OrbitEngine />;
  }

  const visuals = {
    rings: MidnightVisual,
    architecture: LightVisual,
    vines: EmeraldVisual,
    petals: BlossomVisual,
    sword: CrimsonVisual,
  };

  const Visual = visuals[design.heroVisual.type] ?? MidnightVisual;

  return <Visual />;
}
