import { motion } from "motion/react";

function ButtonLink({
  href,
  label,
  download = true,
  newTab = false,
  icon = null,
}){
  return (
    <a
      href={href}
      download={download}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="inline-block"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.9, y: 1}}
        transition={{ type: "spring", stiffness: 300, damping: 15}}
        className="
          flex items-center gap-2
          border bg-white text-[1.4rem]
          px-4 py-2 rounded-2xl
          transition-colors duration-200
          hover:bg-[#f2552e]/80 hover:text-white hover:border-black

          max-[426px]:text-[1.2rem]
        "
      >
        {icon && <span className="">{icon}</span>}
        {label}
      </motion.button>
    </a>
  );
}

export default ButtonLink;
