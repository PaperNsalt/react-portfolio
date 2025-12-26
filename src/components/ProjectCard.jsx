import ButtonComponent from "../components/ButtonComponent.jsx";
import { GithubIcon, LiveDemoIcon } from "./IconComponent.jsx";
import { LinkedInIcon } from "./IconComponent.jsx";

import GithubButton from "./GithubButtonComponent.jsx";

function ProjectCard({
  title,
  description,
  technologies,
  image,
  imageAlt,

  githubLink,
  liveLink,
}) {
  const languageCard =
    "anim xl:text-[4rem] py-2 px-4 border rounded-2xl bg-white";
  const buttonCard =
    "anim xl:text-[1.4rem] py-2 px-4 border rounded-2xl bg-white flex items-center gap-2 hover:bg-[#f2552e]/80 hover:text-white hover:border-black transition-colors duration-200";
  const gitButton =
    "anim xl:text-[1.4rem] py-2 px-4 border-2 border-dashed rounded-2xl flex items-center gap-2 border border-dashed hover:border-solid border-dashed border-black/40 hover:border-black transition-all duration-200";

  return (
    <div className="grid xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-1 mt-10">
      {/* TEXT SIDE */}
      <div className="flex flex-col justify-center items-start xl:p-10 lg:p-0 max-[426px]:order-2 md:order-2 lg:order-2 xl:order-1">
        <h1 className="anim md:text-[4rem] lg:text-[5rem] font-medium tracking-tighter xl:text-left lg:leading-20 xl:leading-20 max-[426px]:leading-20 max-[426px]:text-[2.8rem]">
          {title}
        </h1>

        <p className="
        anim 
        text-left 
        xl:text-[2rem] 
        xl:mt-4 lg:mt-4 
        md:mt-4 
        md:text-[1.4rem]
        max-[426px]:mb-6 
        max-[426px]:text-[1.2rem]">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 xl:mt-6 lg:mt-6 md:mt-6 max-[426px]:mb-6">
          {technologies.map((tech, index) => (
            <h3 key={index} className={languageCard}>
              {tech}
            </h3>
          ))}
        </div>

        <div
          className="
        anim
        flex 
        gap-4 
        xl:mt-6
        lg:mt-6
        md:mt-6
        max-[426px]:mb-10
        "
        >
          {liveLink && (
            <ButtonComponent
              href={liveLink}
              label="Live Demo"
              newTab
              icon={LiveDemoIcon}
            />
          )}

          {githubLink && <GithubButton href={githubLink} />}
        </div>
      </div>

      {/* IMAGE / PREVIEW SIDE */}
      <div className="xl:p-10 flex justify-center items-center rounded-3xl mt-10 max-[426px]:order-1 md:order-1 lg:order-1 xl:order-2">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className=" anim w-full h-full object-cover rounded-2xl border-2"
          />
        ) : (
          <span className="text-xl opacity-50">No Preview</span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
