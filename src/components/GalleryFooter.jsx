import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight, Heart, Mail, Compass, Sparkles } from "lucide-react";
import logo from "../assets/vector/IamJem.svg";

function GalleryFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-12 w-full px-3 pb-6 sm:mt-20 sm:px-4 sm:pb-8 md:px-8 md:pb-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Bento Card: Compact padding & scaled borders on mobile */}
        <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white/90 p-5 shadow-[0_15px_35px_-10px_rgba(20,16,12,0.05)] backdrop-blur-2xl dark:border-white/15 dark:bg-[#121216]/80 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] sm:rounded-[2.5rem] sm:p-10 md:p-16">
          
          {/* Subtle Glow Effects */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f2552e]/10 blur-3xl sm:h-96 sm:w-96 dark:bg-[#f2552e]/20" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#f2552e]/8 blur-3xl sm:h-96 sm:w-96 dark:bg-[#f2552e]/15" />

          {/* Top Section: Hero CTA */}
          <div className="relative z-10 flex flex-col justify-between gap-5 border-b border-stone-200/80 pb-6 dark:border-white/10 sm:gap-8 sm:pb-12 lg:flex-row lg:items-end">
            <div className="max-w-2xl space-y-2.5 sm:space-y-4">
              {/* Display Title */}
              <h2 className="text-xl font-extrabold tracking-tight text-stone-900 dark:text-[#f4f1eb] sm:text-3xl md:text-5xl md:leading-[1.15]">
                Let's turn your ideas into <span className="text-[#f2552e]">visual identity.</span>
              </h2>
              
              <p className="text-xs leading-relaxed text-stone-600 dark:text-[#f4f1eb]/70 sm:text-base md:text-lg">
                Available for freelance projects, design explorations, and creative direction.
              </p>
            </div>
          </div>

          {/* Middle Section: Bento Navigation */}
          <div className="relative z-10 grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 sm:gap-8 sm:py-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Brand Detail Box */}
            <div className="space-y-2.5 sm:space-y-4 lg:col-span-6">
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="grid h-9 w-9 place-items-center rounded-xl border border-stone-200 bg-stone-50 p-1.5 shadow-sm transition-transform duration-300 sm:h-12 sm:w-12 sm:rounded-2xl sm:p-2 dark:border-white/20 dark:bg-white/10">
                  <img src={logo} alt="IamJem Logo" className="size-6 object-contain sm:size-8" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[.12em] text-stone-900 dark:text-[#f4f1eb] sm:text-lg">
                    IamJem
                  </h3>
                  <p className="font-mono text-[10px] text-stone-500 dark:text-white/50 sm:text-xs">
                    Visual Archive & Portfolio
                  </p>
                </div>
              </div>
              <p className="max-w-sm text-[11px] leading-relaxed text-stone-600 dark:text-white/60 sm:text-xs">
                A curated repository of graphic layouts, visual studies, campaign art, and brand identity explorations.
              </p>
            </div>

            {/* Quick Navigation Links */}
            <div className="flex items-center justify-between gap-4 border-t border-stone-200/60 pt-4 dark:border-white/10 sm:border-t-0 sm:pt-0 lg:col-span-3 lg:flex-col lg:items-start lg:justify-start lg:space-y-3">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#f2552e] sm:text-xs">
                Navigation
              </p>
              <ul className="font-mono text-xs">
                <li>
                  <Link
                    to="/"
                    className="group inline-flex items-center gap-1.5 text-stone-600 transition-colors hover:text-[#f2552e] dark:text-[#f4f1eb]/70 dark:hover:text-[#f2552e]"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    <span>Main Portfolio</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Scroll Up Action */}
            <div className="flex items-center justify-between border-t border-stone-200/60 pt-4 dark:border-white/10 sm:flex-col sm:items-start sm:justify-between sm:border-t-0 sm:pt-0 lg:col-span-3 lg:items-end lg:space-y-4">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#f2552e] sm:text-xs">
                Back To Top
              </p>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="group flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-100/80 px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-stone-900 shadow-sm transition-all duration-300 hover:border-[#f2552e] hover:bg-[#f2552e] hover:text-white sm:rounded-2xl sm:px-5 sm:py-3.5 sm:text-xs dark:border-white/15 dark:bg-white/10 dark:text-[#f4f1eb] dark:hover:border-[#f2552e] dark:hover:bg-[#f2552e] dark:hover:text-white"
              >
                <span>Scroll Up</span>
                <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
              </button>
            </div>

          </div>

          {/* Bottom Copyright Sub-bar */}
          <div className="relative z-10 flex flex-col items-center justify-between gap-2 border-t border-stone-200/80 pt-4 font-mono text-[11px] text-stone-500 dark:border-white/10 dark:text-white/50 sm:flex-row sm:pt-8 sm:text-xs">
            <p>© {new Date().getFullYear()} IamJem. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default GalleryFooter;