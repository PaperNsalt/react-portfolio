import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Menu,
  X,
  Compass,
  LayoutGrid,
  User,
  Cpu,
  FolderGit2,
  Mail,
} from "lucide-react";

import logo from "./assets/vector/IamJem.svg";
import ThemeToggle from "./components/ThemeToggle";
import "./assets/style/header.css";

const links = [
  { label: "About", id: "about", icon: User },
  { label: "Skills", id: "skills", icon: Cpu },
  { label: "Projects", id: "projects", icon: FolderGit2 },
  { label: "Contact", id: "contact", icon: Mail },
];

function Header() {
  const [active, setActive] = useState("top");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = ["top", ...links.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const navigateTo = (id) => {
    setActive(id);
    setIsOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeIndex = links.findIndex((link) => link.id === active);

  return (
    <>
      {/* ================= DESKTOP NAVIGATION ================= */}
      <header className="fixed inset-x-0 top-0 z-50 hidden px-5 pt-5 md:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/65 bg-white/45 px-5 py-2.5 shadow-[0_14px_38px_-20px_rgba(20,16,12,.42),inset_0_1px_0_rgba(255,255,255,.85)] backdrop-blur-2xl dark:border-white/20 dark:bg-white/10 dark:shadow-[0_14px_38px_-20px_rgba(0,0,0,.6)]">
          {/* Brand Logo */}
          <button
            onClick={() => navigateTo("top")}
            className="rounded-xl p-1 transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2552e]"
            aria-label="Back to top"
          >
            <img className="h-9 w-9" src={logo} alt="IamJem" />
          </button>

          {/* Desktop Nav Links */}
          <div className="flex items-center gap-1.5">
            {links.map(({ label, id }, index) => {
              const isActive = active === id;
              return (
                <motion.button
                  key={id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigateTo(id)}
                  className={`rounded-xl px-3.5 py-2 text-[1.1rem] font-semibold uppercase tracking-[.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2552e] lg:px-4 ${
                    isActive
                      ? "bg-black/85 text-[#f2552e] shadow-sm dark:bg-white/20 dark:text-[#f2552e]"
                      : "text-black/70 hover:bg-white/65 hover:text-black dark:text-[#f4f1eb]/80 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  <span className="mr-1.5 font-mono text-xs text-[#f2552e]">
                    0{index + 1}
                  </span>
                  {label}
                </motion.button>
              );
            })}

            {/* Gallery Link */}
            <Link
              to="/gallery"
              className="ml-2 inline-flex items-center gap-1.5 rounded-xl border border-black/15 bg-white/45 px-3.5 py-2 text-[1.1rem] font-semibold uppercase tracking-[.12em] text-black/75 transition hover:bg-[#f2552e] hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-[#f4f1eb] dark:hover:bg-[#f2552e] dark:hover:text-white lg:px-4"
            >
              <span>Gallery</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Theme Toggle Button */}
            <ThemeToggle className="ml-2" />
          </div>
        </nav>
      </header>

      {/* ================= MOBILE NAVIGATION ================= */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(.75rem,env(safe-area-inset-bottom))] md:hidden"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              className="absolute inset-x-3 bottom-[5.25rem] max-h-[75vh] overflow-y-auto rounded-[1.75rem] border border-white/70 bg-white/70 p-3 shadow-[0_-18px_55px_-28px_rgba(20,16,12,.58),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl dark:border-white/20 dark:bg-[#121216]/85 dark:shadow-[0_-18px_55px_-28px_rgba(0,0,0,.8),inset_0_1px_0_rgba(255,255,255,.15)]"
            >
              {/* Menu Header with Theme Toggle */}
              <div className="flex items-center justify-between px-3 pb-3 pt-1 border-b border-black/10 dark:border-white/10 mb-2">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[#f2552e]" />
                  <p className="text-[0.85rem] font-bold uppercase tracking-[.18em] text-black/50 dark:text-white/50">
                    Navigate
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#f2552e]">
                    0{activeIndex !== -1 ? activeIndex + 1 : 0}
                  </span>
                  <ThemeToggle />
                </div>
              </div>

              {/* Gallery CTA Card */}
              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="mb-2 flex min-h-12 items-center justify-between rounded-[1.15rem] bg-[#f2552e] px-4 text-[1.25rem] font-semibold uppercase tracking-[.08em] text-white shadow-sm transition hover:bg-[#d9441f]"
              >
                <span className="flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-white/80" />
                  <span className="font-mono text-[1rem] text-white/70">05</span>
                  Gallery
                </span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>

              {/* Navigation Section Buttons */}
              <div className="space-y-1">
                {links.map(({ label, id, icon: Icon }, index) => {
                  const isActive = active === id;
                  return (
                    <motion.button
                      key={id}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.045 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigateTo(id)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-12 w-full items-center justify-between rounded-[1.15rem] px-4 text-left text-[1.25rem] font-semibold uppercase tracking-[.08em] transition ${
                        isActive
                          ? "bg-black/85 text-white shadow-sm dark:bg-white/20 dark:text-white"
                          : "text-black hover:bg-white/70 dark:text-[#f4f1eb] dark:hover:bg-white/10"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#f2552e]" />
                        <span className="font-mono text-[1rem] text-[#f2552e]">
                          0{index + 1}
                        </span>
                        {label}
                      </span>
                      <motion.div animate={{ rotate: isActive ? 45 : 0 }}>
                        <ArrowUpRight className="h-5 w-5 text-[#f2552e]" />
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Mobile Trigger Bar */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
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
              <span className="block text-[.75rem] font-mono font-medium uppercase tracking-[.18em] text-white/55">
                IamJem
              </span>
              <span className="block text-[1.1rem] font-bold uppercase tracking-[.12em]">
                {isOpen ? "Close Menu" : "Menu"}
              </span>
            </span>
          </span>

          <span className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
            {isOpen ? <X className="h-5 w-5 text-[#f2552e]" /> : <Menu className="h-5 w-5" />}
          </span>
        </motion.button>
      </nav>
    </>
  );
}

export default Header;