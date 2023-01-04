import Button from "../../components/Button";
import animationData from "./images/home_animation";
import Lottie from "react-lottie";

export default function Home() {
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
            <Button className="" txtButton="Download CV" />
            <Button txtButton="Portifólio" outline />
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
