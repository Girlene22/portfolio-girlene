function Title({
  children,
  variant = "default",
  color = "secondary",
  className = "",
}) {

  const baseStyle = `
    text-3xl
  `;

  const colors = {
  secondary: "text-[color:var(--secondary)]",
  white: "text-white",
  primary: "text-[color:var(--primary)]",
  wine: "text-[#740000]",
};

  const variants = {

    default: `
      mb-8
    `,

    LargeMargin: `
      mb-16
    `,

    ExtraLargeMargin: `
      mb-20
    `,

    center: `
      text-center
      mb-8
    `,
  };

  const finalClass = `
    ${baseStyle}
    ${colors[color]}
    ${variants[variant] || variants.default}
    ${className}
  `;

  return (
    <h2 className={finalClass}>
      {children}
    </h2>
  );
}

export default Title;