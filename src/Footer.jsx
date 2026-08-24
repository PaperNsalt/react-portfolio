import React from "react";
import { motion } from "motion/react";
import { FacebookIcon, GmailIcon, InstagramIcon, LinkedInFooterIcon } from "./components/IconComponent";
import FooterSocialCard from "./components/FooterSocialCardComponent";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full p-6 sm:p-10 md:p-16 lg:p-24 xl:p-32 overflow-hidden bg-neutral-50 dark:bg-neutral-950/80 text-neutral-900 dark:text-white transition-colors duration-500">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f2552e]/5 blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* --- HEADER --- */}
        <motion.div variants={headerVariants} className="flex flex-col items-start gap-4 mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider text-neutral-700 dark:text-neutral-300 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#f2552e] animate-pulse" />
            Let's Collaborate
          </div>

          <h1 className="text-left text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-black tracking-tighter leading-[0.9] text-neutral-900 dark:text-white">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2552e] via-[#f2552e]/90 to-orange-400">TOUCH</span>
          </h1>
        </motion.div>

        {/* --- GRID --- */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 xl:gap-12"
        >
          <FooterSocialCard
            icon={FacebookIcon}
            platform="FACEBOOK"
            username="Jeremy Rellama"
            url="https://web.facebook.com/JEREMY.RELLAMA17"
          />

          <FooterSocialCard
            icon={InstagramIcon}
            platform="INSTAGRAM"
            username="_Jemmmmm"
            url="https://www.instagram.com/_jjemmmm/"
          />

          <FooterSocialCard
            icon={GmailIcon}
            platform="GMAIL"
            username="jeremyrellama17@gmail.com"
            url="mailto:jeremyrellama17@gmail.com"
          />

          <FooterSocialCard
            icon={LinkedInFooterIcon}
            platform="LINKEDIN"
            username="Jeremy Rellama"
            url="https://www.linkedin.com/in/jeremy-rellama-39292a339/"
          />
        </motion.div>

        {/* --- COPYRIGHT & SCROLL TO TOP --- */}
        <motion.div
          variants={headerVariants}
          className="mt-16 sm:mt-28 border-t border-neutral-200/80 dark:border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-1.5">
            <p className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              Built with <span className="text-[#f2552e]">React.js</span> & <span className="text-[#f2552e]">Tailwind CSS</span>
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              Copyright © 2026 Jeremy Rellama. All rights reserved.
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-sm shadow-lg hover:shadow-xl hover:shadow-[#f2552e]/10 transition-all duration-300 group cursor-pointer"
          >
            <span>Back to top</span>
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;