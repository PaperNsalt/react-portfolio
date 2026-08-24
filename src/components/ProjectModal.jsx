import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const GithubIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0112 6.9c.85 0 1.7.12 2.5.34 1.91-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.83-4.58 5.09.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.24 10.24 0 0022 12.23C22 6.58 17.52 2 12 2Z" />
  </svg>
);

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState({ project: null, index: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const mobileScrollRef = useRef(null);
  const desktopScrollRef = useRef(null);
  const thumbnailTrackRef = useRef(null);
  const titleId = useId();

  const images = (
    project?.images?.length ? project.images : [project?.image]
  ).filter(Boolean);

  const activeImageIdx =
    activeImage.project === project ? activeImage.index : 0;

  // Lock background scrolling and handle Escape key
  useEffect(() => {
    if (!project) return undefined;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  // Dynamic Scroll Indicator Handler
  const handleScroll = (e) => {
    const target = e.currentTarget;
    if (!target) return;
    const { scrollTop, scrollHeight, clientHeight } = target;
    const totalScroll = scrollHeight - clientHeight;
    if (totalScroll > 0) {
      setScrollProgress((scrollTop / totalScroll) * 100);
    } else {
      setScrollProgress(100);
    }
  };

  const setImageIndex = (index) => setActiveImage({ project, index });
  const previous = () =>
    setImageIndex((activeImageIdx - 1 + images.length) % images.length);
  const next = () => setImageIndex((activeImageIdx + 1) % images.length);

  const scrollThumbnails = (direction) => {
    if (!thumbnailTrackRef.current) return;
    const amount = direction === "left" ? -150 : 150;
    thumbnailTrackRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close project details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 cursor-default bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="
              project-modal relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl sm:rounded-[1.75rem]
              border border-black/15 bg-[#f7f5f1] text-[#151515] shadow-2xl
              dark:border-white/15 dark:bg-[#0c0d10] dark:text-white dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)]
            "
          >
            {/* Dynamic Glowing Top Scroll Bar */}
            <div
              className="absolute left-0 top-0 z-30 h-[3px] rounded-tl-[1.75rem] bg-gradient-to-r from-[#f2552e] via-[#f2552e] to-transparent shadow-[0_0_12px_#f2552e] transition-all duration-150 ease-out"
              style={{ width: `${Math.max(scrollProgress, 8)}%` }}
            />

            {/* Modal Header */}
            <header className="relative flex shrink-0 items-start justify-between border-b border-black/10 px-5 pt-5 pb-4 sm:px-8 sm:pt-7 sm:pb-5 dark:border-white/10">
              <div>
                <span className="inline-block rounded-full border border-[#f2552e]/30 bg-[#f2552e]/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#f2552e] sm:px-3 sm:text-[10px]">
                  {project.category || "SOFTWARE DEVELOPMENT"}
                </span>
                <h2
                  id={titleId}
                  className="mt-1.5 text-xl font-black uppercase tracking-tight sm:mt-2 sm:text-3xl"
                >
                  {project.title}
                </h2>
                {project.role && (
                  <p className="mt-0.5 text-[11px] font-medium text-black/60 sm:mt-1 sm:text-xs dark:text-white/60">
                    Role: <span className="font-semibold text-black dark:text-white">{project.role}</span>
                  </p>
                )}
              </div>

              {/* Circular Close Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black/70 transition-colors hover:border-[#f2552e] hover:bg-[#f2552e] hover:text-white sm:h-9 sm:w-9 dark:border-white/15 dark:bg-white/5 dark:text-white/70 dark:hover:border-[#f2552e] dark:hover:bg-[#f2552e] dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </motion.button>
            </header>

            {/* Modal Content Layout */}
            <div
              ref={mobileScrollRef}
              onScroll={handleScroll}
              className="grid flex-1 min-h-0 grid-cols-1 gap-6 overflow-y-auto p-4 sm:p-6 lg:grid-cols-12 lg:gap-8 lg:overflow-hidden lg:p-8 [scrollbar-width:thin] [scrollbar-color:rgba(242,85,46,0.4)_transparent]"
            >
              {/* Left Column: Media Showcase */}
              <div className="flex shrink-0 flex-col lg:col-span-7">
                <div className="relative flex aspect-video max-h-56 w-full items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-black/90 sm:max-h-80 lg:max-h-none lg:h-96 sm:rounded-2xl dark:border-white/10">
                  {images.length ? (
                    <img
                      src={images[activeImageIdx]}
                      alt={`${project.title} screenshot ${activeImageIdx + 1}`}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <p className="text-xs text-white/50">Screenshot unavailable</p>
                  )}

                  {/* Image Controls */}
                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={previous}
                        aria-label="Previous screenshot"
                        className="absolute left-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-[#f2552e] sm:left-3.5 sm:h-10 sm:w-10"
                      >
                        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={next}
                        aria-label="Next screenshot"
                        className="absolute right-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-[#f2552e] sm:right-3.5 sm:h-10 sm:w-10"
                      >
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </>
                  )}

                  {/* Counter Badge */}
                  {!!images.length && (
                    <span className="absolute bottom-2.5 right-2.5 rounded-lg bg-black/80 px-2 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur-md sm:bottom-3.5 sm:right-3.5 sm:px-2.5 sm:py-1 sm:text-xs">
                      {activeImageIdx + 1} / {images.length}
                    </span>
                  )}
                </div>

                {/* Thumbnail Row */}
                {images.length > 1 && (
                  <div className="mt-3 flex flex-col gap-2 sm:mt-4">
                    <div
                      ref={thumbnailTrackRef}
                      className="flex gap-2 overflow-x-auto pb-1 sm:gap-2.5 [scrollbar-width:none] [-ms-overflow-style:none]"
                    >
                      {images.map((img, index) => (
                        <button
                          type="button"
                          key={index}
                          onClick={() => setImageIndex(index)}
                          aria-label={`Show screenshot ${index + 1}`}
                          aria-pressed={activeImageIdx === index}
                          className={`
                            relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-16 sm:w-22 sm:rounded-xl
                            ${
                              activeImageIdx === index
                                ? "border-[#f2552e] opacity-100 shadow-[0_0_10px_rgba(242,85,46,0.4)]"
                                : "border-black/10 opacity-50 hover:opacity-80 dark:border-white/10"
                            }
                          `}
                        >
                          <img src={img} alt="" className="h-full w-full object-cover" />
                        </button>
                      ))}
                    </div>

                    {/* Accent Scrollbar Bar with Arrow Controls */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => scrollThumbnails("left")}
                        className="text-[#f2552e] opacity-75 hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <div className="relative h-[2px] flex-1 rounded-full bg-black/10 dark:bg-white/10">
                        <div
                          className="absolute left-0 top-0 h-full rounded-full bg-[#f2552e] shadow-[0_0_8px_#f2552e] transition-all duration-200"
                          style={{
                            width: `${((activeImageIdx + 1) / images.length) * 100}%`,
                          }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => scrollThumbnails("right")}
                        className="text-[#f2552e] opacity-75 hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Project Info */}
              <div
                ref={desktopScrollRef}
                onScroll={handleScroll}
                className="flex flex-col justify-between space-y-5 lg:col-span-5 lg:h-full lg:overflow-y-auto lg:pr-1 sm:space-y-6 [scrollbar-width:thin] [scrollbar-color:rgba(242,85,46,0.4)_transparent]"
              >
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#f2552e]">
                      Project Overview
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed opacity-85 sm:text-sm">
                      {project.description}
                    </p>
                  </div>

                  {!!project.features?.length && (
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#f2552e]">
                        Key Features &amp; Highlights
                      </h3>
                      <div className="mt-2.5 space-y-2 sm:mt-3">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2.5 rounded-xl border border-black/5 bg-black/5 p-2.5 sm:gap-3 sm:p-3 dark:border-white/10 dark:bg-white/5"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f2552e]" />
                            <span className="text-xs font-semibold">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#f2552e]">
                      Technologies &amp; Tools
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                      {(project.technologies ?? []).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-black/10 bg-black/5 px-2.5 py-1 font-mono text-[10px] font-bold dark:border-white/10 dark:bg-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2.5 border-t border-black/10 pt-4 dark:border-white/10 sm:flex-row sm:gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#f2552e] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#d84420] active:scale-[0.98]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/15 bg-black/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition hover:bg-black/10 active:scale-[0.98] dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}