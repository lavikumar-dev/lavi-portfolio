import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolio } from "../../../data/portfolio";
import Button from "../../../shared/ui/Button";

export default function NavActions({
  openMenu,
}) {
  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <>
      {/* Desktop */}

      <div className="hidden items-center gap-3 lg:flex">

        <a
          href={portfolio.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-full
            p-2.5
            text-[color:var(--text-secondary)]
            transition-all
            duration-300
            hover:text-[color:var(--accent)]
            hover:bg-white/5
          "
        >
          <FaGithub size={18} />
        </a>

        <a
          href={portfolio.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-full
            p-2.5
            text-[color:var(--text-secondary)]
            transition-all
            duration-300
            hover:text-[color:var(--accent)]
            hover:bg-white/5
          "
        >
          <FaLinkedin size={18} />
        </a>

        <Button
          size="sm"
          onClick={openResume}
        >
          Resume
        </Button>

      </div>

      {/* Mobile */}

      <button
        onClick={openMenu}
        className="
          rounded-xl
          border
          border-[color:var(--border)]
          p-3
          text-[color:var(--text-primary)]
          transition-all
          duration-300
          hover:border-[color:var(--border-strong)]
          hover:text-[color:var(--accent)]
          lg:hidden
        "
      >
        <FaBars />
      </button>
    </>
  );
}