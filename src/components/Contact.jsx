import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Title from "./Title";

function Contact() {
  return (
    // Seção de contato, altura automática e espaçamento interno
    <section
      id="contact"
      className="py-20 px-5 flex flex-col items-center justify-center text-center"
    >
      {/* Título da seção usando o componente Title */}
      <Title variant="ExtraLargeMargin">Contato</Title>

      {/* Container dos links */}
      <div className="flex flex-row flex-wrap justify-center gap-8 text-lg">
        {/* Email */}
        <a
          href="mailto:girlene.pereiram@gmail.com"
          className="flex items-center gap-2 hover:text-[--primary] transition"
        >
          <FaEnvelope />
          Email
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Girlene22"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[--primary] transition"
        >
          <FaGithub />
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/girlene-pereira"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[--primary] transition"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
