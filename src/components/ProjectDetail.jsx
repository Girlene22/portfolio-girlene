function ProjectDetail({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-neutral-900 p-6 md:p-8 rounded-xl max-w-lg w-full relative">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          ✕
        </button>

        {/* Imagem do projeto */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}

        {/* Título */}
        <h3 className="text-2xl font-bold mb-2 text-[--secondary]">
          {project.title}
        </h3>

        {/* Tecnologias */}
        <p className="mb-4 text-gray-400">{project.tech}</p>

        {/* Descrição */}
        <p className="mb-4">{project.description}</p>

        {/* Links */}
        <div className="flex gap-4 flex-wrap">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[--primary] text-white rounded-lg hover:opacity-90 transition"
            >
              Repositório
            </a>
          )}
          {project.deploy && (
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[--primary] text-[--primary] rounded-lg hover:bg-[--primary] hover:text-white transition"
            >
              Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
