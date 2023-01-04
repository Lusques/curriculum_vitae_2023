import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Contato from "./pages/Contato";
import Educacional from "./pages/Educacional";
import Experiencia from "./pages/Experiencia";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portifolio from "./pages/Portifolio";
import SobreMim from "./pages/SobreMim";

export default function ReactRoutes() {
  const [currentPage, setCurrentPage] = useState(
    "/" +
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ],
  );

  const updateCurrentPage = () => {
    setTimeout(() => {
      const url = window.location.href.split("/");
      setCurrentPage(`/${url[url.length - 1]}`);
    }, 0);
  };
  return (
    <Router>
      <header>
        <Header
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
        />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home updateCurrentPage={updateCurrentPage} />}
          />
          <Route path="/sobre-mim" element={<SobreMim />} />
          <Route path="/educacional" element={<Educacional />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}
