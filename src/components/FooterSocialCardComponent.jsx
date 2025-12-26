import { motion } from "motion/react";
import React from "react";

const FooterSocialCard = ({ icon, platform, username, url }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-row justify-start items-start gap-6 max-[426px]:gap-0 max-[426px]:mt-6"
    >
      {/* Responsive icon wrapper */}
      <div className="w-20 h-20 max-[426px]:w-6 max-[426px]:h-10">
        {React.cloneElement(icon, {
          className: "w-full h-full" // Fill the wrapper
        })}
      </div>

      <div className="flex flex-col justify-center items-start max-[426px]:gap-0 xl:gap-6">
        {/* Platform text */}
        <h1 className=" xl:text-[6rem] lg:text-[5rem] md:text-[4rem] sm:text-[3rem] max-[426px]:text-[1.6rem] max-[426px]:leading-10 tracking-[-0.1em] leading-20">
          {platform}
        </h1>

        {/* Username link with motion hover */}
        <motion.p className="border rounded-3xl  py-1 px-4 max-[426px]:py-1 max-[426px]:px-2 xl:text-[3.2rem] lg:text-[2.8rem] md:text-[2.4rem] sm:text-[1.8rem] max-[426px]:text-[..6rem] tracking-[-.1em] hover:bg-white/80">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#f2552e]"
          >
            {username}
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default FooterSocialCard;
