import { useEffect, useState } from "react";

const getInitialTheme = () => {
  const saved = localStorage.getItem("portfolio-theme");
  return saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
};

function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";
  return (
    <button type="button" className={`theme-toggle ${className}`} onClick={() => setTheme(nextTheme)} aria-label={`Switch to ${nextTheme} mode`} title={`Switch to ${nextTheme} mode`}>
      <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      <span className="theme-toggle__label">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

export default ThemeToggle;
