import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import useTheme from "../hooks/useTheme";
import { OPEN_PALETTE_EVENT } from "../../components/ui/palette/CommandPalette";
import { attachUiAudioUnlock, playUiSound } from "../../shared/ui/interaction/sound";

const COLLAPSE_KEY = "astra-lab-collapsed";

const THEME_META = {
  ocean: { icon: "◌", label: "Ocean", descriptor: "Explore / Flow / Discover" },
  midnight: { icon: "◐", label: "Midnight", descriptor: "Engineer / Focus / Precision" },
  light: { icon: "◉", label: "Light", descriptor: "Clarity / Structure / Restraint" },
  emerald: { icon: "⌁", label: "Emerald", descriptor: "Grow / Learn / Evolve" },
  blossom: { icon: "✿", label: "Blossom", descriptor: "Create / Connect / Express" },
  crimson: { icon: "✦", label: "Crimson Sword", descriptor: "Forge / Discipline / Intent" },
};

function readCollapsed() {
  try {
    const stored = window.localStorage.getItem(COLLAPSE_KEY);
    // null means first visit — default to collapsed so the lab never covers content
    return stored === null ? true : stored === "1";
  } catch {
    return true;
  }
}

export default function ThemeLaboratory() {
  const { theme, previousTheme, isTransitioning, transitionType, themeIds, themes, setTheme } = useTheme();
  const reducedMotion = useReducedMotion();
  const [collapsed, setCollapsed] = useState(readCollapsed);

  useEffect(() => {
    attachUiAudioUnlock();
  }, []);

  const setCollapsedPersist = useCallback((value) => {
    setCollapsed(value);
    try {
      window.localStorage.setItem(COLLAPSE_KEY, value ? "1" : "0");
    } catch {
      /* storage unavailable: the choice just won't persist */
    }
  }, []);

  const openPalette = () => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));

  const fallbackMeta = { icon: "•", label: themes[theme]?.name ?? theme, descriptor: themes[theme]?.personality ?? "" };
  const activeMeta = THEME_META[theme] ?? fallbackMeta;

  const enter = { opacity: 0, y: reducedMotion ? 0 : 18, scale: reducedMotion ? 1 : 0.96 };
  const settle = { opacity: 1, y: 0, scale: 1 };

  return (
    <>
      {/* Small screens: one orb that opens the command palette (it contains the themes) */}
      <button
        type="button"
        onClick={openPalette}
        aria-label="Open command palette"
        className="theme-lab-orb fixed bottom-4 right-4 z-[99999] lg:hidden"
      >
        <span>{activeMeta.icon}</span>
      </button>

      <div className="hidden lg:block">
        <AnimatePresence mode="wait" initial={false}>
          {collapsed ? (
            <motion.button
              key="orb"
              type="button"
              onClick={() => setCollapsedPersist(false)}
              aria-label="Open theme laboratory"
              title="Open theme laboratory"
              initial={enter}
              animate={settle}
              exit={enter}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="theme-lab-orb fixed bottom-5 right-5 z-[99999]"
            >
              <span>{activeMeta.icon}</span>
              <i className={`theme-lab-orb-status ${isTransitioning ? "is-busy" : ""}`} />
            </motion.button>
          ) : (
            <motion.aside
              key="panel"
              aria-label="Theme laboratory"
              initial={enter}
              animate={settle}
              exit={enter}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="theme-lab fixed bottom-5 right-5 z-[99999] w-[310px] overflow-hidden rounded-[22px] border backdrop-blur-2xl"
            >
              <div className="theme-lab-topline" />
              <div className="px-4 pb-3 pt-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[.25em] text-[color:var(--accent)]">Design Engine</p>
                    <h2 className="mt-1 text-sm font-bold tracking-tight text-[color:var(--text-primary)]">Theme Laboratory</h2>
                    <p className="mt-1 text-[9px] text-[color:var(--text-muted)]">Six worlds. One portfolio.</p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className={`theme-lab-status ${isTransitioning ? "is-busy" : ""}`} aria-label={isTransitioning ? "Transitioning" : "Ready"} />
                    <button
                      type="button"
                      onClick={() => setCollapsedPersist(true)}
                      aria-label="Minimize theme laboratory"
                      title="Minimize"
                      className="theme-lab-min"
                    >
                      <span aria-hidden="true" />
                    </button>
                  </div>
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
                {themeIds.map((id, index) => {
                  const active = theme === id;
                  const meta = THEME_META[id] ?? { icon: "•", label: themes[id]?.name ?? id, descriptor: "" };
                  return (
                    <button
                      key={id}
                      type="button"
                      disabled={isTransitioning || active}
                      aria-keyshortcuts={String(index + 1)}
                      onClick={() => {
                        playUiSound("theme");
                        setTheme(id);
                      }}
                      className={`theme-lab-theme ${active ? "is-active" : ""} ${isTransitioning ? "is-transitioning" : ""}`}
                    >
                      <span className="theme-lab-icon">{meta.icon}</span>
                      <span className="theme-lab-name">{meta.label}</span>
                      <span className="theme-lab-desc">{meta.descriptor.split(" / ")[0]}</span>
                      <kbd className="theme-lab-key" aria-hidden="true">{index + 1}</kbd>
                    </button>
                  );
                })}
              </div>

              <button type="button" onClick={openPalette} className="theme-lab-palette">
                <span>Command palette</span>
                <span><kbd>Ctrl</kbd><kbd>K</kbd></span>
              </button>

              <div className="theme-lab-footer">
                <span>{isTransitioning ? `Transition • ${transitionType ?? "entering"}` : `Previous • ${previousTheme ?? "none"}`}</span>
                <span className="theme-lab-dot" />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
