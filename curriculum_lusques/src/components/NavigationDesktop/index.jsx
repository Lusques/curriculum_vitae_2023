export default function NavigationDesktop() {
  const navElements = [
    "Home",
    "Sobre mim",
    "Educacional",
    "Experiência",
    "Portifólio",
  ];

  return (
    <nav className="bg-gray-400">
      <ul className="container mx-auto px-5 text-white list-unstyled d-flex gap-4 title-lg py-2 m-0 justify-content-end">
        {navElements.map((item, i) => (
          <li
            className={`hover-yellow-outline-400 cursor-pointer ${
              i == 0 ? "text-yellow-400" : null
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
