import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

import cardapioImg from "../assets/cardapio-olinda.png";
import bugSmashImg from "../assets/bug-smash.png";
import tradutorImg from "../assets/tradutor.png";
import chaleHotel from "../assets/chale-hotel.png";
import orcamentoPessoal from "../assets/app-personal-budget.png";

import Title from "./Title";
import Button from "./Button";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Cardápio Online",
      image: cardapioImg,
      description:
        "Sistema de cardápio digital com carrinho de compras, etapas de pedido e envio via WhatsApp. Utiliza API ViaCEP para busca automática de endereço.",
      tech: "HTML, CSS, JavaScript, jQuery, API",
      repo: "https://github.com/Girlene22/Menu_Online-main",
      deploy: "https://girlene22.github.io/Menu_Online-main/",
    },
    {
      title: "Tradutor Web",
      image: tradutorImg,
      description:
        "Aplicação que consome a API MyMemory para traduzir textos, com suporte a áudio usando Web Speech API e feedback visual de carregamento.",
      tech: "HTML, CSS, JavaScript, API",
      repo: "https://github.com/Girlene22/Tradutor",
      deploy: "https://girlene22.github.io/Tradutor/",
    },
    {
      title: "Bug Smash",
      image: bugSmashImg,
      description:
        "Jogo interativo desenvolvido em JavaScript com lógica de tempo, manipulação do DOM e elementos posicionados aleatoriamente.",
      tech: "HTML, CSS, JavaScript, Bootstrap",
      repo: "https://github.com/Girlene22/bug-smash",
      deploy: "https://girlene22.github.io/bug-smash/",
    },
    {
      title: "Chalé Hotel",
      image: chaleHotel,
      description:
        "Site para um hotel desenvolvido para apresentar informações institucionais e permitir interação do usuário com funcionalidades básicas de acesso e reserva.",
      tech: "JavaScript, HTML, CSS, Bootstrap",
      repo: "https://github.com/Girlene22/chalehotel",
      deploy: "https://girlene22.github.io/chalehotel/index.html",
    },
    {
      title: "Controle de Orçamento Pessoal",
      image: orcamentoPessoal,
      description:
        "Aplicação web de controle de orçamento pessoal, que permite ao usuário registrar, consultar, filtrar e remover despesas diretamente no navegador.",
      tech: "JavaScript, HTML, CSS (Bootstrap), LocalStorage",
      repo: "https://github.com/Girlene22/App-Personal-Budget",
      deploy: "https://girlene22.github.io/App-Personal-Budget/index.html",
    },
    {
      title: "Lista de Tarefas",
      image: "",
      description:
        "Aplicação React para gerenciamento de tarefas com manipulação de estado.",
      tech: "React, JavaScript",
      repo: "https://github.com/seuusuario/lista-tarefas",
      deploy: "#",
    },
  ];

  // mostra apenas 3 inicialmente
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className=" py-20 px-5">
      {/* título centralizado */}
      <div className="text-center">
        <Title>Projetos</Title>
      </div>

      {/* grid */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          max-w-6xl
          mx-auto
        "
      >
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="
              cursor-pointer
              bg-[color:var(--bg)]
              border
  border-[color:var(--wine)]
              rounded-lg
              overflow-hidden
              hover:scale-105
              transition
            "
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover"
              />
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>

              <p className="text-sm text-gray-400">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>

      {/* botão ver mais */}
      {projects.length > 3 && (
        <div className="text-center mt-10">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
  {showAll ? "Ver menos" : "Ver mais projetos"}
</Button>
        </div>
      )}

      {/* modal detalhe */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
