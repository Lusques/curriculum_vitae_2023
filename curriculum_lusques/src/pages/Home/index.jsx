import Button from "../../components/Button";
import animationData from "../../assets/lottiefile/home_animation";
import Lottie from "react-lottie";
import curriculumPDF from "./curriculum.pdf";
import { Link } from "react-router-dom";

export default function Home({ updateCurrentPage }) {
  const defaultOptions = {
    loop: true,
    reverse: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="page mx-lg-auto container row align-items-center flex-column-reverse flex-lg-row px-5">
        <div className="text-white col-10 col-lg-6">
          <div className="display-md headline-res-lg text-center text-lg-start mb-4 mb-lg-0">
            <p className="m-0">Olá!</p>
            <p className="m-0">
              Sou <span className="text-yellow-400">Lucas Silva</span>
            </p>
            <p className="m-0">
              <span className="text-yellow-400">Front-end</span> developer
            </p>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
            <a href={curriculumPDF} target="_blank" download>
              {/* <a href={curriculumRAR} target="_blank"> */}
              <Button className="" txtButton="Download CV" />
            </a>
            <Link to={"/portifolio"} onClick={updateCurrentPage}>
              <Button txtButton="Portifólio" outline />
            </Link>
          </div>
        </div>
        <aside className="col-10 col-lg-6">
          <div className="">
            <Lottie options={defaultOptions} height={"100%"} width={"105%"} />
          </div>
        </aside>
      </div>
    </>
  );
}
