import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Educacional from "./pages/Educacional";
import Experiencia from "./pages/Experiencia";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portifolio from "./pages/Portifolio";
import SobreMim from "./pages/SobreMim";
import Footer from "./components/Footer";

export default function ReactRoutes() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
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
