import { useEffect } from "react";
import useTheme from "../hooks/useTheme";
import { attachUiAudioUnlock, playUiSound } from "../../shared/ui/interaction/sound";

const THEME_META = {
  ocean: { icon: "◌", label: "Ocean", descriptor: "Explore / Flow / Discover" },
  midnight: { icon: "◐", label: "Midnight", descriptor: "Engineer / Focus / Precision" },
  light: { icon: "◉", label: "Light", descriptor: "Clarity / Structure / Restraint" },
  emerald: { icon: "⌁", label: "Emerald", descriptor: "Grow / Learn / Evolve" },
  blossom: { icon: "✿", label: "Blossom", descriptor: "Create / Connect / Express" },
  crimson: { icon: "✦", label: "Crimson Sword", descriptor: "Forge / Discipline / Intent" },
};

export default function ThemeEngineTester() {
  const { theme, previousTheme, isTransitioning, transitionType, themeIds, themes, setTheme } = useTheme();

  useEffect(() => {
    attachUiAudioUnlock();
  }, []);

  const activeMeta = THEME_META[theme] ?? { icon: "•", label: themes[theme]?.name ?? theme, descriptor: themes[theme]?.personality ?? "" };

  return (
    <aside aria-label="Theme laboratory" className="theme-lab fixed bottom-5 right-5 z-[99999] hidden w-[310px] overflow-hidden rounded-[22px] border backdrop-blur-2xl lg:block">
      <div className="theme-lab-topline" />
      <div className="px-4 pb-3 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[.25em] text-[color:var(--accent)]">Design Engine</p>
            <h2 className="mt-1 text-sm font-bold tracking-tight text-[color:var(--text-primary)]">Theme Laboratory</h2>
            <p className="mt-1 text-[9px] text-[color:var(--text-muted)]">Switch worlds, not just colors.</p>
          </div>
          <span className={`theme-lab-status ${isTransitioning ? "is-busy" : ""}`} aria-label={isTransitioning ? "Transitioning" : "Ready"} />
        </div>

        <div className="theme-lab-active mt-3">
          <div>
            <span>Active world</span>
            <strong>{activeMeta.icon} {activeMeta.label}</strong>
          </div>
          <small>{activeMeta.descriptor}</small>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 px-3 pb-3">
        {themeIds.map((id) => {
          const active = theme === id;
          const meta = THEME_META[id] ?? { icon: "•", label: themes[id]?.name ?? id, descriptor: "" };
          return (
            <button
              key={id}
              type="button"
              disabled={isTransitioning || active}
              onClick={() => {
                playUiSound("theme");
                setTheme(id);
              }}
              className={`theme-lab-theme ${active ? "is-active" : ""} ${isTransitioning ? "is-transitioning" : ""}`}
            >
              <span className="theme-lab-icon">{meta.icon}</span>
              <span className="theme-lab-name">{meta.label}</span>
              <span className="theme-lab-desc">{meta.descriptor.split(" / ")[0]}</span>
            </button>
          );
        })}
      </div>

      <div className="theme-lab-footer">
        <span>{isTransitioning ? `Transition • ${transitionType ?? "entering"}` : `Previous • ${previousTheme ?? "none"}`}</span>
        <span className="theme-lab-dot" />
      </div>
    </aside>
  );
}
