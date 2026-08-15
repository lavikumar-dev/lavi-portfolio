import useTheme from "../hooks/useTheme";

const THEME_BUTTONS = [
  {
    id: "ocean",
    label: "🌊 Ocean",
    description: "Professional • Calm • Trustworthy",
  },
  {
    id: "midnight",
    label: "🌙 Midnight",
    description: "Minimal • Elegant • Focused",
  },
  {
    id: "light",
    label: "☀️ Light",
    description: "Clean • Readable • Professional",
  },
  {
    id: "emerald",
    label: "🍃 Emerald",
    description: "Natural • Peaceful • Organic",
  },
  {
    id: "blossom",
    label: "🌸 Blossom",
    description: "Soft • Friendly • Welcoming",
  },
  {
    id: "crimson",
    label: "⚔️ Crimson Sword",
    description: "Discipline • Mastery • Precision",
  },
];

export default function ThemeEngineTester() {
  const { theme, previousTheme, isTransitioning, transitionType, setTheme } =
    useTheme();

  return (
    <aside
      aria-label="Theme Engine Developer Tester"
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,

        width: 310,

        zIndex: 99999,

        padding: 18,

        borderRadius: 20,

        background: "rgba(7, 12, 24, 0.94)",

        border: "1px solid rgba(255, 255, 255, 0.10)",

        backdropFilter: "blur(24px)",

        WebkitBackdropFilter: "blur(24px)",

        boxShadow: "0 24px 80px rgba(0, 0, 0, 0.48)",

        color: "#ffffff",

        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        style={{
          marginBottom: 16,
        }}
      >
        <div
          style={{
            marginBottom: 5,

            fontSize: 10,

            fontWeight: 800,

            letterSpacing: "0.20em",

            textTransform: "uppercase",

            color: "#22d3ee",
          }}
        >
          Project NOVA
        </div>

        <div
          style={{
            fontSize: 18,

            fontWeight: 750,

            letterSpacing: "-0.02em",
          }}
        >
          Theme Engine
        </div>

        <div
          style={{
            marginTop: 4,

            fontSize: 11,

            color: "#64748b",
          }}
        >
          Developer verification panel
        </div>
      </div>

      {/* =====================================================
          CURRENT STATE
      ====================================================== */}

      <div
        style={{
          marginBottom: 14,

          padding: 12,

          borderRadius: 14,

          background: "rgba(255, 255, 255, 0.035)",

          border: "1px solid rgba(255, 255, 255, 0.07)",
        }}
      >
        <div
          style={{
            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",

            gap: 10,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,

                fontWeight: 700,

                letterSpacing: "0.12em",

                textTransform: "uppercase",

                color: "#64748b",
              }}
            >
              Current Theme
            </div>

            <div
              style={{
                marginTop: 4,

                fontSize: 15,

                fontWeight: 700,

                textTransform: "capitalize",
              }}
            >
              {theme}
            </div>
          </div>

          <div
            style={{
              width: 9,

              height: 9,

              borderRadius: "50%",

              background: isTransitioning ? "#f59e0b" : "#34d399",

              boxShadow: isTransitioning
                ? "0 0 14px rgba(245,158,11,.65)"
                : "0 0 14px rgba(52,211,153,.65)",
            }}
          />
        </div>

        <div
          style={{
            marginTop: 10,

            fontSize: 10,

            color: "#64748b",

            lineHeight: 1.5,
          }}
        >
          Previous:{" "}
          <span
            style={{
              color: "#94a3b8",
            }}
          >
            {previousTheme ?? "None"}
          </span>
        </div>

        <div
          style={{
            marginTop: 3,

            fontSize: 10,

            color: isTransitioning ? "#fbbf24" : "#64748b",
          }}
        >
          {isTransitioning
            ? `Transition: ${transitionType ?? "running"}`
            : "Transition: idle"}
        </div>
      </div>

      {/* =====================================================
          THEME OPTIONS
      ====================================================== */}

      <div
        style={{
          display: "flex",

          flexDirection: "column",

          gap: 7,
        }}
      >
        {THEME_BUTTONS.map((item) => {
          const active = theme === item.id;

          const isCrimson = item.id === "crimson";

          return (
            <button
              key={item.id}
              type="button"
              disabled={isTransitioning}
              onClick={() => setTheme(item.id)}
              style={{
                width: "100%",

                padding: "10px 12px",

                borderRadius: 12,

                border: active
                  ? isCrimson
                    ? "1px solid rgba(220,38,38,.65)"
                    : "1px solid rgba(34,211,238,.55)"
                  : isCrimson
                    ? "1px solid rgba(220,38,38,.20)"
                    : "1px solid rgba(255,255,255,.07)",

                background: active
                  ? isCrimson
                    ? "rgba(220,38,38,.12)"
                    : "rgba(34,211,238,.10)"
                  : "rgba(255,255,255,.025)",

                color: active ? (isCrimson ? "#f87171" : "#67e8f9") : "#e2e8f0",

                cursor: isTransitioning ? "wait" : "pointer",

                textAlign: "left",

                transition: "all 180ms ease",

                opacity: isTransitioning ? 0.65 : 1,
              }}
            >
              <div
                style={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent: "space-between",

                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 13,

                    fontWeight: active ? 700 : 600,
                  }}
                >
                  {item.label}
                </span>

                {active && (
                  <span
                    style={{
                      fontSize: 9,

                      fontWeight: 800,

                      letterSpacing: "0.08em",

                      textTransform: "uppercase",

                      opacity: 0.8,
                    }}
                  >
                    Active
                  </span>
                )}
              </div>

              <div
                style={{
                  marginTop: 3,

                  fontSize: 9,

                  color: active
                    ? isCrimson
                      ? "#fca5a5"
                      : "#94a3b8"
                    : "#475569",
                }}
              >
                {item.description}
              </div>
            </button>
          );
        })}
      </div>

      {/* =====================================================
          TESTING NOTE
      ====================================================== */}

      <div
        style={{
          marginTop: 14,

          paddingTop: 12,

          borderTop: "1px solid rgba(255,255,255,.06)",

          fontSize: 9,

          lineHeight: 1.55,

          color: "#475569",
        }}
      >
        Temporary developer panel.
        <br />
        It will be replaced by the final premium Theme Showcase after
        verification.
      </div>
    </aside>
  );
}
