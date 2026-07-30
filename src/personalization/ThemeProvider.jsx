import { useEffect, useMemo, useState } from "react";
import ThemeContext from "./ThemeContext";
import themes from "./themes";

const STORAGE_KEY = "portfolio-theme";

/**
 * Applies a theme by updating CSS variables.
 */
const applyTheme = (themeName) => {
  const selectedTheme = themes[themeName];

  if (!selectedTheme) return;

  const root = document.documentElement;

  Object.entries(selectedTheme.colors).forEach(([key, value]) => {
    const cssVariable =
      "--" + key.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());

    root.style.setProperty(cssVariable, value);
  });
};

export default function ThemeProvider({ children }) {
  // Current active theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "ocean";
  });

  // Previous theme (used for transitions)
  const [previousTheme, setPreviousTheme] = useState(null);

  // Used later for cinematic transitions
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Apply & persist theme
  useEffect(() => {
  console.log("Current theme:", theme);

  localStorage.setItem(STORAGE_KEY, theme);

  document.documentElement.setAttribute("data-theme", theme);

  applyTheme(theme);

  console.log(
    "Accent:",
    getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
  );
}, [theme]);
  // Normal theme switching
  const changeTheme = (newTheme) => {
    if (newTheme === theme) return;

    setPreviousTheme(theme);
    setTheme(newTheme);
  };

  // Placeholder for future Crimson Sword cinematic
  const enterCrimsonSword = () => {
    changeTheme("crimson");
  };

  // Placeholder for exiting Crimson Sword
  const exitCrimsonSword = (targetTheme = "ocean") => {
    changeTheme(targetTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      previousTheme,
      isTransitioning,

      setTheme: changeTheme,

      enterCrimsonSword,
      exitCrimsonSword,

      setIsTransitioning,
    }),
    [theme, previousTheme, isTransitioning]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}