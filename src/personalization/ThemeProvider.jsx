import { useEffect, useMemo, useState } from "react";

import ThemeContext from "./ThemeContext";
import themes from "./themes";

import {
  DEFAULT_THEME,
  EFFECTS,
  THEME_STORAGE_KEY,
} from "../engine/theme";

import { applyTheme } from "../engine/theme";

export default function ThemeProvider({
  children,
}) {
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem(THEME_STORAGE_KEY) ??
      DEFAULT_THEME
    );
  });

  const [previousTheme, setPreviousTheme] =
    useState(null);

  const [isTransitioning, setIsTransitioning] =
    useState(false);

  const [effects, setEffects] =
    useState(EFFECTS);

  useEffect(() => {
    localStorage.setItem(
      THEME_STORAGE_KEY,
      theme
    );

    applyTheme(theme);
  }, [theme]);

  const changeTheme = (nextTheme) => {
    if (nextTheme === theme) return;

    setPreviousTheme(theme);

    setTheme(nextTheme);
  };

  const toggleEffect = (effect) => {
    setEffects((prev) => ({
      ...prev,
      [effect]: !prev[effect],
    }));
  };

  const enterCrimsonSword = () => {
    changeTheme("crimson");
  };

  const exitCrimsonSword = (
    target = DEFAULT_THEME
  ) => {
    changeTheme(target);
  };

  const value = useMemo(() => {
    const design = themes[theme];

    return {
      theme,

      previousTheme,

      design,

      colors: design.colors,

      hero: design.copy.hero,

      about: design.copy.about,

      contact: design.copy.contact,

      effects,

      toggleEffect,

      setTheme: changeTheme,

      enterCrimsonSword,

      exitCrimsonSword,

      isTransitioning,

      setIsTransitioning,
    };
  }, [
    theme,
    previousTheme,
    effects,
    isTransitioning,
  ]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}