function Title({ children, variant = "default", className = "" }) {
  const baseStyle = `
    text-3xl
    text-[color:var(--secondary)]
  `;

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

  const finalClass = `${baseStyle} ${variants[variant] || variants.default} ${className}`;

  return <h2 className={finalClass}>{children}</h2>;
}

export default Title;
