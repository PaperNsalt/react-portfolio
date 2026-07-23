import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/vector/IamJem.svg";
import { galleryWorks } from "../data/gallery";

function Gallery() {
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedWork(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f5f1] px-4 py-4 sm:px-7 sm:py-7 md:px-10">
      <header className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/55 px-4 py-3 shadow-[0_14px_38px_-20px_rgba(20,16,12,.42),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl sm:px-5">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2552e]"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white/80 p-1.5">
            <img className="size-6 object-fit" src={logo} alt="IamJem" />
          </span>
          <span className="text-[1.2rem] font-bold uppercase tracking-[.14em] text-black">
            Portfolio
          </span>
        </Link>
        <Link
          to="/"
          className="rounded-xl border border-black/10 bg-white/60 px-4 py-2 text-[1.2rem] font-semibold uppercase tracking-[.1em] text-black transition hover:bg-black hover:text-white"
        >
          Back
        </Link>
      </header>

      <section className="mx-auto max-w-7xl pb-20 pt-14 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-[1.1rem] font-bold uppercase tracking-[.2em] text-[#f2552e]">
            Personal archive
          </p>
          <h1 className="mt-3 text-[clamp(4.5rem,13vw,12rem)] font-medium leading-[.82] tracking-[-.075em] text-black">
            ART &<br />
            LAYOUTS
          </h1>
          <p className="mt-7 max-w-xl text-[1.5rem] leading-relaxed text-black/65 sm:text-[1.8rem]">
            A collection of interface explorations, visual studies, and selected
            creative work.
          </p>
        </motion.div>

        <div className="mt-12 flex items-end justify-between gap-4 border-b border-black/10 pb-5">
          <h2 className="text-[2.4rem] font-semibold tracking-[-.05em] text-black sm:text-[3.2rem]">
            Selected work
          </h2>
          <p className="text-[1.15rem] font-semibold uppercase tracking-[.12em] text-black/45">
            {galleryWorks.length} pieces
          </p>
        </div>

        <motion.div
          layout
          className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryWorks.map((work, index) => (
            <motion.button
              key={work.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.07,
                type: "spring",
                stiffness: 220,
                damping: 24,
              }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedWork(work)}
              className="group overflow-hidden rounded-[1.7rem] border border-black/10 bg-white text-left shadow-[0_20px_45px_-30px_rgba(0,0,0,.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2552e]"
            >
              <div className="relative overflow-hidden bg-black/5">
                <img
                  src={work.image}
                  alt={work.title}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-[1.8rem] text-black shadow-sm backdrop-blur-md transition group-hover:rotate-45">
                  ↗
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3 text-[1rem] font-bold uppercase tracking-[.14em] text-[#f2552e]">
                  <span>{work.category}</span>
                  <span>{work.year}</span>
                </div>
                <h3 className="mt-2 text-[2.2rem] font-semibold tracking-[-.05em] text-black">
                  {work.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[1.3rem] leading-relaxed text-black/55">
                  {work.description}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-black/55 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.article
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={selectedWork.title}
              className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/70 bg-[#f7f5f1] shadow-2xl"
            >
              <div className="relative bg-black/5 p-2 sm:p-3">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="max-h-[58vh] w-full rounded-[1.45rem] object-contain"
                />
                <button
                  onClick={() => setSelectedWork(null)}
                  className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[2rem] text-black shadow-md backdrop-blur-md"
                  aria-label="Close details"
                >
                  ×
                </button>
              </div>
              <div className="p-5 sm:p-8">
                <p className="text-[1.1rem] font-bold uppercase tracking-[.18em] text-[#f2552e]">
                  {selectedWork.category} · {selectedWork.year}
                </p>
                <h2 className="mt-2 text-[clamp(3rem,8vw,5rem)] font-semibold leading-none tracking-[-.06em] text-black">
                  {selectedWork.title}
                </h2>
                <p className="mt-5 max-w-2xl text-[1.5rem] leading-relaxed text-black/65 sm:text-[1.8rem]">
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
