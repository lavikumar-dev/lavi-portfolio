// =========================================================
// PROJECT NOVA
// Orbit Utility Functions
// =========================================================

export const TAU = Math.PI * 2;

export function generateOrbitPath({
  cx,
  cy,
  rx,
  ry,
  waves = 7,
  amplitude = 6,
  points = 260,
}) {
  let d = "";

  for (let i = 0; i <= points; i++) {
    const t = (i / points) * TAU;

    const wave =
      Math.sin(t * waves) * amplitude +
      Math.sin(t * (waves * 0.5)) * amplitude * 0.35;

    const x =
      cx +
      Math.cos(t) * (rx + wave);

    const y =
      cy +
      Math.sin(t) * (ry + wave);

    if (i === 0) {
      d += `M ${x} ${y}`;
    } else {
      d += ` L ${x} ${y}`;
    }
  }

  d += " Z";

  return d;
}

// =========================================================
// Orbit Presets
// =========================================================

export const ORBITS = [
  {
    id: 1,

    rx: 265,
    ry: 215,

    amplitude: 5,

    waves: 8,

    opacity: 0.18,

    duration: 40,
  },

  {
    id: 2,

    rx: 295,
    ry: 240,

    amplitude: 7,

    waves: 9,

    opacity: 0.14,

    duration: 55,
  },

  {
    id: 3,

    rx: 325,
    ry: 265,

    amplitude: 9,

    waves: 10,

    opacity: 0.10,

    duration: 70,
  },
];