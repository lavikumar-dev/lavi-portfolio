import { useEffect, useState } from "react";

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

  const activeSection = useActiveSection(
    navigation.links
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navigate = (id) => {
    setMenuOpen(false);

    const section =
      document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: .6,
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <Container>

          <nav
            className={`
              mt-5

              flex

              items-center

              justify-between

              rounded-full

              border

              border-white/10

              px-6

              py-4

              backdrop-blur-2xl

              transition-all

              duration-300

              ${
                scrolled
                  ? "bg-slate-950/80 shadow-2xl"
                  : "bg-slate-950/45"
              }
            `}
          >

            <NavBrand
              brand={navigation.brand}
              onClick={() =>
                navigate("home")
              }
            />

            <NavDesktop
              links={navigation.links}
              active={activeSection}
              navigate={navigate}
            />

            <NavActions
              openMenu={() =>
                setMenuOpen(true)
              }
            />

          </nav>

        </Container>

      </motion.header>

      <NavMobile
        open={menuOpen}
        close={() =>
          setMenuOpen(false)
        }
        active={activeSection}
        navigate={navigate}
      />
    </>
  );
}