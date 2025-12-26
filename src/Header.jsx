import { useState } from "react";
import { motion } from "motion/react";

import "./assets/style/header.css";
import logo from "./assets/vector/IamJem.svg";
import { GalleryIcon } from "./components/IconComponent";

function Header() {
  const [open, setOpen] = useState(false);

  const scrollToPosition = (y) => {
    setOpen(false);
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };
  const navbarStyle =
    "border rounded-2xl bg-white py-2 px-4 hover:text-white hover:border-black hover:bg-[#f2552e]/80";
  return (
    <>
      {/* ===== DESKTOP / TABLET TOP NAV ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md max-[426px]:hidden">
        <nav className="flex justify-between items-center max-w-[84%] mx-auto py-6 px-2">
          <img className="w-10" src={logo} alt="logo" />

          <ul className="flex gap-8 text-[1.4rem]">
            <li>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={navbarStyle}
                onClick={() => scrollToPosition(1000)}
              >
                01.ABOUT ME
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={navbarStyle}
                onClick={() => scrollToPosition(2000)}
              >
                02.SKILLS
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={navbarStyle}
                onClick={() => scrollToPosition(4400)}
              >
                03.PROJECTS
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={navbarStyle}
                onClick={() => scrollToPosition(7236)}
              >
                04.GET IN TOUCH
              </motion.button>
            </li>
            {/* <li>
              <a href="./pages/">{GalleryIcon}</a>
            </li> */}
          </ul>
        </nav>
      </header>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <div className="fixed bottom-0 left-0 w-full z-50 max-[426px]:block hidden">
        {/* Slide-up Menu */}
        <div
          className={`
            bg-white/60 backdrop-blur-md
            transition-all duration-300 ease-in-out
            ${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
          `}
        >
          <ul className="flex flex-col items-center gap-6 py-8 text-[1.3rem]">
            <li>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={navbarStyle}
                onClick={() => scrollToPosition(400)}
              >
                01.ABOUT ME
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={navbarStyle}
                onClick={() => scrollToPosition(1200)}
              >
                02.SKILLS
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={navbarStyle}
                onClick={() => scrollToPosition(4900)}
              >
                03.PROJECTS
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={navbarStyle}
                onClick={() => scrollToPosition(7629)}
              >
                04.GET IN TOUCH
              </motion.button>
            </li>
            {/* <li>
              <a href="./pages/">{GalleryIcon}</a>
            </li> */}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-center items-center bg-white/60 backdrop-blur-md py-3">
          <button onClick={() => setOpen(!open)}>
            <img className="w-10" src={logo} alt="logo" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
