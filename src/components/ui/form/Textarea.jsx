function Textarea({
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 6,
  required = false,
  disabled = false,
  error,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id || name}
          className="block text-sm font-medium text-slate-300"
        >
          {label}
          {required && (
            <span className="ml-1 text-cyan-400">*</span>
          )}
        </label>
      )}

      <textarea
        id={id || name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        className={`
          w-full
          resize-none
          rounded-2xl
          border
          px-5
          py-4
          outline-none
          transition-all
          duration-300
          bg-white/[0.03]
          text-white
          placeholder:text-slate-500
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.12)]"
              : "border-white/10 hover:border-cyan-400/30 focus:border-cyan-400 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
          }
          disabled:cursor-not-allowed
          disabled:opacity-50
        `}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default Textarea;