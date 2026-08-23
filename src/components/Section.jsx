import React from "react";
import { motion } from "motion/react";

const titleContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const titleWordVariants = {
  hidden: {
    y: "110%",
    opacity: 0,
    rotateX: 10,
  },
  visible: {
    y: "0%",
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const eyebrowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function AnimatedTitle({ title }) {
  if (typeof title !== "string") {
    return <h2 className="section-title">{title}</h2>;
  }

  const words = title.split(" ");
  return (
    <motion.h2
      variants={titleContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="section-title flex flex-wrap gap-x-[0.28em] [perspective:1000px]"
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block pb-2 -mb-2 pt-1 -mt-1">
          <motion.span
            variants={titleWordVariants}
            className="inline-block origin-bottom-left"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`section-frame ${className}`}>
      <div className="section-inner">
        {eyebrow && (
          <motion.p
            variants={eyebrowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="eyebrow inline-flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#f2552e]" />
            <span>{eyebrow}</span>
          </motion.p>
        )}

        {title && <AnimatedTitle title={title} />}

        {children}
      </div>
    </section>
  );
}

export default Section;