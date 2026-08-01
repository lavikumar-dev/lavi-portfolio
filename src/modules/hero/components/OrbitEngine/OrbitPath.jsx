import { motion } from "framer-motion";
import { generateOrbitPath } from "./OrbitUtils";

export default function OrbitPath({
  rx,
  ry,
  amplitude,
  waves,
  opacity,
  duration,
  reverse = false,
  id,
}) {
  const path = generateOrbitPath({
    cx: 400,
    cy: 400,
    rx,
    ry,
    amplitude,
    waves,
  });

  return (
    <motion.svg
      viewBox="0 0 800 800"
      className="absolute inset-0 h-full w-full overflow-visible"
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        transformOrigin: "50% 50%",
      }}
    >
      <defs>
        <filter id={`blur-${id}`}>
          <feGaussianBlur stdDeviation="5" />
        </filter>

        <path
          id={`orbit-${id}`}
          d={path}
        />
      </defs>

      {/* Glow */}

      <use
        href={`#orbit-${id}`}
        fill="none"
        stroke={`rgba(34,211,238,${opacity * 0.18})`}
        strokeWidth="4"
        filter={`url(#blur-${id})`}
      />

      {/* Arc */}

      <use
        href={`#orbit-${id}`}
        fill="none"
        stroke={`rgba(34,211,238,${opacity})`}
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeDasharray="170 85"
      />

      {/* Energy Pulse */}

      <circle
        r="5"
        fill="#59f3ff"
        filter={`url(#blur-${id})`}
      >
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href={`#orbit-${id}`} />
        </animateMotion>
      </circle>
    </motion.svg>
  );
}