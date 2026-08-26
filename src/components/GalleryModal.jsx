import { useEffect } from "react";
import { motion } from "motion/react";
import { X, Tag, Calendar, Sparkles, Wrench } from "lucide-react";

function GalleryModal({ work, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!work) return null;

  // Supports work.tools or work.software as an Array or a comma-separated String
  const rawTools = work.tools || work.software;
  const toolsList = Array.isArray(rawTools)
    ? rawTools
    : typeof rawTools === "string"
    ? rawTools.split(",").map((item) => item.trim())
    : [];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/40 backdrop-blur-md dark:bg-black/75 transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        role="dialog"
        aria-modal="true"
        aria-label={work.title}
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 360, damping: 28 }}
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-stone-200/90 bg-white shadow-2xl transition-colors dark:border-white/15 dark:bg-[#121216] lg:flex-row"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/80 bg-white/90 text-stone-700 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-[#f2552e] hover:text-white dark:border-white/20 dark:bg-black/60 dark:text-stone-200 dark:hover:bg-[#f2552e] dark:hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Preview Image Container */}
        <div className="relative flex min-h-[260px] w-full items-center justify-center border-b border-stone-100 bg-stone-50 p-4 dark:border-white/10 dark:bg-white/[0.03] lg:w-1/2 lg:border-b-0 lg:border-r lg:p-6">
          <img
            src={work.image}
            alt={work.title}
            className="max-h-[42vh] w-full rounded-xl object-contain shadow-sm lg:max-h-[62vh]"
          />
        </div>

        {/* Content & Metadata Panel */}
        <div className="flex flex-1 flex-col justify-between overflow-y-auto p-6 md:p-8">
          <div className="space-y-5">
            {/* Category & Year Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f2552e]/30 bg-[#f2552e]/10 px-3 py-1 font-mono text-xs font-semibold text-[#f2552e]">
                <Tag className="h-3.5 w-3.5" />
                {work.category}
              </span>
              {work.year && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-100 px-3 py-1 font-mono text-xs font-medium text-stone-700 dark:border-white/15 dark:bg-white/5 dark:text-stone-300">
                  <Calendar className="h-3.5 w-3.5" />
                  {work.year}
                </span>
              )}
            </div>

            {/* Title & Description */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-[#f4f1eb] md:text-3xl">
                {work.title}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-stone-600 dark:text-[#f4f1eb]/75">
                {work.description}
              </p>
            </div>

            {/* Software / Tools Badges */}
            {toolsList.length > 0 && (
              <div className="pt-2">
                <div className="mb-2 flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  <Wrench className="h-3.5 w-3.5 text-[#f2552e]" />
                  Software Used
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {toolsList.map((tool, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-lg border border-stone-200 bg-stone-100 px-3 py-1 font-mono text-xs font-medium text-stone-800 shadow-2xs transition-colors hover:border-[#f2552e]/40 dark:border-white/10 dark:bg-white/10 dark:text-stone-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4 dark:border-white/10">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-stone-400 dark:text-white/40">
              <Sparkles className="h-3.5 w-3.5 text-[#f2552e]" />
              Archived Entry
            </span>
            <p className="font-mono text-xs text-stone-400 dark:text-white/40">
              Press <kbd className="rounded border border-stone-200 bg-stone-100 px-1.5 py-0.5 text-[10px] text-stone-600 dark:border-white/20 dark:bg-transparent dark:text-white/60">ESC</kbd> to close
            </p>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default GalleryModal;