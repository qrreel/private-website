import { projects } from "../data/data-projects";

import "../style/projects.css";

export const Projects = () => {
  const projectsArray = projects.map((project) => (
    <div key={project.id} className="projects-container__project">
      <div className="project-container__project-title">{project.title}</div>
      <p className="project-container__project-description">
        {project.description}
      </p>
      <br />
      <div className="project-container__icon-container">
        <div>
          {project.uses.map((logo) => (
            <img
              key={logo.key}
              className="icon-container__logo"
              src={logo.img}
            />
          ))}
        </div>
        <div>
          {project.sources.map((source) => (
            <a href={source.src} key={source.src} target="blank">
              <img src={source.img} className="icon-container__source" />
            </a>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <section id="projects-container">
      <button>prev</button>
      {projectsArray}
      <button>next</button>
    </section>
  );
};
