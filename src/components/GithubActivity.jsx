import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0112 6.9c.85 0 1.7.12 2.5.34 1.91-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.83-4.58 5.09.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.24 10.24 0 0022 12.23C22 6.58 17.52 2 12 2Z" />
  </svg>
);

export default function GitHubActivity({ username = "PaperNsalt" }) {
  const calendarTheme = {
    light: ["#e5e3dd", "#ffd2c7", "#ff9d85", "#f2552e", "#b83213"],
    dark: ["#1e1e24", "#3b1b16", "#732818", "#f2552e", "#ff8061"],
  };

  return (
    <div className="rounded-3xl border border-black/10 bg-[#f7f5f1] p-6 text-[#151515] shadow-lg dark:border-white/20 dark:bg-[#121216] dark:text-white sm:p-8">
      {/* Header Bar */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f2552e]/10 text-[#f2552e] dark:bg-[#f2552e]/20">
            <GithubIcon className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f2552e]">
                Open Source &amp; Code
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                • Live Activity
              </span>
            </div>
            <h3 className="mt-1 text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
              Contributions
            </h3>
          </div>
        </div>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#151515] shadow-2xs transition hover:bg-black/5 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:self-auto"
        >
          @{username} ↗
        </a>
      </div>

      {/* Metrics Row */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-2xs dark:border-white/10 dark:bg-white/5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#151515]/60 dark:text-white/60">
            ⚡ Active Streak
          </span>
          <p className="mt-1 text-base font-extrabold text-[#151515] sm:text-lg dark:text-white">
            Consistent
          </p>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-2xs dark:border-white/10 dark:bg-white/5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#151515]/60 dark:text-white/60">
            ☍ Commits
          </span>
          <p className="mt-1 text-base font-extrabold text-[#151515] sm:text-lg dark:text-white">
            Active Yearly
          </p>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-2xs dark:border-white/10 dark:bg-white/5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#151515]/60 dark:text-white/60">
            🔑 Repositories
          </span>
          <p className="mt-1 text-base font-extrabold text-[#151515] sm:text-lg dark:text-white">
            Public &amp; Private
          </p>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-2xs dark:border-white/10 dark:bg-white/5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#151515]/60 dark:text-white/60">
            📈 Ecosystem
          </span>
          <p className="mt-1 text-base font-extrabold text-[#151515] sm:text-lg dark:text-white">
            React, PHP, JS
          </p>
        </div>
      </div>

      {/* Contribution Calendar Grid */}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-black/5 bg-white p-4 shadow-2xs dark:border-white/10 dark:bg-white/5 sm:p-6">
        <div className="flex min-w-[650px] justify-center">
          <GitHubCalendar
            username={username}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            theme={calendarTheme}
          />
        </div>
      </div>
    </div>
  );
}