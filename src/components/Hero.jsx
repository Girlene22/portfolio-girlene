import Title from "./Title";
import Button from "./Button";
import Spheres from "./Spheres";
import { useTheme } from "../context/ThemeContext";

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function Hero() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-10 gap-10 pt-48 md:pt-0"
    >
      {/* Esferas Mobile */}
      {/* Esferas Mobile */}
      <div className="absolute top-0 left-0 w-full h-screen md:hidden pointer-events-none z-0 flex justify-center items-start overflow-hidden">
        <Spheres />
      </div>

      {/* Texto */}
      <div className="hero-text relative z-10 max-w-md mx-auto md:mx-0 text-left px-6 sm:px-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-4 leading-tight break-keep">
          Girlene Pereira
        </h1>

        <Title className="text-xl text-[22px] sm:text-2xl md:text-3xl leading-tight">
          Desenvolvedora Front-end
        </Title>

        <p className="mb-6 text-base sm:text-lg">
          Desenvolvendo interfaces modernas com foco em usabilidade e soluções
          reais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <Button
            className="btn-primary w-full sm:w-auto"
            onClick={() => scrollToSection("projects")}
          >
            Projetos
          </Button>

          <Button
            variant="outline"
            className="btn-outline w-full sm:w-auto"
            onClick={() => scrollToSection("contact")}
          >
            Contato
          </Button>
        </div>
      </div>

      {/* Esferas Desktop */}
      <div className="hidden md:flex justify-center">
        <Spheres />
      </div>
    </section>
  );
}

export default Hero;
