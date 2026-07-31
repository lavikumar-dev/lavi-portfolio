const themeTokens = {
  color: {
    background: "var(--bg-primary)",
    backgroundAlt: "var(--bg-secondary)",
    surface: "var(--surface)",
    surfaceCard: "var(--surface-card)",
    text: "var(--text-primary)",
    textMuted: "var(--text-secondary)",
    accent: "var(--accent)",
    border: "var(--border)",
  },

  typography: {
    body: "var(--font-body)",
    display: "var(--font-display)",
  },

  spacing: {
    section: "var(--space-section)",
    sectionCompact: "var(--space-section-compact)",
    contentWidth: "var(--content-width)",
  },

  navbar: {
    background: "var(--surface)",
    border: "var(--border)",
    backdropBlur: "16px",
  },

  text: {
    primary: "var(--text-primary)",
    secondary: "var(--text-secondary)",
    accent: "var(--accent)",
  },

  button: {
    primary: "var(--accent)",
    hover: "var(--accent-hover)",
    border: "var(--border)",
  },

  card: {
    background: "var(--surface-card)",
    border: "var(--border)",
    glow: "var(--glow)",
    radius: "var(--radius-card)",
    shadow: "var(--shadow-card)",
  },

  motion: {
    easing: "var(--motion-easing)",
    duration: "var(--motion-duration)",
    hoverLift: "var(--motion-hover-lift)",
  },
};

export default themeTokens;
