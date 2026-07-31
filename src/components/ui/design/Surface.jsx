function Surface({
  as: Component = "div",
  children,
  elevated = false,
  className = "",
  ...props
}) {
  return (
    <Component
      className={`design-surface ${
        elevated ? "design-surface-elevated" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Surface;
