import useTheme from "../hooks/useTheme";

export default function ThemeEngineTester() {
  const {
    theme,
    previousTheme,
    isTransitioning,
    setTheme,
    enterCrimsonSword,
    exitCrimsonSword,
  } = useTheme();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 99999,
        background: "#111827",
        color: "white",
        padding: "16px",
        borderRadius: "12px",
        width: "260px",
        fontFamily: "monospace",
        boxShadow: "0 10px 30px rgba(0,0,0,.3)",
      }}
    >
      <h3 style={{ marginBottom: 10 }}>Theme Engine</h3>

      <p>
        <strong>Current:</strong> {theme}
      </p>

      <p>
        <strong>Previous:</strong> {previousTheme ?? "None"}
      </p>

      <p>
        <strong>Transition:</strong>{" "}
        {isTransitioning ? "Running" : "Idle"}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginTop: 16,
        }}
      >
        <button onClick={() => setTheme("ocean")}>Ocean</button>

        <button onClick={() => setTheme("midnight")}>Midnight</button>

        <button onClick={() => setTheme("emerald")}>Emerald</button>

        <button onClick={() => setTheme("light")}>Light</button>

        <button onClick={enterCrimsonSword}>
          Enter Crimson Sword
        </button>

        <button onClick={() => exitCrimsonSword("ocean")}>
          Exit Crimson Sword
        </button>
      </div>
    </div>
  );
}