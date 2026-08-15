export default function NavBrand({
  brand,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        text-2xl
        font-black
        tracking-tight
        text-[color:var(--text-primary)]
        transition-colors
        duration-300
        hover:text-[color:var(--accent)]
      "
    >
      {brand.name}

      <span className="text-[color:var(--accent)]">
        {brand.accent}
      </span>
    </button>
  );
}