function Footer() {

  function scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }

  return (

    <footer
      className="
        footer-theme
        mt-32
        py-6
        text-center
        text-sm
        text-gray-500
        border-t
        border-[color:var(--border)]
      "
    >

      <button
        onClick={scrollToTop}
        className="
          hover:text-[color:var(--secondary)]
          transition
        "
      >
        ↑ voltar ao topo
      </button>

      <p className="mt-2">
        © {new Date().getFullYear()} Girlene Menezes
      </p>

    </footer>

  );

}

export default Footer;
