import { useState } from "react";
import { skills, levelOfExperience } from "../data/data-skills";
import "../style/skills.css";

export function Skills() {
  const SKILLS_BASE = "skills";
  const [experienceLevel, setExperienceLevel] = useState(SKILLS_BASE);

  const LIGHT_STAR = { opacity: 0.9 };
  const DARK_STAR = { opacity: 0.15 };

  function setLevel(lvl) {
    let levelArray = [];

    for (let i = 0; i < 5; i++) {
      levelArray.push(
        <span key={i} style={i < lvl ? LIGHT_STAR : DARK_STAR}>
          ★
        </span>
      );
    }
    return levelArray;
  }

  const skill = skills.map((skill) => (
    <li
      key={skill.name}
      onMouseOver={() => setExperienceLevel(levelOfExperience[skill.level])}
    >
      {skill.name}
      <span className="skills-container__skill-level">
        {setLevel(skill.level)}
      </span>
    </li>
  ));

  return (
    <section id="skills-container">
      <h4 id="skills-container__title">{experienceLevel}</h4>
      <ul onMouseOut={() => setExperienceLevel(SKILLS_BASE)}>{skill}</ul>
    </section>
  );
}
