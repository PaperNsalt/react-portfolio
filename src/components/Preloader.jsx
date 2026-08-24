import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SEQUENTIAL_WORDS = [
  "DESIGN",
  "DEVELOPMENT",
  "INTERACTION",
  "EXPERIENCE",
  "PAPERNSALT",
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Fast tick for percentage counter
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 7) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Cycle keywords in sync with loading
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % SEQUENTIAL_WORDS.length);
    }, 450);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            ease: [0.87, 0, 0.13, 1], // Custom Awwwards-style snappy ease
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between overflow-hidden bg-[#f7f5f1] p-6 text-[#151515] select-none dark:bg-[#121216] dark:text-white sm:p-12"
        >
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2552e]/10 blur-3xl dark:bg-[#f2552e]/15" />

          {/* Top Status Header */}
          <div className="relative z-10 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#151515]/60 dark:text-white/60">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f2552e] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f2552e]" />
              </span>
              <span className="font-mono text-[#151515] dark:text-white">
                PaperNSalt
              </span>
            </div>
            <span className="font-mono">PORTFOLIO '26</span>
          </div>

          {/* Center Display: Word Carousel & Padded 3-Digit Counter */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            {/* Animated Word Flipper */}
            <div className="mb-2 h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="block text-xs font-extrabold uppercase tracking-[0.35em] text-[#f2552e]"
                >
                  {SEQUENTIAL_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Padded Counter (000 - 100) */}
            <div className="relative flex items-baseline font-mono text-7xl font-black tracking-tighter text-[#151515] dark:text-white sm:text-[11rem] leading-none">
              <span className="bg-gradient-to-b from-[#151515] to-[#151515]/60 bg-clip-text text-transparent dark:from-white dark:to-white/50">
                {String(progress).padStart(3, "0")}
              </span>
              <span className="ml-2 text-2xl font-bold text-[#f2552e] sm:text-4xl">
                %
              </span>
            </div>
          </div>

          {/* Bottom Bar & Progress Line */}
          <div className="relative z-10 w-full space-y-3">
            <div className="flex justify-between font-mono text-[11px] tracking-wider text-[#151515]/50 dark:text-white/40">
              <span>[ SYSTEM_INITIALIZING ]</span>
              <span>
                {progress === 100 ? "COMPLETE" : "LOADING_RESOURCES..."}
              </span>
            </div>

            <div className="relative h-1 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
              <motion.div
                className="h-full bg-[#f2552e]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}