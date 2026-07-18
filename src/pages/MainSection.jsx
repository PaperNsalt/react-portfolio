import "../App.css";
import { motion, scale } from "motion/react";
import React from "react";

import StoryCard from "../components/StoryCard.jsx";
import SkillCard from "../components/SkillsSectionComponent.jsx";
import TechCard from "../components/TechCardComponent.jsx";

import ButtonComponent from "../components/ButtonComponent.jsx";
import {
  DownloadIcon,
  PhpIcon,
  LinkedInIcon,
  GithubIcon,
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  FlutterIcon,
  DartIcon,
  TailwindIcon,
  ReactIcon,
} from "../components/IconComponent.jsx";

import cvFile from "../assets/RELLAMA, JEREMY O. CV.pdf";

import jem from "../img/jem.png";
import Photoshop from "../assets/ps.svg";
import Affinity from "../assets/Affinity.svg";
import Illustrator from "../assets/Illustrator.svg";
import InDesign from "../assets/InDesign.svg";
import illustration from "../assets/illustration.svg";
import Layout from "../assets/Layout.svg";
import WebDev from "../assets/web dev.svg";

import "../components/bgChangeColor.js";

function MainSection() {
  const portfolioSectionBorders =
    "border-t-40 border-s-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-t-20 max-[426px]:border-s-20 xl:p-30 lg:p-16 md:p-10 max-[426px]:py-50";
  const portfolioSectionBorders1 =
    " border-s-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-s-20 xl:p-30 lg:p-16 md:p-10 max-[426px]:py-50 max-[426px]:px-10";
  const headlineTextClasses =
    "text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] md:leading- lg:text-[12rem] xl:leading-76 font-medium tracking-tighter";
  const subHeadlineTextClasses =
    "text-center text-4xl max-[426px]:text-[.8rem] md:text-[1.4rem] border rounded-full w-auto p-2";
  const headlineTextClasses2 =
    "text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] md:leading- lg:text-[12rem] xl:leading-76 font-medium tracking-tighter";

  // --- 1. Animation Variants ---

  // Staggers the entrance of elements
  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // The "Masked Reveal" effect (slides up from invisible floor)
  const revealVars = {
    initial: { y: "110%" },
    animate: {
      y: "0%",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }, // Custom cubic-bezier for premium feel
    },
  };

  // Simple fade for smaller utility text
  const fadeVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  const techData = [
    { title: "HTML", icon: HtmlIcon },
    { title: "CSS", icon: CssIcon },
    { title: "PHP", icon: PhpIcon },
    { title: "JavaScript", icon: JavaScriptIcon },
    { title: "Flter", icon: FlutterIcon },
    { title: "Dart", icon: DartIcon },
    { title: "Tailwind", icon: TailwindIcon },
    { title: "React.JS", icon: ReactIcon },
  ];

  //onscroll animation

  const hugeText =
    "font-black tracking-tighter leading-[0.85] text-[14vw] md:text-[8rem] lg:text-[10rem] xl:text-[14rem] uppercase";
  const metaText =
    "font-mono text-xs md:text-sm tracking-widest uppercase opacity-60";

  return (
    <>
      {/* first section */}
      <section className={portfolioSectionBorders}>
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-[1800px] mx-auto flex flex-col gap-2 md:gap-0"
        >
          {/* --- ROW 1: BEYOND --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:h-[180px] items-center">
            {/* Wrapper with overflow-hidden is crucial for the 'reveal' effect */}
            <div className="relative overflow-hidden text-left max-[426px]:text-center">
              <motion.h1 variants={revealVars} className={hugeText}>
                Beyond
              </motion.h1>
            </div>
          </div>

          {/* --- ROW 2: DESIGN + DATE --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:h-[180px] items-center gap-4 md:gap-0">
            <div className="relative overflow-hidden text-left max-[426px]:text-center">
              <motion.h1 variants={revealVars} className={hugeText}>
                Design
              </motion.h1>
            </div>

            <motion.div
              variants={fadeVars}
              className="flex justify-start md:justify-center items-center max-[426px]:justify-center"
            >
              <div className="flex items-center gap-3 ">
                <span className="h-[1px] w-8 bg-stone-900/50"></span>
                <h2 className={metaText}>2025 — 2026</h2>
              </div>
            </motion.div>
          </div>

          {/* --- ROW 3: TAGLINE + INTO --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:h-[180px] items-center gap-4 md:gap-0 mt-4 md:mt-0">
            {/* Order-2 on mobile so "INTO" comes first if you prefer, or keep as is. Here I kept order: natural */}
            <motion.div
              variants={fadeVars}
              className="flex justify-start md:justify-center items-center max-[426px]:justify-center"
            >
              <div className="border border-stone-900/30 rounded-full px-4 py-2">
                <h2 className={`${metaText} !opacity-100`}>
                  5 Years of Grinding
                </h2>
              </div>
            </motion.div>

            <div className="relative overflow-hidden flex justify-start md:justify-end max-[426px]:justify-center text-right">
              <motion.h1 variants={revealVars} className={hugeText}>
                Into
              </motion.h1>
            </div>
          </div>

          {/* --- ROW 4: EXPERIENCE --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:h-[180px] items-center">
            {/* Desktop: Column 2. Mobile: Column 1. */}
            <div className="md:col-start-2 relative overflow-hidden flex justify-start md:justify-end max-[426px]:justify-center text-right">
              <motion.h1 variants={revealVars} className={hugeText}>
                Exp
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </section>

      {/* second section */}
      <section className="w-full border-r-[20px] border-b-[20px] md:border-r-[30px] md:border-b-[30px] lg:border-r-[40px] lg:border-b-[40px] border-black p-6 sm:p-10 md:p-20 xl:p-32 overflow-hidden">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-4"
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* TEXT CONTENT */}
          <div className="flex flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left w-full">
            {/* HEADING MASK WRAPPER */}
            <div className="overflow-hidden mb-6 lg:mb-10">
              <motion.h1
                variants={revealVars}
                className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] 2xl:text-[13rem] tracking-tighter leading-tight whitespace-nowrap"
              >
                WHO I AM?
              </motion.h1>
            </div>

            {/* PARAGRAPH MASK WRAPPER */}
            <div className="overflow-hidden mb-8 md:mb-12 max-w-4xl">
              <motion.p
                variants={revealVars}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed lg:leading-normal text-justify"
              >
                Hello there! I'm{" "}
                <span className="font-semibold border px-2 py-0.5 rounded-full hover:bg-[#f2552e]/80 transition-colors duration-200 hover:text-white hover:border-black cursor-pointer inline-block">
                  Jeremy Rellama
                </span>
                , currently pursuing my Bachelor of Science in Information
                Technology (BSIT) at Bicol University Polangui. Originally
                hailing from Camagong, Oas, Albay, I'm deeply passionate about
                all things related to technology and computer science. Whether
                it's coding, software development, or exploring the latest tech
                trends, I'm always eager to dive in and learn more.{" "}
              </motion.p>
            </div>

            {/* BUTTONS (Using FadeVars for a cleaner entrance) */}
            <motion.div
              variants={fadeVars}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <div>
                <ButtonComponent
                  href="https://github.com/PaperNsalt"
                  label="Github"
                  newTab
                  icon={GithubIcon}
                />
              </div>

              <div>
                <ButtonComponent
                  href="https://www.linkedin.com/in/jeremy-rellama-39292a339/"
                  label="LinkedIn"
                  newTab
                  icon={LinkedInIcon}
                />
              </div>

              <div>
                <ButtonComponent
                  href={cvFile}
                  label="DownloadCV"
                  icon={DownloadIcon}
                />
              </div>
            </motion.div>
          </div>

          {/* IMAGE CONTENT */}
          <motion.div
            variants={fadeVars}
            className="flex flex-1 justify-center items-center w-full"
          >
            <motion.img
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileTap={{ scale: 0.95 }}
              className="imganim object-cover w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[35rem] xl:h-[35rem] rounded-full lg:rounded-none shadow-xl lg:shadow-none"
              src={jem}
              alt="Jeremy Rellama"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* third section */}
      <section
        className={`${portfolioSectionBorders1} p-6 sm:p-10 md:p-20 xl:p-32 overflow-hidden`}
      >
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          {/* --- TITLE --- */}
          <div className="flex justify-center md:justify-start xl:justify-center items-center mb-16 md:mb-24">
            <div className="overflow-hidden">
              <motion.h1
                variants={revealVars}
                className="text-center md:text-left text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-medium tracking-tighter leading-none"
              >
                SKILLS
              </motion.h1>
            </div>
          </div>

          {/* --- SKILL CARDS GRID --- */}
          {/* Responsive: 1 col (mobile) -> 2 cols (tablet) -> 3 cols (desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mb-20">
            <motion.div variants={fadeVars} className="h-full">
              <SkillCard
                icon={illustration}
                title="Illustration"
                description={
                  <>
                    I possess a comprehensive skill set in{" "}
                    <span className="font-medium border px-1.5 py-0.5 rounded-full hover:bg-[#f2552e]/80 transition-colors duration-200 hover:text-white hover:border-black cursor-default">
                      illustration
                    </span>
                    , encompassing both traditional and digital techniques. My
                    expertise includes a strong understanding of color theory,
                    composition, and perspective.
                  </>
                }
              />
            </motion.div>

            <motion.div variants={fadeVars} className="h-full">
              <SkillCard
                icon={WebDev}
                title="Web Development"
                description={
                  <>
                    I excel at designing{" "}
                    <span className="font-medium border px-1.5 py-0.5 rounded-full hover:bg-[#f2552e]/80 transition-colors duration-200 hover:text-white hover:border-black cursor-default">
                      intuitive
                    </span>
                    user interfaces and seamless user experiences, ensuring that
                    each site is both functional and aesthetically pleasing.
                  </>
                }
              />
            </motion.div>

            <motion.div variants={fadeVars} className="h-full">
              <SkillCard
                icon={Layout}
                title="Layout"
                description={
                  <>
                    I possess a comprehensive skill set in{" "}
                    <span className="font-medium border px-1.5 py-0.5 rounded-full hover:bg-[#f2552e]/80 transition-colors duration-200 hover:text-white hover:border-black cursor-default">
                      layout
                    </span>
                    , encompassing both traditional and digital techniques. My
                    expertise includes color theory, composition, and
                    perspective.
                  </>
                }
              />
            </motion.div>
          </div>

          {/* --- SOFTWARE LOGOS GRID --- */}
          {/* Responsive: 2 cols (mobile) -> 4 cols (desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            <motion.div
              variants={fadeVars}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center p-4"
            >
              <img
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                src={Photoshop}
                alt="Photoshop"
              />
              <p className="text-xl md:text-2xl xl:text-4xl tracking-tighter font-medium">
                Photoshop
              </p>
            </motion.div>

            <motion.div
              variants={fadeVars}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center p-4"
            >
              <img
                className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-2xl"
                src={Affinity}
                alt="Affinity"
              />
              <p className="text-xl md:text-2xl xl:text-4xl tracking-tighter font-medium">
                Affinity
              </p>
            </motion.div>

            <motion.div
              variants={fadeVars}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center p-4"
            >
              <img
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                src={Illustrator}
                alt="Illustrator"
              />
              <p className="text-xl md:text-2xl xl:text-4xl tracking-tighter font-medium">
                Illustrator
              </p>
            </motion.div>

            <motion.div
              variants={fadeVars}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center p-4"
            >
              <img
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                src={InDesign}
                alt="InDesign"
              />
              <p className="text-xl md:text-2xl xl:text-4xl tracking-tighter font-medium">
                InDesign
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* fourth section */}
      <section className="w-full border-r-[20px] border-b-[20px] md:border-r-[30px] md:border-b-[30px] lg:border-r-[40px] lg:border-b-[40px] border-black p-6 sm:p-10 md:p-20 xl:p-32 overflow-hidden">
      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* --- TITLE --- */}
        <div className="flex justify-center items-center mb-16 xl:mb-24">
          <div className="overflow-hidden">
            <motion.h1
              variants={revealVars}
              className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-medium tracking-tighter leading-none"
            >
              TECH STACKS
            </motion.h1>
          </div>
        </div>

        {/* --- GRID --- */}
        {/* Responsive: 2 cols (mobile) -> 3 cols (tablet) -> 4 cols (desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {techData.map((tech, index) => (
            <motion.div key={index} variants={fadeVars}>
              <TechCard title={tech.title} icon={tech.icon} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

      {/* fifth section */}
      <section className={portfolioSectionBorders1}>
        <StoryCard></StoryCard>
      </section>
    </>
  );
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // How many pixels scrolled vertically
  console.log("Scrolled:", scrollTop, "px");
});

export default MainSection;
