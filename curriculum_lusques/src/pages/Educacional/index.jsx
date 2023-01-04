import Button from "../../components/Button";
import Chart from "../../components/Chart";
import style from "./Educacional.module.scss";
import alura from "./images/alura.png";

const courses = [
  {
    type: "Formação",
    title: "HTML e CSS",
    info: "Conceitos do básico ao avançado de semântica, sintaxe e SEO.",
    duration: "70 Horas",
    situation: "Concluído",
    conclusionDate: "Nov/2021",
    credencial: "3f70765c-00f4-4bd4-9f86-0b3bdf47468f",
    link: "https://cursos.alura.com.br/degree/certificate/3f70765c-00f4-4bd4-9f86-0b3bdf47468f",
    sublist: [
      {
        title: "HTML e CSS 1",
        info: "No curso é desenvolvido conceitos básicos de html e css, focando no entendimento da linguagem de marcação de texto.",
        conclusionDate: "Nov/2021",
        link: "https://cursos.alura.com.br/certificate/adca0dd4-a08d-4227-bf72-34746dcfcced",
      },
      {
        title: "HTML e CSS 2",
        info: "É ensinado formas de organizar o conteúdo da página, estilização recebe um foco maior.",
        conclusionDate: "Nov/2021",
        link: "https://cursos.alura.com.br/certificate/f005d106-ce3c-4e1e-818c-bb90e5881381",
      },
      {
        title: "HTML e CSS 3",
        info: "O curso apresenta e desenvolve o uso de formulários e tabelas.",
        conclusionDate: "Nov/2021",
        link: "https://cursos.alura.com.br/certificate/f260dd4c-4f93-4625-8345-bea39e67e162",
      },
      {
        title: "HTML e CSS 4",
        info: "O curso tem foco total no uso de css e na estilização do projeto.",
        conclusionDate: "Nov/2021",
        link: "https://cursos.alura.com.br/certificate/ca97fbc3-d80b-453c-87fe-7354c3e45e74",
      },
    ],
  },
  {
    type: "Formação",
    title: "Acessibilidade Web",
    info: "Abordou formas de desenvolvedor o front-end de forma mais inclusiva, levando em consideração as necessidades de pessoas portadoras de deficiência.",
    duration: "20 Horas",
    situation: "Concluído",
    conclusionDate: "Nov/2022",
    credencial: "55747ec0-7eb2-486e-9bb1-fe132a2aa9f5",
    link: "https://cursos.alura.com.br/degree/certificate/55747ec0-7eb2-486e-9bb1-fe132a2aa9f5",
    sublist: [
      {
        title: "Acessibilidade web 1",
        info: "No curso é abordado formas de inclusão no front-end.",
        conclusionDate: "Nov/2022",
        link: "https://cursos.alura.com.br/certificate/7a325c12-ea1e-4b66-859b-0d6e181dab21",
      },
      {
        title: "Acessibilidade web 2",
        info: "O curso trata sobre desenvolver componentes acessíveis e introduz javascrips.",
        conclusionDate: "Nov/2022",
        link: "https://cursos.alura.com.br/certificate/af19f7b1-5d81-4e3e-a863-d377590b3ba3",
      },
      {
        title: "Acessibilidade web 3",
        info: "O curso aborda como maneiras e conceitos de como desenvolver um layout mais inclusivo.",
        conclusionDate: "Jul/2022",
        link: "https://cursos.alura.com.br/certificate/76cb2cc4-9c67-4184-9185-653eada9c5af",
      },
    ],
  },
  {
    type: "Certificado",
    title: "ReactJs: Como funciona",
    info: "Curso aborda conceitos funcionamentos básicos de como funciona o framework.",
    duration: "12 Horas",
    situation: "Concluído",
    conclusionDate: "Fev/2022",
    credencial: "b64680c1-caca-4205-b8ec-d29edd198bc9",
    link: "https://cursos.alura.com.br/certificate/b64680c1-caca-4205-b8ec-d29edd198bc9",
  },
  {
    type: "Certificado",
    title: "Bootstrap",
    info: "No curso é abordado técnicas e formas de desenvolver uma landingpage somente com Bootstrap.",
    duration: "8 Horas",
    situation: "Concluído",
    conclusionDate: "Nov/2022",
    credencial: "a4a6e5d3-9a34-4280-88f6-75193aefb3ae",
    link: "https://cursos.alura.com.br/certificate/a4a6e5d3-9a34-4280-88f6-75193aefb3ae",
  },
  {
    type: "Certificado",
    title: "Figma",
    info: "Aborda formas de desenvolver um layout com figma e apresenta componentes de interface.",
    duration: "10 Horas",
    situation: "Concluído",
    conclusionDate: "Dez/2022",
    credencial: "7dd174e9-afb5-4194-a12f-45e71f7d8efb",
    link: "https://cursos.alura.com.br/certificate/7dd174e9-afb5-4194-a12f-45e71f7d8efb",
  },
  {
    type: "Certificado",
    title: "Git e Github",
    info: "No decorrer do curso é ensinado formas e comandos de como se trabalhar com versionamento de código",
    duration: "6 Horas",
    situation: "Concluído",
    conclusionDate: "Jul/2022",
    credencial: "28311da2-94bc-443b-bd8c-2ca11c9ed725",
    link: "https://cursos.alura.com.br/certificate/28311da2-94bc-443b-bd8c-2ca11c9ed725",
  },
];

export default function Educacional() {
  const DesktopCourses = () => {
    const ImgAlura = () => {
      return <img className="mb-2 mx-4" src={alura} alt="Alura" />;
    };
    const Card = ({ item, elementIndex }) => {
      return (
        <>
          <li
            className={`text-white bg-gray-200 py-4 px-5 rounded-2 text-center ${style.card}`}
          >
            <p className="title-lg mb-3">{item.type || "Certificado"}</p>
            <p className={`headline-lg ${style.card_title}`}>{item.title}</p>
            <div className="body-lg">
              <p className="d-flex align-items-center justify-content-between mb-4">
                <span>Situação</span>
                <span>{item.situation}</span>
              </p>
              <p className="d-flex align-items-center justify-content-between mb-4">
                <span>Conclusão:</span>
                <span>{item.conclusionDate}</span>
              </p>
              <p className="d-flex align-items-center justify-content-between mb-4">
                <span>Duração:</span>
                <span>{item.duration}</span>
              </p>
              <p className="text-gray-100 d-flex align-items-center justify-content-between mb-4">
                <span>Credencial</span>
                <span className={style.credencial} title={item.credencial}>
                  {item.credencial}
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <a href={item.link} target="__blank">
                <Button className="" txtButton={<ImgAlura />} outline />
              </a>
            </div>
          </li>
        </>
      );
    };
    return (
      <>
        <div className={`page container ${style.desktop}`}>
          <h2 className="page-title display-md headline-res-md mb-4">
            Educacional
          </h2>
          <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-3">
            {courses.map((item, i) => (
              <>{<Card item={item} elementIndex={i} />}</>
            ))}
          </ul>
        </div>
      </>
    );
  };
  const MobileCourses = () => {
    return (
      <div className={`page`}>
        <h2 className="page-title display-md headline-res-md">Educacional</h2>
        <div className="d-flex justify-content-center px-4">
          <div className="px-5">
            <Chart array={courses} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="d-none d-lg-block px-5">
        <DesktopCourses />
      </div>
      <div className="d-lg-none">
        <MobileCourses />
      </div>
    </>
  );
}
