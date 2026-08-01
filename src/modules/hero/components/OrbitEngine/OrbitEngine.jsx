import OrbitPath from "./OrbitPath";
// import OrbitPulse from "./OrbitPulse";   // Disabled for now.
// We'll replace it with true SVG path animation.

import { ORBITS } from "./OrbitUtils";

export default function OrbitEngine() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2

        h-[760px]
        w-[760px]

        -translate-x-1/2
        -translate-y-1/2

        pointer-events-none
        z-10
      "
    >
      {ORBITS.map((orbit, index) => (
        <div
          key={orbit.id}
          className="absolute inset-0"
        >
          {/* Wavy Orbit */}

          <OrbitPath
            id={orbit.id}
            {...orbit}
            reverse={index % 2 === 1}
          />

          {/*
          =====================================================
          OLD ORBIT PULSE
          Disabled because OrbitPath now contains an SVG
          energy pulse travelling directly on the orbit.
          =====================================================

          <OrbitPulse
            size={10 + index * 2}
            duration={orbit.duration}
            reverse={index % 2 === 1}
          />
          */}
        </div>
      ))}
    </div>
  );
}