import { FaPalette } from "react-icons/fa";

function ThemeSwitcher() {
  return (
    <button
      className="rounded-full p-2 text-xl text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300"
      title="Theme Switcher (Coming Soon)"
      aria-label="Theme Switcher"
    >
      <FaPalette />
    </button>
  );
}

export default ThemeSwitcher;