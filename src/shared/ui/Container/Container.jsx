import { container } from "../../foundation";

export default function Container({
  children,
  as: Component = "div",
  size = "default",
  className = "",
  ...props
}) {
  return (
    <Component
      className={`
        mx-auto
        w-full
        px-5
        sm:px-6
        lg:px-8
        xl:px-10

        ${container[size]}

        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}
