import Navigation from "../../modules/navigation";
import Hero from "../../modules/hero";

import About from "../../components/sections/About";
import Projects from "../../components/sections/Projects";
import Skills from "../../components/sections/Skills";
import Contact from "../../components/sections/contact/Contact";

import Spotlight from "../../components/ui/effects/Spotlight";
import Cursor from "../../components/ui/cursor/Cursor";
import CursorTrail from "../../components/ui/cursor/CursorTrail";

import ThemeWorldBackground from "../../engine/theme/ThemeWorldBackground";
import ThemeTransitionOverlay from "../../engine/theme/ThemeTransitionOverlay";

import ThemeEngineTester from "../../personalization/components/ThemeEngineTester";

export default function AppLayout() {
  return (
    <div
      className="
        relative
        isolate
        min-h-screen
        overflow-x-hidden
        bg-primary
        text-primary
      "
    >
      {/* =========================================================
          GLOBAL THEME ENVIRONMENT
      ========================================================== */}

      <ThemeWorldBackground />

      <ThemeTransitionOverlay />

      {/* =========================================================
          GLOBAL INTERACTION EFFECTS
      ========================================================== */}

      <Spotlight />

      <CursorTrail />

      <Cursor />

      {/* =========================================================
          NAVIGATION
      ========================================================== */}

      <Navigation />

      {/* =========================================================
          MAIN PORTFOLIO
      ========================================================== */}

      <main className="relative z-10 isolate">
        <Hero />

        <About />

        <Projects />

        <Skills />

        <Contact />
      </main>

      {/* =========================================================
          TEMPORARY THEME ENGINE TESTER

          This is intentionally mounted globally so we can
          verify every theme before building the final
          premium Theme Selector UI.
      ========================================================== */}

      <ThemeEngineTester />
    </div>
  );
}