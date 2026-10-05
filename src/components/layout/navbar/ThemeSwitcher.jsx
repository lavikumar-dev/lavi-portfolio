import { useState } from "react";
import { FaCheck, FaMoon, FaPalette, FaSun, FaWater } from "react-icons/fa";
import useTheme from "../../../personalization/hooks/useTheme";

const options = [
  { id: "ocean", label: "Ocean", Icon: FaWater },
  { id: "midnight", label: "Midnight", Icon: FaMoon },
  { id: "light", label: "Light", Icon: FaSun },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const active = options.find((option) => option.id === theme) ?? options[0];
  const ActiveIcon = active.Icon;

  return (
    <div className="relative">
      <button
        type="button"
        className="theme-switcher-button"
        title={`Theme: ${active.label}`}
        aria-label={`Theme: ${active.label}. Change theme`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <ActiveIcon aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute right-0 top-[calc(100%+10px)] z-[70] w-48 rounded-2xl border border-[color:var(--border-strong)] bg-[color:var(--surface-strong)] p-2 shadow-2xl" role="menu" aria-label="Choose theme">
          {options.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === id}
              onClick={() => { setTheme(id); setOpen(false); }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[color:var(--text-primary)] hover:bg-[color:var(--accent-soft)]"
            >
              <Icon className="text-[color:var(--accent)]" aria-hidden="true" />
              <span className="flex-1 text-left">{label}</span>
              {theme === id && <FaCheck size={11} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
