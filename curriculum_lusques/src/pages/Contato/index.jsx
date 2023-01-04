import animationData from "../../assets/lottiefile/contato_animation.json";
import email from "../../assets/png/email.png";
import github from "../../assets/png/github.png";
import instagram from "../../assets/png/instagram.png";
import linkedin from "../../assets/png/linkedin.png";
import Lottie from "react-lottie";
import style from "./Contato.module.scss";
import whatsapp from "../../assets/png/whatsapp.png";
export default function Contato() {
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
      <div className="page container px-5">
        <h2 className="page-title display-md headline-res-md">Contato</h2>
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="text-white col-10 col-lg-6">
            <div className="display-md headline-res-lg text-center text-lg-start mb-4 mb-lg-0">
              <ul
                className={`d-flex flex-column gap-4 list-unstyled headline-lg align-content-center m-auto m-lg-0 ${style.contact_list}`}
              >
                <li>
                  <a
                    className="text-white text-decoration-none d-flex align-content-center gap-3"
                    href="https://www.linkedin.com/in/lucas-carlos-76aba0165/"
                    target="__blank"
                  >
                    <figure className="m-0">
                      <img src={linkedin} alt="" />
                    </figure>
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-decoration-none d-flex align-content-center gap-3"
                    href="https://github.com/Lusques"
                    target="__blank"
                  >
                    <figure className="m-0">
                      <img src={github} alt="github" />
                    </figure>
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-decoration-none d-flex align-content-center gap-3"
                    href="https://www.instagram.com/lusques_io/"
                    target="__blank"
                  >
                    <figure className="m-0">
                      <img src={instagram} alt="instagram" />
                    </figure>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-decoration-none d-flex align-content-center gap-3"
                    href="https://api.whatsapp.com/send?1=pt_BR&phone=5511951233225"
                    target="__blank"
                  >
                    <figure className="m-0">
                      <img src={whatsapp} alt="whatsapp" />
                    </figure>
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-decoration-none d-flex align-content-center gap-3"
                    href="mailto:lucascarlosjobs@gmail.com?subject=Oportunidade Front-end"
                    target="__blank"
                  >
                    <figure className="m-0">
                      <img src={email} alt="e-mail" />
                    </figure>
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <aside className="col-10 col-lg-6">
            <Lottie
              options={defaultOptions}
              height={"100%"}
              width={window.screen.width > 992 ? "100%" : "80%"}
            />
          </aside>
        </div>
      </div>
    </>
  );
}
