import { useState } from "react";
import { motion } from "motion/react";

function FlipCard({
  title,
  subtitle,
  technologies = [],
  description,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      className="w-full h-[420px] sm:h-[460px] md:h-[480px] cursor-pointer [perspective:1000px] group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleFlip}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        onAnimationComplete={() => setIsAnimating(false)}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* --- FRONT FACE --- */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="h-full w-full flex flex-col items-center justify-between bg-white/80 dark:bg-[#121216]/80 border border-stone-200/80 dark:border-white/15 p-6 sm:p-10 rounded-[2rem] shadow-[0_15px_35px_-10px_rgba(20,16,12,0.05)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-300">
            {/* Top Subtitle / Chapter Tag */}
            <div className="w-full flex items-center justify-between font-mono text-xs text-stone-500 dark:text-white/50">
              <span className="uppercase tracking-widest text-[#f2552e] font-semibold">
                Chapter
              </span>
              <span>{subtitle}</span>
            </div>

            {/* Main Title & Tech Badges */}
            <div className="my-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold leading-tight text-stone-900 dark:text-[#f4f1eb]">
                {title}
              </h1>

              <div className="flex flex-row gap-2 justify-center items-center flex-wrap mt-6 sm:mt-8">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-stone-100 dark:bg-white/10 border border-stone-200/80 dark:border-white/15 rounded-full font-mono text-xs font-medium text-stone-700 dark:text-[#f4f1eb]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile Interaction Hint */}
            <div className="font-mono text-[11px] uppercase tracking-wider text-stone-400 dark:text-white/40 animate-pulse">
              Hover or tap to read
            </div>
          </div>
        </div>

        {/* --- BACK FACE --- */}
        <div
          className="absolute inset-0 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="relative h-full w-full overflow-hidden flex flex-col justify-between rounded-[2rem] border border-[#f2552e]/30 dark:border-white/20 bg-gradient-to-br from-[#f2552e] via-[#ea4823] to-[#b33315] dark:from-[#1a1412] dark:via-[#121013] dark:to-[#0a080a] p-6 sm:p-8 text-white shadow-xl backdrop-blur-2xl transition-all duration-300">
            {/* Ambient Gradient Glows (Site Accent Integration) */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-3xl dark:bg-[#f2552e]/30" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-black/20 blur-3xl dark:bg-orange-600/20" />

            {/* Header Metadata Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/25 dark:border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white dark:bg-[#f2552e] animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white dark:text-[#f2552e]">
                  Story Archive
                </span>
              </div>
              <span className="font-mono text-xs font-medium text-white/80 dark:text-white/40">
                {subtitle}
              </span>
            </div>

            {/* Narrative Content */}
            <div className="relative z-10 my-auto py-2">
              <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white dark:text-[#f4f1eb]/90">
                {description}
              </p>
            </div>

            {/* Footer Tech Tags */}
            <div className="relative z-10 flex flex-wrap gap-1.5 pt-4 border-t border-white/25 dark:border-white/10">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 rounded-lg bg-white/15 dark:bg-white/10 border border-white/20 dark:border-white/15 font-mono text-[10px] sm:text-xs text-white dark:text-[#f4f1eb]/80 backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default FlipCard;