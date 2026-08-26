import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  Sparkles,
  LayoutGrid,
  Menu,
  X,
  Compass,
  Home,
  User,
  FolderGit2,
  Mail,
} from "lucide-react";

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

const mainPageLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/#about", icon: User },
  { label: "Projects", path: "/#projects", icon: FolderGit2 },
  { label: "Contact", path: "/#contact", icon: Mail },
];

function Gallery() {
  const [selectedWork, setSelectedWork] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

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
    <main className="gallery-page min-h-screen bg-[#f8f6f0] pb-24 dark:bg-[#0d0d11] md:pb-12">
      {/* ================= DESKTOP NAVIGATION ================= */}
      <header className="fixed inset-x-0 top-0 z-50 hidden px-5 pt-5 md:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/65 bg-white/45 px-5 py-2.5 shadow-[0_14px_38px_-20px_rgba(20,16,12,.42),inset_0_1px_0_rgba(255,255,255,.85)] backdrop-blur-2xl dark:border-white/20 dark:bg-white/10 dark:shadow-[0_14px_38px_-20px_rgba(0,0,0,.6)]">
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
              <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[.15em] text-black/50 dark:text-white/50">
                Visual Archive
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white/60 px-4 py-2 text-[0.9rem] font-semibold uppercase tracking-[.12em] text-black/80 transition-all duration-300 hover:border-[#f2552e] hover:bg-[#f2552e] hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-[#f4f1eb] dark:hover:border-[#f2552e] dark:hover:bg-[#f2552e] dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to portfolio</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE NAVIGATION ================= */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(.75rem,env(safe-area-inset-bottom))] md:hidden"
      >
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-gallery-menu"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              className="absolute inset-x-3 bottom-[5.25rem] max-h-[75vh] overflow-y-auto rounded-[1.75rem] border border-white/70 bg-white/70 p-3 shadow-[0_-18px_55px_-28px_rgba(20,16,12,.58),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl dark:border-white/20 dark:bg-[#121216]/85 dark:shadow-[0_-18px_55px_-28px_rgba(0,0,0,.8),inset_0_1px_0_rgba(255,255,255,.15)]"
            >
              {/* Menu Header with Theme Toggle */}
              <div className="mb-2 flex items-center justify-between border-b border-black/10 px-3 pb-3 pt-1 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[#f2552e]" />
                  <p className="text-[0.85rem] font-bold uppercase tracking-[.18em] text-white/60 dark:text-white/50">
                    Archive Navigation
                  </p>
                </div>
                <ThemeToggle />
              </div>

              {/* Main Back Button CTA */}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mb-2 flex min-h-12 items-center justify-between rounded-[1.15rem] bg-[#f2552e] px-4 text-[1.25rem] font-semibold uppercase tracking-[.08em] text-white shadow-sm transition hover:bg-[#d9441f]"
              >
                <span className="flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5 text-white" />
                  Back to Portfolio
                </span>
              </Link>

              {/* Quick Page Navigations */}
              <div className="space-y-1">
                {mainPageLinks.map(({ label, path, icon: Icon }, index) => (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex min-h-12 w-full items-center justify-between rounded-[1.15rem] px-4 text-left text-[1.15rem] font-semibold uppercase tracking-[.08em] text-white/60 transition hover:bg-white/70 dark:text-[#f4f1eb] dark:hover:bg-white/10"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#f2552e]" />
                      <span className="font-mono text-[0.9rem] text-[#f2552e]">
                        0{index + 1}
                      </span>
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Mobile Trigger Bar */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-gallery-menu"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="mx-auto flex min-h-14 w-full max-w-md items-center justify-between rounded-[1.5rem] border border-white/65 bg-black/80 px-3 py-2 text-white shadow-[0_-12px_40px_-22px_rgba(20,16,12,.58),inset_0_1px_0_rgba(255,255,255,.25)] backdrop-blur-2xl dark:border-white/25 dark:bg-[#121216]/90"
        >
          <span className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/80 bg-white/85 p-1.5 shadow-sm dark:border-white/20 dark:bg-white/10">
              <img
                className="size-6"
                src={logo}
                alt=""
                aria-hidden="true"
              />
            </span>
            <span className="text-left">
              <span className="block font-mono text-[.75rem] font-medium uppercase tracking-[.18em] text-white/55">
                IamJem
              </span>
              <span className="block text-[1.1rem] font-bold uppercase tracking-[.12em]">
                {isMobileMenuOpen ? "Close Menu" : "Archive Menu"}
              </span>
            </span>
          </span>

          <span className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-[#f2552e]" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </span>
        </motion.button>
      </nav>

      {/* Hero Header */}
      <section className="gallery-hero pt-24 md:pt-32">
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