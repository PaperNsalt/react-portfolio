import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ExternalLinkIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0112 6.9c.85 0 1.7.12 2.5.34 1.91-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.83-4.58 5.09.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.24 10.24 0 0022 12.23C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const CheckCircleIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState({ project: null, index: 0 });
  const titleId = useId();

  const images = (project?.images?.length ? project.images : [project?.image]).filter(Boolean);

  const activeImageIdx = activeImage.project === project ? activeImage.index : 0;

  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  const setImageIndex = (index) => setActiveImage({ project, index });
  const previous = () => setImageIndex((activeImageIdx - 1 + images.length) % images.length);
  const next = () => setImageIndex((activeImageIdx + 1) % images.length);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close project details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 cursor-default bg-black/60 backdrop-blur-sm"
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
              project-modal relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl
              /* Light Mode Design */
              border border-black/10 bg-[#f7f5f1] text-[#151515] shadow-2xl
              /* Dark Mode Design */
              dark:border-white/20 dark:bg-[#121216] dark:text-white dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            "
          >
            {/* Header */}
            <header className="flex items-start justify-between border-b border-black/10 p-6 sm:p-8 dark:border-white/10">
              <div>
                <span className="inline-block rounded-full bg-[#f2552e]/10 px-3 py-1 text-[11px] font-bold tracking-wider text-[#f2552e] dark:bg-[#f2552e]/20">
                  {project.category || "PROJECT SHOWCASE"}
                </span>
                <h2 id={titleId} className="project-modal__title mt-2 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                  {project.title}
                </h2>
                {project.role && (
                  <p className="project-modal__role mt-1 text-sm font-medium">
                    Role: <span>{project.role}</span>
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="
                  project-modal__close flex h-10 w-10 items-center justify-center rounded-full text-xl shadow-xs transition-transform hover:scale-105 active:scale-95
                "
              >
                &times;
              </button>
            </header>

            {/* Modal Body */}
            <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-12">
              {/* Image Gallery Column */}
              <div className="flex flex-col lg:col-span-7">
                <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-[#1a1a1e] sm:h-96 dark:border-white/10">
                  {images.length ? (
                    <img
                      src={images[activeImageIdx]}
                      alt={`${project.title} screenshot ${activeImageIdx + 1}`}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <p className="text-sm text-white/70">Screenshot unavailable</p>
                  )}

                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={previous}
                        aria-label="Previous screenshot"
                        className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur-xs transition hover:bg-black/80"
                      >
                        &lsaquo;
                      </button>
                      <button
                        type="button"
                        onClick={next}
                        aria-label="Next screenshot"
                        className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur-xs transition hover:bg-black/80"
                      >
                        &rsaquo;
                      </button>
                    </>
                  )}

                  {!!images.length && (
                    <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-xs">
                      {activeImageIdx + 1} / {images.length}
                    </span>
                  )}
                </div>

                {/* Thumbnails Row */}
                {images.length > 1 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                    {images.map((img, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => setImageIndex(index)}
                        aria-label={`Show screenshot ${index + 1}`}
                        aria-pressed={activeImageIdx === index}
                        className={`
                          relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all
                          ${activeImageIdx === index 
                            ? "scale-105 border-[#f2552e] opacity-100 shadow-md" 
                            : "border-black/10 opacity-60 hover:opacity-100 dark:border-white/10"}
                        `}
                      >
                        <img src={img} alt="" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Information & Actions Column */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#f2552e]">
                      Project Overview
                    </h4>
                    <p className="project-modal__description mt-2 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {!!project.features?.length && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#f2552e]">
                        Key Features &amp; Highlights
                      </h4>
                      <div className="mt-3 space-y-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="project-modal__feature flex items-center gap-3 rounded-xl p-3 shadow-2xs"
                          >
                            <CheckCircleIcon className="h-5 w-5 shrink-0 text-[#f2552e]" />
                            <span className="project-modal__feature-text text-xs font-semibold">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Badges */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#f2552e]">
                      Technologies &amp; Tools
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(project.technologies ?? []).map((tech) => (
                        <span
                          key={tech}
                          className="project-modal__tech rounded-md px-3 py-1 text-[11px] font-bold shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Link Action Buttons */}
                <div className="flex flex-col gap-3 border-t border-black/10 pt-4 dark:border-white/10 sm:flex-row">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#f2552e] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#d84420] active:scale-[0.98]"
                    >
                      <span>Live Demo</span>
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal__repository flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider shadow-2xs transition active:scale-[0.98]"
                    >
                      <GithubIcon />
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
