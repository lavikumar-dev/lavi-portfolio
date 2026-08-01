import { hero } from "../config/hero.config";

export default function HeroButtons() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="mt-12 flex flex-wrap gap-4">
      <button
        onClick={() => scrollTo(hero.buttons.primary.target)}
        className="
          rounded-xl
          bg-cyan-400
          px-7
          py-3.5
          font-semibold
          text-slate-950
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_35px_rgba(34,211,238,.35)]
        "
      >
        {hero.buttons.primary.text}
      </button>

      <button
        onClick={() => scrollTo(hero.buttons.secondary.target)}
        className="
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-7
          py-3.5
          font-semibold
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/40
          hover:bg-cyan-400/5
        "
      >
        {hero.buttons.secondary.text}
      </button>
    </div>
  );
}