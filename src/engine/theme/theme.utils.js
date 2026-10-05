import themes from "./theme.registry";

function toCssVariable(key) {
  return `--${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`;
}

function applyTokenGroup(root, group) {
  if (!group) return;

  Object.entries(group).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      root.style.setProperty(toCssVariable(key), value);
    }
  });
}

export function getTheme(name) {
  return themes[name] ?? themes.ocean;
}

export function applyTheme(themeName) {
  if (typeof document === "undefined") return;

  const theme = getTheme(themeName);
  const root = document.documentElement;

  applyTokenGroup(root, theme.colors);
  applyTokenGroup(root, theme.typography);
  applyTokenGroup(root, theme.surface);
  applyTokenGroup(root, theme.motion);
  applyTokenGroup(root, theme.cursor);

  root.setAttribute("data-theme", theme.id);
}
