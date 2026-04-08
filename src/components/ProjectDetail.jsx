import Button from "./Button";

function ProjectDetail({ project, onClose }) {
  return (
    <div className="fixed inset-0 modal-overlay flex items-center justify-center z-50">
      
      <div
        className="
          modal-theme
          p-6
          md:p-8
          rounded-xl
          max-w-lg
          w-full
          relative
        "
      >

        {/* botão fechar */}
        <button
          onClick={onClose}
          className="
            absolute
            top-3
            right-3
            text-[color:var(--text-soft)]
            hover:text-[color:var(--primary)]
            text-xl
            font-bold
            transition
          "
        >
          ✕
        </button>


        {/* imagem */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-64
              object-cover
              rounded-md
              mb-4
            "
          />
        )}


        {/* título */}
        <h3
          className="
            text-2xl
            font-bold
            mb-2
            text-[color:var(--secondary)]
          "
        >
          {project.title}
        </h3>


        {/* tecnologias */}
        <p
          className="
            mb-4
            text-[color:var(--text-soft)]
          "
        >
          {project.tech}
        </p>


        {/* descrição */}
        <p
          className="
            mb-6
            text-[color:var(--text)]
          "
        >
          {project.description}
        </p>


        {/* botões */}
        <div className="flex gap-3 flex-wrap">

          {project.deploy && (
            <Button
              href={project.deploy}
              target="_blank"
              variant="outline"
            >
              Deploy
            </Button>
          )}

          {project.repo && (
            <Button
              href={project.repo}
              target="_blank"
              variant="link"
            >
              Repositório
            </Button>
          )}

        </div>

      </div>
    </div>
  );
}

export default ProjectDetail;