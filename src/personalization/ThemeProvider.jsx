import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import ThemeContext from "./ThemeContext";
import themes from "../engine/theme/theme.registry";

import {
  DEFAULT_THEME,
  EFFECTS,
  THEMES,
  THEME_STORAGE_KEY,
  TRANSITION_DURATION,
} from "../engine/theme/theme.config";

import { applyTheme } from "../engine/theme/theme.utils";

function getStoredTheme() {
  if (typeof window === "undefined") return DEFAULT_THEME;

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return THEMES.includes(stored) ? stored : DEFAULT_THEME;
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getStoredTheme);
  const [previousTheme, setPreviousTheme] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState(null);
  const [effects, setEffects] = useState(EFFECTS);
  const timerRef = useRef(null);

  const design = themes[theme] ?? themes[DEFAULT_THEME];
  const fallbackCopy = themes[DEFAULT_THEME]?.copy ?? {
    hero: { badge: "", title: "", subtitle: "" },
    about: { title: "", description: "" },
    contact: { heading: "", quote: [], footer: [], button: "", signature: "" },
    projects: { title: "Selected Projects", description: "", cta: "Explore the work." },
  };
  const copy = design?.copy ?? fallbackCopy;

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const changeTheme = useCallback(
    (nextTheme) => {
      if (!THEMES.includes(nextTheme) || nextTheme === theme) return;

      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      const enteringCrimson =
        nextTheme === "crimson" && theme !== "crimson";
      const leavingCrimson =
        theme === "crimson" && nextTheme !== "crimson";

      setPreviousTheme(theme);

      if (enteringCrimson) {
        setTransitionType("crimson-enter");
        setIsTransitioning(true);

        timerRef.current = window.setTimeout(() => {
          setTheme(nextTheme);

          timerRef.current = window.setTimeout(() => {
            setIsTransitioning(false);
            setTransitionType(null);
          }, 650);
        }, 850);

        return;
      }

      if (leavingCrimson) {
        setTransitionType("crimson-exit");
        setIsTransitioning(true);

        timerRef.current = window.setTimeout(() => {
          setTheme(nextTheme);
          setIsTransitioning(false);
          setTransitionType(null);
        }, TRANSITION_DURATION);

        return;
      }

      setTheme(nextTheme);
    },
    [theme]
  );

  const toggleEffect = useCallback((effect) => {
    setEffects((previous) => ({
      ...previous,
      [effect]: !previous[effect],
    }));
  }, []);

  const enterCrimsonSword = useCallback(
    () => changeTheme("crimson"),
    [changeTheme]
  );

  const exitCrimsonSword = useCallback(
    (target = DEFAULT_THEME) => {
      changeTheme(target === "crimson" ? DEFAULT_THEME : target);
    },
    [changeTheme]
  );

  const value = useMemo(
    () => ({
      theme,
      previousTheme,
      design,
      themes,
      themeIds: THEMES,

      colors: design?.colors ?? {},
      hero: copy.hero,
      about: copy.about,
      contact: copy.contact,
      projects: copy.projects,

      effects,
      toggleEffect,

      setTheme: changeTheme,
      enterCrimsonSword,
      exitCrimsonSword,

      isTransitioning,
      transitionType,
    }),
    [
      theme,
      previousTheme,
      design,
      copy,
      effects,
      isTransitioning,
      transitionType,
      changeTheme,
      enterCrimsonSword,
      exitCrimsonSword,
      toggleEffect,
    ]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
