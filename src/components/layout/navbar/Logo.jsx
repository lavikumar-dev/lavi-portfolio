function Logo({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold tracking-wide text-white transition-all duration-300 hover:text-cyan-400"
    >
      Lavi
      <span className="text-cyan-400">.</span>
    </button>
  );
}

export default Logo;
