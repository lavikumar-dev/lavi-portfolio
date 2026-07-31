import { useState } from "react";
import { FaPalette } from "react-icons/fa";
import useTheme from "../../../personalization/hooks/useTheme";
import PersonalizationPanel from "../../../personalization/components/PersonalizationPanel";

function ThemeSwitcher() {
  const { theme } = useTheme();
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setPanelOpen((prev) => !prev)}
        className="theme-switcher-button"
        title={`Personalization (Current: ${theme ? theme.charAt(0).toUpperCase() + theme.slice(1) : "Ocean"})`}
        aria-label={`Open personalization panel (Current theme: ${theme})`}
      >
        <FaPalette />
      </button>

      <PersonalizationPanel
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
      />
    </>
  );
}

export default ThemeSwitcher;
