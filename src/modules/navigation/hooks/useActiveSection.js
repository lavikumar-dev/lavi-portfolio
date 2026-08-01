import { useEffect, useState } from "react";

export default function useActiveSection(links) {
  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map((link) =>
          document.getElementById(link.id)
        )
        .filter(Boolean);

      const scroll =
        window.scrollY + 140;

      for (const section of sections) {
        if (
          scroll >= section.offsetTop &&
          scroll <
            section.offsetTop +
              section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      }
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [links]);

  return activeSection;
}