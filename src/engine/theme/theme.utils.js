import themes from "./theme.registry";

export function getTheme(name) {
  return themes[name] ?? themes.ocean;
}

function toCssVariable(key) {
  return `--${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`;
}

export function applyTheme(themeName) {
  const theme = getTheme(themeName);
  const root = document.documentElement;

  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(toCssVariable(key), value);
  });

  Object.entries(theme.typography).forEach(([key, value]) => {
    root.style.setProperty(toCssVariable(`type-${key}`), String(value));
  });

  Object.entries(theme.surface).forEach(([key, value]) => {
    root.style.setProperty(toCssVariable(`surface-${key}`), String(value));
  });

  Object.entries(theme.motion).forEach(([key, value]) => {
    root.style.setProperty(toCssVariable(`motion-${key}`), String(value));
  });

  Object.entries(theme.cursor).forEach(([key, value]) => {
    root.style.setProperty(toCssVariable(`cursor-${key}`), String(value));
  });

  root.style.setProperty("--theme-transition", `${theme.id === "crimson" ? 650 : 450}ms cubic-bezier(0.22, 1, 0.36, 1)`);
  root.setAttribute("data-theme", theme.id);
  root.setAttribute("data-theme-motion", theme.motion.style);
  root.setAttribute("data-theme-atmosphere", theme.atmosphere.type);
  root.setAttribute("data-theme-cursor", theme.cursor.shape);
}

export function getThemeList() {
  return Object.values(themes);
}
