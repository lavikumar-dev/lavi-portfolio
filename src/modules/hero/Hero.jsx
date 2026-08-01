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
        pt-20
        lg:pt-24
      "
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div
          className="
            grid
            min-h-[calc(100vh-96px)]
            items-center
            lg:grid-cols-[1.08fr_.92fr]
          "
        >
          {/* LEFT */}

          <div
            className="
              max-w-[640px]
              justify-self-start
              lg:pl-6
              xl:pl-10
            "
          >
            <HeroContent />
          </div>

          {/* RIGHT */}

          <div
            className="
              justify-self-end
              lg:pr-6
              xl:pr-10
            "
          >
            <HeroPortrait />
          </div>
        </div>
      </Container>
    </Section>
  );
}