import { motion } from "framer-motion";

export default function NavDesktop({
  links,
  active,
  navigate,
}) {
  return (
    <ul className="hidden items-center gap-2 lg:flex">

      {links.map((link) => {

        const selected =
          active === link.id;

        return (
          <li key={link.id}>

            <button
              onClick={() =>
                navigate(link.id)
              }
              className={`
                relative

                rounded-xl

                px-4

                py-2

                text-sm

                font-medium

                transition-colors

                duration-300

                ${
                  selected
                    ? "text-cyan-400"
                    : "text-slate-300"
                }
              `}
            >
              {link.label}

              {selected && (
                <motion.span
                  layoutId="nova-nav"

                  className="
                    absolute
                    inset-0
                    -z-10
                    rounded-xl
                    bg-cyan-500/10
                  "
                />
              )}

            </button>

          </li>
        );
      })}

    </ul>
  );
}