import useTheme from "../../personalization/hooks/useTheme";

function OceanWorld() {
  const bubbles = Array.from({ length: 9 }, (_, index) => ({
    left: `${8 + ((index * 17) % 84)}%`,
    top: `${18 + ((index * 23) % 66)}%`,
    size: 3 + (index % 3) * 2,
    delay: `${index * 1.2}s`,
  }));

  return (
    <>
      <div className="world-ocean-grid" />
      <div className="world-ocean-arc world-ocean-arc-a" />
      <div className="world-ocean-arc world-ocean-arc-b" />
      <div className="world-ocean-glow world-ocean-glow-a" />
      <div className="world-ocean-glow world-ocean-glow-b" />
      {bubbles.map((bubble) => (
        <span
          key={bubble.left + bubble.top}
          className="world-ocean-bubble"
          style={{ left: bubble.left, top: bubble.top, width: bubble.size, height: bubble.size, animationDelay: bubble.delay }}
        />
      ))}
    </>
  );
}

function MidnightWorld() {
  const nodes = Array.from({ length: 12 }, (_, index) => ({
    left: `${10 + ((index * 23) % 78)}%`,
    top: `${15 + ((index * 31) % 70)}%`,
    delay: `${index * 0.3}s`,
  }));

  return (
    <>
      <div className="world-midnight-grid" />
      <svg className="world-midnight-network" viewBox="0 0 1000 800" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="var(--accent)" strokeOpacity=".08" strokeWidth="1">
          <path d="M70 610 260 420 420 560 590 250 770 420 930 170" />
          <path d="M110 170 310 320 510 120 720 340 900 280" />
          <path d="M260 420 310 320M420 560 590 250M770 420 900 280" />
        </g>
      </svg>
      {nodes.map((node, index) => (
        <span key={index} className="world-midnight-node" style={{ left: node.left, top: node.top, animationDelay: node.delay }} />
      ))}
      <div className="world-midnight-halo" />
    </>
  );
}

function LightWorld() {
  return (
    <>
      <div className="world-light-grid" />
      <div className="world-light-architecture world-light-architecture-a" />
      <div className="world-light-architecture world-light-architecture-b" />
      <div className="world-light-glow" />
    </>
  );
}

function FallingShape({ index, type }) {
  return (
    <span
      className={`world-falling-shape world-falling-${type}`}
      style={{
        left: `${(index * 13 + 7) % 96}%`,
        top: `${-12 - (index % 5) * 9}%`,
        width: `${10 + (index % 4) * 5}px`,
        height: `${7 + (index % 4) * 4}px`,
        animationDuration: `${22 + (index % 6) * 2}s`,
        animationDelay: `${index * 1.35}s`,
        rotate: `${index * 27}deg`,
      }}
    />
  );
}

function EmeraldWorld() {
  return (
    <>
      <div className="world-emerald-glow world-emerald-glow-a" />
      <div className="world-emerald-glow world-emerald-glow-b" />
      <div className="world-emerald-vine world-emerald-vine-a" />
      <div className="world-emerald-vine world-emerald-vine-b" />
      {Array.from({ length: 8 }, (_, index) => <FallingShape key={index} index={index} type="leaf" />)}
    </>
  );
}

function BlossomWorld() {
  return (
    <>
      <div className="world-blossom-glow world-blossom-glow-a" />
      <div className="world-blossom-glow world-blossom-glow-b" />
      <div className="world-blossom-branch" />
      {Array.from({ length: 10 }, (_, index) => <FallingShape key={index} index={index} type="petal" />)}
    </>
  );
}

function CrimsonWorld() {
  const embers = Array.from({ length: 12 }, (_, index) => ({
    left: `${7 + ((index * 19) % 88)}%`,
    top: `${55 + ((index * 17) % 40)}%`,
    delay: `${index * .65}s`,
    size: 2 + (index % 3),
  }));

  return (
    <>
      <div className="world-crimson-heat" />
      <div className="world-crimson-ring world-crimson-ring-a" />
      <div className="world-crimson-ring world-crimson-ring-b" />
      <div className="world-crimson-fractures" />
      {embers.map((ember, index) => <span key={index} className="world-crimson-ember" style={{ left: ember.left, top: ember.top, width: ember.size, height: ember.size, animationDelay: ember.delay }} />)}
    </>
  );
}

export default function ThemeWorldBackground() {
  const { design } = useTheme();
  const worlds = { ocean: OceanWorld, midnight: MidnightWorld, light: LightWorld, emerald: EmeraldWorld, blossom: BlossomWorld, crimson: CrimsonWorld };
  const World = worlds[design?.atmosphere?.type] ?? OceanWorld;

  return (
    <div className="theme-world-background pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <World />
      <div className="theme-world-bottom-fade" />
    </div>
  );
}
