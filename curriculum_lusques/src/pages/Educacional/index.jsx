import Button from "../../components/Button";
import Chart from "../../components/Chart";
import style from "./Educacional.module.scss";
import alura from "./images/alura.png";

export default function Educacional() {
  const courses = [0, 1, 2, 3, 4, 5, 6];
  const DesktopCourses = () => {
    const ImgAlura = () => {
      return <img className="mb-2 mx-4" src={alura} alt="Alura" />;
    };
    const Card = () => {
      return (
        <>
          <li
            className={`text-white bg-gray-200 py-4 px-5 rounded-2 text-center ${style.card}`}
          >
            <p className="title-lg mb-3">Certificado</p>
            <p className={`headline-lg ${style.card_title}`}>
              Layouts Responsivos
            </p>
            <div className="body-lg">
              <p className="d-flex align-items-center justify-content-between mb-4">
                <span>Situação</span>
                <span>Concluído</span>
              </p>
              <p className="d-flex align-items-center justify-content-between mb-4">
                <span>Conclusão:</span>
                <span>Out/2021</span>
              </p>
              <p className="d-flex align-items-center justify-content-between mb-4">
                <span>Duração:</span>
                <span>10 horas</span>
              </p>
              <p className="text-gray-100 d-flex align-items-center justify-content-between mb-4">
                <span>Credencial</span>
                <span>6b4669...</span>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Button className="" txtButton={<ImgAlura />} outline />
            </div>
          </li>
        </>
      );
    };
    return (
      <>
        <div className={`page ${style.desktop}`}>
          <h2 className="page-title display-md headline-res-md mb-4">
            Educacional
          </h2>
          <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-3">
            {courses.map((item, i) => (
              <>{<Card />}</>
            ))}
          </ul>
        </div>
      </>
    );
  };
  const MobileCourses = () => {
    const ListItem = () => {
      return (
        <>
          <li className={`mb-3 ${style.list_item}`}>
            <p className="title-md">Layouts Responsivos | Out/2021</p>
            <p className="body-sm">
              Uso de css e mediaquery para desenvolver layouts responsivos.
            </p>
            <Button className="body-sm" txtButton="Certificado" outline />
          </li>
        </>
      );
    };
    const Sublist = () => {
      return (
        <>
          <li className={`mb-3 ${style.list_item}`}>
            <p className="title-md">Layouts Responsivos | Out/2021</p>
            <p className="body-sm">
              Uso de css e mediaquery para desenvolver layouts responsivos.
            </p>
            <ul className={`list-unstyled text-white ${style.list}`}>
              {courses.map((item, i) => (
                <>
                  <ul className={`list-unstyled text-white ${style.list}`}>
                    {courses.map((item, i) => (
                      <>{ListItem()}</>
                    ))}
                  </ul>
                </>
              ))}
            </ul>
          </li>
        </>
      );
    };
    return (
      <div className={`page`}>
        <h2 className="page-title display-md headline-res-md">Educacional</h2>
        <Chart />
      </div>
    );
  };
  return (
    <>
      <div className="d-none d-lg-block">
        <DesktopCourses />
      </div>
      <div className="d-lg-none">
        <MobileCourses />
      </div>
    </>
  );
}
