import Navigation from "../../modules/navigation";
import Hero from "../../modules/hero";

import About from "../../components/sections/About";
import Projects from "../../components/sections/Projects";
import Skills from "../../components/sections/Skills";
import Contact from "../../components/sections/contact/Contact";

import Spotlight from "../../components/ui/effects/Spotlight";
import Cursor from "../../components/ui/cursor/Cursor";
import CursorTrail from "../../components/ui/cursor/CursorTrail";

export default function AppLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Global Effects */}

      <Spotlight />

      <CursorTrail />

      <Cursor />

      {/* Navigation */}

      <Navigation />

      {/* Main */}

      <main className="relative isolate">
        <Hero />

        <About />

        <Projects />

        <Skills />

        <Contact />
      </main>
    </div>
  );
}