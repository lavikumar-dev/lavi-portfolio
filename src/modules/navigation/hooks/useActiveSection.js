import { useEffect, useState } from "react";

export default function useActiveSection(links) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    // IntersectionObserver avoids layout reads and state updates on every
    // scroll event. The browser performs the visibility work off the hot path.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [links]);

  return activeSection;
}
