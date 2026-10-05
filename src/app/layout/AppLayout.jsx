import { useEffect } from "react";

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


export default function AppLayout() {
  useEffect(() => {
    let frame = 0;
    let timeout = 0;

    const handleScroll = () => {
      if (!document.documentElement.classList.contains("is-scrolling")) {
        document.documentElement.classList.add("is-scrolling");
      }

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => {
          document.documentElement.classList.remove("is-scrolling");
        }, 90);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      document.documentElement.classList.remove("is-scrolling");
    };
  }, []);

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

    </div>
  );
}