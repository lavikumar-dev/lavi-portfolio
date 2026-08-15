import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import ThemeContext from "./ThemeContext";

import {
  DEFAULT_THEME,
  EFFECTS,
  THEMES,
  THEME_STORAGE_KEY,
  applyTheme,
  getTheme,
  themes,
} from "../engine/theme";

function readStoredTheme() {
  if (typeof window === "undefined") return DEFAULT_THEME;

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);

  return THEMES.includes(stored) ? stored : DEFAULT_THEME;
}

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readStoredTheme);
  const [previousTheme, setPreviousTheme] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState(null);
  const [effects, setEffects] = useState(EFFECTS);
  const transitionTimer = useRef(null);

  useEffect(() => {
    applyTheme(theme);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }

    return () => {
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current);
      }
    };
  }, [theme]);

  const changeTheme = useCallback((nextTheme) => {
    if (!THEMES.includes(nextTheme) || nextTheme === theme) return;

    if (transitionTimer.current) {
      window.clearTimeout(transitionTimer.current);
    }

    const enteringCrimson = nextTheme === "crimson" && theme !== "crimson";
    const leavingCrimson = theme === "crimson" && nextTheme !== "crimson";

    setPreviousTheme(theme);

    if (enteringCrimson) {
      setTransitionType("crimson-enter");
      setIsTransitioning(true);

      transitionTimer.current = window.setTimeout(() => {
        setThemeState(nextTheme);

        transitionTimer.current = window.setTimeout(() => {
          setIsTransitioning(false);
          setTransitionType(null);
        }, 650);
      }, 850);

      return;
    }

    if (leavingCrimson) {
      setTransitionType("crimson-exit");
      setIsTransitioning(true);

      transitionTimer.current = window.setTimeout(() => {
        setThemeState(nextTheme);
        setIsTransitioning(false);
        setTransitionType(null);
      }, 420);

      return;
    }

    setThemeState(nextTheme);
  }, [theme]);

  const toggleEffect = (effect) => {
    setEffects((previous) => ({
      ...previous,
      [effect]: !previous[effect],
    }));
  };

  const enterCrimsonSword = useCallback(() => changeTheme("crimson"), [changeTheme]);

  const exitCrimsonSword = useCallback(
    (target = DEFAULT_THEME) => {
      changeTheme(target === "crimson" ? DEFAULT_THEME : target);
    },
    [changeTheme]
  );

  const design = getTheme(theme);

  const value = useMemo(
    () => ({
      theme,
      previousTheme,
      design,
      themes,
      themeIds: THEMES,

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
      transitionType,
    }),
    [theme, previousTheme, design, effects, isTransitioning, transitionType, changeTheme, enterCrimsonSword, exitCrimsonSword]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
