import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import MainSection from "./pages/MainSection";
import ProjectSection from "./pages/ProjectSection";
import Gallery from "./pages/Gallery";

function Portfolio() {
  return <><Header /><MainSection /><ProjectSection /><Footer /></>;
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </HashRouter>
  );
}

export default App
