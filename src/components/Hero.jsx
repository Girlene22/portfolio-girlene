import heroImg from "../assets/heroImg.png";
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
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-5 gap-10"
    >
      {/* Texto */}
      <div className="hero-text max-w-xl text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extralight tracking-tight mb-4">
          Girlene Pereira
        </h1>

        <Title>Desenvolvedora Front-end</Title>

        <p className="mb-6 text-lg">
          Desenvolvendo interfaces modernas com foco em usabilidade e soluções reais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            className="btn-primary"
            onClick={() => scrollToSection("projects")}
          >
            Ver projetos
          </Button>

          <Button
            className="btn-outline"
            onClick={() => scrollToSection("contact")}
          >
            Contato
          </Button>
        </div>
      </div>

      {/* Dinâmico (dark/light) */}
      <div className="hidden md:block shrink-0 mt-10">
        {theme === "dark" ? (
          <img
            src={heroImg}
            alt="Elemento Visual"
            className="w-80 h-80 object-contain"
          />
        ) : (
          <Spheres />
        )}
      </div>
    </section>
  );
}

export default Hero;