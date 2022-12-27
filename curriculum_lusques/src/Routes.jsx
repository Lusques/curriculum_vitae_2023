import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";

export default function ReactRoutes() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main className="container px-5">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
    </Router>
  );
}
