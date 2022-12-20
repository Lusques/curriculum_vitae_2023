import Home from "./images/home.svg";
import SobreMim from "./images/sobre_mim.svg";
import Educacional from "./images/educacional.svg";
import Experiencia from "./images/experiencia.svg";
import Portifolio from "./images/portifolio.svg";
import Contato from "./images/contato.svg";
import style from "./NavigationMobile.module.scss";

export default function NavigationMobile() {
  const navElements = {
    ["Home"]: Home,
    ["Sobre mim"]: SobreMim,
    ["Educacional"]: Educacional,
    ["Experiência"]: Experiencia,
    ["Portifólio"]: Portifolio,
    ["Contato"]: Contato,
  };

  return (
    <nav
      className={`bg-gray-400 d-lg-none fixed-top ${style.mobile_navbar}`}
    >
      <input className={`d-none ${style.active_navbar_mobile}`} id="active_navbar_mobile" type="checkbox"/>
      <ul className="text-white list-unstyled d-flex flex-column gap-4 title-md m-0">
        <li className={`hover-yellow-outline-400 cursor-pointer w-auto ${style.button_menu}`}>
          <label className={`d-block w-100 cursor-pointer w-auto m-auto pt-3`} htmlFor="active_navbar_mobile">
            <span className="d-block"></span>
            <span className={`d-block my-1 position-relative ${style.menu_close}`}></span>
            <span className="d-block"></span>
          </label>
        </li>
        {Object.keys(navElements).map((item, i) => (
          <li
            className={`cursor-pointer d-flex align-items-center ps-3 ${
              style.nav_item
            } ${i === 0 ? style.active : "hover-yellow-outline-400"}`}
          >
            <figure className={`m-0 ${style.nav_image}`}>
              <img src={navElements[item]} alt={item} />
            </figure>
            <p className={`${style.text} m-0 pe-3`}>{item}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
