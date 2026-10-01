/**
 * HeroOcean — Three SVG wave lines + mouse parallax on portrait + orbiting skill chips.
 * Layout: text LEFT, portrait RIGHT.
 */
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "../config/hero.config";
import HeroButtons from "../components/HeroButtons";
import HeroRoleSlider from "../components/HeroRoleSlider";

const CHIPS = ["React", "C++", "Unity", "Godot", "JavaScript", "Python"];

function WaveLines() {
  const reduced = useReducedMotion();
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 600"
    >
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M0,${200 + i * 80} C360,${140 + i * 60} 720,${260 + i * 70} 1440,${180 + i * 75}`}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={1 - i * 0.2}
          strokeOpacity={0.18 - i * 0.04}
          animate={reduced ? {} : { d: [
            `M0,${200 + i * 80} C360,${140 + i * 60} 720,${260 + i * 70} 1440,${180 + i * 75}`,
            `M0,${220 + i * 80} C360,${160 + i * 60} 720,${240 + i * 70} 1440,${200 + i * 75}`,
            `M0,${200 + i * 80} C360,${140 + i * 60} 720,${260 + i * 70} 1440,${180 + i * 75}`,
          ]}}
          transition={{ duration: 8 + i * 4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

function OrbitChips({ reduced }) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {CHIPS.map((chip, i) => {
        const angle = (i / CHIPS.length) * 360;
        const r = 48;
        const x = 50 + r * Math.cos((angle * Math.PI) / 180);
        const y = 50 + r * Math.sin((angle * Math.PI) / 180);
        return (
          <motion.div
            key={chip}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-[10px] font-semibold text-[color:var(--accent)] backdrop-blur-sm"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={reduced ? {} : { rotate: [0, 360] }}
            transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
          >
            {chip}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function HeroOcean() {
  const reduced = useReducedMotion();
  const portraitRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setParallax({
        x: ((e.clientX - cx) / cx) * 12,
        y: ((e.clientY - cy) / cy) * 8,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  return (
    <div className="relative isolate min-h-screen overflow-hidden pt-24 lg:pt-28">
      <WaveLines />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100vh-112px)] items-center gap-y-16 lg:grid-cols-[52%_48%] lg:gap-x-8">

          {/* TEXT */}
          <div className="flex w-full flex-col max-w-[700px]">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
              className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[color:var(--accent)]" style={{ boxShadow: "0 0 12px var(--accent)" }} />
              <span className="text-sm font-medium text-[color:var(--text-secondary)]">Available for Internships</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
              className="mt-7 text-[64px] sm:text-[70px] lg:text-[76px] font-black leading-[0.95] tracking-[-0.045em] text-[color:var(--text-primary)]">
              {hero.name}
            </motion.h1>

            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
              className="mt-5 text-[26px] sm:text-[28px] font-semibold leading-none text-[color:var(--text-secondary)]">
              {hero.role}
            </motion.h2>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }} className="mt-2 overflow-visible">
              <HeroRoleSlider />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
              className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-[color:var(--text-muted)]">
              {hero.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
              <HeroButtons />
            </motion.div>
          </div>

          {/* PORTRAIT + ORBITING CHIPS */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative w-[340px] sm:w-[400px] lg:w-[460px]">
              <OrbitChips reduced={reduced} />
              <motion.div
                ref={portraitRef}
                style={reduced ? {} : { x: parallax.x, y: parallax.y }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="relative z-10 overflow-hidden rounded-[2rem] border border-[color:var(--border)] shadow-[0_0_80px_var(--glow)]"
              >
                <img
                  src={hero.portrait.image}
                  alt={hero.portrait.alt}
                  width={460}
                  height={560}
                  className="h-auto w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-primary)]/60 to-transparent" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
