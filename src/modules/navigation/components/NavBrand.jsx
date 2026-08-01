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
        text-white
        transition-colors
        duration-300
        hover:text-cyan-400
      "
    >
      {brand.name}

      <span className="text-cyan-400">
        {brand.accent}
      </span>
    </button>
  );
}