import Chart from "../../components/Chart";

const aplication = [
  {
    title: "Desenvolvedor Front-end | Toodoo",
    info: "Estudante no programa de treinamento BlastOff, onde desenvolvo habilidades com as linguagens, ferramentas e metodologias mais utilizadas no mercado na modalidade de front-end, tais como:SASS, Bootstrap, JavaScript, Jquery, ReactJs, Scrum e Git.",
  },
  {
    title: "Desenvolvedor Front-end | Seri.e",
    info: "Atuação na empresa Seri.e, sendo responsável por executar manutenção, atualizações e desenvolvimento de aplicações no código front-end do cliente de acordo com protótipos do time de UX/UI.",
  },
  {
    title: "HelpDesk | Solfácil",
    info: "Executava pequenas manutenções e ajustes no código web front-end quando solicitado pelo setor de tecnologia da empresa.",
  },
];
const events = [
  {
    title: "Hackaton Microsoft | 2022",
    info: "Hackaton realizado durante campus party.",
    link: "",
  },
  {
    title: "Campus Party | 2022",
    info: "Hackaton realizado durante campus party.",
    link: "",
  },
];
const technologies = [
  { title: "HTML5" },
  { title: "CSS3", sublist: [{ title: "Sass" }, { title: "Bootstrap" }] },
  {
    title: "JavaScript",
    sublist: [
      { title: "Jquery" },
      { title: "Axios" },
      { title: "ReactJs" },
      { title: "React Routes" },
    ],
  },
  { title: "GIT" },
  { title: "Figma" },
  { title: "Scrum" },
];

export default function Experiencia() {
  return (
    <div className="page">
      <h2 className="page-title display-md headline-res-md mb-4">
        Experiência
      </h2>
      <div className="row justify-content-between text-white">
        <div className="col-lg-6">
          <div>
            <h2 className="headline-md">
              <span className="text-yellow-400">{"</>"}</span> Aplicabilidade
            </h2>
            <Chart array={aplication} />
          </div>
          <div>
            <div className="d-none d-lg-block">
              <h2 className="headline-md">
                <span className="text-yellow-400">{"</>"}</span> Eventos
              </h2>
              <Chart array={events} />
            </div>
            <div className="d-lg-none">
              <h2 className="headline-md">
                <span className="text-yellow-400">{"</>"}</span> Tecnologias
                <Chart array={technologies} />
              </h2>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-lg-none">
            <h2 className="headline-md">
              <span className="text-yellow-400">{"</>"}</span> Eventos
            </h2>
            <Chart array={events} />
          </div>
          <div className="d-none d-lg-block">
            <h2 className="headline-md">
              <span className="text-yellow-400">{"</>"}</span> Tecnologias
            </h2>
            <Chart array={technologies} />
          </div>
        </div>
      </div>
    </div>
  );
}
