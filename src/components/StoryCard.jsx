import FlipCard from "./FlipCardComponent";

function StoryCard() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="anim text-left max-[426px]:text-[4rem] max-[426px]:leading-16 md:text-[7rem] lg:text-[10rem] xl:text-[12rem] xl:leading-60 font-medium tracking-tighter md:leading-30 md:text-center max-[426px]:text-center">
          STORY BEHIND THE CODE
        </h1>
      </div>

      <div className="anim grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center justify-center gap-10 md:mt-0 lg:mt-10 xl:mt-20">
        {/* card1 */}
      <FlipCard
        title="The Beginning"
        subtitle="(2021)"
        technologies={["HTML", "CSS", "JavaScript"]}
        description="In 2021, I began my journey into web development by creating simple static web pages. This phase focused on mastering the fundamentals of HTML, CSS, and JavaScript."
      />

      <FlipCard 
      title = "Growth to Full-Stack"
      subtitle= "(2022–2024)"
      technologies={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]} 
      description="From 2022 to early 2024, I continuously improved my skills by building more dynamic and responsive websites. During this period, I transitioned into full-stack development, using HTML, CSS, and JavaScript for the front-end while integrating PHP and MySQL on the back-end to manage data, authentication, and application logic. This stage strengthened my understanding of complete web systems and real-world development workflows."
      />

      <FlipCard 
      title= "Modern Web & App Development"
      subtitle= "(2024–2025)"
      technologies={["React.js", "Tailwind", "Flutter", "Dart"]}
      description= "From 2024 to 2025, I expanded my skill set by adopting modern technologies for both web and mobile development. I started building web applications using React.js and Tailwind CSS to create fast, scalable, and visually modern interfaces, while also developing mobile applications using Flutter and Dart. This stage represents my growth into creating cross-platform, user-centered solutions with a strong focus on performance, design, and usability."
      />
      
      </div>
    </>
  );
}

export default StoryCard;
