import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <nav>
        <ul className="flex items-center">
          <li>
            <a href="#home">Início</a>
          </li>

          <li>
            <a href="#about">Sobre</a>
          </li>

          <li>
            <a href="#projects">Projetos</a>
          </li>

          <li>
            <a href="#contact">Contato</a>
          </li>

          {/* botão dark/light */}
          <li>
            <ThemeToggle />
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default Header;