import "../style/projects.css";
import { projects } from "../data/data-projects";

export const Projects = () => {
  const array = projects.map((project) => (
    <div key={project.id} id="projects-container__project">
      <div id="project-container__project-title">{project.title}</div>
      <p id="project-container__project-description">{project.description}</p>
      <a href="#">GIT</a>
    </div>
  ));

  return (
    <section id="projects-container">
      <button>prev</button>
      {array}
      <button>next</button>
    </section>
  );
};
