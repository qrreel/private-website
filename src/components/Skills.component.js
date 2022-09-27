import { useEffect, useState } from "react";
import { skills, levelOfExperience } from "../data/data-skills";
import "../style/skills.css";

export function Skills() {
  const SKILLS_BASE = "skills";
  const [experienceLevel, setExperienceLevel] = useState(SKILLS_BASE);
  const [showIn, setShowIn] = useState(true);

  const LIGHT_STAR = { opacity: 0.9 };
  const DARK_STAR = { opacity: 0.15 };
  const SHOW_IN_DELAY = 100;

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

  function changeSkillTitle() {
    setShowIn(false);
    setTimeout(() => {
      setShowIn(true);
    }, SHOW_IN_DELAY);
  }

  useEffect(changeSkillTitle, [experienceLevel]);

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
      <div
        id="skills-container__title-container"
        className={showIn ? "changeTitle" : null}
      >
        <h4 id="skills-container__title" style={showIn ? null : { opacity: 0 }}>
          {experienceLevel}
        </h4>
      </div>
      <ul onMouseOut={() => setExperienceLevel(SKILLS_BASE)}>{skill}</ul>
    </section>
  );
}
