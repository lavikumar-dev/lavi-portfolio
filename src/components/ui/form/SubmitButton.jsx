import { FaPaperPlane } from "react-icons/fa";

function SubmitButton({
  children = "Send Message",
  type = "submit",
  disabled = false,
  loading = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className="
        group
        relative
        flex
        w-full
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-2xl
        bg-gradient-to-r
        from-cyan-400
        via-cyan-500
        to-blue-500
        px-6
        py-4
        font-semibold
        text-slate-950
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_35px_rgba(34,211,238,0.30)]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {/* Shine Effect */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      <FaPaperPlane
        className="
          relative
          transition-transform
          duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
        "
      />

      <span className="relative">
        {loading ? "Sending..." : children}
      </span>
    </button>
  );
}

export default SubmitButton;