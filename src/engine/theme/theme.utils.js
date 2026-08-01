import themes from "../../personalization/themes";

export function getTheme(name) {
  return themes[name] ?? themes.ocean;
}

export function applyTheme(themeName) {
  const theme = getTheme(themeName);

  const root = document.documentElement;

  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVar =
      "--" +
      key.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());

    root.style.setProperty(cssVar, value);
  });

  root.setAttribute("data-theme", themeName);
}