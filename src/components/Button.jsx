function Button({
  children,
  onClick,
  href,
  variant = "primary",
  target = "_self",
}) {
  const baseStyle = `
    px-4
    py-2
    rounded
    transition
    duration-300
    inline-block
  `;

  const variants = {
    primary: `
    bg-[color:var(--primary)]
    text-[color:var(--text)]
    border
    border-[color:var(--primary)]
    hover:opacity-90
  `,

    outline: `
    border
    border-[color:var(--primary)]
    text-[color:var(--primary)]
    hover:bg-[color:var(--primary)]
    hover:text-[color:var(--text)]
  `,

    link: `
    text-sm
    text-[color:var(--secondary)]
    hover:text-[color:var(--primary)]
    bg-transparent
    border-none
    px-0
    py-0
    rounded-none
  `,
  };

  const className = `${baseStyle} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} target={target} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
