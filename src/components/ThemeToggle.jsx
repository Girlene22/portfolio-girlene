import { useTheme } from "../context/ThemeContext";

function ThemeToggle({ size = "md" }) {
  const { theme, toggleTheme } = useTheme();

  const sizes = {
    sm: {
      track: "w-11 h-6",
      knob: "w-3.5 h-3.5",
      translate: "translate-x-[22px]",
      icon: "text-[10px]",
    },
    md: {
      track: "w-14 h-7",
      knob: "w-4 h-4",
      translate: "translate-x-7",
      icon: "text-sm",
    },
  };

  const current = sizes[size];

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative ${current.track} rounded-full border border-[color:var(--primary)]
        transition duration-300 flex items-center px-1
        ${theme === "light" ? "bg-[color:var(--primary)]" : "bg-[color:var(--bg-soft)]"}
      `}
    >
      <span className={`absolute left-1 ${current.icon}`}>☀️</span>
      <span className={`absolute right-1 ${current.icon} text-white`}>🌙</span>

      <span
        className={`
          ${current.knob} bg-white rounded-full shadow transform transition duration-300
          ${theme === "light" ? "translate-x-0" : current.translate}
        `}
      />
    </button>
  );
}

export default ThemeToggle;
