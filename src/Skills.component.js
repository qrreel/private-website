import react from "react";
import styled from "styled-components";
import { skills } from "./data-skills";

const PortfolioContainer = styled.section`
font-size: .3em;
width: 50%;
margin: 0em auto;
padding: 2em;

ul {
    list-style-type: none;
    line-height: .9em;
    text-align: right;
}
.skill-container__skill-level {
    letter-spacing: .2em;
    margin: 0 1em;
    opacity: .2;
}
`;

export function Skills() {

    const skill = skills.map(skill =>
        <li key={ skill.name }>{ skill.name }
            <span className="skill-container__skill-level">
                ★★★★★
            </span>
        </li>
    )

    return(
        <PortfolioContainer>
            <ul>
                { skill }
            </ul>
        </PortfolioContainer>
    )
};
