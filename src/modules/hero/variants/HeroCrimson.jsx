/**
 * HeroCrimson — Cinematic. Diagonal slash divider, clip-path name reveal, letterbox bars,
 * duotone portrait, ember particles.
 */
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "../config/hero.config";
import HeroButtons from "../components/HeroButtons";
import HeroRoleSlider from "../components/HeroRoleSlider";

const EMBERS = Array.from({ length: 12 }, (_, i) => ({
  x: `${(i * 7.5 + 5) % 90}%`,
  delay: i * 0.3,
  duration: 3 + (i % 4),
  size: 3 + (i % 3),
}));

function EmberParticles({ reduced }) {
  if (reduced) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {EMBERS.map((e, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[color:var(--accent)]"
          style={{ left: e.x, bottom: "-10px", width: e.size, height: e.size, opacity: 0.6 }}
          animate={{ y: [0, -(400 + i * 30)], opacity: [0, 0.8, 0] }}
          transition={{ duration: e.duration, delay: e.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function DiagonalDivider() {
  return (
    <div aria-hidden="true"
      className="absolute inset-y-0 right-[42%] hidden lg:block"
      style={{
        width: "3px",
        background: "linear-gradient(180deg, transparent, var(--accent) 30%, var(--accent) 70%, transparent)",
        transform: "rotate(-8deg) scaleY(1.2)",
        opacity: 0.5,
      }}
    />
  );
}

function LetterboxBars() {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 h-14 bg-[color:var(--bg-primary)] opacity-80" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-[color:var(--bg-primary)] opacity-80" />
    </>
  );
}

function DuotonePortrait({ image, alt }) {
  return (
    <div className="relative overflow-hidden rounded-lg"
      style={{ boxShadow: "0 0 80px rgba(220,38,38,0.3)" }}>
      <img
        src={image}
        alt={alt}
        width={440}
        height={540}
        className="h-auto w-full object-cover object-top"
        style={{ filter: "grayscale(40%) sepia(20%) saturate(1.4) hue-rotate(-10deg)" }}
      />
      {/* duotone red overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(220,38,38,0.18) 0%, transparent 50%)" }} />
      {/* vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(7,2,2,0.7) 100%)" }} />
    </div>
  );
}

export default function HeroCrimson() {
  const reduced = useReducedMotion();

  // Clip-path sword-slash reveal animation for the name
  const nameReveal = reduced
    ? { opacity: 1 }
    : {
        clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
        opacity: [0, 1],
      };

  return (
    <div className="relative isolate min-h-screen overflow-hidden pt-24 lg:pt-28">
      <LetterboxBars />
      <EmberParticles reduced={reduced} />
      <DiagonalDivider />

      {/* Subtle grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100vh-112px)] items-center gap-y-16 lg:grid-cols-[52%_48%] lg:gap-x-6">

          {/* TEXT */}
          <div className="flex w-full flex-col max-w-[700px]">
            <motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.35em] text-[color:var(--accent)]">
              <span className="h-px w-8 bg-[color:var(--accent)]" />
              The Crimson Sword
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)", ...nameReveal }}
              transition={reduced ? {} : { delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-[64px] sm:text-[72px] lg:text-[82px] font-black leading-[0.92] tracking-[-0.05em] text-[color:var(--text-primary)]"
            >
              {hero.name}
            </motion.h1>

            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
              className="mt-5 h-px w-[80px] bg-[color:var(--accent)]" />

            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-4 text-[22px] font-semibold text-[color:var(--text-secondary)]">
              {hero.role}
            </motion.h2>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-2 overflow-visible">
              <HeroRoleSlider />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="mt-6 max-w-[560px] text-[16px] leading-[1.7] text-[color:var(--text-muted)]">
              {hero.description}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
              className="mt-5 inline-flex w-fit items-center gap-3 border border-[color:var(--border)] px-4 py-2">
              <span className="h-2.5 w-2.5 bg-[color:var(--accent)]" style={{ boxShadow: "0 0 10px var(--accent)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--text-secondary)]">Available for Internships</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }}>
              <HeroButtons />
            </motion.div>
          </div>

          {/* PORTRAIT */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="flex w-full justify-center lg:justify-end">
            <div className="w-[340px] sm:w-[400px] lg:w-[440px]">
              <DuotonePortrait image={hero.portrait.image} alt={hero.portrait.alt} />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
