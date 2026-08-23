import React from "react";
import { motion } from "motion/react";

const ProfileCard = ({
  avatarUrl,
  name = "Jeremy Rellama",
  title = "Web Developer",
  handle = "javicodes",
  status = "Available for work",
  contactText = "Contact Me",
  showUserInfo = true,
  onContactClick,
  behindGlowEnabled = true,
  className = "",
}) => {
  return (
    <div className={`relative flex items-center justify-center p-2 ${className}`}>
      {/* Background Accent Glow */}
      {behindGlowEnabled && (
        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#f2552e]/30 via-orange-500/20 to-[#f2552e]/10 blur-2xl opacity-70 transition duration-500 group-hover:opacity-100" />
      )}

      {/* Main Card Container */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-neutral-800 bg-[#121214] p-6 shadow-2xl backdrop-blur-xl"
      >
        {/* Subtle Theme Pattern Background */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#f2552e]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-orange-500/10 blur-2xl" />

        {/* Top Header / Status Bar */}
        <div className="relative z-10 mb-6 flex items-center justify-between border-b border-neutral-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f2552e] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f2552e]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {status}
            </span>
          </div>
          <span className="text-xs font-mono font-medium text-neutral-500">
            @{handle}
          </span>
        </div>

        {/* Profile Image & Badge Frame */}
        <div className="relative z-10 mb-6 flex justify-center">
          <div className="relative rounded-2xl border border-neutral-700/50 bg-neutral-900/80 p-2 shadow-inner">
            <div className="relative h-64 w-64 overflow-hidden rounded-xl bg-neutral-950 sm:h-72 sm:w-72">
              <img
                src={avatarUrl}
                alt={name}
                className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* Card Body Information */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {name}
          </h3>
          <p className="mt-1 text-sm font-medium tracking-wide text-[#f2552e]">
            {title}
          </p>

          {/* Action Button */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={onContactClick}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#f2552e] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f2552e]/25 transition-all duration-300 hover:bg-[#d94420] active:scale-95"
            >
              <span>{contactText}</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Optional Secondary User Info Footer */}
        {showUserInfo && (
          <div className="relative z-10 mt-6 border-t border-neutral-800/80 pt-4 text-center">
            <p className="text-xs text-neutral-400">
              Based in Albay, Philippines · IT Craftsman
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default React.memo(ProfileCard);