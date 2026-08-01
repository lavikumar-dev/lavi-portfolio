export default function Grid({
  children,
  columns = 3,
  gap = "lg",
  className = "",
  ...props
}) {
  const gaps = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  const cols = {
    1: "grid-cols-1",

    2: `
      grid-cols-1
      md:grid-cols-2
    `,

    3: `
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
    `,

    4: `
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
    `,
  };

  return (
    <div
      className={`
        grid
        ${cols[columns]}
        ${gaps[gap]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}