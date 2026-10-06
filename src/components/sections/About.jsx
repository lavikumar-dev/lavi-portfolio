import { useEffect, useMemo } from "react";
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
import LivingCard from "../ui/LivingCard";
import {
  attachUiAudioUnlock,
  playUiSound,
} from "../../shared/ui/interaction/sound";

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


function MountainArtifact() {
  return (
    <svg viewBox="0 0 520 440" className="about-artifact-svg" aria-hidden="true">
      <defs>
        <linearGradient id="oceanMountainFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity=".38" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity=".02" />
        </linearGradient>
        <filter id="oceanGlowFilter"><feGaussianBlur stdDeviation="7" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <path d="M24 395 142 246 188 291 282 118 364 249 414 194 498 395Z" fill="url(#oceanMountainFill)" />
      <g fill="none" stroke="var(--accent)" strokeLinecap="round" filter="url(#oceanGlowFilter)">
        <path d="M24 395 142 246 188 291 282 118 364 249 414 194 498 395" strokeWidth="2.5" opacity=".75" />
        <path d="M80 395 153 302 199 330 282 208 345 300 409 250 462 395" strokeWidth="1.4" opacity=".38" />
        <path d="M121 395 183 344 219 358 282 258 324 338 372 307 417 395" strokeWidth="1.2" opacity=".28" />
      </g>
      <path d="M76 390C132 367 182 329 226 304 286 269 332 256 373 224 408 198 430 166 450 134" fill="none" stroke="var(--accent)" strokeWidth="3.2" filter="url(#oceanGlowFilter)" />
      <path d="M450 136V86M450 87l38 11-38 13Z" fill="var(--accent)" filter="url(#oceanGlowFilter)" />
      <g fill="var(--accent)" filter="url(#oceanGlowFilter)"><circle cx="112" cy="111" r="2.4" /><circle cx="387" cy="103" r="2" /><circle cx="342" cy="146" r="1.7" /></g>
    </svg>
  );
}

function ArchitectureArtifact() {
  return (
    <svg viewBox="0 0 520 440" className="about-artifact-svg" aria-hidden="true">
      <defs>
        <linearGradient id="midnightStructure" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity=".78" /><stop offset="1" stopColor="var(--accent)" stopOpacity=".08" />
        </linearGradient>
        <filter id="midnightStructureGlow"><feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g fill="none" stroke="var(--accent)" opacity=".18"><path d="M40 382H480" /><path d="M80 340 260 210 440 340" /><path d="M122 302 260 104 398 302" /></g>
      <g stroke="var(--accent)" strokeWidth="1.7" filter="url(#midnightStructureGlow)">
        <path d="M142 328 260 258 378 328 260 398Z" fill="url(#midnightStructure)" opacity=".5" />
        <path d="M168 270 260 214 352 270 260 326Z" fill="url(#midnightStructure)" opacity=".7" />
        <path d="M196 214 260 175 324 214 260 253Z" fill="url(#midnightStructure)" opacity=".92" />
        <path d="M260 175V398M168 270V326M352 270V326" opacity=".7" />
      </g>
      <g fill="var(--accent)" filter="url(#midnightStructureGlow)"><circle cx="260" cy="104" r="4" /><circle cx="122" cy="302" r="3" /><circle cx="398" cy="302" r="3" /></g>
    </svg>
  );
}

