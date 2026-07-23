import ButtonComponent from "./ButtonComponent.jsx";
import { LiveDemoIcon } from "./IconComponent.jsx";
import GithubButton from "./GithubButtonComponent.jsx";

function ProjectCard({
  title,
  description,
  technologies,
  image,
  imageAlt,
  githubLink,
  liveLink,
  index,
}) {
  const projectUrl = liveLink || githubLink;
  const reverseOnDesktop = index % 2 !== 0;

  return (
    <article className="group grid gap-8 border-t border-black/15 py-10 first:border-t-0 sm:py-12 md:gap-10 md:py-14 xl:grid-cols-2 xl:items-center xl:gap-16 xl:py-20">
      <div className={`order-2 ${reverseOnDesktop ? "xl:order-2" : "xl:order-1"}`}>
        <div className="mb-5 flex items-center gap-3 text-[1.15rem] font-semibold uppercase tracking-[0.2em] text-black/50 dark:text-black/50">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-9 bg-current" />
          <span className="text-black">Selected work</span>
        </div>
        <div className="flex justify-center items-center flex-col">
        <h2 className="text-balance text-[clamp(3.6rem,13vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.065em] md:text-[5.5rem] xl:text-[7.5rem]">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-[1.5rem] leading-relaxed text-black/70 text-center md:text-[1.8rem]">
          {description}
        </p>
        

        <ul className="mt-7 flex flex-wrap gap-2.5" aria-label={`${title} technologies`}>
          {technologies.map((technology) => (
            <li key={technology} className="rounded-full border border-black/15 bg-white/70 px-3.5 py-1.5 text-[1.2rem] font-medium text-black/70 shadow-sm dark:border-black/20 dark:bg-white/10  md:text-[1.35rem]">
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {liveLink && <ButtonComponent href={liveLink} label="Live Demo" newTab download={false} icon={LiveDemoIcon} />}
          {githubLink && <GithubButton href={githubLink} />}
        </div>
      </div>
</div>
      <div className={`order-1 ${reverseOnDesktop ? "xl:order-1" : "xl:order-2"}`}>
        <div className="relative overflow-hidden rounded-[2rem] border border-black/15 bg-black/5 p-2 shadow-[0_20px_50px_-26px_rgba(0,0,0,0.55)] transition duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_30px_65px_-24px_rgba(0,0,0,0.65)] group-focus-within:-translate-y-2 dark:border-white/15 dark:bg-white/5 md:p-3">
          {image ? (
            <>
              <img
                src={image}
                alt={imageAlt || `${title} project preview`}
                className="aspect-[16/10] w-full rounded-[1.45rem] object-cover transition duration-700 ease-out group-hover:scale-[1.05] group-focus-within:scale-[1.05]"
              />
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${title} ${liveLink ? "live demo" : "GitHub repository"}`}
                  className="absolute inset-2 flex items-end rounded-[1.45rem] focus:outline-none md:inset-3"
                >
                  <div className="w-full translate-y-full rounded-t-[1.35rem] bg-[#f2552e]/95 px-5 py-5 text-white shadow-2xl transition duration-500 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0 md:px-7 md:py-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-white/60">Open project</p>
                        <p className="mt-1 text-[1.8rem] font-medium tracking-tight md:text-[2.2rem]">{title}</p>
                      </div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f2552e] text-[2rem] transition-transform duration-300 group-hover:rotate-45 group-focus-within:rotate-45" aria-hidden="true">↗</span>
                    </div>
                  </div>
                </a>
              )}
            </>
          ) : (
            <div className="flex aspect-[16/10] items-center justify-center rounded-[1.45rem] text-[1.5rem] text-black/50 dark:text-white/50">Preview coming soon</div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
