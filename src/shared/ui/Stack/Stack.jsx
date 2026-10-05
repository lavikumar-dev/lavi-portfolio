export default function Stack({
  children,
  as: Component = "div",
  direction = "column",
  align = "stretch",
  justify = "start",
  gap = "md",
  wrap = false,
  className = "",
  ...props
}) {
  const gaps = {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
    xxl: "gap-20",
  };

  const directions = {
    row: "flex-row",
    column: "flex-col",
  };

  const aligns = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  const justifies = {
    start: "justify-start",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
    end: "justify-end",
  };

  return (
    <Component
      className={`
        flex
        ${directions[direction]}
        ${aligns[align]}
        ${justifies[justify]}
        ${gaps[gap]}
        ${wrap ? "flex-wrap" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}