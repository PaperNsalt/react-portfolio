import { GithubIcon } from "./IconComponent";

function GithubButton({
  href,
  label = "Github",
  className = "",
}) {
  const baseStyle =
    "anim xl:text-[1.4rem] py-2 px-4 border-1 border-dashed rounded-2xl " +
    "flex items-center gap-2 border-black/40 " +
    "hover:border-solid hover:border-black transition-all duration-200 " + 
    "max-[426px]:text-[1.2rem] md:text-[1.4rem] ";

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button className={`${baseStyle} ${className}`}>
        {/* ICON */}
        {GithubIcon}
        {label}
      </button>
    </a>
  );
}

export default GithubButton;
