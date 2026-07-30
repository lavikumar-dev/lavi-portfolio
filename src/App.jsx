import Navbar from "./components/layout/navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Cursor from "./components/ui/cursor/Cursor";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/contact/Contact";
import Spotlight from "./components/ui/effects/Spotlight";
import CursorTrail from "./components/ui/cursor/CursorTrail";
import ThemeEngineTester from "./personalization/components/ThemeEngineTester";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Spotlight />

      <CursorTrail />

      <Cursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ThemeEngineTester />
    </div>
  );
}

export default App;
