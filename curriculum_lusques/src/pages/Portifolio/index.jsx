import style from "./Portifolio.module.scss";
import Button from "../../components/Button";
const cards = [
  {
    title: "lading Page 1",
    info: "Página desenvolvida para praticar conceitos de bootstrap",
    pageLink: "...",
    repositorieLink: "...",
  },
  {
    title: "lading Page 2",
    info: "Página desenvolvida para praticar conceitos de bootstrap",
    pageLink: "...",
    repositorieLink: "...",
  },
  {
    title: "lading Page 3",
    info: "Página desenvolvida para praticar conceitos de bootstrap",
    pageLink: "...",
    repositorieLink: "...",
  },
  {
    title: "lading Page 4",
    info: "Página desenvolvida para praticar conceitos de bootstrap",
    pageLink: "...",
    repositorieLink: "...",
  },
];
export default function Portifolio() {
  const Card = (data) => {
    return (
      <>
        <div className={`card rounded-0  border-0 ${style.card}`}>
          <figure className="card-img-top m-0"></figure>
          <div className="card-body pt-2 bg-gray-300 d-flex flex-column">
            {data.title ? (
              <h5 className="card-title title-lg text-white">{data.title}</h5>
            ) : null}
            {data.info ? (
              <p className="card-text text-white body-lg pt-2 flex-grow-1">
                {data.info}
              </p>
            ) : (
              <div className="flex-grow-1"></div>
            )}
            {data.pageLink || data.repositorieLink ? (
              <div className="d-flex justify-content-between mt-5">
                {data.pageLink ? (
                  <Button className="title-md" txtButton="Página web" />
                ) : null}
                {data.repositorieLink ? (
                  <Button
                    className="title-md"
                    txtButton="Respositório"
                    outline
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  };
  const Desktop = () => {
    return (
      <>
        <div className="page bg-gray-400 d-none d-lg-block px-5">
          <div className="container">
            <h2 className="page-title display-md headline-res-md mb-5">
              Portifólio
            </h2>
            <section>
              <div id="carouselDesktop" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="d-flex justify-content-center gap-4">
                      {cards.map((item, i) => (
                        <>{Card(item)}</>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  className={`carousel-control-prev ${
                    cards.length <= 4 ? "d-none" : ""
                  }`}
                  type="button"
                  data-bs-target="#carouselDesktop"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  className={`carousel-control-next ${
                    cards.length <= 4 ? "d-none" : ""
                  }
                  `}
                  type="button"
                  data-bs-target="#carouselDesktop"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  };
  const Mobile = () => {
    return (
      <>
        <div className="page bg-gray-400 d-lg-none px-5">
          <div className="container">
            <h2 className="page-title display-md headline-res-md mb-5">
              Portifólio
            </h2>
            <section>
              <div id="carouselMobile" class="carousel slide">
                <div class="carousel-inner">
                  {cards.map((item, i) => (
                    <>
                      <div class={`carousel-item ${i == 0 ? "active" : ""}`}>
                        <div className="d-flex justify-content-center gap-4">
                          {Card(item)}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselMobile"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselMobile"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}
