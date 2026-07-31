import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function ThemeCard({ themeOption, isActive, onSelect, isCrimson = false }) {
  const { id, name, colors } = themeOption;

  if (isCrimson) {
    return (
      <motion.button
        type="button"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect(id)}
        className={`
          relative w-full overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300
          ${
            isActive
              ? "border-red-500 bg-gradient-to-r from-red-950/80 via-black to-red-950/80 shadow-[0_0_30px_rgba(220,38,38,0.4)]"
              : "border-red-900/40 bg-gradient-to-r from-slate-950 via-red-950/30 to-slate-950 hover:border-red-600/60 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
          }
        `}
      >
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-600/10 blur-xl pointer-events-none" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600/20 text-red-500 text-sm font-bold border border-red-500/30">
              ⚔️
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-red-100 tracking-wide text-sm">{name}</h4>
                <span className="rounded-full bg-red-500/20 border border-red-500/40 px-2 py-0.5 text-[10px] font-semibold uppercase text-red-300">
                  Flagship
                </span>
              </div>
              <p className="text-xs text-red-300/70 mt-0.5">Dark Ember & Ink Aesthetic</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full border border-red-500/30 bg-black/50 p-1.5">
              <span className="h-3 w-3 rounded-full bg-[#090303] border border-red-500/40" />
              <span className="h-3 w-3 rounded-full bg-[#DC2626]" />
            </div>
            {isActive && (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white text-xs">
                <FaCheck />
              </div>
            )}
          </div>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(id)}
      className={`
        relative w-full overflow-hidden rounded-xl border p-3.5 text-left transition-all duration-300
        ${
          isActive
            ? "border-[var(--accent)] bg-[var(--surface-card)] shadow-[0_0_20px_var(--glow)]"
            : "border-[var(--border)] bg-black/20 hover:border-[var(--accent)] hover:bg-[var(--surface-card)]"
        }
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-black/40 p-1">
            <span
              className="h-3 w-3 rounded-full border border-white/20"
              style={{ backgroundColor: colors.bgPrimary }}
            />
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: colors.accent }}
            />
          </div>

          <span className="font-semibold text-sm text-[var(--text-primary)]">{name}</span>
        </div>

        {isActive && (
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg-primary)] text-xs font-bold">
            <FaCheck />
          </div>
        )}
      </div>
    </motion.button>
  );
}
