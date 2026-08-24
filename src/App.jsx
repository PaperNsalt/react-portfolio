import { lazy, Suspense, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import MainSection from "./pages/MainSection";
import Preloader from "./components/Preloader";

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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock background scrolling while the preloader is active
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div
        className={
          isLoading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-700"
        }
      >
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
      </div>
    </>
  );
}