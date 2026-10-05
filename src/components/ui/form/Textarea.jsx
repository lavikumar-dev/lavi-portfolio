function Textarea({ id, label, name, value, onChange, placeholder, rows = 6, required = false, disabled = false, error }) {
  return (
    <div className="space-y-2">
      {label && <label htmlFor={id || name} className="theme-form-label">{label}{required && <span>*</span>}</label>}
      <textarea id={id || name} name={name} rows={rows} value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} aria-invalid={!!error} className={`theme-form-field theme-form-textarea ${error ? "theme-form-field-error" : ""}`} />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
export default Textarea;
