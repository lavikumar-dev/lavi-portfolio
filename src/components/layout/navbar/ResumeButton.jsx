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
        btn-primary
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-4
        py-2.5
        font-semibold
        transition-all
        duration-300
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-70
        xl:px-5
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