import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

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
        ${theme === "light"
          ? "bg-[color:var(--primary)]"
          : "bg-[color:var(--bg-soft)]"}
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