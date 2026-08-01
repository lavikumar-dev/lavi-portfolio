import { typography } from "../../foundation";

export default function Heading({
  children,
  level = 2,
  size = "section",
  className = "",
}) {
  const Component = `h${level}`;

  return (
    <Component
      className={`
        text-primary

        ${typography[size]}

        ${className}
      `}
    >
      {children}
    </Component>
  );
}
