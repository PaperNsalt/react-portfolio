import ButtonComponent from "../components/ButtonComponent.jsx";

import ProjectCard from "../components/ProjectCard.jsx";
import QuizApplication from "../img/QuizApplication.png";
import thebrandcollective from "../img/thebrandcollective.png"
import StudentManagementSystem from "../img/Student Management System.png";

import QuickDeal from "../img/QuickDeal.png";
import CoffeeMadness from "../img/CoffeeMadness.png";

function ProjectSection() {
  return (
    <section className="border-e-40 border-b-40 xl:p-30 lg:p-16 md:p-10 px-8 py-6 max-[426px]:border-e-20 max-[426px]:border-b-20 md:border-e-40 md:border-b-40">
      <div className="flex justify-center items-center">
        <h1 className="anim text-[4rem] md:text-[7rem] xl:text-[14rem] font-medium tracking-tighter xl:leading-50 max-[426px]:leading-18">
          FEATURED PROJECTS
        </h1>
      </div>

      <ProjectCard
        title="QuickDeal"
        description="QuickDeal is a customer-to-customer (C2C) e-commerce platform that allows users to buy and sell products directly with one another. The system includes user authentication, product listings, featured items, and secure database-driven transactions. It is built using HTML, CSS, JavaScript, PHP, and MySQL, focusing on usability, responsiveness, and efficient data management."
        technologies={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
        liveLink="https://github.com/PaperNsalt"
        githubLink="https://github.com/PaperNsalt/C2C-Ecommerce---Quickdeal"
        image={QuickDeal}
        imageAlt="Preview"
      />

      <ProjectCard
        title="thebrandcollective"
        description="TheBrandCollective is an e-commerce website dedicated to selling branded shoes through a clean and modern online shopping experience. The platform features product catalogs, detailed product pages, and a structured checkout flow. Developed with HTML, CSS, JavaScript, PHP, and MySQL, the project emphasizes organized product management, responsive design, and smooth user interaction."
        technologies={["HTML", "CSS", "PHP", "MySQL", "JavaScript"]}
        liveLink="https://your-live-demo.com"
        githubLink="https://github.com/PaperNsalt/Shoes-Ecommerce-Website---thebrandcollective"
        image={thebrandcollective}
        imageAlt="Preview"
      />

      <ProjectCard
        title="CoffeeMadness"
        description="CoffeeMadness is a coffee shop website designed to showcase products, menus, and brand identity in an engaging way. The website highlights coffee selections, promotions, and store information while maintaining a visually appealing and user-friendly layout. It was developed using HTML, CSS, JavaScript, PHP, and MySQL, with a focus on design consistency and interactive elements."
        technologies={["HTML", "CSS", "PHP", "MySQL", "JavaScript"]}
        liveLink="https://your-live-demo.com"
        githubLink="https://github.com/PaperNsalt/CoffeeMadness"
        image={CoffeeMadness}
        imageAlt="Preview"
      />

      <ProjectCard
        title="Student Management System"
        description="The Student Management System is a web-based application that manages student records, including registration, updates, and data retrieval. It allows administrators to efficiently handle student information through a structured and secure system. Built using HTML, CSS, JavaScript, PHP, and MySQL, the project focuses on CRUD operations, data integrity, and administrative functionality."
        technologies={["HTML", "CSS", "PHP", "MySQL", "JavaScript"]}
        liveLink="https://your-live-demo.com"
        githubLink="https://github.com/PaperNsalt/Student-Management-System"
        image={StudentManagementSystem}
        imageAlt="Preview"
      />
      
      <ProjectCard
        title="InspireMe"
        description="InspireMe is a mobile application that generates inspirational quotes by fetching data from an external API. Developed using Flutter and Dart, the app delivers a smooth and responsive user experience while dynamically displaying quotes in real time. The project demonstrates API integration, asynchronous data handling, and clean UI design for cross-platform mobile applications."
        technologies={["Dart", "Flutter"]}
        liveLink="https://your-live-demo.com"
        githubLink="https://github.com/PaperNsalt/QuoteApp"
       image={QuizApplication}
        imageAlt="Preview"
      />

      <div className="flex justify-start xl:mt-10">
      <ButtonComponent 
      href="https://github.com/PaperNsalt?tab=repositories"
      label="Project Archive"
      newTab
      />
      </div>
    </section>
  );
}

export default ProjectSection;
