/**
 * HeroEmerald — SVG vines drawing from bottom-left, portrait in blob/leaf mask, breathing glow.
 * Layout: portrait FIRST (left), text beside it (right).
 */
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "../config/hero.config";
import HeroButtons from "../components/HeroButtons";
import HeroRoleSlider from "../components/HeroRoleSlider";

const VINE_PATH = "M0,560 C60,480 40,380 100,300 C160,220 120,140 200,80 C260,30 320,60 380,20";
const VINE_PATH2 = "M20,580 C80,500 60,400 130,320 C190,240 160,160 240,100 C300,50 340,80 400,40";

function VineLines({ reduced }) {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-[80%] w-[35%]" viewBox="0 0 420 600" fill="none">
      <motion.path d={VINE_PATH} stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.35" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={reduced ? {} : { duration: 2.4, ease: "easeOut", delay: 0.2 }}
      />
      <motion.path d={VINE_PATH2} stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.18" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={reduced ? {} : { duration: 3, ease: "easeOut", delay: 0.6 }}
      />
      {/* small leaf nodes */}
      {[[100, 300], [200, 80], [380, 20]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="5"
          fill="var(--accent)" fillOpacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={reduced ? {} : { delay: 1 + i * 0.3, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

function BlobPortrait({ image, alt, reduced }) {
  const id = "emerald-blob-clip";
  return (
    <div className="relative">
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            <path d="M0.52,0.02 C0.72,0.02 0.94,0.1 0.97,0.3 C1,0.5 0.88,0.72 0.72,0.86 C0.56,1 0.32,0.98 0.16,0.86 C0,0.74 -0.02,0.5 0.06,0.3 C0.14,0.1 0.32,0.02 0.52,0.02 Z" />
          </clipPath>
        </defs>
      </svg>
      <motion.div
        animate={reduced ? {} : { scale: [1, 1.015, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
        style={{ filter: "drop-shadow(0 0 40px var(--glow))" }}
      >
        <img
          src={image}
          alt={alt}
          width={400}
          height={500}
          className="h-auto w-full max-w-[360px] sm:max-w-[400px]"
          style={{ clipPath: `url(#${id})` }}
        />
      </motion.div>
    </div>
  );
}

export default function HeroEmerald() {
  const reduced = useReducedMotion();

  return (
    <div className="relative isolate min-h-screen overflow-hidden pt-24 lg:pt-28">
      <VineLines reduced={reduced} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100vh-112px)] items-center gap-y-16 lg:grid-cols-[44%_56%] lg:gap-x-10">

          {/* PORTRAIT — left */}
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
            className="flex w-full justify-center">
            <BlobPortrait image={hero.portrait.image} alt={hero.portrait.alt} reduced={reduced} />
          </motion.div>

          {/* TEXT — right */}
          <div className="flex w-full flex-col max-w-[640px]">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
              className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[color:var(--accent)]" style={{ boxShadow: "0 0 12px var(--accent)" }} />
              <span className="text-sm font-medium text-[color:var(--text-secondary)]">Available for Internships</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
              className="mt-7 text-[60px] sm:text-[68px] lg:text-[74px] font-black leading-[0.95] tracking-[-0.04em] text-[color:var(--text-primary)]">
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
              className="mt-6 max-w-[540px] text-[16px] leading-[1.75] text-[color:var(--text-muted)]">
              {hero.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
              <HeroButtons />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
