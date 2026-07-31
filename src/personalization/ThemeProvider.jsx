import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ThemeContext from "./ThemeContext";
import themes, {
  defaultTheme,
  getTheme,
  themeOrder,
} from "./themes";

const STORAGE_KEY = "portfolio-theme";

const toCssVariable = (key) =>
  `--${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`;

const applyTheme = (themeName) => {
  const design = getTheme(themeName);
  const root = document.documentElement;
  const { colors, tokens } = design;

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(toCssVariable(key), value);
  });

  root.style.setProperty("--font-body", tokens.typography.bodyFont);
  root.style.setProperty("--font-display", tokens.typography.displayFont);
  root.style.setProperty("--font-body-weight", tokens.typography.bodyWeight);
  root.style.setProperty("--font-display-weight", tokens.typography.displayWeight);
  root.style.setProperty("--space-section", tokens.spacing.section);
  root.style.setProperty("--space-section-compact", tokens.spacing.sectionCompact);
  root.style.setProperty("--content-width", tokens.spacing.contentWidth);
  root.style.setProperty("--surface-card", tokens.surface.card);
  root.style.setProperty("--surface-elevated", tokens.surface.elevated);
  root.style.setProperty("--radius-card", tokens.surface.borderRadius);
  root.style.setProperty("--shadow-card", tokens.surface.shadow);
  root.style.setProperty("--radius-button", tokens.button.radius);
  root.style.setProperty("--button-text-transform", tokens.button.textTransform);
  root.style.setProperty("--shadow-button", tokens.button.shadow);
  root.style.setProperty("--atmosphere-primary", tokens.atmosphere.primaryGlow);
  root.style.setProperty("--atmosphere-secondary", tokens.atmosphere.secondaryGlow);
  root.style.setProperty("--particle-color", tokens.atmosphere.particleColor);
  root.style.setProperty("--motion-easing", tokens.motion.easing);
  root.style.setProperty("--motion-duration", tokens.motion.duration);
  root.style.setProperty("--motion-hover-lift", tokens.motion.hoverLift);
  root.style.setProperty("--motion-ambient-speed", tokens.motion.ambientSpeed);

  root.dataset.theme = design.id;
  root.dataset.atmosphere = tokens.atmosphere.treatment;
  root.dataset.decoration = tokens.atmosphere.decoration;
};

const getStoredTheme = () => {
  const storedTheme = localStorage.getItem(STORAGE_KEY);

  return themes[storedTheme] ? storedTheme : defaultTheme;
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getStoredTheme);
  const [previousTheme, setPreviousTheme] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeout = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  }, [theme]);

  useEffect(
    () => () => {
      window.clearTimeout(transitionTimeout.current);
    },
    [],
  );

  const changeTheme = useCallback(
    (nextTheme) => {
      if (!themes[nextTheme] || nextTheme === theme) return;

      setPreviousTheme(theme);
      setIsTransitioning(true);
      setTheme(nextTheme);

      window.clearTimeout(transitionTimeout.current);
      transitionTimeout.current = window.setTimeout(() => {
        setIsTransitioning(false);
      }, 520);
    },
    [theme],
  );

  const enterCrimsonSword = useCallback(
    () => changeTheme("crimson"),
    [changeTheme],
  );

  const exitCrimsonSword = useCallback(
    (targetTheme = defaultTheme) => changeTheme(targetTheme),
    [changeTheme],
  );

  const value = useMemo(() => {
    const design = getTheme(theme);

    return {
      theme,
      previousTheme,
      isTransitioning,
      setTheme: changeTheme,
      enterCrimsonSword,
      exitCrimsonSword,
      setIsTransitioning,
      design,
      colors: design.colors,
      tokens: design.tokens,
      hero: design.copy.hero,
      about: design.copy.about,
      contact: design.copy.contact,
      themeOptions: themeOrder.map((id) => themes[id]),
    };
  }, [
    changeTheme,
    enterCrimsonSword,
    exitCrimsonSword,
    isTransitioning,
    previousTheme,
    theme,
  ]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
