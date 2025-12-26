import "../App.css";
import { motion, scale } from "motion/react";

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

import cvFile from "../assets/Rellama CV.pdf";

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

  return (
    <>
      {/* first section */}
      <section className={portfolioSectionBorders}>
        <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="anim flex justify-start items-center "
          >
            <h1 className={headlineTextClasses + " xl:text-[24rem] "}>
              BEYOND
            </h1>
          </motion.div>
        </div>

        <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="anim flex justify-start items-center "
          >
            <h1 className={headlineTextClasses + " xl:text-[18rem] "}>
              DESIGN
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="anim flex justify-center items-center"
          >
            <h1 className={subHeadlineTextClasses}>2025 - 2026</h1>
          </motion.div>
        </div>

        <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="anim flex justify-center items-center"
          >
            <h1 className={subHeadlineTextClasses}>5 YEAR'S OF GRINDING</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="anim flex justify-end items-center "
          >
            <h1 className={headlineTextClasses2 + " xl:text-[24rem] "}>INTO</h1>
          </motion.div>
        </div>

        <div className="anim grid grid-cols-2 md:grid-rows-[80px] lg:grid-rows-[100px] xl:grid-rows-[190px] py-4 px-4 gap-2">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="anim col-start-2 col-end-3 flex justify-end items-center "
          >
            <h1 className={headlineTextClasses2 + " xl:text-[18rem] "}>
              EXPERIENCE
            </h1>
          </motion.div>
        </div>
      </section>

      {/* second section */}
      <section className="border-e-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-e-20 xl:p-50 lg:p-30 md:p-20 max-[426px]:px-8 max-[426px]:py-40">
        <div className="anim grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] ">
          <div className="flex flex-col justify-center items-start max-[426px]:order-2">
            <h1 className="md:self-center lg:text-left lg:self-center xl:self-start text-5x1 max-[426px]:text-[4rem] max-[426px]:leading-20 max-[426px]:self-center max-[426px]:mb-0 md:text-[7rem] lg:text-[14rem] xl:text-[13rem] font-medium tracking-tighter md:leading-28 lg:leading-50 xl:leading-56 mb-4">
              WHO I AM?
            </h1>
            <p className="text-justify text-3xl max-[426px]:text-[1rem] max-[426px]:leading-6 leading-12 md:text-[1rem] md:leading-6 lg:text-2xl lg:leading-10 xl:text-3xl xl:leading-12">
              Hello there! I'm{" "}
              <span className="font-semibold border px-[5.1px] py-[1.2px] rounded-full hover:bg-[#f2552e]/80 transition-colors duration-200 hover:text-white hover:border-black">
                Jeremy Rellama
              </span>
              , currently pursuing my Bachelor of Science in Information
              Technology (BSIT) at Bicol University Polangui. Originally hailing
              from Camagong, Oas, Albay, I'm deeply passionate about all things
              related to technology and computer science. Whether it's coding,
              software development, or exploring the latest tech trends, I'm
              always eager to dive in and learn more.{" "}
            </p>

            <div
              className="mt-10 
            flex 
            gap-2 
            max-[426px]:gap-1
            md:gap-4 
            max-[426px]:mt-8"
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
            </div>
          </div>

          <div className="flex justify-center items-center max-[426px]:order-1">
            <motion.img
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              whileTap={{ scale: 0.9, y: 1 }}
              className="imganim aspect-auto object-cover max-[426px]:size-80 md:size-80 xl:size-200 lg:size-120"
              src={jem}
              alt="Jeremy rellama"
            />
          </div>
        </div>
      </section>

      {/* third section */}
      <section className={portfolioSectionBorders1}>
        <div className="anim flex justify-center items-center">
          <div>
            <h1 className="text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] lg:text-[10rem] xl:text-[14rem] xl:leading-76 font-medium tracking-tighter">
              SKILLS
            </h1>
          </div>
        </div>
        <div className="mt-20 md:mt-0 lg:mt-0 xl:mt-20 anim grid md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
          <SkillCard
            icon={illustration}
            title="Illustration"
            description={
              <>
                I possess a comprehensive skill set in{" "}
                <span className="font-medium border px-[5.1px] py-[1.2px] rounded-full hover:bg-[#f2552e]/80 transition-colors duration-200">
                  illustration
                </span>
                , encompassing both traditional and digital techniques. My
                expertise includes a strong understanding of color theory,
                composition, and perspective, allowing me to create visually
                compelling and balanced artworks.
              </>
            }
          />

          <SkillCard
            icon={WebDev}
            title="Web Development"
            description={
              <>
                I excel at designing{" "}
                <span className="font-medium border px-[5.1px] py-[1.2px] rounded-full hover:bg-[#f2552e]/80 transition-colors duration-200">
                  intuitive
                </span>
                user interfaces and seamless user experiences, ensuring that
                each site is both functional and aesthetically pleasing. My
                experience with responsive design principles allows me to create
                websites that perform optimally across different devices and
                screen sizes.
              </>
            }
          />

          <SkillCard
            icon={Layout}
            title="Layout"
            description={
              <>
                I possess a comprehensive skill set in{" "}
                <span className="font-medium border px-[5.1px] py-[1.2px] rounded-full hover:bg-[#f2552e]/80 transition-colors duration-200">
                  illustration
                </span>
                , encompassing both traditional and digital techniques. My
                expertise includes color theory, composition, and perspective.
              </>
            }
          />
        </div>

        <div className="mt-20 lg:mt-10 anim grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-8">
          <motion.div
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 500 }}
            whileTap={{ scale: 0.9, y: 1 }}
            className="flex gap-4 justify-center items-center"
          >
            <img
              className="max-[426px]:size-18 size-36 md:size-20 lg:size-20"
              src={Photoshop}
              alt="Photoshop"
            />
            <h1 className="max-[426px]:text-[1.4rem] lg:text-[2rem] xl:text-[3.8rem] tracking-tighter">
              Photoshop
            </h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 500 }}
            whileTap={{ scale: 0.9, y: 1 }}
            className="flex gap-4 justify-center items-center"
          >
            <img
              className="max-[426px]:size-18 size-36 md:size-20 lg:size-20 rounded-2xl"
              src={Affinity}
              alt="Affinity"
            />
            <h1 className="max-[426px]:text-[1.4rem] lg:text-[2rem] xl:text-[3.8rem] tracking-tighter">
              Affinity
            </h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 500 }}
            whileTap={{ scale: 0.9, y: 1 }}
            className="flex gap-4 justify-center items-center"
          >
            <img
              className="max-[426px]:size-18 size-36 md:size-20 lg:size-20"
              src={Illustrator}
              alt="Illustrator"
            />
            <h1 className="max-[426px]:text-[1.4rem] lg:text-[2rem] xl:text-[3.8rem] tracking-tighter">
              Illustrator
            </h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 500 }}
            whileTap={{ scale: 0.9, y: 1 }}
            className="flex gap-4 justify-center items-center"
          >
            <img
              className="max-[426px]:size-18 size-36 md:size-20 lg:size-20"
              src={InDesign}
              alt="InDesign"
            />
            <h1 className="max-[426px]:text-[1.4rem] lg:text-[rem] xl:text-[3.8rem] tracking-tighter">
              InDesign
            </h1>
          </motion.div>
        </div>
      </section>

      {/* fourth section */}
      <section className="border-e-40 border-b-40 max-[426px]:border-b-20 max-[426px]:border-e-20 xl:p-30 lg:p-16 md:p-10 max-[426px]:px-8 max-[426px]:py-6">
        <div className="flex justify-center items-center">
          <h1 className="anim text-left max-[426px]:text-[4rem] max-[426px]:leading-10 md:text-[7rem] lg:text-[10rem] xl:text-[14rem] xl:leading-60 font-medium tracking-tighter">
            TECH STACKS
          </h1>
        </div>

        {/* techCards */}
        <div className="anim grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-6 xl:mt-20">
          <TechCard title="HTML" icon={HtmlIcon} />

          <TechCard title="CSS" icon={CssIcon} />

          <TechCard title="PHP" icon={PhpIcon} />

          <TechCard title="JavaScript" icon={JavaScriptIcon} />

          <TechCard title="Flutter" icon={FlutterIcon} />

          <TechCard title="Dart" icon={DartIcon} />

          <TechCard title="Tailwind" icon={TailwindIcon} />

          <TechCard title="React.JS" icon={ReactIcon} />
        </div>
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
