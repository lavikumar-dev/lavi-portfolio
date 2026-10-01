/**
 * HeroBlossom — Pastel gradient mesh, portrait in arch shape, floating petals, pill buttons.
 */
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "../config/hero.config";
import HeroRoleSlider from "../components/HeroRoleSlider";

const PETALS = [
  { x: "10%", y: "20%", size: 18, delay: 0 },
  { x: "80%", y: "15%", size: 14, delay: 0.5 },
  { x: "25%", y: "75%", size: 22, delay: 1.2 },
  { x: "70%", y: "65%", size: 16, delay: 0.8 },
  { x: "50%", y: "10%", size: 12, delay: 1.6 },
  { x: "90%", y: "80%", size: 20, delay: 0.3 },
];

function FloatingPetals({ reduced }) {
  if (reduced) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PETALS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: "var(--accent)",
            opacity: 0.15,
          }}
          animate={{ y: [-10, 10, -10], x: [-6, 6, -6], rotate: [0, 180, 360] }}
          transition={{ duration: 5 + i * 1.3, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function ArchPortrait({ image, alt }) {
  const id = "blossom-arch-clip";
  return (
    <>
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            <path d="M0,0.5 A0.5,0.5 0 0 1 1,0.5 L1,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>
      <motion.img
        src={image}
        alt={alt}
        width={380}
        height={480}
        className="h-auto w-[320px] sm:w-[360px] object-cover object-top"
        style={{
          clipPath: `url(#${id})`,
          borderRadius: "50% 50% 0 0 / 50% 50% 0 0",
          boxShadow: "0 0 60px var(--glow)",
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

function PillButton({ children, primary, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-8 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 ${
        primary
          ? "bg-[color:var(--accent)] text-[color:var(--bg-primary)] shadow-[0_8px_30px_var(--glow)]"
          : "border border-[color:var(--border)] bg-[color:var(--surface)] backdrop-blur-xl hover:border-[color:var(--border-strong)]"
      }`}
    >
      {children}
    </button>
  );
}

export default function HeroBlossom() {
  const reduced = useReducedMotion();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden pt-24 lg:pt-28"
      style={{ background: "radial-gradient(ellipse at 30% 40%, var(--accent-soft) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, var(--accent-soft) 0%, transparent 55%)" }}>
      <FloatingPetals reduced={reduced} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100vh-112px)] items-center gap-y-16 lg:grid-cols-[52%_48%] lg:gap-x-8">

          {/* TEXT */}
          <div className="flex w-full flex-col max-w-[700px] items-start">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }}
              className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-5 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" style={{ boxShadow: "0 0 12px var(--accent)" }} />
              <span className="text-sm font-medium text-[color:var(--text-secondary)]">Available for Internships</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
              className="mt-7 text-[62px] sm:text-[68px] lg:text-[76px] font-black leading-[0.95] tracking-[-0.04em] text-[color:var(--text-primary)]">
              {hero.name}
            </motion.h1>

            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
              className="mt-5 text-[24px] font-semibold leading-none text-[color:var(--text-secondary)]">
              {hero.role}
            </motion.h2>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }} className="mt-2 overflow-visible">
              <HeroRoleSlider />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
              className="mt-6 max-w-[540px] text-[17px] leading-[1.75] text-[color:var(--text-muted)]">
              {hero.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-4">
              <PillButton primary onClick={() => scrollTo(hero.buttons.primary.target)}>
                {hero.buttons.primary.text}
              </PillButton>
              <PillButton onClick={() => scrollTo(hero.buttons.secondary.target)}>
                {hero.buttons.secondary.text}
              </PillButton>
            </motion.div>
          </div>

          {/* PORTRAIT */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="flex w-full justify-center lg:justify-end">
            <ArchPortrait image={hero.portrait.image} alt={hero.portrait.alt} />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
