import useTheme from "../../../personalization/hooks/useTheme";

function ThemeAtmosphere({ className = "" }) {
  const { tokens } = useTheme();

  return (
    <div
      aria-hidden="true"
      data-atmosphere={tokens.atmosphere.treatment}
      data-decoration={tokens.atmosphere.decoration}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <span className="design-atmosphere-primary absolute -left-1/4 top-0 h-[32rem] w-[32rem] rounded-full blur-[120px]" />
      <span className="design-atmosphere-secondary absolute -bottom-1/4 right-0 h-[28rem] w-[28rem] rounded-full blur-[120px]" />
    </div>
  );
}

export default ThemeAtmosphere;
