import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Title from "./Title";

function Skills() {
  // lista de skills
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "APIs", icon: "🔗" },
  ];

  return (
    // Seção centralizada vertical e horizontalmente
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-5 text-center"
    >
      {/* Título da seção usando o componente Title */}
      <Title variant="ExtraLargeMargin">Skills</Title>

      {/* Container das skills */}
      <div className="flex flex-wrap justify-center gap-10 max-w-4xl">
        {skills.map((skill) => (
          // Item individual
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 text-[--secondary] transition hover:scale-110"
          >
            {/* Ícone */}
            <span className="text-3xl">{skill.icon}</span>
            {/* Nome da skill */}
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
