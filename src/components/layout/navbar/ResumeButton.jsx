import { FaSpinner } from "react-icons/fa";

function ResumeButton({
  loading,
  onClick,
  fullWidth = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-cyan-400
        px-4
        xl:px-5
        py-2.5
        font-semibold
        text-slate-950
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-cyan-300
        hover:shadow-lg
        hover:shadow-cyan-500/25
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${fullWidth ? "w-full" : "min-w-[108px] text-sm"}
      `}
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin" />
          Opening...
        </>
      ) : (
        "Resume"
      )}
    </button>
  );
}

export default ResumeButton;