export default function Text({
  children,
  as: Component = "p",
  variant = "body",
  className = "",
  ...props
}) {
  const variants = {
    lead: `
      text-lg
      leading-8
      text-secondary

      md:text-xl
    `,

    body: `
      text-base
      leading-7
      text-secondary

      md:text-lg
    `,

    small: `
      text-sm
      leading-6
      text-secondary
    `,

    caption: `
      text-xs
      uppercase
      tracking-[0.28em]
      font-semibold
      text-secondary
    `,
  };

  return (
    <Component
      className={`
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}