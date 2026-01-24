import React from "react";
import { motion } from "framer-motion"; // or "motion/react"

const TechCard = ({ icon, title }) => {
  return (
    <motion.div
      // Interactive Animations (Hover/Tap)
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      
      // Styling
      className="flex flex-col justify-center items-center p-6 md:p-8 rounded-[2rem] bg-white/5 hover:bg-black/5 transition-colors cursor-pointer group h-full"
    >
      {/* Icon Wrapper - Scales slightly on group hover */}
      <div className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <p className="mt-4 text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium tracking-tighter text-center">
        {title}
      </p>
    </motion.div>
  );
};

export default TechCard;