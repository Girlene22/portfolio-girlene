import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    if (newTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }

    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
  onClick={toggleTheme}
  className={`
    relative
    w-14
    h-7
    rounded-full
    border
    border-[color:var(--text)]
    transition
    duration-300
    flex
    items-center
    px-1
    ${theme === "light" ? "bg-[color:var(--primary)]" : "bg-black"}
  `}
>

  {/* ícones */}
  <span className="absolute left-1 text-sm">
    ☀️
  </span>

  <span className="absolute right-1 text-sm text-white">
    🌙
  </span>


  {/* bolinha */}
  <span
    className={`
      w-4
      h-4
      bg-white
      rounded-full
      shadow
      transform
      transition
      duration-300
      ${theme === "light"
        ? "translate-x-0"
        : "translate-x-7"}
    `}
  />

</button>
  );
}

export default ThemeToggle;