import foto from "../assets/foto-sobre.jpg";
import pattern from "../assets/logo-vinho.png";
import patternDark from "../assets/logo-rosa.png";
import Title from "./Title";
import { useEffect, useState } from "react";

function About() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        flex
        flex-col
        md:flex-row
        items-center
        justify-center
        px-8
        py-28
        md:px-5
        md:py-20
        gap-10
        text-center
        md:text-left
        overflow-hidden
        bg-[var(--bg-rose)]
        dark:!bg-[#740000]
      "
    >
      {/* Marca d'água */}
      <img
        src={isDark ? patternDark : pattern}
        alt=""
        className="
          absolute
          z-0
          top-[55%]
          md:top-[45%]
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          object-cover
          pointer-events-none
          opacity-[0.09]
          md:opacity-[0.04]
          scale-[3.5]
          md:scale-180
          -rotate-15
          md:rotate-0
        "
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

        {/* Foto */}
        <div className="shrink-0">
          <img
            src={foto}
            alt="Foto Girlene"
            className="w-50 h-50 object-cover rounded-md shadow-md mx-auto md:mx-0"
          />
        </div>

        {/* Texto sobre */}
        <div className="max-w-xl text-[color:var(--primary)]">
         <Title color="wine">
  Sobre mim
</Title>

          <p className="mb-4">
            Sou desenvolvedora front-end com foco em criar interfaces modernas,
            organizadas e funcionais. Tenho experiência com React, JavaScript e
            desenvolvimento de aplicações web.
          </p>

          <p>
            Tenho facilidade em aprender novas tecnologias e estou sempre buscando
            evoluir minhas habilidades para entregar soluções cada vez melhores.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;