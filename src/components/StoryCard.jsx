import FlipCard from "./FlipCardComponent";
import React from "react";
import { motion } from "framer-motion";

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

  const revealVars = {
    initial: { y: "110%" },
    animate: {
      y: "0%",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
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
    <>
      <section className="w-full border-black p-0 overflow-hidden">
      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* --- TITLE --- */}
        <div className="flex justify-center items-center mb-16 xl:mb-24">
          <div className="overflow-hidden text-center">
            <motion.h1
              variants={revealVars}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[9rem] font-medium tracking-tighter leading-tight"
            >
              STORY BEHIND <br className="hidden md:block" /> THE CODE
            </motion.h1>
          </div>
        </div>

        {/* --- GRID --- */}
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
    </section>
    </>
  );
}

export default StoryCard;
