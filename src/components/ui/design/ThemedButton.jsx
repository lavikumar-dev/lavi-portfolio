function ThemedButton({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`design-button ${
        variant === "secondary" ? "design-button-secondary" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default ThemedButton;
