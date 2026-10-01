import { useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaBrain,
  FaCode,
  FaGamepad,
  FaGithub,
  FaGlobe,
  FaHeart,
  FaLightbulb,
  FaMusic,
  FaPuzzlePiece,
  FaReact,
  FaRocket,
  FaRoute,
  FaTerminal,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiGit,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiUnity,
} from "react-icons/si";

import useTheme from "../../personalization/hooks/useTheme";
import {
  attachUiAudioUnlock,
  playUiSound,
} from "../../shared/ui/interaction/sound";

import ThemeArtifact from "./about/ThemeArtifacts";

import "../../styles/About.css";

const SERVICE_ICONS = {
  web: FaGlobe,
  software: FaTerminal,
  game: FaGamepad,
  ai: FaLightbulb,
};

const SERVICE_KEYS = ["web", "software", "game", "ai"];

const STAT_ICONS = {
  calendar: FaGlobe,
  brain: FaBrain,
  target: FaRoute,
  rocket: FaRocket,
};

const TECHNOLOGIES = [
  { label: "C", icon: FaCode },
  { label: "C++", icon: SiCplusplus },
  { label: "JavaScript", icon: SiJavascript },
  { label: "React", icon: FaReact },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Unity", icon: SiUnity },
  { label: "Git & GitHub", icon: SiGit },
  { label: "Python", icon: SiPython },
];

const INTERESTS = [
  { label: "Problem Solving", icon: FaPuzzlePiece },
  { label: "UI/UX Design", icon: FaLightbulb },
  { label: "Open Source", icon: FaGithub },
  { label: "Reading", icon: FaBookOpen },
  { label: "Music", icon: FaMusic },
  { label: "Exploring Tech", icon: FaRocket },
];

const SERVICE_FALLBACKS = {
  web: {
    title: "Web Development",
    description:
      "Responsive, fast interfaces built around clear interaction, useful motion and practical performance.",
  },
  software: {
    title: "Software Development",
    description:
      "Efficient applications and tools designed around real problems, maintainable architecture and clean execution.",
  },
  game: {
    title: "Game Development",
    description:
      "Interactive experiences using Unity and Godot, with attention to gameplay, mechanics and player feel.",
  },
  ai: {
    title: "AI & Innovation",
    description:
      "Exploring AI-assisted workflows and emerging technology to build smarter, more useful digital experiences.",
  },
};

const VISUAL_META = {
  mountain: { label: "Explore", sublabel: "Follow the path" },
  architecture: { label: "Engineer", sublabel: "Build with precision" },
  tree: { label: "Grow", sublabel: "Learn by building" },
  blossom: { label: "Create", sublabel: "Make it human" },
  clarity: { label: "Simplify", sublabel: "Less, but better" },
  sword: { label: "Forge", sublabel: "Craft with intent" },
};

function SectionEyebrow({ children, className = "" }) {
  return (
    <div className={`about-eyebrow ${className}`}>
      <span className="about-eyebrow-orb" aria-hidden="true">
        <span />
      </span>
      <span>{children}</span>
    </div>
  );
}

