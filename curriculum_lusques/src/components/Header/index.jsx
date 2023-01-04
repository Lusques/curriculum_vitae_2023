import { useEffect, useState } from "react";
import Contato from "./images/contato.svg";
import Educacional from "./images/educacional.svg";
import Experiencia from "./images/experiencia.svg";
import Home from "./images/home.svg";
import NavigationDesktop from "../NavigationDesktop";
import NavigationMobile from "../NavigationMobile";
import Portifolio from "./images/portifolio.svg";
import SobreMim from "./images/sobre_mim.svg";

const navElements = {
  ["Home"]: Home,
  ["Sobre mim"]: SobreMim,
  ["Educacional"]: Educacional,
  ["Experiência"]: Experiencia,
  ["Portifólio"]: Portifolio,
  ["Contato"]: Contato,
};
const navElementsLinks = {
  ["Home"]: "/",
  ["Sobre mim"]: "/sobre-mim",
  ["Educacional"]: "/educacional",
  ["Experiência"]: "/experiencia",
  ["Portifólio"]: "/portifolio",
  ["Contato"]: "/contato",
};

export default function Header({ updateCurrentPage, currentPage }) {
  return (
    <>
      <NavigationDesktop
        currentPage={currentPage}
        navElements={navElements}
        navElementsLinks={navElementsLinks}
        onClick={updateCurrentPage}
      />
      <NavigationMobile
        currentPage={currentPage}
        navElements={navElements}
        navElementsLinks={navElementsLinks}
        onClick={updateCurrentPage}
      />
    </>
  );
}
