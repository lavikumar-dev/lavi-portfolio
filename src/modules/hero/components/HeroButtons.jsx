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
          bg-[color:var(--accent)]
          px-7
          py-3.5
          font-semibold
          text-[color:var(--bg-primary)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_35px_var(--glow)]
        "
      >
        {hero.buttons.primary.text}
      </button>

      <button
        onClick={() => scrollTo(hero.buttons.secondary.target)}
        className="
          rounded-xl
          border
          border-[color:var(--border)]
          bg-[color:var(--surface)]
          px-7
          py-3.5
          font-semibold
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-[color:var(--border-strong)]
          hover:bg-[color:var(--accent-soft)]
        "
      >
        {hero.buttons.secondary.text}
      </button>
    </div>
  );
}