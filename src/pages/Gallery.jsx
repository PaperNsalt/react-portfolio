import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Sparkles, LayoutGrid } from "lucide-react";

import logo from "../assets/vector/IamJem.svg";
import ThemeToggle from "../components/ThemeToggle";
import Masonry from "../components/Masonry/Masonry.jsx";
import GalleryModal from "../components/GalleryModal";
import GalleryFooter from "../components/GalleryFooter";
import { galleryWorks } from "../data/gallery";

import Lenis from "lenis";
import "lenis/dist/lenis.css";

const categories = [
  "All",
  ...new Set(galleryWorks.map(({ category }) => category)),
];

function Gallery() {

  useEffect(() => {
      const lenis = new Lenis({ smoothWheel: true, duration: 1.2 });
      let animationFrameId;
  
      const raf = (time) => {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };
  
      animationFrameId = requestAnimationFrame(raf);
  
      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
      };
    }, []);

  const [selectedWork, setSelectedWork] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks = useMemo(
    () =>
      activeCategory === "All"
        ? galleryWorks
        : galleryWorks.filter((work) => work.category === activeCategory),
    [activeCategory]
  );

  const masonryItems = useMemo(
    () =>
      filteredWorks.map((work) => ({
        ...work,
        img: work.image,
      })),
    [filteredWorks]
  );

  return (
    <main className="gallery-page min-h-screen bg-[#f8f6f0] dark:bg-[#0d0d11]">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 w-full px-4 pt-4 md:px-8 md:pt-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/65 bg-white/45 px-4 py-2.5 shadow-[0_14px_38px_-20px_rgba(20,16,12,.42),inset_0_1px_0_rgba(255,255,255,.85)] backdrop-blur-2xl dark:border-white/20 dark:bg-white/10 dark:shadow-[0_14px_38px_-20px_rgba(0,0,0,.6)] sm:px-6">
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2552e]"
          >
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-white/80 p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-white/20 dark:bg-white/10">
              <img
                src={logo}
                alt="IamJem Logo"
                className="size-6 object-contain object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[1.05rem] font-bold uppercase tracking-[.12em] text-black transition-colors group-hover:text-[#f2552e] dark:text-[#f4f1eb]">
                IamJem
              </span>
              <span className="hidden font-mono text-[0.65rem] font-medium uppercase tracking-[.15em] text-black/50 dark:text-white/50 sm:block">
                Visual Archive
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white/60 px-3.5 py-2 text-[0.85rem] font-semibold uppercase tracking-[.12em] text-black/80 transition-all duration-300 hover:border-[#f2552e] hover:bg-[#f2552e] hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-[#f4f1eb] dark:hover:border-[#f2552e] dark:hover:bg-[#f2552e] dark:hover:text-white sm:text-[0.9rem]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Back to portfolio</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Header */}
      <section className="gallery-hero pt-8 md:pt-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow flex items-center gap-2"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#f2552e]" />
          Visual archive / 2024—2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.55 }}
        >
          Art, layouts
          <br />
          <em>& ideas.</em>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.18 }}
          className="gallery-hero__footer"
        >
          <p>
            A selection of visual studies, campaign work, and design
            explorations.
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/5 px-3 py-1 font-mono text-xs dark:border-white/15 dark:bg-white/5">
            <LayoutGrid className="h-3 w-3 text-[#f2552e]" />
            {galleryWorks.length} archived pieces
          </span>
        </motion.div>
      </section>

      {/* Collection Grid Section */}
      <section
        className="gallery-collection"
        aria-labelledby="collection-title"
      >
        <div className="gallery-collection__top">
          <h2 id="collection-title">Selected work</h2>
          <p>
            {filteredWorks.length.toString().padStart(2, "0")} /{" "}
            {galleryWorks.length.toString().padStart(2, "0")}
          </p>
        </div>

        <div className="gallery-filters" aria-label="Filter gallery work">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={activeCategory === category ? "is-active" : ""}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-masonry-wrapper mt-8">
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.04}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.98}
            blurToFocus={true}
            colorShiftOnHover={false}
            onItemClick={setSelectedWork}
          />
        </div>
      </section>

      {/* Gallery Footer */}
      <GalleryFooter />

      {/* Modular Detail Modal */}
      <AnimatePresence>
        {selectedWork && (
          <GalleryModal
            work={selectedWork}
            onClose={() => setSelectedWork(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Gallery;