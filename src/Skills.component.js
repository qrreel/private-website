import react from "react";
import styled, { withTheme } from "styled-components";
import { skills } from "./data-skills";

const PortfolioContainer = styled.section`
font-size: .3em;
width: 100%;
margin: .5em;
padding: 1em;
cursor: default;
border-right: 10px solid #b147b3;
border-radius: 1%;

ul {
    list-style-type: none;
    line-height: 1em;
    text-align: right;
    letter-spacing: .1em;
}

ul:hover li:not(:hover) {
    opacity: 0.4;
    transition: all .15s;
}

.skill-container__skill-level {
    letter-spacing: .1em;
    margin: 0 1em;
}
`;

export function Skills() {

    const lightStar = {
        opacity: .9
    }

    const darkStar = {
        opacity: .15
    }

    function level(range) {
        let levelArray = []

        for(let i = 0; i < 5; i++) {
            levelArray.push(<span key={i} style={ i < range ? lightStar : darkStar }>★</span>)
        }
        return levelArray
    }
    

    const skill = skills.map(skill =>
        <li key={ skill.name }>{ skill.name }
            <span className="skill-container__skill-level">
                { level(skill.range) }
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
