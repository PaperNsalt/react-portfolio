import { useEffect } from "react";
import { motion } from "motion/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import ActionLink from "../components/ActionLink";
import Section from "../components/Section";
import StoryCard from "../components/StoryCard";
import SkillCard from "../components/SkillsSectionComponent";
import ToolkitCard from "../components/ToolkitCard";
import GridMotion from "../components/GridMotion/GridMotion";
import {
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  PhpIcon,
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  FlutterIcon,
  DartIcon,
  TailwindIcon,
  ReactIcon,
} from "../components/IconComponent";
import cvFile from "../assets/RELLAMA, JEREMY O. CV.pdf";
import jeremy from "../img/jeremy.jpg";
import illustration from "../assets/illustration.svg";
import Layout from "../assets/Layout.svg";
import WebDev from "../assets/web dev.svg";
import Clima from "../img/CLIMA.png";
import QuickDeal from "../img/QuickDeal.png";
import MapCanvas from "../img/MapCanvas.png";
import QuoteSpark from "../img/QouteSpark.png";
import yearbook2024 from "../img/yearbookcover2024.png";
import fantastic4 from "../img/Fantastic4cover.png";

import ProfileCard from "../components/ProfileCard/ProfileCard";
import LogoLoop from "../components/LogoLoop/LogoLoop";

const techLogos = [
  { node: <HtmlIcon className="h-full w-auto" />, title: "HTML" },
  { node: <CssIcon className="h-full w-auto" />, title: "CSS" },
  { node: <PhpIcon className="h-full w-auto" />, title: "PHP" },
  { node: <JavaScriptIcon className="h-full w-auto" />, title: "JavaScript" },
  { node: <FlutterIcon className="h-full w-auto" />, title: "Flutter" },
  { node: <DartIcon className="h-full w-auto" />, title: "Dart" },
  { node: <TailwindIcon className="h-full w-auto" />, title: "Tailwind" },
  { node: <ReactIcon className="h-full w-auto" />, title: "React" },
];

const capabilities = [
  {
    icon: illustration,
    title: "Illustration",
    description:
      "Digital and traditional illustration shaped by strong color, composition, and perspective.",
  },
  {
    icon: WebDev,
    title: "Web development",
    description:
      "Thoughtful, responsive interfaces that make useful digital experiences feel effortless.",
  },
  {
    icon: Layout,
    title: "Layout design",
    description:
      "Clear visual systems that give content hierarchy, rhythm, and a memorable point of view.",
  },
];

const motionImages = [
  Clima,
  QuickDeal,
  MapCanvas,
  QuoteSpark,
  yearbook2024,
  fantastic4,
];

const gridItems = Array.from({ length: 28 }, (_, index) => {
  const image = motionImages[index % motionImages.length];
  return <img key={`portfolio-grid-${index}`} src={image} alt="" />;
});

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
};

const heroTitleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const heroLineVariants = {
  hidden: { y: "110%", opacity: 0, rotateX: 12 },
  visible: {
    y: "0%",
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function MainSection() {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, duration: 1.2 });
    let animationFrameId;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <section
        id="top"
        className="portfolio-hero relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40 lg:px-16"
      >
        <div className="portfolio-grid-motion" aria-hidden="true">
          <GridMotion
            items={gridItems}
            gradientColor="rgba(242, 85, 46, 0.18)"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-360">
          <motion.p {...reveal} className="eyebrow text-[#f2552e]">
            Jeremy Rellama · Designer & developer
          </motion.p>

          <motion.h1
            variants={heroTitleContainer}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-6xl text-[clamp(4.4rem,13vw,13rem)] font-semibold leading-[.78] tracking-[-.09em] [perspective:1000px]"
          >
            <span className="block pb-3 -mb-3">
              <motion.span variants={heroLineVariants} className="block origin-bottom-left">
                Beyond
              </motion.span>
            </span>
            <span className="block pb-3 -mb-3">
              <motion.span variants={heroLineVariants} className="block origin-bottom-left">
                design.
              </motion.span>
            </span>
            <span className="block pb-3 -mb-3">
              <motion.span variants={heroLineVariants} className="block origin-bottom-left">
                <span className="text-[#f2552e]">Into</span> experience.
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            {...reveal}
            className="mt-20 flex flex-col justify-between gap-6 border-t border-black/15 pt-5 sm:flex-row sm:items-end"
          >
            <p className="max-w-md text-lg leading-relaxed text-black/65 sm:text-xl">
              I build digital work where visual craft and practical technology meet.
            </p>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-black/45">
              <span className="h-px w-8 bg-current" /> Based in Albay, Philippines
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={68}
          gap={48}
          scaleOnHover
          fadeOut
          fadeOutColor="#f7f5f1"
          darkFadeOutColor="#121212"
          ariaLabel="Technology stack horizontal"
        />
      </div>

      <Section
        id="about"
        eyebrow="01 / About"
        title="A curious maker with a visual mind."
      >
        <div className="about-layout flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16 xl:gap-20">
          <motion.div {...reveal} className="w-full lg:max-w-2xl xl:max-w-3xl">
            <p className="text-lg leading-relaxed text-black/70 sm:text-xl md:text-2xl">
              I’m Jeremy Rellama, an graduate IT student at Bicol University
              Polangui. I enjoy turning a good idea into something people can
              actually use from the interface details to the code behind them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionLink
                href="https://github.com/PaperNsalt"
                newTab
                icon={GithubIcon}
              >
                GitHub
              </ActionLink>
              <ActionLink
                href="https://www.linkedin.com/in/jeremy-rellama-39292a339/"
                newTab
                icon={LinkedInIcon}
                variant="secondary"
              >
                LinkedIn
              </ActionLink>
              <ActionLink
                href={cvFile}
                download
                icon={DownloadIcon}
                variant="secondary"
              >
                Download CV
              </ActionLink>
            </div>
          </motion.div>

          <div className="w-full flex justify-center lg:w-auto">
            <ProfileCard
              name="Jeremy Rellama"
              title="Web Developer"
              handle="saltnpaper"
              status="Online"
              contactText="Contact Me"
              avatarUrl={jeremy}
              showUserInfo={false}
              behindGlowEnabled
              className="w-full max-w-sm lg:max-w-none"
            />
          </div>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="02 / Capabilities"
        title="Designed to be seen. Built to be used."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((item) => (
            <SkillCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="03 / Toolkit" title="Tools I reach for.">
        <div className="flex flex-col gap-8 py-4">
          <ToolkitCard />
        </div>
      </Section>

      <Section eyebrow="04 / Journey" title="The story behind the code.">
        <StoryCard />
      </Section>
    </main>
  );
}

export default MainSection;
