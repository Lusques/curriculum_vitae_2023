import email from "../../assets/png/email.png";
import github from "../../assets/png/github.png";
import instagram from "../../assets/png/instagram.png";
import linkedin from "../../assets/png/linkedin.png";
import whatsapp from "../../assets/png/whatsapp.png";
export default function Footer() {
  return (
    <>
      <div className="display-md headline-res-lg bg-gray-400 px-5 py-4 d-flex justify-content-between">
        <a
          className="text-white text-decoration-none d-none d-md-flex align-items-center"
          href="#"
          target="__blank"
        >
          <p className="m-0">Lusques</p>
        </a>
        <ul className="d-flex gap-4 list-unstyled headline-lg align-content-center mx-auto mx-md-0">
          <li>
            <a
              className="text-white text-decoration-none d-flex align-content-center gap-3"
              href="https://www.linkedin.com/in/lucas-carlos-76aba0165/"
              target="__blank"
            >
              <figure className="m-0">
                <img src={linkedin} alt="" />
              </figure>
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
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
