import Container from "../../shared/ui/Container";
import Section from "../../shared/ui/Section";

import HeroBackground from "./components/HeroBackground";
import HeroContent from "./components/HeroContent";
import HeroPortrait from "./components/HeroPortrait";

export default function Hero() {
  return (
    <Section
      id="home"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        pt-24
        lg:pt-28
      "
    >
      {/* =========================================================
          HERO BACKGROUND
      ========================================================== */}

      <HeroBackground />

      {/* =========================================================
          HERO CONTAINER
      ========================================================== */}

      <Container
        className="
          relative
          z-10

          w-full
          max-w-[1600px]

          px-6
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* =======================================================
            HERO GRID
        ======================================================== */}

        <div
          className="
            grid
            min-h-[calc(100vh-112px)]

            items-center

            gap-y-16
            lg:gap-x-8
            xl:gap-x-12

            lg:grid-cols-[52%_48%]
          "
        >
          {/* =====================================================
              LEFT — HERO CONTENT
          ====================================================== */}

          <div
            className="
              flex
              w-full

              justify-start

              lg:max-w-[760px]
            "
          >
            <HeroContent />
          </div>

          {/* =====================================================
              RIGHT — HERO PORTRAIT
          ====================================================== */}

          <div
            className="
              flex
              w-full

              justify-center

              lg:justify-end

              lg:-translate-x-2
              xl:-translate-x-4
            "
          >
            <HeroPortrait />
          </div>
        </div>
      </Container>
    </Section>
  );
}