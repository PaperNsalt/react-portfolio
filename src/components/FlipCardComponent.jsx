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
          <div className="h-full w-full flex flex-col items-center justify-center bg-white/70 border border-black/10 p-6 sm:p-10 rounded-[2rem] shadow-sm backdrop-blur-md transition-all duration-300">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-tight font-medium text-center text-black">
              {title}
              {subtitle && (
                <>
                  <br />
                  <span className="text-2xl sm:text-3xl text-black/65 font-normal">
                    {subtitle}
                  </span>
                </>
              )}
            </h1>

            <div className="flex flex-row gap-2 justify-center items-center flex-wrap mt-6 sm:mt-8">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white border border-black/10 rounded-full text-xs sm:text-sm font-medium text-black"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Mobile Hint */}
            <div className="md:hidden absolute bottom-6 text-xs text-black/50 animate-pulse">
              Tap to read more
            </div>
          </div>
        </div>

        {/* --- BACK FACE --- */}
        <div
          className="absolute inset-0 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="h-full w-full flex flex-col items-center justify-center bg-[#f2552e] dark:bg-[#f2552e]/85 dark:backdrop-blur-xl border border-transparent dark:border-white/20 p-6 sm:p-10 rounded-[2rem] text-white shadow-lg transition-all duration-300">
            <p className="text-lg sm:text-xl lg:text-2xl text-justify leading-relaxed font-light">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default FlipCard;