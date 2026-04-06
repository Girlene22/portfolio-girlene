import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import cardapioImg from "../assets/cardapio-olinda.png";
import Title from "./Title";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // lista de projetos
  const projects = [
    {
      title: "Cardápio Online",
      image: cardapioImg,
      description:
        "Site responsivo para restaurantes, feito com HTML, CSS e JS.",
      tech: "HTML, CSS, JS",
      repo: "https://github.com/seuusuario/cardapio-online",
      deploy: "https://seuusuario.github.io/cardapio-online",
    },
    {
      title: "Lista de Tarefas",
      image: "", // adicionar imagem em assets
      description: "App React para gerenciar tarefas com estado e filtros.",
      tech: "React, JS",
      repo: "https://github.com/seuusuario/lista-tarefas",
      deploy: "#",
    },
    {
      title: "Portfólio Pessoal",
      image: "", // adicionar imagem em assets
      description: "Meu portfólio desenvolvido com React e TailwindCSS.",
      tech: "React, TailwindCSS",
      repo: "https://github.com/seuusuario/portfolio",
      deploy: "#",
    },
    {
      title: "Blog Simples",
      image: "", // adicionar imagem em assets
      description:
        "Blog estático com HTML, CSS e JS, focado em conteúdo minimalista.",
      tech: "HTML, CSS, JS",
      repo: "https://github.com/seuusuario/blog-simples",
      deploy: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-5">
      <Title>Projetos</Title>

      {/* Grid de projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-neutral-900 rounded-xl overflow-hidden shadow hover:scale-105 transition"
          >
            {/* Imagem */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Conteúdo */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Componente de detalhe do projeto */}
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
