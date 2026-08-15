import { motion } from "framer-motion";

import useTheme from "../../personalization/hooks/useTheme";

function OceanWorld() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div
        animate={{ x: [-20, 20, -20], opacity: [0.18, 0.34, 0.18] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-16rem] top-[12%] h-[44rem] w-[44rem] rounded-full blur-[150px]"
        style={{ background: "var(--glow)" }}
      />
      <motion.div
        animate={{ x: [20, -20, 20], opacity: [0.12, 0.26, 0.12] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-12rem] right-[-10rem] h-[42rem] w-[42rem] rounded-full blur-[170px]"
        style={{ background: "var(--accent)" }}
      />
    </>
  );
}

function MidnightWorld() {
  const stars = Array.from({ length: 34 }, (_, index) => ({
    left: (index * 29) % 100,
    top: (index * 17) % 100,
    size: 1 + (index % 3),
    delay: index * 0.12,
  }));

  return (
    <>
      {stars.map((star) => (
        <motion.span
          key={`${star.left}-${star.top}`}
          className="absolute rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            background: "var(--accent)",
            boxShadow: "0 0 10px var(--glow)",
          }}
          animate={{ opacity: [0.12, 0.55, 0.12] }}
          transition={{ duration: 5 + (star.size % 3), delay: star.delay, repeat: Infinity }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,.04),transparent_42%)]" />
    </>
  );
}

function LightWorld() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[-18rem] h-[42rem] w-[42rem] rounded-full blur-[150px]"
        style={{ background: "var(--glow)" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.18),transparent_30%,rgba(15,23,42,.03))]" />
    </>
  );
}

function Leaf({ index }) {
  return (
    <motion.span
      className="absolute block rounded-[100%_0_100%_0]"
      style={{
        left: `${(index * 17) % 100}%`,
        top: `${-10 - (index % 4) * 8}%`,
        width: 14 + (index % 4) * 7,
        height: 8 + (index % 4) * 5,
        background: "linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 38%, transparent))",
        opacity: 0.18 + (index % 3) * 0.06,
        rotate: index * 31,
      }}
      animate={{
        y: [0, 1200],
        x: [0, index % 2 ? -100 : 120, index % 2 ? 80 : -90],
        rotate: [index * 31, index * 31 + 160, index * 31 + 320],
      }}
      transition={{
        duration: 22 + (index % 7),
        repeat: Infinity,
        delay: index * 1.2,
        ease: "linear",
      }}
    />
  );
}

function EmeraldWorld() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,.08),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,.06),transparent_38%)]" />
      {Array.from({ length: 12 }, (_, index) => (
        <Leaf key={index} index={index} />
      ))}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[170px]"
        style={{ background: "var(--glow)" }}
      />
    </>
  );
}

function Petal({ index }) {
  return (
    <motion.span
      className="absolute block rounded-[100%_0_100%_0]"
      style={{
        left: `${(index * 19) % 100}%`,
        top: `${-8 - (index % 5) * 7}%`,
        width: 9 + (index % 4) * 5,
        height: 6 + (index % 3) * 4,
        background: "linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 45%, white))",
        opacity: 0.14 + (index % 4) * 0.045,
        rotate: 20 + index * 17,
      }}
      animate={{
        y: [0, 1200],
        x: [0, index % 2 ? 100 : -90, index % 2 ? -70 : 80],
        rotate: [20 + index * 17, 180 + index * 17, 360 + index * 17],
      }}
      transition={{
        duration: 19 + (index % 8),
        repeat: Infinity,
        delay: index * 0.9,
        ease: "linear",
      }}
    />
  );
}

function BlossomWorld() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,.08),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,.06),transparent_38%)]" />
      {Array.from({ length: 16 }, (_, index) => (
        <Petal key={index} index={index} />
      ))}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.10, 0.2, 0.10] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10rem] top-[-10rem] h-[40rem] w-[40rem] rounded-full blur-[150px]"
        style={{ background: "var(--glow)" }}
      />
    </>
  );
}

function CrimsonWorld() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(220,38,38,.06),transparent_42%)]" />
      <motion.div
        animate={{ opacity: [0.12, 0.22, 0.12], scale: [0.98, 1.04, 0.98] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[190px]"
        style={{ background: "var(--glow)" }}
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[74vw] w-[74vw] max-h-[1000px] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: "var(--border)" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,.46)_100%)]" />
    </>
  );
}

export default function ThemeWorldBackground() {
  const { design } = useTheme();

  const worlds = {
    ocean: OceanWorld,
    midnight: MidnightWorld,
    light: LightWorld,
    emerald: EmeraldWorld,
    blossom: BlossomWorld,
    crimson: CrimsonWorld,
  };

  const World = worlds[design.atmosphere.type] ?? OceanWorld;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-primary"
      aria-hidden="true"
    >
      <World />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,var(--bg-primary)_100%)]" />
    </div>
  );
}
