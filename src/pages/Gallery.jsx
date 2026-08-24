import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/vector/IamJem.svg";
import ThemeToggle from "../components/ThemeToggle";
import Masonry from "../components/Masonry/Masonry.jsx";
import { galleryWorks } from "../data/gallery";

const categories = [
  "All",
  ...new Set(galleryWorks.map(({ category }) => category)),
];

function Gallery() {
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

  useEffect(() => {
    const closeOnEscape = (event) =>
      event.key === "Escape" && setSelectedWork(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <main className="gallery-page">
      <header className="gallery-nav">
        <Link to="/" className="gallery-brand">
          <span className="gallery-logo">
            <img src={logo} alt="" />
          </span>
          <span>IamJem</span>
        </Link>
        <div className="gallery-nav__actions">
          <ThemeToggle />
          <Link to="/" className="gallery-back">
            Back to portfolio <span>↗</span>
          </Link>
        </div>
      </header>

      <section className="gallery-hero">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow"
        >
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
          <span>{galleryWorks.length} archived pieces</span>
        </motion.div>
      </section>

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

        {/* Masonry Layout */}
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

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-label={selectedWork.title}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="gallery-modal__image">
                <img src={selectedWork.image} alt={selectedWork.title} />
                <button
                  type="button"
                  onClick={() => setSelectedWork(null)}
                  aria-label="Close details"
                >
                  ×
                </button>
              </div>
              <div className="gallery-modal__body">
                <p className="eyebrow">
                  {selectedWork.category} · {selectedWork.year}
                </p>
                <h2>{selectedWork.title}</h2>
                <p className="gallery-modal__description">
                  {selectedWork.description}
                </p>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Gallery;