import { useMemo } from "react";
import useTheme from "../../personalization/hooks/useTheme";

const WORLD_COPY = {
  ocean: { symbol: "◌", label: "FLOW / EXPLORE", className: "theme-world-ocean" },
  midnight: { symbol: "◇", label: "SYSTEM / PRECISION", className: "theme-world-midnight" },
  emerald: { symbol: "⌁", label: "GROW / EVOLVE", className: "theme-world-emerald" },
  light: { symbol: "＋", label: "CLARITY / STRUCTURE", className: "theme-world-light" },
  blossom: { symbol: "✦", label: "CREATE / CONNECT", className: "theme-world-blossom" },
  crimson: { symbol: "†", label: "CRAFT / INTENT", className: "theme-world-crimson" },
};

function OceanScene() {
  return (
    <>
      <div className="theme-scene-ocean-grid" />
      <div className="theme-scene-ocean-orbit theme-scene-ocean-orbit-a" />
      <div className="theme-scene-ocean-orbit theme-scene-ocean-orbit-b" />
      <div className="theme-scene-ocean-glow theme-scene-ocean-glow-a" />
      <div className="theme-scene-ocean-glow theme-scene-ocean-glow-b" />
      <div className="theme-scene-ocean-current" />
      {Array.from({ length: 8 }, (_, index) => (
        <span
          key={index}
          className="theme-scene-ocean-particle"
          style={{
            left: `${8 + index * 11}%`,
            top: `${18 + (index * 19) % 68}%`,
            animationDelay: `${index * -0.8}s`,
          }}
        />
      ))}
    </>
  );
}

function MidnightScene() {
  return (
    <>
      <div className="theme-scene-midnight-plane theme-scene-midnight-plane-a" />
      <div className="theme-scene-midnight-plane theme-scene-midnight-plane-b" />
      <svg className="theme-scene-midnight-network" viewBox="0 0 1000 600" aria-hidden="true">
        <g fill="none" stroke="var(--accent)" strokeWidth="1">
          <path d="M70 500 250 330 410 430 580 190 760 320 930 120" opacity=".16" />
          <path d="M100 120 280 250 470 90 650 240 850 160" opacity=".1" />
          <path d="M250 330 280 250M410 430 580 190M760 320 850 160" opacity=".14" />
        </g>
      </svg>
      {Array.from({ length: 7 }, (_, index) => (
        <span key={index} className="theme-scene-midnight-node" style={{ left: `${15 + index * 12}%`, top: `${20 + (index * 17) % 60}%`, animationDelay: `${index * -0.5}s` }} />
      ))}
    </>
  );
}

function EmeraldScene() {
  return (
    <>
      <div className="theme-scene-emerald-glow" />
      <div className="theme-scene-emerald-vine theme-scene-emerald-vine-a" />
      <div className="theme-scene-emerald-vine theme-scene-emerald-vine-b" />
      {Array.from({ length: 12 }, (_, index) => (
        <span
          key={index}
          className="theme-scene-leaf"
          style={{ left: `${6 + (index * 17) % 90}%`, top: `${-8 - (index % 4) * 7}%`, animationDelay: `${index * -1.1}s`, rotate: `${index * 31}deg` }}
        />
      ))}
    </>
  );
}

function LightScene() {
  return (
    <>
      <div className="theme-scene-light-plane theme-scene-light-plane-a" />
      <div className="theme-scene-light-plane theme-scene-light-plane-b" />
      <div className="theme-scene-light-line theme-scene-light-line-a" />
      <div className="theme-scene-light-line theme-scene-light-line-b" />
      <div className="theme-scene-light-glow" />
    </>
  );
}

function BlossomScene() {
  return (
    <>
      <div className="theme-scene-blossom-branch" />
      <div className="theme-scene-blossom-glow" />
      {Array.from({ length: 13 }, (_, index) => (
        <span
          key={index}
          className="theme-scene-petal"
          style={{ left: `${4 + (index * 15) % 94}%`, top: `${-10 - (index % 5) * 8}%`, animationDelay: `${index * -1.35}s`, rotate: `${index * 23}deg` }}
        />
      ))}
    </>
  );
}

function CrimsonScene() {
  return (
    <>
      <div className="theme-scene-crimson-heat" />
      <div className="theme-scene-crimson-blade theme-scene-crimson-blade-a" />
      <div className="theme-scene-crimson-blade theme-scene-crimson-blade-b" />
      {Array.from({ length: 14 }, (_, index) => (
        <span key={index} className="theme-scene-ember" style={{ left: `${12 + (index * 13) % 82}%`, top: `${54 + (index * 7) % 35}%`, animationDelay: `${index * -0.45}s` }} />
      ))}
    </>
  );
}

const SCENES = {
  ocean: OceanScene,
  midnight: MidnightScene,
  emerald: EmeraldScene,
  light: LightScene,
  blossom: BlossomScene,
  crimson: CrimsonScene,
};

export default function ThemeSectionWorld({ section = "projects" }) {
  const { theme } = useTheme();
  const meta = useMemo(() => WORLD_COPY[theme] ?? WORLD_COPY.ocean, [theme]);
  const Scene = SCENES[theme] ?? OceanScene;

  return (
    <div className={`theme-section-world theme-section-world-${section} ${meta.className}`} aria-hidden="true">
      <Scene />
      <div className="theme-section-world-grain" />
      <div className="theme-section-world-label">
        <span>{meta.symbol}</span>
        {meta.label}
      </div>
    </div>
  );
}
