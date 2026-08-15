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

        border-[color:var(--border)]

        bg-[color:var(--accent-soft)]

        px-5

        py-2
      "
    >

      <span
        className="
          h-3

          w-3

          rounded-full

          bg-[color:var(--accent)]

          shadow-[0_0_12px_var(--accent)]
        "
      />

      <span
        className="
          text-sm

          font-medium

          text-[color:var(--text-secondary)]
        "
      >
        {hero.badge.text}
      </span>

    </div>
  );
}