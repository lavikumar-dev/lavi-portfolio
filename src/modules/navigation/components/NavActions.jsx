import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaPalette,
  FaSun,
  FaWater,
} from "react-icons/fa";

import { portfolio } from "../../../data/portfolio";
import useTheme from "../../../personalization/hooks/useTheme";
import Button from "../../../shared/ui/Button";

const THEME_OPTIONS = [
  { id: "ocean", label: "Ocean", detail: "Deep blue · Cyan glow", Icon: FaWater },
  { id: "midnight", label: "Midnight", detail: "Near-black · Violet glow", Icon: FaMoon },
  { id: "light", label: "Light", detail: "Bright · Clean · Clear", Icon: FaSun },
];

export default function NavActions({ openMenu }) {
  const { theme, setTheme } = useTheme();
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themeMenuRefs = useRef([]);
  const currentTheme = THEME_OPTIONS.find((option) => option.id === theme) ?? THEME_OPTIONS[0];
  const CurrentThemeIcon = currentTheme.Icon;

  useEffect(() => {
    if (!themeMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!themeMenuRefs.current.some((node) => node?.contains(event.target))) setThemeMenuOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setThemeMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [themeMenuOpen]);

  const openResume = () => window.open("/resume.pdf", "_blank", "noopener,noreferrer");

  const themeSelector = (index) => (
    <div className="relative" ref={(node) => { themeMenuRefs.current[index] = node; }}>
      <button
        type="button"
        onClick={() => setThemeMenuOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-[color:var(--text-secondary)] transition-all duration-200 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
        aria-label={`Theme: ${currentTheme.label}. Change theme`}
        aria-haspopup="menu"
        aria-expanded={themeMenuOpen}
        title={`Theme: ${currentTheme.label}`}
      >
        <CurrentThemeIcon size={17} aria-hidden="true" />
      </button>

      {themeMenuOpen && (
        <div
          className="absolute right-0 top-[calc(100%+12px)] z-[70] w-[248px] overflow-hidden rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--surface-strong)] p-2 shadow-2xl backdrop-blur-2xl"
          role="menu"
          aria-label="Choose website theme"
        >
          <div className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
            Appearance
          </div>
          {THEME_OPTIONS.map(({ id, label, detail, Icon }) => {
            const selected = theme === id;
            return (
              <button
                key={id}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => {
                  setTheme(id);
                  setThemeMenuOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  selected
                    ? "bg-[color:var(--accent-soft)] text-[color:var(--text-primary)]"
                    : "text-[color:var(--text-secondary)] hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--text-primary)]"
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[color:var(--border)] text-[color:var(--accent)]">
                  <Icon size={15} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{label}</span>
                  <span className="mt-0.5 block text-[11px] text-[color:var(--text-muted)]">{detail}</span>
                </span>
                {selected && <FaCheck size={12} className="shrink-0 text-[color:var(--accent)]" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop actions */}
      <div className="hidden items-center gap-2 lg:flex">
        <a
          href={portfolio.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="rounded-full p-2.5 text-[color:var(--text-secondary)] transition-all duration-300 hover:bg-white/5 hover:text-[color:var(--accent)]"
        >
          <FaGithub size={18} aria-hidden="true" />
        </a>
        <a
          href={portfolio.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="rounded-full p-2.5 text-[color:var(--text-secondary)] transition-all duration-300 hover:bg-white/5 hover:text-[color:var(--accent)]"
        >
          <FaLinkedin size={18} aria-hidden="true" />
        </a>
        {themeSelector(0)}
        <Button size="sm" onClick={openResume}>Resume</Button>
      </div>

      {/* Mobile: keep the theme control available beside the menu button. */}
      <div className="flex items-center gap-1 lg:hidden">
        {themeSelector(1)}
        <button
          type="button"
          onClick={openMenu}
          aria-label="Open navigation menu"
          className="rounded-xl border border-[color:var(--border)] p-3 text-[color:var(--text-primary)] transition-all duration-300 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent)]"
        >
          <FaBars aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
