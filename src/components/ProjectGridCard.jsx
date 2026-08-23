import { motion } from "motion/react";

function ExternalLinkIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function ProjectGridCard({ project, onViewProject }) {
  const { title, description, technologies = [], category = "SOFTWARE DEVELOPMENT", images = [], image } = project;
  const coverImage = images[0] ?? image;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        project-grid-card group relative flex flex-col overflow-hidden rounded-3xl text-left transition-all duration-300
        border border-black/10 bg-white/70 shadow-sm backdrop-blur-md
        dark:border-white/20 dark:bg-gradient-to-br dark:from-white/[0.16] dark:to-white/[0.08]
        dark:backdrop-blur-xl dark:backdrop-saturate-[170%]
        dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.32),inset_0_-1px_0_rgba(255,255,255,0.08)]
      "
    >
      {/* Cover Image */}
      <div className="relative h-56 w-full overflow-hidden border-b border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Action Overlay */}
        <button
          type="button"
          onClick={() => onViewProject(project)}
          className="
            absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 
            transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#f2552e]
          "
          aria-label={`View details for ${title}`}
        >
          <span className="text-xs font-bold tracking-widest text-white uppercase">
            View Project
          </span>
          <ExternalLinkIcon className="h-4 w-4 text-white" />
        </button>
      </div>

      {/* Card Details */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <span className="inline-block rounded-full bg-[#f2552e]/10 px-3 py-1 text-[11px] font-bold tracking-wider text-[#f2552e] dark:bg-[#f2552e]/20">
            {category}
          </span>

          <h3 className="project-grid-card__title mt-3 text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
            {title}
          </h3>

          <p className="project-grid-card__description mt-2.5 line-clamp-3 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-black/10 pt-4 dark:border-white/10">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                project-grid-card__tech rounded-md border px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
