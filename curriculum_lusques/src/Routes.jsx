import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";

export default function ReactRoutes() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main className="px-5 px-lg-0">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
    </Router>
  );
}
