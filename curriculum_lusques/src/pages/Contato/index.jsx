import ilustration from "./images/home_animation.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import instagram from "./images/instagram.png";
import whatsapp from "./images/whatsapp.png";
import email from "./images/email.png";
import style from "./Contato.module.scss";
export default function Contato() {
  return (
    <>
      <div className="page container">
        <h2 className="page-title display-md headline-res-md">Contato</h2>
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="text-white col-10 col-lg-6">
            <div className="display-md headline-res-lg text-center text-lg-start mb-4 mb-lg-0">
              <ul
                className={`d-flex flex-column gap-4 list-unstyled headline-lg align-content-center ${style.contact_list}`}
              >
                <li>
                  <a
                    className="text-white text-decoration-none d-flex align-content-center gap-3"
                    href="#"
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
                    href="#"
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
                    href="#"
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
                    href="#"
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
                    href="#"
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
            <img className="w-100" src={ilustration} alt="ilustração" />
          </aside>
        </div>
      </div>
    </>
  );
}
