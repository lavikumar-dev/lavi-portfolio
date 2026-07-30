function Logo({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        logo
        text-2xl
        font-bold
        tracking-wide
        transition-all
        duration-300
      "
    >
      Lavi
      <span className="logo-dot">.</span>
    </button>
  );
}

export default Logo;