function useTiltCard() {
  const ref = useRef(null);
  const frame = useRef(0);
  const target = useRef({ x: 0, y: 0, px: 50, py: 50 });
  const current = useRef({ x: 0, y: 0, px: 50, py: 50 });
  const reducedMotion = useReducedMotion();

  const update = () => {
    frame.current = 0;
    const element = ref.current;
    if (!element) return;

    current.current.x += (target.current.x - current.current.x) * 0.16;
    current.current.y += (target.current.y - current.current.y) * 0.16;
    current.current.px += (target.current.px - current.current.px) * 0.18;
    current.current.py += (target.current.py - current.current.py) * 0.18;

    element.style.setProperty("--tilt-x", `${current.current.x.toFixed(3)}deg`);
    element.style.setProperty("--tilt-y", `${current.current.y.toFixed(3)}deg`);
    element.style.setProperty("--pointer-x", `${current.current.px.toFixed(2)}%`);
    element.style.setProperty("--pointer-y", `${current.current.py.toFixed(2)}%`);

    const settling =
      Math.abs(target.current.x - current.current.x) > 0.01 ||
      Math.abs(target.current.y - current.current.y) > 0.01 ||
      Math.abs(target.current.px - current.current.px) > 0.02 ||
      Math.abs(target.current.py - current.current.py) > 0.02;

    if (settling) frame.current = requestAnimationFrame(update);
  };

  const onPointerMove = (event) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;
    target.current = {
      x: (50 - py) * 0.07,
      y: (px - 50) * 0.08,
      px,
      py,
    };
    if (!frame.current) frame.current = requestAnimationFrame(update);
  };

  const onPointerLeave = () => {
    target.current = { x: 0, y: 0, px: 50, py: 50 };
    if (!frame.current) frame.current = requestAnimationFrame(update);
  };

  useEffect(() => () => {
    if (frame.current) cancelAnimationFrame(frame.current);
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}

function LivingCard({ children, className = "", onHover, onClick, interactive = false }) {
  const { ref: tiltRef, onPointerMove: tiltPointerMove, onPointerLeave: tiltPointerLeave } = useTiltCard();

  return (
    <div
      ref={tiltRef}
      className={`about-living-card ${interactive ? "about-living-card-interactive" : ""} ${className}`}
      onPointerMove={tiltPointerMove}
      onPointerLeave={tiltPointerLeave}
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
    >
      <div className="about-card-light" aria-hidden="true" />
      <div className="about-card-sheen" aria-hidden="true" />
      <div className="about-card-depth about-card-depth-back" aria-hidden="true" />
      <div className="about-card-content">{children}</div>
    </div>
  );
}

function ScrollToProjects({ serviceKey }) {
  const handleClick = (event) => {
    event.stopPropagation();
    playUiSound("click");
    const section = document.getElementById("projects");
    if (!section) return;
    window.dispatchEvent(new CustomEvent("portfolio:focus-projects", { detail: { serviceKey } }));
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button type="button" className="about-explore-button" onClick={handleClick}>
      <span>Explore More</span><FaArrowRight aria-hidden="true" />
    </button>
  );
}

function About() {
  const { about, design, theme, effects } = useTheme();
  const reducedMotion = useReducedMotion();
  const data = about ?? {};
  const visual = design?.aboutVisual?.type ?? "mountain";
  const visualMeta = VISUAL_META[visual] ?? VISUAL_META.mountain;

  useEffect(() => { attachUiAudioUnlock(); }, []);

  const services = useMemo(() => (data.services ?? []).map((service, index) => {
    const key = SERVICE_KEYS[index] ?? `service-${index}`;
    return { ...SERVICE_FALLBACKS[key], ...service, key, icon: SERVICE_ICONS[key] ?? FaCode };
  }), [data.services]);

  return (
    <section id="about" aria-labelledby="about-heading" className={`about-world about-world-${theme} relative overflow-hidden`}>
      <div className="about-world-noise" aria-hidden="true" />
      <div className="about-world-vignette" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-24 sm:px-8 md:py-28 lg:px-10 lg:py-32">
        <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_.9fr] lg:gap-10">
          <div className="about-intro-column">
            <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
              <SectionEyebrow>About Me</SectionEyebrow>
            </motion.div>
            <motion.h2 id="about-heading" initial={{ opacity: 0, y: reducedMotion ? 0 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.05, duration: 0.62 }} className="about-title">{data.title}</motion.h2>
            <motion.p initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.11, duration: 0.58 }} className="about-description">{data.description}</motion.p>
            <motion.button type="button" initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.17, duration: 0.52 }} whileHover={reducedMotion ? undefined : { y: -3, scale: 1.01 }} whileTap={reducedMotion ? undefined : { scale: 0.985 }} onClick={() => { playUiSound("click"); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }} className="about-primary-cta">
              <span className="about-cta-spark" aria-hidden="true">✦</span><span>{data.cta ?? "Let's build something meaningful together."}</span><FaArrowRight aria-hidden="true" />
            </motion.button>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {(data.stats ?? []).map((stat, index) => {
                const Icon = STAT_ICONS[stat.icon] ?? FaCode;
                return (
                  <motion.div key={`${stat.label}-${index}`} initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.06, duration: 0.46 }}>
                    <LivingCard className="about-stat-card" onHover={() => playUiSound("hover")}>
                      <div className="about-stat-icon"><Icon aria-hidden="true" /></div><div className="about-stat-number">{stat.number}</div><div className="about-stat-label">{stat.label}</div>
                    </LivingCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: reducedMotion ? 0 : 34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.22 }} transition={{ duration: 0.7 }}>
            <LivingCard className="about-belief-card" onHover={() => playUiSound("focus")}>
              <div className="about-belief-glow" aria-hidden="true" />
              <div className="about-belief-copy">
                <div className="about-quote-mark" aria-hidden="true">“</div>
                <div className="about-artifact-label"><span>{visualMeta.label}</span><span>•</span><span>{visualMeta.sublabel}</span></div>
                <h3>{data.beliefTitle}</h3><div className="about-belief-line" />
                <p className="about-belief-highlight">{data.beliefHighlight}</p><p className="about-belief-body">{data.beliefBody}</p>
              </div>
              <div className="about-artifact-layer" data-visual={visual} data-animated={effects?.animations === false ? "false" : "true"}><ThemeArtifact type={visual} /></div>
              <div className="about-artifact-floor" aria-hidden="true" />
              <div className="about-artifact-caption" aria-hidden="true"><span>{design?.personality}</span></div>
            </LivingCard>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }} className="about-section-heading">
          <SectionEyebrow className="justify-center">What I Do</SectionEyebrow><h3>{data.servicesTitle}</h3><p>{data.servicesDescription}</p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.key} initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ delay: index * 0.06, duration: 0.48 }}>
                <LivingCard className={`about-service-card about-service-${service.key}`} onHover={() => playUiSound("hover")}>
                  <div className="about-service-artifact" aria-hidden="true"><span /><span /></div>
                  <div className="about-service-icon"><Icon /></div><h4>{service.title}</h4><p>{service.description}</p><ScrollToProjects serviceKey={service.key} />
                </LivingCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }} className="about-section-heading about-tech-heading">
          <SectionEyebrow className="justify-center">Technologies I Work With</SectionEyebrow>
        </motion.div>

        <div className="about-tech-shell">
          {TECHNOLOGIES.map(({ label, icon: Icon }, index) => (
            <motion.div key={label} initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ delay: index * 0.035, duration: 0.38 }}>
              <div className="about-tech-item" tabIndex={0} onMouseEnter={() => playUiSound("hover")} onFocus={() => playUiSound("hover")}>
                <div className="about-tech-icon"><Icon /></div><span>{label}</span><span className="about-tech-scan" aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.06fr_.94fr]">
          <motion.div initial={{ opacity: 0, x: reducedMotion ? 0 : -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }}>
            <LivingCard className="about-education-card" onHover={() => playUiSound("hover")}>
              <div className="about-mini-eyebrow"><FaBookOpen /> Education</div>
              <div className="about-education-content">
                <div><h4>Computer Science & Engineering</h4><strong>Chandigarh University</strong><span className="about-year-pill">2025 — 2029</span><p>Building a strong foundation in algorithms, data structures, software development and emerging technologies.</p></div>
                <div className="about-education-artifact" aria-hidden="true"><div className="about-book book-back" /><div className="about-book book-middle" /><div className="about-book book-front" /><div className="about-cap" /></div>
              </div>
            </LivingCard>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: reducedMotion ? 0 : 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }}>
            <LivingCard className="about-interests-card" onHover={() => playUiSound("hover")}>
              <div className="about-mini-eyebrow"><FaHeart /> Interests</div>
              <div className="about-interest-grid">
                {INTERESTS.map(({ label, icon: Icon }, index) => <div key={label} className="about-interest-item" onMouseEnter={() => playUiSound(index % 2 ? "hover" : "focus")}><Icon aria-hidden="true" /><span>{label}</span></div>)}
              </div>
            </LivingCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
