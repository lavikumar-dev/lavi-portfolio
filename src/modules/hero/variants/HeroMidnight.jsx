/**
 * HeroMidnight — Blueprint grid BG, typewriter role, portrait with crosshair frame.
 * MIRRORED: portrait LEFT, text RIGHT.
 */
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { hero } from "../config/hero.config";
import HeroButtons from "../components/HeroButtons";

function BlueprintGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

function Crosshairs({ mouseX, mouseY }) {
  return (
    <>
      {/* corner crosshairs */}
      {[["top-3 left-3", "origin-top-left"], ["top-3 right-3", "origin-top-right"], ["bottom-3 left-3", "origin-bottom-left"], ["bottom-3 right-3", "origin-bottom-right"]].map(([pos]) => (
        <div key={pos} className={`absolute ${pos} h-6 w-6 border-[color:var(--accent)] opacity-70`}
          style={{ borderWidth: "2px 0 0 2px", transform: pos.includes("right") ? pos.includes("bottom") ? "rotate(180deg)" : "rotate(90deg)" : pos.includes("bottom") ? "rotate(-90deg)" : "none" }} />
      ))}
      {/* live coordinate */}
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[color:var(--accent)] opacity-70">
        {mouseX.toFixed(0)}, {mouseY.toFixed(0)}
      </div>
    </>
  );
}

export default function HeroMidnight() {
  const reduced = useReducedMotion();
  const frameRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative isolate min-h-screen overflow-hidden pt-24 lg:pt-28">
      <BlueprintGrid />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100vh-112px)] items-center gap-y-16 lg:grid-cols-[45%_55%] lg:gap-x-12">

          {/* PORTRAIT — left */}
          <div className="flex w-full justify-center lg:justify-start order-2 lg:order-1">
            <div ref={frameRef} className="relative w-[300px] sm:w-[340px] lg:w-[380px]">
              <div className="relative overflow-hidden rounded-lg border border-[color:var(--border)]">
                <img
                  src={hero.portrait.image}
                  alt={hero.portrait.alt}
                  width={380}
                  height={480}
                  className="h-auto w-full object-cover object-top"
                  style={{ filter: "grayscale(20%) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-primary)]/50 to-transparent" />
                <Crosshairs mouseX={mouse.x} mouseY={mouse.y} />
              </div>
              {/* accent labels */}
              <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-widest text-[color:var(--accent)] opacity-60">
                <span>PORTRAIT.001</span><span>CS-ENGINEER</span>
              </div>
            </div>
          </div>

          {/* TEXT — right */}
          <div className="flex w-full flex-col order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--accent)] opacity-70">
              — 01 Identity
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
              className="mt-4 font-mono text-[56px] sm:text-[64px] lg:text-[72px] font-black leading-[0.92] tracking-[-0.04em] text-[color:var(--text-primary)]">
              {hero.name}
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="mt-4 font-mono text-[20px] text-[color:var(--accent)]">
              {reduced ? hero.rotatingRoles[0] : (
                <Typewriter
                  words={hero.rotatingRoles}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={35}
                  delaySpeed={1800}
                />
              )}
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="mt-6 max-w-[500px] font-mono text-[15px] leading-[1.8] text-[color:var(--text-muted)]">
              {hero.description}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              className="mt-3 inline-flex w-fit items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" style={{ boxShadow: "0 0 10px var(--accent)" }} />
              <span className="font-mono text-xs text-[color:var(--text-secondary)]">Available for Internships</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
              <HeroButtons />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
