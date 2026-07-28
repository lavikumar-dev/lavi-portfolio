import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";
import FloatingCards from "./hero/FloatingCards";
import HeroDecorations from "./hero/HeroDecorations";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        justify-center
        px-5
        py-20
        lg:px-8
        xl:px-12
      "
    >
      {/* Background */}
      <HeroBackground />

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-12
          md:gap-16
          xl:gap-20
          xl:grid-cols-2
        "
      >
        {/* Image - First on Mobile, Right on Desktop */}
        <div
          className="
            order-1
            xl:order-2
            relative
            mx-auto
            flex
            justify-center
            w-fit
          "
        >
          <HeroImage />
          <FloatingCards />
          <HeroDecorations />
        </div>

        {/* Content - Second on Mobile, Left on Desktop */}
        <div
          className="
            order-2
            xl:order-1
          "
        >
          <HeroContent />
        </div>
      </div>
    </section>
  );
}

export default Hero;