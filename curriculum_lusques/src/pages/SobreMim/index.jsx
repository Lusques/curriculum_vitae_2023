import Button from "../../components/Button";
import Header from "../../components/Header";
import style from "./SobreMim.module.scss";
import cake from "./images/cake.svg";
import location from "./images/location.svg";
import profile from "./images/profile.png";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const information = {
    ["- O quê procuro:"]:
      " Ambientes que agucem minha criatividade e meu conhecimento, incluindo desafios que demandem o uso de novas ferramentas/softwares.",
    ["- Tenho conhecimento em:"]: " HTML, CSS3, Javascript, Git.",
    ["- Pré-processadores e frameworks Css:"]: " SASS, Bootstrap e ReactJs.",
    ["- Também domino:"]: "Figma, Trello, Jira e autogerenciamento.",
  };
  return (
    <>
      <div className="page container d-flex flex-column flex-lg-row-reverse align-items-center justify-content-between px-5">
        <aside
          className={`${style.profile_image_container} d-inline-block mb-5`}
        >
          <span className={`${style.background_square}`}></span>
          <div className={`${style.image_container} mb-0`}>
            <figure>
              <img className="w-100" src={profile} alt="foto de perfil" />
            </figure>
          </div>
        </aside>
        <div
          className={`${style.information} headline-sm body-res-lg text-white w-75 pb-5`}
        >
          <h2 className="page-title display-md headline-res-md">Sobre mim</h2>
          <ul className="list-unstyled d-flex gap-3 mt-4 mb-5 justify-content-center justify-content-lg-start">
            <li className="d-flex align-items-center gap-2">
              <figure className="m-0">
                <img src={cake} alt="bolo de aniversário" />
              </figure>
              <p className="m-0">{currentYear - 1999} anos</p>
            </li>
            <li className="d-flex align-items-center gap-2">
              <figure className="m-0">
                <img src={location} alt="bolo de aniversário" />
              </figure>
              <p className="m-0">São Paulo</p>
            </li>
          </ul>
          <p>
            Chamo-me Lucas, {currentYear - 1999} anos, solteiro e residente em
            São Paulo.
          </p>
          {Object.keys(information).map((value) => (
            <p>
              <span className="text-yellow-400">{value}</span>
              {information[value]}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
