import { motion } from "motion/react";
import React from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const FooterSocialCard = ({ icon, platform, username, url }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-neutral-900/5 dark:bg-white/[0.03] border border-neutral-200/80 dark:border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#f2552e]/50 hover:shadow-2xl hover:shadow-[#f2552e]/10 w-full"
    >
      {/* Background Ambient Blur Glow */}
      <div className="absolute -right-16 -top-16 w-44 h-44 bg-[#f2552e]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2552e]/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Section: Icon & External Link Arrow */}
      <div className="relative z-10 flex items-center justify-between w-full mb-8 sm:mb-12">
        {/* Social Icon Container */}
        <motion.div 
          variants={{
            hover: { scale: 1.05, rotate: 3 }
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/10 group-hover:bg-[#f2552e] group-hover:border-[#f2552e] shadow-md group-hover:shadow-lg group-hover:shadow-[#f2552e]/25 transition-all duration-300"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-neutral-800 dark:text-neutral-100 group-hover:text-white transition-colors duration-300">
            {React.isValidElement(icon)
              ? React.cloneElement(icon, {
                  className: "w-full h-full object-contain fill-current text-current",
                })
              : icon}
          </div>
        </motion.div>

        {/* Action Link Arrow */}
        <div className="p-2.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 text-neutral-400 dark:text-neutral-400 group-hover:text-[#f2552e] group-hover:border-[#f2552e]/40 group-hover:bg-[#f2552e]/10 transition-all duration-300">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      {/* Bottom Section: Platform & Username Chip */}
      <div className="relative z-10 flex flex-col gap-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white group-hover:text-[#f2552e] transition-colors duration-300">
          {platform}
        </h2>

        <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-neutral-100/80 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 group-hover:border-[#f2552e]/40 group-hover:bg-[#f2552e]/10 group-hover:text-[#f2552e] transition-all duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="truncate tracking-wide">{username}</span>
        </div>
      </div>
    </motion.a>
  );
};

export default FooterSocialCard;