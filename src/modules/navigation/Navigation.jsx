import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { navigation } from "./config/navigation.config";
import useActiveSection from "./hooks/useActiveSection";

import NavBrand from "./components/NavBrand";
import NavDesktop from "./components/NavDesktop";
import NavActions from "./components/NavActions";
import NavMobile from "./components/NavMobile";

import Container from "../../shared/ui/Container";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const activeSection = useActiveSection(navigation.links);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = lastScrollY.current;

        setScrolled(currentScrollY > 20);

        if (currentScrollY <= 24) {
          setHidden(false);
          lastScrollY.current = currentScrollY;
          ticking.current = false;
          return;
        }

        const delta = currentScrollY - previousScrollY;

        if (Math.abs(delta) >= 10) {
          if (delta > 0) {
            setHidden(true);
          } else {
            setHidden(false);
          }

          lastScrollY.current = currentScrollY;
        }

        ticking.current = false;
      });
    };

    lastScrollY.current = window.scrollY;
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navigate = (id) => {
    setMenuOpen(false);
    setHidden(false);

    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: hidden ? -90 : 0,
          opacity: hidden ? 0.15 : 1,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          pointerEvents: hidden ? "none" : "auto",
        }}
      >
        <Container>
          <nav
            className={`
              mt-5 flex items-center justify-between rounded-full border
              border-[color:var(--border)] px-6 py-4 backdrop-blur-2xl
              transition-all duration-300
              ${
                scrolled
                  ? "bg-[color:var(--surface-strong)] shadow-[var(--surface-shadow)]"
                  : "bg-[color:var(--surface)]"
              }
            `}
          >
            <NavBrand
              brand={navigation.brand}
              onClick={() => navigate("home")}
            />

            <NavDesktop
              links={navigation.links}
              active={activeSection}
              navigate={navigate}
            />

            <NavActions openMenu={() => setMenuOpen(true)} />
          </nav>
        </Container>
      </motion.header>

      <NavMobile
        open={menuOpen}
        active={activeSection}
        navigate={navigate}
        close={() => setMenuOpen(false)}
      />
    </>
  );
}
