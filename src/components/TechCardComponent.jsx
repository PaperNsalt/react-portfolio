import { motion } from "motion/react";

const TechCard = ({ icon, title }) => {
  const techCards =
    "anim rounded-4xl p-8 flex flex-col justify-center items-center";

  return (
    <motion.div
      whileHover={{ scale: 1.2, y: -2 }}
      transition={{ type: "spring", stiffness: 500}}
      whileTap={{ scale: 0.9, y: 1 }}
      className={techCards}
    >
      {icon}

      <h1 className="max-[426px]:text-[1.2rem] md:text-[2.4rem] lg:text-[2.6rem] xl:text-[2.6rem] font-medium tracking-tighter mt-4">
        {title}
      </h1>
    </motion.div>
  );
};

export default TechCard;
