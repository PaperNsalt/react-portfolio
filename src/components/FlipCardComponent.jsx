function FlipCard({
  title,
  subtitle,
  technologies = [],
  description,
  width = "w-[350px]",
  height = "h-[450px]",
}) {
  return (
    <div
      className={`anim ${width} ${height} max-[426px]:w-[260px] mx-auto 
      [perspective:1000px] cursor-pointer group`}
    >
      <div
        className="relative w-full h-full
        transition-transform duration-[600ms]
        [transform-style:preserve-3d]
        group-hover:[transform:rotateY(180deg)]"
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center
          bg-[#39393f]/40 border p-10 rounded-2xl
          [backface-visibility:hidden]"
        >
          <h1 className="max-[426px]:text-[2.8rem] max-[426px]:leading-14 text-[4rem] tracking-tighter leading-16 font-medium text-center">
            {title}
            {subtitle && <br />}
            {subtitle}
          </h1>

          <div className="flex flex-row gap-6 justify-center items-center flex-wrap mt-6">
            {technologies.map((tech, index) => (
              <h3 key={index} className="text-gray-500">
                {tech}
              </h3>
            ))}
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex items-center justify-center
          bg-[#f2552e] p-10 rounded-2xl
          [transform:rotateY(180deg)]
          [backface-visibility:hidden]"
        >
          <p className="text-[1.4rem] text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
