import React from "react";
import { motion } from "motion/react";

const ProfileCard = ({
  avatarUrl,
  name = "Jeremy Rellama",
  title = "Web Developer & Graphic Designer",
  handle = "javicodes",
  status = "Available for work",
  showUserInfo = true,
  behindGlowEnabled = true,
  className = "",
}) => {
  return (
    <div className={`relative flex items-center justify-center p-2 ${className}`}>
      {/* Background Accent Glow (Adaptive for Light/Dark) */}
      {behindGlowEnabled && (
        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#f2552e]/20 via-orange-500/15 to-[#f2552e]/10 blur-2xl opacity-80 transition duration-500 group-hover:opacity-100 dark:from-[#f2552e]/30 dark:via-orange-500/20 dark:to-[#f2552e]/10" />
      )}

      {/* Main Card Container */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/90 p-6 shadow-[0_20px_50px_-15px_rgba(20,16,12,0.08)] backdrop-blur-xl transition-colors duration-300 dark:border-neutral-800 dark:bg-[#121214] dark:shadow-2xl"
      >
        {/* Ambient Subtle Glow Orbs */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#f2552e]/10 blur-3xl dark:bg-[#f2552e]/10" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-orange-500/10 blur-2xl dark:bg-orange-500/10" />

        {/* Top Header / Status Bar */}
        <div className="relative z-10 mb-6 flex items-center justify-between border-b border-stone-200/80 pb-4 dark:border-neutral-800/80">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f2552e] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f2552e]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-neutral-400">
              {status}
            </span>
          </div>
          <span className="font-mono text-xs font-medium text-stone-400 dark:text-neutral-500">
            @{handle}
          </span>
        </div>

        {/* Profile Image & Badge Frame */}
        <div className="relative z-10 mb-6 flex justify-center">
          <div className="relative rounded-2xl border border-stone-200 bg-stone-100/80 p-2 shadow-inner transition-colors duration-300 dark:border-neutral-700/50 dark:bg-neutral-900/80">
            <div className="relative h-64 w-64 overflow-hidden rounded-xl bg-stone-200 dark:bg-neutral-950 sm:h-72 sm:w-72">
              <img
                src={avatarUrl}
                alt={name}
                className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-60 dark:from-[#121214]" />
            </div>
          </div>
        </div>

        {/* Card Body Information */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-3xl">
            {name}
          </h3>
          <p className="mt-1 text-sm font-semibold tracking-wide text-[#f2552e]">
            {title}
          </p>
        </div>

        {/* Secondary User Info Footer */}
        {showUserInfo && (
          <div className="relative z-10 mt-6 border-t border-stone-200/80 pt-4 text-center dark:border-neutral-800/80">
            <p className="text-xs font-medium text-stone-500 dark:text-neutral-400">
              Based in Albay, Philippines · IT Craftsman
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default React.memo(ProfileCard);