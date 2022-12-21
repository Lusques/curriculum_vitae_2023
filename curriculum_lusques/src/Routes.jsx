import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function ReactRoutes() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main className="container px-5">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}
