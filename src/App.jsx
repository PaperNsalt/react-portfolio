import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import MainSection from "./pages/MainSection";

const Gallery = lazy(() => import("./pages/Gallery"));
const ProjectSection = lazy(() => import("./pages/ProjectSection"));

function Portfolio() {
  return (
    <>
      <Header />
      <MainSection />
      <Suspense fallback={<div className="section-loading">Loading projects…</div>}>
        <ProjectSection />
      </Suspense>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={<main className="page-loading">Loading gallery…</main>}>
              <Gallery />
            </Suspense>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App
