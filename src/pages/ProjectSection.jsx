import ButtonComponent from "../components/ButtonComponent.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import thebrandcollective from "../img/thebrandcollective.png";
import StudentManagementSystem from "../img/Student Management System.png";
import BuGwaCalculator from "../img/Bu Gwa Calculator.png";
import QuickDeal from "../img/QuickDeal.png";
import CoffeeMadness from "../img/CoffeeMadness.png";
import Clima from "../img/CLIMA.png";
import MapCanvas from "../img/MapCanvas.png";
import QuoteSpark from "../img/QouteSpark.png";

const projects = [
  {
    title: "QuickDeal",
    description:
      "A customer-to-customer e-commerce platform with authentication, product listings, featured items, and database-driven transactions.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveLink: "https://github.com/PaperNsalt",
    githubLink: "https://github.com/PaperNsalt/C2C-Ecommerce---Quickdeal",
    image: QuickDeal,
  },
  {
    title: "thebrandcollective",
    description:
      "An online shoe store featuring product catalogs, detailed product pages, and a structured checkout experience for effortless browsing.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveLink: "https://your-live-demo.com",
    githubLink:
      "https://github.com/PaperNsalt/Shoes-Ecommerce-Website---thebrandcollective",
    image: thebrandcollective,
  },
  {
    title: "Student Management System",
    description:
      "A web application for managing student records, from registration and updates to secure data retrieval and administrative tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveLink: "https://your-live-demo.com",
    githubLink: "https://github.com/PaperNsalt/Student-Management-System",
    image: StudentManagementSystem,
  },
  {
    title: "CLIMA",
    description:
      "A responsive weather experience that makes it simple to check changing conditions through a focused, modern interface.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://papernsalt.github.io/clima-weather-app/",
    githubLink: "https://github.com/PaperNsalt/clima-weather-app",
    image: Clima,
  },
  {
    title: "GWA Calculator",
    description:
      "A simple calculator that lets students add subjects, enter grades and units, and instantly calculate their General Weighted Average.",
    technologies: ["React.js", "Tailwind CSS"],
    liveLink: "https://papernsalt.github.io/bu-gwa-calculator/",
    githubLink: "https://github.com/PaperNsalt/bu-gwa-calculator",
    image: BuGwaCalculator,
  },
  {
    title: "QuoteSpark",
    description:
      "A clean quote generator that fetches fresh inspiration on demand, built for quick and pleasant interactions.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://papernsalt.github.io/qoute-generator/#/",
    githubLink: "https://github.com/PaperNsalt/qoute-generator",
    image: QuoteSpark,
  },
  {
    title: "MapCanvas",
    description:
      "An interactive map-focused project built to make geographic exploration clear, responsive, and engaging.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://papernsalt.github.io/map-canvas/",
    githubLink: "https://github.com/PaperNsalt/map-canvas",
    image: MapCanvas,
  },
];

function ProjectSection() {
  return (
    <section id="projects" className="border-e-[16px] border-b-[16px] px-5 py-14 sm:border-e-[24px] sm:border-b-[24px] sm:px-8 md:border-e-[30px] md:border-b-[30px] md:px-12 md:py-16 lg:border-e-[40px] lg:border-b-[40px] lg:px-16 lg:py-20 xl:px-30 xl:py-28">
      <header className="mb-12 md:mb-16 xl:mb-20">
        <p className="text-[1.2rem] font-semibold uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
          Portfolio / Selected work
        </p>
        <div className="mt-5 flex flex-col justify-center items-center gap-6 xl:flex-row xl:items-end xl:justify-between">
          <h1 className="text-[clamp(4.5rem,12vw,13rem)] font-medium leading-[0.82] tracking-[-0.075em]">
            FEATURED
            <br />
            PROJECTS
          </h1>
          <p className="max-w-md text-[1.5rem] leading-relaxed text-black/65 md:text-[1.8rem]">
            A selection of digital products shaped around useful details and
            clear user experiences.
          </p>
        </div>
      </header>

      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>

      <div className="mt-5 md:mt-10">
        <ButtonComponent
          href="https://github.com/PaperNsalt?tab=repositories"
          label="Project Archive"
          newTab
          download={false}
        />
      </div>
    </section>
  );
}

export default ProjectSection;
