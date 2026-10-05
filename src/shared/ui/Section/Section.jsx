import Container from "../Container";

import { section } from "../../foundation";

export default function Section({
  children,
  id,
  spacing = "xl",
  container = true,
  containerSize = "default",
  className = "",
  as: Component = "section",
  ...props
}) {
  const content = container ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <Component
      id={id}
      className={`
        relative
        overflow-hidden

        ${section[spacing]}

        ${className}
      `}
      {...props}
    >
      {content}
    </Component>
  );
}
