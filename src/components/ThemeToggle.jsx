import { useEffect, useRef, useState } from "react";

const getInitialTheme = () => {
  const saved = localStorage.getItem("portfolio-theme");
  return saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
};

function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const isTransitioning = useRef(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const syncTheme = (event) => setTheme(event.detail);
    window.addEventListener("portfolio-theme-change", syncTheme);
    return () => window.removeEventListener("portfolio-theme-change", syncTheme);
  }, []);

  const applyTheme = (nextTheme) => {
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
    window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: nextTheme }));
  };

  const handleThemeToggle = (event) => {
    if (isTransitioning.current) return;

    const nextTheme = (document.documentElement.dataset.theme || theme) === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canTransition = "startViewTransition" in document && !reduceMotion;

    if (!canTransition) {
      applyTheme(nextTheme);
      return;
    }

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    isTransitioning.current = true;
    const transition = document.startViewTransition(() => applyTheme(nextTheme));

    transition.ready
      .then(() =>
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 620,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        ).finished
      )
      .catch(() => undefined)
      .finally(() => {
        isTransitioning.current = false;
      });
  };

  const nextTheme = theme === "dark" ? "light" : "dark";
  return (
    <button type="button" className={`theme-toggle ${className}`} onClick={handleThemeToggle} aria-label={`Switch to ${nextTheme} mode`} title={`Switch to ${nextTheme} mode`}>
      <span className="theme-toggle__icon" aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      <span className="theme-toggle__label">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

export default ThemeToggle;
