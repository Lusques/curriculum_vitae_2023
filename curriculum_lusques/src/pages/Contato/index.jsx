import ilustration from "./images/home_animation.png";
import Button from "../../components/Button";
export default function Contato() {
  return (
    <>
      <div className="page ">
        <h2 className="page-title">Contato</h2>
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="text-white col-10 col-lg-6">
            <div className="display-md headline-res-lg text-center text-lg-start mb-4 mb-lg-0">
              <ul className="d-flex flex-column gap-4 list-unstyled headline-lg">
                <li>
                  <a className="text-white text-decoration-none" href="#">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a className="text-white text-decoration-none" href="#">
                    Github
                  </a>
                </li>
                <li>
                  <a className="text-white text-decoration-none" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-white text-decoration-none" href="#">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a className="text-white text-decoration-none" href="#">
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
