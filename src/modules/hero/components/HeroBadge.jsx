import { hero } from "../config/hero.config";

export default function HeroBadge() {
  return (
    <div
      className="
        inline-flex

        items-center

        gap-3

        rounded-full

        border

        border-cyan-400/20

        bg-cyan-400/5

        px-5

        py-2
      "
    >

      <span
        className="
          h-3

          w-3

          rounded-full

          bg-emerald-400

          shadow-[0_0_12px_#4ade80]
        "
      />

      <span
        className="
          text-sm

          font-medium

          text-slate-300
        "
      >
        {hero.badge.text}
      </span>

    </div>
  );
}