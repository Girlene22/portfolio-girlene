import logoDark from "../assets/logo.png";
import logoLight from "../assets/logo-vinho.png";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

function Header() {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      if (root.classList.contains("light")) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();

  }, []);


  return (
    <header className="header header-theme">

      <div className="logo">
        <img
          src={theme === "light" ? logoLight : logoDark}
          alt="Logo"
          className="logo-img"
        />
      </div>

      <nav>
        <ul className="flex items-center">

          <li>
            <a href="#home" className="nav-link">Início</a>
          </li>

          <li>
            <a href="#about" className="nav-link">Sobre</a>
          </li>

          <li>
            <a href="#projects" className="nav-link">Projetos</a>
          </li>

          <li>
            <a href="#contact" className="nav-link">Contato</a>
          </li>

          <li>
            <ThemeToggle />
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default Header;