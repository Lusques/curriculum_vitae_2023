export default function NavigationDesktop() {
  const navElements = [
    "Home",
    "Sobre mim",
    "Educacional",
    "Experiência",
    "Portifólio",
    "Contato",
  ];

  return (
    // <nav className="bg-gray-400 d-lg-block d-none fixed-top">
    <nav className="bg-gray-400 d-lg-block d-none fixed-top">
      <ul className="container mx-auto px-5 text-white list-unstyled d-flex gap-4 title-lg py-2 m-0 justify-content-end">
        {navElements.map((item, i) => (
          <li
            className={`hover-yellow-outline-400 cursor-pointer ${
              i == 0 ? "text-yellow-400" : ""
            }`}
            key={`item-${i}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
