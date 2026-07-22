import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "./assets/vector/IamJem.svg";
import "./assets/style/header.css";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Header() {
  const [active, setActive] = useState("top");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = ["top", ...links.map(([, id]) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0 },
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 hidden px-5 pt-5 md:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/65 bg-white/45 px-5 py-2.5 shadow-[0_14px_38px_-20px_rgba(20,16,12,.42),inset_0_1px_0_rgba(255,255,255,.85)] backdrop-blur-2xl">
          <button onClick={() => navigateTo("top")} className="rounded-lg p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2552e]" aria-label="Back to top">
            <img className="h-9 w-9" src={logo} alt="IamJem" />
          </button>

          <div className="flex items-center gap-1">
            {links.map(([label, id], index) => (
              <motion.button key={id} whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }} onClick={() => navigateTo(id)} className={`rounded-xl px-3 py-2 text-[1.2rem] font-semibold uppercase tracking-[.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2552e] lg:px-4 ${active === id ? "bg-black/85 text-white shadow-sm" : "text-black/70 hover:bg-white/65 hover:text-black"}`}>
                <span className="mr-1.5 text-[#f2552e]">0{index + 1}</span>{label}
              </motion.button>
            ))}
          </div>
        </nav>
      </header>

      <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(.75rem,env(safe-area-inset-bottom))] md:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              className="absolute inset-x-3 bottom-[5.25rem] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/55 p-2 shadow-[0_-18px_55px_-28px_rgba(20,16,12,.58),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between px-3 pb-2 pt-1">
                <p className="text-[1rem] font-bold uppercase tracking-[.18em] text-black/45">Navigate</p>
                <span className="text-[1rem] font-medium text-[#f2552e]">0{links.findIndex(([, id]) => id === active) + 1 || 0}</span>
              </div>
              {links.map(([label, id], index) => {
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
                    className={`flex min-h-13 w-full items-center justify-between rounded-[1.15rem] px-4 text-left text-[1.5rem] font-semibold uppercase tracking-[.08em] transition ${isActive ? "bg-black/85 text-white shadow-sm" : "text-black hover:bg-white/70"}`}
                  >
                    <span><span className="mr-3 text-[1.1rem] text-[#f2552e]">0{index + 1}</span>{label}</span>
                    <motion.span animate={{ rotate: isActive ? 45 : 0 }} className="text-[#f2552e]">↗</motion.span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mx-auto flex min-h-14 w-full max-w-md items-center justify-between rounded-[1.5rem] border border-white/65 bg-black/75 px-2.5 py-2 text-white shadow-[0_-12px_40px_-22px_rgba(20,16,12,.58),inset_0_1px_0_rgba(255,255,255,.25)] backdrop-blur-2xl"
        >
          <span className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/80 bg-white/85 p-1.5 shadow-sm">
              <img className="h-full w-full" src={logo} alt="" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-[.9rem] font-medium uppercase tracking-[.18em] text-white/55">IamJem</span>
              <span className="block text-[1.2rem] font-bold uppercase tracking-[.12em]">{isOpen ? "Close menu" : "Menu"}</span>
            </span>
          </span>
          <span className="mr-2 flex h-8 w-8 flex-col items-end justify-center gap-1.5" aria-hidden="true">
            <motion.i animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 5 : 0 }} className="block h-0.5 w-6 rounded-full bg-white" />
            <motion.i animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 8 : 0 }} className="block h-0.5 w-4 rounded-full bg-[#f2552e]" />
            <motion.i animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -5 : 0, width: isOpen ? "1.5rem" : "1.1rem" }} className="block h-0.5 rounded-full bg-white" />
          </span>
        </motion.button>
      </nav>
    </>
  );
}

export default Header;
