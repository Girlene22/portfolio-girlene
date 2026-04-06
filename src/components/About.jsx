import foto from "../assets/foto-sobre.jpg";
import Title from "./Title";

function About() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-5 py-20 gap-10 text-center md:text-left"
    >
      {/* Foto */}
      <div className="shrink-0">
        <img
          src={foto}
          alt="Foto Girlene"
          className="w-50 h-50 object-cover rounded-md shadow-md mx-auto md:mx-0"
        />
      </div>

      {/* Texto sobre */}
      <div className="max-w-xl">
        {/* Título usando componente Title */}
        <Title>Sobre mim</Title>

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
    </section>
  );
}

export default About;
