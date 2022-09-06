import { Component } from "react";
import styled from "styled-components";

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
    opacity: .3;
}
`;

export class Skills extends Component {
    state = {
        skills: [
            { name: 'HTML', range: 4 },
            { name: 'CSS', range: 4 },
            { name: 'SCSS', range: 1 },
            { name: 'JavaScript', range: 3 },
            { name: 'TypeScript', range: 1 },
            { name: 'jQuery', range: 1 },
            { name: 'React', range: 1 },
            { name: 'Python', range: 3 },
            { name: 'Jest', range: 1 },
            { name: 'Rest Api', range: 2 },
            { name: 'Npm', range: 2 },
            { name: 'Git', range: 3 }
        ]
    }

    render() {
        return(
            <PortfolioContainer>
                <ul>
                    {this.state.skills.map(skill => (
                        <li key={ skill.name }>
                            { skill.name }
                            <span className="skill-container__skill-level">
                                ★★★★★
                            </span>
                        </li>
                    ))}
                </ul>
            </PortfolioContainer>
        )
    }
};
