import { motion } from "framer-motion";

/*
|--------------------------------------------------------------------------
| Floating Card Icon
|--------------------------------------------------------------------------
*/

function FloatingIcon({ type }) {
  if (type === "react") {
    return (
      <svg
        viewBox="0 0 48 48"
        className="
          h-8
          w-8
          shrink-0

          text-[color:var(--accent)]

          drop-shadow-[0_0_10px_var(--glow)]
        "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center */}

        <circle
          cx="24"
          cy="24"
          r="4"
          fill="currentColor"
        />

        {/* Horizontal orbit */}

        <ellipse
          cx="24"
          cy="24"
          rx="20"
          ry="8"
          stroke="currentColor"
          strokeWidth="2.5"
        />

        {/* Diagonal orbit */}

        <ellipse
          cx="24"
          cy="24"
          rx="20"
          ry="8"
          transform="rotate(60 24 24)"
          stroke="currentColor"
          strokeWidth="2.5"
        />

        {/* Other diagonal orbit */}

        <ellipse
          cx="24"
          cy="24"
          rx="20"
          ry="8"
          transform="rotate(120 24 24)"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  if (type === "unity") {
    return (
      <svg
        viewBox="0 0 48 48"
        className="
          h-8
          w-8
          shrink-0

          text-[color:var(--accent)]

          drop-shadow-[0_0_10px_var(--glow)]
        "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Unity-inspired geometric mark */}

        <path
          d="
            M24 6
            L31 10
            L31 17
            L38 21
            L38 29
            L31 33
            L31 40
            L24 44
            L17 40
            L17 33
            L10 29
            L10 21
            L17 17
            L17 10
            Z
          "
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        <path
          d="
            M17 17
            L24 21
            L31 17

            M24 21
            L24 31

            M17 33
            L24 29
            L31 33
          "
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg
        viewBox="0 0 48 48"
        className="
          h-8
          w-8
          shrink-0

          text-[color:var(--accent)]

          drop-shadow-[0_0_12px_var(--glow)]
        "
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main sparkle */}

        <path
          d="
            M24 4
            L27.5 17
            L40 20.5
            L27.5 24
            L24 38
            L20.5 24
            L8 20.5
            L20.5 17
            Z
          "
        />

        {/* Small sparkle */}

        <path
          d="
            M38 30
            L39.8 36.2
            L46 38
            L39.8 39.8
            L38 46
            L36.2 39.8
            L30 38
            L36.2 36.2
            Z
          "
          opacity="0.75"
        />
      </svg>
    );
  }

  return null;
}

/*
|--------------------------------------------------------------------------
| Floating Card
|--------------------------------------------------------------------------
*/

export default function FloatingCard({ tag }) {
  return (
    <motion.div
      className="
        absolute
        z-30

        hidden
        lg:block

        w-max

        min-w-[150px]
        max-w-[210px]
      "
      style={{
        top: tag.top,
        bottom: tag.bottom,
        left: tag.left,
        right: tag.right,
      }}
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 10,
      }}
      animate={{
        opacity: 1,

        y: [
          0,
          -tag.float,
          0,
        ],

        scale: [
          1,
          1.025,
          1,
        ],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          ease: "easeOut",
        },

        y: {
          duration: tag.duration,
          repeat: Infinity,
          ease: "easeInOut",
        },

        scale: {
          duration: tag.duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div
        className="
          flex
          items-center
          gap-3

          rounded-[18px]

          border
          border-[color:var(--border)]

          bg-[color:var(--surface-strong)]

          px-4
          py-3

          backdrop-blur-xl

          shadow-[var(--surface-shadow)]

          transition-all
          duration-300

          hover:-translate-y-1

          hover:border-[color:var(--border-strong)]

          hover:shadow-[0_15px_45px_var(--glow)]
        "
      >
        {/* =====================================================
            ICON
        ====================================================== */}

        <FloatingIcon type={tag.id} />

        {/* =====================================================
            TEXT
        ====================================================== */}

        <div className="flex flex-col">
          <p
            className="
              whitespace-nowrap

              text-[8px]
              lg:text-[9px]

              font-medium

              uppercase

              tracking-[0.22em]

              text-[color:var(--text-muted)]
            "
          >
            {tag.category}
          </p>

          <h4
            className="
              mt-0.5

              whitespace-nowrap

              text-base

              font-semibold

              leading-tight

              text-[color:var(--text-primary)]
            "
          >
            {tag.value}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}