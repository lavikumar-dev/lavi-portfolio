import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaPalette } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import { themeOrder } from "../themes";
import ThemeCard from "./ThemeCard";

export default function PersonalizationPanel({ open, onClose }) {
  const { theme, setTheme, themeOptions } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const coreThemeIds = themeOrder.filter((id) => id !== "crimson");
  const crimsonTheme = themeOptions.find((t) => t.id === "crimson");

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-md"
          />

          {/* Floating Panel Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="
              fixed right-4 top-20 z-[100] w-[calc(100vw-2rem)] max-w-md
              rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)]
              p-5 shadow-[0_25px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl
              sm:right-6 sm:top-20 sm:p-6
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] text-lg">
                  <FaPalette />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[var(--text-primary)]">Personalization</h3>
                  <p className="text-xs text-[var(--text-secondary)]">Select a theme palette to transform the experience</p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close theme panel"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaTimes />
              </button>
            </div>

            {/* Core Themes Grid */}
            <div className="mt-5 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                Color Palettes
              </h4>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {coreThemeIds.map((id) => {
                  const themeOpt = themeOptions.find((t) => t.id === id);
                  if (!themeOpt) return null;
                  return (
                    <ThemeCard
                      key={id}
                      themeOption={themeOpt}
                      isActive={theme === id}
                      onSelect={(selectedId) => {
                        setTheme(selectedId);
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Flagship Section: Crimson Sword */}
            {crimsonTheme && (
              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400/80 mb-2.5 flex items-center justify-between">
                  <span>Flagship Hidden Experience</span>
                </h4>

                <ThemeCard
                  themeOption={crimsonTheme}
                  isActive={theme === "crimson"}
                  isCrimson={true}
                  onSelect={(selectedId) => {
                    setTheme(selectedId);
                  }}
                />
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
