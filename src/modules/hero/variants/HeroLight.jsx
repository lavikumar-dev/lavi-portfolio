/**
 * HeroLight — Editorial layout. Oversized name on top, small portrait with caption,
 * thin rules and numbered labels. No glows, crisp shadows only.
 */
import { motion } from "framer-motion";

import { hero } from "../config/hero.config";
import HeroButtons from "../components/HeroButtons";
import HeroRoleSlider from "../components/HeroRoleSlider";

export default function HeroLight() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[color:var(--bg-primary)] pt-24 lg:pt-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="min-h-[calc(100vh-112px)] py-16">

          {/* OVERSIZED NAME — full width on top */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(5rem,11vw,9rem)] font-black leading-[0.88] tracking-[-0.055em] text-[color:var(--text-primary)]"
            style={{ fontFamily: "var(--type-display-font)" }}
          >
            {hero.name}
          </motion.h1>

          {/* THIN RULE */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 h-px w-full bg-[color:var(--border)]"
          />

          {/* MAIN CONTENT GRID */}
          <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">

            {/* TEXT CONTENT */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-[color:var(--text-muted)]">01</span>
                  <h2 className="text-lg font-semibold text-[color:var(--text-secondary)]">{hero.role}</h2>
                </div>
                <div className="ml-8 overflow-visible">
                  <HeroRoleSlider />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.4 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-[color:var(--text-muted)]">02</span>
                  <h3 className="text-lg font-semibold text-[color:var(--text-secondary)]">About</h3>
                </div>
                <p className="ml-8 max-w-[520px] text-base leading-[1.7] text-[color:var(--text-muted)]">
                  {hero.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-[color:var(--text-muted)]">03</span>
                  <h3 className="text-lg font-semibold text-[color:var(--text-secondary)]">Status</h3>
                </div>
                <div className="ml-8 inline-flex items-center gap-3 rounded-sm border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <span className="text-sm font-medium text-[color:var(--text-primary)]">Available for Internships</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.4 }}
                className="ml-8 pt-4"
              >
                <HeroButtons />
              </motion.div>
            </div>

            {/* PORTRAIT + CAPTION */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="relative">
                <img
                  src={hero.portrait.image}
                  alt={hero.portrait.alt}
                  width={280}
                  height={350}
                  className="h-auto w-[280px] object-cover object-top shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                  style={{ border: "1px solid var(--border)" }}
                />
              </div>
              <div className="mt-4 space-y-1 text-center lg:text-left">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
                  Lavi Kumar
                </p>
                <p className="font-mono text-xs text-[color:var(--text-muted)]">
                  Computer Science Student
                </p>
                <p className="font-mono text-xs text-[color:var(--text-muted)]">
                  Chandigarh University, 2025-2029
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}