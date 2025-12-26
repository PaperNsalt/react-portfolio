import { motion } from "motion/react";
const SkillCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -2 }}
      transition={{ type: "spring", stiffness: 500 }}
      whileTap={{ scale: 0.9, y: 1 }}
      className="flex flex-col justify-center items-center p-8 lg:p-6 text-center"
    >
      <img
        className="max-[426px]:size-30 mb-8 size-50 md:size-30 lg:size-36"
        src={icon}
        alt={title}
      />

      <h1 className="max-[426px]:text-[2rem] md:text-[2rem] lg:m-6 lg:text-[4rem] lg:leading-20 xl:text-[5.4rem] tracking-tighter font-medium">
        {title}
      </h1>

      <p className="xl:text-[1.6rem] lg:text-[1.6rem] md:text-[1.4rem] max-[426px]:text-[1.2rem]">
        {description}
      </p>
    </motion.div>
  );
};

export default SkillCard;
