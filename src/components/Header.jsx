import logoDark from "../assets/logo.png";
import logoLight from "../assets/logo-vinho.png";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

function Header() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setTheme(root.classList.contains("dark") ? "dark" : "light");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 header-theme">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-3 py-2 md:px-10 md:py-5">
        {/* LOGO */}
        <div className="ml-2 md:ml-0">
          <a href="#home">
            <img
              src={theme === "light" ? logoLight : logoDark}
              alt="Logo"
              className="h-8 md:h-12 object-contain cursor-pointer"
            />
          </a>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <a href="#home" className="nav-link">
                Início
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contato
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        {/* MOBILE HEADER */}
        <div className="flex items-center gap-3 md:hidden mr-2">
          <ThemeToggle size="sm" />
          <button className="text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 backdrop-blur-[0.1px]"
            onClick={closeMenu}
          />

          <div className="fixed inset-0 z-[9999] md:p-10">
            <ul
              className="
                relative flex flex-col gap-4
                pt-14 pl-10 pr-6 pb-6 w-56
                bg-[color:var(--primary)]
                text-white
                shadow-xl rounded-br-[200px]
                backdrop-blur-lg border border-white/10
              "
            >
              <button
                onClick={closeMenu}
                className="absolute top-3 right-3 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/20"
              >
                ✕
              </button>

              <li>
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="flex items-center gap-3"
                >
                  <Home size={18} /> Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="flex items-center gap-3"
                >
                  <User size={18} /> Sobre
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="flex items-center gap-3"
                >
                  <Briefcase size={18} /> Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center gap-3 mb-5"
                >
                  <Mail size={18} /> Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
