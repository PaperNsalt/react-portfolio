import FlipCard from "./FlipCardComponent";
import { motion } from "motion/react";

function StoryCard() {
  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeVars = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div>
      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <motion.div variants={fadeVars}>
            <FlipCard
              title="The Beginning"
              subtitle="(2021)"
              technologies={["HTML", "CSS", "JavaScript"]}
              description="In 2021, I began my journey into web development by creating simple static web pages. This phase focused on mastering the fundamentals of HTML, CSS, and JavaScript."
            />
          </motion.div>

          <motion.div variants={fadeVars}>
            <FlipCard
              title="Growth to Full-Stack"
              subtitle="(2022–2024)"
              technologies={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
              description="From 2022 to early 2024, I continuously improved my skills by building more dynamic and responsive websites. I transitioned into full-stack development, utilizing PHP and MySQL for backend logic."
            />
          </motion.div>

          <motion.div variants={fadeVars}>
            <FlipCard
              title="Modern Development"
              subtitle="(2024–2025)"
              technologies={["React.js", "Tailwind", "Flutter", "Dart"]}
              description="From 2024 to 2025, I expanded into modern frameworks. I started building scalable web apps with React.js and Tailwind, while also developing cross-platform mobile applications using Flutter."
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default StoryCard;