function Input({ id, label, type = "text", name, value, onChange, placeholder, required = false, autoComplete, disabled = false, error }) {
  return (
    <div className="space-y-2">
      {label && <label htmlFor={id || name} className="theme-form-label">{label}{required && <span>*</span>}</label>}
      <input
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        className={`theme-form-field ${error ? "theme-form-field-error" : ""}`}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
export default Input;
