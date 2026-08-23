import React from "react";
import { motion } from "motion/react";

const SkillCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      whileTap={{ scale: 0.98, y: -1 }}
      className="
        group
        relative
        flex
        min-h-80
        flex-col
        items-start
        overflow-hidden
        rounded-3xl
        p-7
        text-left
        transition-all
        duration-300
        sm:p-8

        /* Light Surface */
        border
        border-black/10
        bg-white/70
        shadow-sm
        backdrop-blur-md

        /* Translucent Dark Glassmorphism */
        dark:border-white/20
        dark:bg-gradient-to-br
        dark:from-white/[0.16]
        dark:to-white/[0.08]
        dark:backdrop-blur-xl
        dark:backdrop-saturate-[170%]
        dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.32),inset_0_-1px_0_rgba(255,255,255,0.08)]
      "
    >
      {/* Ambient Orange Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-[#f2552e]/15
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Glass Icon Capsule */}
      <div
        className="
          relative
          z-10
          mb-8
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-black/10
          bg-black/[0.03]
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:border-[#f2552e]/40
          group-hover:bg-[#f2552e]/10

          /* Dark Glass Icon Styling */
          dark:border-white/20
          dark:bg-white/10
          dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]
          dark:group-hover:border-[#f2552e]/60
          dark:group-hover:bg-[#f2552e]/20
        "
      >
        <img
          className="
            h-12
            w-12
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
          "
          src={icon}
          alt=""
        />
      </div>

{/* Title */}
<h3
  className="
    relative
    z-10
    text-3xl
    font-semibold
    tracking-[-.05em]
    text-[#151515]
    sm:text-4xl
    dark:text-[#f2552e]
  "
>
  {title}
</h3>

{/* Description */}
<p
  className="
    relative
    z-10
    mt-4
    text-base
    leading-relaxed
    text-[#151515]
    sm:text-lg
    dark:text-[#f2552e]/40
  "
>
  {description}
</p>

      {/* Signature Orange Accent Bar */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-[#f2552e]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.div>
  );
};

export default SkillCard;
