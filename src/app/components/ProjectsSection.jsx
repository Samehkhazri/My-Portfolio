"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
{
  id: 1,
  title: "Windybank.com",
  description: "Developed an online banking solution for individuals and small businesses with personalized dashboards and inventory management.",
  image: "/images/projects/windybank.png",
  tag: ["All", "Web"],
  gitUrl: "/",
  previewUrl: "/",
},

{
  id: 2,
  title: "CarFancy",
  description: "Developed a website for buying modernized car accessories. Worked on the front end using React, Bootstrap, and CSS, and ensured project completion within deadlines.",
  image: "/images/projects/carfancy.png",
  tag: ["All", "Web"],
  gitUrl: "/",
  previewUrl: "/",
},

{
  id: 3,
  title: "Housify",
  description: "Developed a website for buying and selling real estate. Designed the admin dashboard, developed the Show All page with Flask, and worked on the backend.",
  image: "/images/projects/housify.png",
  tag: ["All", "Web"],
  gitUrl: "/",
  previewUrl: "/",
},
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
