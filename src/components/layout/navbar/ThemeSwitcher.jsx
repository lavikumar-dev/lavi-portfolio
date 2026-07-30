import { FaPalette } from "react-icons/fa";

function ThemeSwitcher() {
  return (
    <button
      type="button"
      className="theme-switcher-button"
      title="Personalization"
      aria-label="Open personalization panel"
    >
      <FaPalette />
    </button>
  );
}

export default ThemeSwitcher;