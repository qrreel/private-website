import { projects } from "../data/data-projects";

import "../style/projects.css";

export const Projects = () => {
  const projectsArray = projects.map((project) => (
    <a href={project.src} target="blank">
      <div className="projects-container__project">{project.title}</div>
    </a>
  ));

  return (
    <section id="projects-container">
      <h4 id="projects-container__title">projects</h4>
      <div id="projects-container__projects">{projectsArray}</div>
    </section>
  );
};