function TreeArtifact() {
  return (
    <svg viewBox="0 0 520 440" className="about-artifact-svg" aria-hidden="true">
      <defs>
        <radialGradient id="treeCoreGradient"><stop offset="0" stopColor="var(--accent)" stopOpacity=".8" /><stop offset="1" stopColor="var(--accent)" stopOpacity="0" /></radialGradient>
        <filter id="treeGlowFilter"><feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <circle cx="260" cy="275" r="148" fill="url(#treeCoreGradient)" opacity=".14" />
      <g fill="none" stroke="var(--accent)" strokeLinecap="round" filter="url(#treeGlowFilter)">
        <path d="M260 405C252 345 257 292 261 250 264 207 253 163 258 89" strokeWidth="10" opacity=".72" />
        <path d="M260 268C211 229 166 204 108 188M261 235C303 200 346 170 409 149M258 302C211 287 165 277 126 280M263 319C314 298 356 281 421 269" strokeWidth="4.5" opacity=".66" />
        <path d="M258 169C229 141 207 116 188 81M260 190C292 150 316 123 337 87" strokeWidth="3.2" opacity=".56" />
      </g>
      <g fill="var(--accent)" opacity=".78" filter="url(#treeGlowFilter)">
        <ellipse cx="103" cy="187" rx="18" ry="8" transform="rotate(-26 103 187)" /><ellipse cx="409" cy="148" rx="18" ry="8" transform="rotate(24 409 148)" />
        <ellipse cx="126" cy="280" rx="16" ry="8" transform="rotate(-8 126 280)" /><ellipse cx="421" cy="269" rx="16" ry="8" transform="rotate(12 421 269)" />
        <ellipse cx="188" cy="81" rx="16" ry="8" transform="rotate(-38 188 81)" /><ellipse cx="337" cy="87" rx="16" ry="8" transform="rotate(38 337 87)" />
      </g>
      <path d="M172 405Q260 348 348 405" fill="none" stroke="var(--accent)" opacity=".18" strokeWidth="2" />
    </svg>
  );
}

function BlossomArtifact() {
  return (
    <svg viewBox="0 0 520 440" className="about-artifact-svg" aria-hidden="true">
      <defs><filter id="blossomGlowFilter"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
      <g fill="none" stroke="var(--accent)" strokeWidth="2.4" opacity=".55"><path d="M110 405C143 334 194 295 221 232 241 185 272 145 348 97" /><path d="M204 300C157 275 121 243 102 205M245 230C301 224 340 204 386 160" /></g>
      <g fill="var(--accent)" opacity=".78" filter="url(#blossomGlowFilter)">
        <g transform="translate(100 202)"><ellipse rx="24" ry="10" transform="rotate(18)" /><ellipse rx="24" ry="10" transform="rotate(90)" /><ellipse rx="24" ry="10" transform="rotate(162)" /><ellipse rx="24" ry="10" transform="rotate(234)" /><ellipse rx="24" ry="10" transform="rotate(306)" /><circle r="7" fill="var(--bg-primary)" /></g>
        <g transform="translate(348 98) scale(.8)"><ellipse rx="24" ry="10" transform="rotate(18)" /><ellipse rx="24" ry="10" transform="rotate(90)" /><ellipse rx="24" ry="10" transform="rotate(162)" /><ellipse rx="24" ry="10" transform="rotate(234)" /><ellipse rx="24" ry="10" transform="rotate(306)" /></g>
        <g transform="translate(386 160) scale(.58)"><ellipse rx="24" ry="10" transform="rotate(18)" /><ellipse rx="24" ry="10" transform="rotate(90)" /><ellipse rx="24" ry="10" transform="rotate(162)" /><ellipse rx="24" ry="10" transform="rotate(234)" /><ellipse rx="24" ry="10" transform="rotate(306)" /></g>
      </g>
      <g fill="var(--accent)" opacity=".5"><circle cx="78" cy="111" r="3" /><circle cx="420" cy="244" r="4" /><circle cx="312" cy="320" r="3" /></g>
    </svg>
  );
}

function ClarityArtifact() {
  return (
    <svg viewBox="0 0 520 440" className="about-artifact-svg" aria-hidden="true">
      <defs><linearGradient id="claritySteps" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="var(--accent)" stopOpacity=".28" /><stop offset="1" stopColor="var(--accent)" stopOpacity=".04" /></linearGradient></defs>
      <g fill="none" stroke="var(--accent)" opacity=".36" strokeWidth="1.4"><path d="M58 388H466" /><path d="M92 350 162 312 232 274 302 236 372 198 442 160" /></g>
      <path d="M118 346h54v-28h54v-28h54v-28h54v-28h54v28h-54v28h-54v28h-54v28h-54v28h-54Z" fill="url(#claritySteps)" stroke="var(--accent)" strokeWidth="1.4" opacity=".74" />
      <g fill="var(--accent)" opacity=".68"><circle cx="372" cy="198" r="4" /><circle cx="442" cy="160" r="3" /></g>
      <path d="M372 198 414 176" stroke="var(--accent)" strokeWidth="1.4" strokeDasharray="5 7" opacity=".45" />
    </svg>
  );
}

