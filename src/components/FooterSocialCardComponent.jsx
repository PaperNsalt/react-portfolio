import { motion } from "motion/react";
import React from "react";

const FooterSocialCard = ({ icon, platform, username, url }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // LAYOUT: flex-col on mobile (Icon Top), flex-row on desktop (Icon Left)
      className="flex flex-col lg:flex-row items-start gap-3 sm:gap-5 xl:gap-8 group cursor-pointer"
    >
      {/* --- ICON WRAPPER --- */}
      {/* Smaller icon on mobile to fit the tight grid */}
      <div className="shrink-0 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
        {React.cloneElement(icon, {
          className: "w-full h-full object-contain fill-current text-black group-hover:text-white transition-colors duration-300"
        })}
      </div>

      {/* --- TEXT CONTENT --- */}
      <div className="flex flex-col items-start justify-center w-full">
        {/* Platform Title */}
        <h2 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-medium tracking-tighter leading-none mb-2 group-hover:text-white transition-colors duration-300">
          {platform}
        </h2>

        {/* Username Badge */}
        <div className="
          border border-black rounded-lg md:rounded-full 
          px-3 py-1.5 sm:px-4 sm:py-2 
          w-full lg:w-auto
          text-[1.1rem] sm:text-[1.25rem] md:text-[1.4rem] xl:text-3xl 
          tracking-tight font-medium
          bg-transparent group-hover:bg-white group-hover:border-white group-hover:text-[#f2552e] 
          transition-all duration-300
          break-all lg:break-normal text-center lg:text-left
        ">
          {username}
        </div>
      </div>
    </motion.a>
  );
};

export default FooterSocialCard;
