import "../style/skills.css";
import { skills } from "../data/data-skills";

export function Skills() {
  const lightStar = {
    opacity: 0.9,
  };

  const darkStar = {
    opacity: 0.15,
  };

  function level(range) {
    let levelArray = [];

    for (let i = 0; i < 5; i++) {
      levelArray.push(
        <span key={i} style={i < range ? lightStar : darkStar}>
          ★
        </span>
      );
    }
    return levelArray;
  }

  const skill = skills.map((skill) => (
    <li key={skill.name}>
      {skill.name}
      <span className="skills-container__skill-level">
        {level(skill.range)}
      </span>
    </li>
  ));

  return (
    <section id="skills-container">
      <h4 id="skills-container__title">skills</h4>
      <ul>{skill}</ul>
    </section>
  );
}