function SwordArtifact() {
  return (
    <svg viewBox="0 0 520 440" className="about-artifact-svg about-sword-artifact" aria-hidden="true">
      <defs>
        <linearGradient id="swordBlade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff7f4" stopOpacity=".95" /><stop offset=".18" stopColor="#c7b8b4" stopOpacity=".9" /><stop offset=".48" stopColor="#6f6765" stopOpacity=".8" /><stop offset=".82" stopColor="#2a2525" stopOpacity=".96" /><stop offset="1" stopColor="#0d0909" stopOpacity="1" /></linearGradient>
        <linearGradient id="swordEdge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity=".95" /><stop offset=".5" stopColor="var(--accent)" stopOpacity=".9" /><stop offset="1" stopColor="#5b0808" stopOpacity=".4" /></linearGradient>
        <filter id="swordArtifactGlow"><feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <filter id="swordHeat"><feGaussianBlur stdDeviation="18" /></filter>
      </defs>
      <ellipse cx="266" cy="389" rx="128" ry="18" fill="var(--accent)" opacity=".12" filter="url(#swordHeat)" />
      <path d="M258 364 271 101 291 44 307 101 286 364Z" fill="url(#swordBlade)" stroke="#9e9290" strokeWidth="1.6" filter="url(#swordArtifactGlow)" />
      <path d="M285 96 300 58 303 96 285 344" fill="none" stroke="url(#swordEdge)" strokeWidth="3.2" filter="url(#swordArtifactGlow)" />
      <path d="M271 103 287 84" stroke="#fff" strokeWidth="2" opacity=".72" />
      <path d="M238 119H329" stroke="#1b1515" strokeWidth="11" strokeLinecap="round" /><path d="M236 116H331" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" filter="url(#swordArtifactGlow)" />
      <path d="M251 122 222 159M316 122 346 159" stroke="#4d1719" strokeWidth="12" strokeLinecap="round" /><path d="M251 124 222 158M316 124 346 158" stroke="#d6b1b1" strokeWidth="2" opacity=".8" />
      <path d="M274 160 302 145 289 328 273 355Z" fill="#efe6e2" opacity=".09" />
      <path d="M248 362Q282 343 317 362" fill="none" stroke="var(--accent)" strokeWidth="2" opacity=".42" /><path d="M245 375Q282 355 320 375" fill="none" stroke="#7c1114" strokeWidth="4" opacity=".55" />
      <g className="sword-embers" fill="var(--accent)" filter="url(#swordArtifactGlow)"><circle cx="154" cy="322" r="3" /><circle cx="370" cy="286" r="2.5" /><circle cx="402" cy="346" r="2" /><circle cx="176" cy="256" r="2" /></g>
    </svg>
  );
}

function ThemeArtifact({ type }) {
  const Artifact = { mountain: MountainArtifact, architecture: ArchitectureArtifact, tree: TreeArtifact, blossom: BlossomArtifact, clarity: ClarityArtifact, sword: SwordArtifact }[type] ?? MountainArtifact;
  return <Artifact />;
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
  const { about, design, theme } = useTheme();
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
    <section id="about" className={`about-world about-world-${theme} relative overflow-hidden`}>
      <div className="about-world-noise" aria-hidden="true" />
      <div className="about-world-vignette" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-24 sm:px-8 md:py-28 lg:px-10 lg:py-32">
        <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_.9fr] lg:gap-10">
          <div className="about-intro-column">
            <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
              <SectionEyebrow>About Me</SectionEyebrow>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: reducedMotion ? 0 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.05, duration: 0.62 }} className="about-title">{data.title}</motion.h2>
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
              <div className="about-artifact-layer" data-visual={visual}><ThemeArtifact type={visual} /></div>
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
