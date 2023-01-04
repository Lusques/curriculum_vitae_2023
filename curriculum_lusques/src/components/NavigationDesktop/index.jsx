import { Link } from "react-router-dom";

export default function NavigationDesktop({
  currentPage,
  navElements,
  navElementsLinks,
  onClick,
}) {
  return (
    <nav className="bg-gray-400 d-lg-block d-none fixed-top">
      <ul className="container mx-auto px-5 text-white list-unstyled d-flex gap-4 title-lg py-2 m-0 justify-content-end">
        {Object.keys(navElements).map((item, i) => (
          <li
            className={`hover-yellow-outline-400 cursor-pointer}`}
            key={`item-${i}`}
          >
            <Link
              onClick={onClick}
              className={`hover-yellow-outline-400 text-decoration-none ${
                currentPage == navElementsLinks[item]
                  ? "text-yellow-400"
                  : "text-white"
              } ${currentPage}`}
              to={navElementsLinks[item]}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
