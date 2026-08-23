import { useState } from "react";
import ActionLink from "../components/ActionLink.jsx";
import ProjectGridCard from "../components/ProjectGridCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import Section from "../components/Section.jsx";

import thebrandcollective from "../img/thebrandcollective.png";
import StudentManagementSystem from "../img/Student Management System.png";
import BuGwaCalculator from "../img/Bu Gwa Calculator.png";
import QuickDeal from "../img/QuickDeal.png";
import Clima from "../img/CLIMA.png";
import MapCanvas from "../img/MapCanvas.png";
import QuoteSpark from "../img/QouteSpark.png";

import GitHubActivity from '../components/GithubActivity.jsx';

const projects = [
  {
    // The first image is the grid cover; later images appear in the modal gallery.
    title: "QuickDeal",
    category: "E-COMMERCE PLATFORM",
    role: "Full-Stack Developer",
    description:
      "A customer-to-customer e-commerce platform with authentication, product listings, featured items, and database-driven transactions.",
    features: [
      "User Authentication & Roles",
      "C2C Marketplace Listings",
      "Database Transactions with MySQL",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/PaperNsalt/C2C-Ecommerce---Quickdeal",
    images: [QuickDeal],
  },
  {
    title: "thebrandcollective",
    category: "WEB DEVELOPMENT",
    role: "Full-Stack Developer & UI Designer",
    description:
      "An online shoe store featuring product catalogs, detailed product pages, and a structured checkout experience for effortless browsing.",
    features: [
      "Dynamic Product Catalogs",
      "Interactive Shopping Cart & Checkout",
      "Responsive Layout Design",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubLink:
      "https://github.com/PaperNsalt/Shoes-Ecommerce-Website---thebrandcollective",
    images: [thebrandcollective],
  },
  {
    title: "Student Management System",
    category: "WEB APPLICATION",
    role: "Backend & Frontend Developer",
    description:
      "A web application for managing student records, from registration and updates to secure data retrieval and administrative tasks.",
    features: [
      "Student Record CRUD Operations",
      "Secure Admin Access",
      "Data Filtering & Search System",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/PaperNsalt/Student-Management-System",
    images: [StudentManagementSystem],
  },
  {
    title: "CLIMA",
    category: "FRONTEND APP",
    role: "Frontend Developer",
    description:
      "A responsive weather experience that makes it simple to check changing conditions through a focused, modern interface.",
    features: [
      "Live API Weather Data Fetching",
      "Location Search Capabilities",
      "Animated UI Transitions",
    ],
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://papernsalt.github.io/clima-weather-app/",
    githubLink: "https://github.com/PaperNsalt/clima-weather-app",
    images: [Clima],
  },
  {
    title: "GWA Calculator",
    category: "UTILITY TOOL",
    role: "React Developer",
    description:
      "A simple calculator that lets students add subjects, enter grades and units, and instantly calculate their General Weighted Average.",
    features: [
      "Instant Grade Average Calculation",
      "Dynamic Subject Row Addition/Removal",
      "Clean Mobile-Friendly Layout",
    ],
    technologies: ["React.js", "Tailwind CSS"],
    liveLink: "https://papernsalt.github.io/bu-gwa-calculator/",
    githubLink: "https://github.com/PaperNsalt/bu-gwa-calculator",
    images: [BuGwaCalculator],
  },
  {
    title: "QuoteSpark",
    category: "FRONTEND APP",
    role: "Frontend Developer",
    description:
      "A clean quote generator that fetches fresh inspiration on demand, built for quick and pleasant interactions.",
    features: [
      "Random Quote API Integration",
      "One-Click Copy & Share Features",
      "Fluid Motion Effects",
    ],
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://papernsalt.github.io/qoute-generator/#/",
    githubLink: "https://github.com/PaperNsalt/qoute-generator",
    images: [QuoteSpark],
  },
  {
    title: "MapCanvas",
    category: "INTERACTIVE MAP",
    role: "Frontend Developer",
    description:
      "An interactive map-focused project built to make geographic exploration clear, responsive, and engaging.",
    features: [
      "Interactive Map Canvas Controls",
      "Custom Marker Rendering",
      "Smooth Viewport Transitions",
    ],
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://papernsalt.github.io/map-canvas/",
    githubLink: "https://github.com/PaperNsalt/map-canvas",
    images: [MapCanvas, QuoteSpark],
  },
];

function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section
      id="projects"
      eyebrow="05 / Selected work"
      title={
        <>
          Featured
          <br />
          projects.
        </>
      }
    >
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectGridCard
            key={project.title}
            project={project}
            onViewProject={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>


      <div className="mx-auto max-w py-6">
      <GitHubActivity username="PaperNsalt" />
    </div>

      <div className="mt-6 md:mt-6">
        <ActionLink
          href="https://github.com/PaperNsalt?tab=repositories"
          newTab
        >
          Project archive
        </ActionLink>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />



    </Section>
  );
}

export default ProjectSection;
