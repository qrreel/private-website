import styled from "styled-components";
import { Projects } from "./Projects.component";
import { Skills } from "./Skills.component";

const PortfolioContainer = styled.div`
display: grid;
place-items: start;
margin: 1em;

h4 {
    font-size: 1.25em;
    text-align: right;
    opacity: .2;
    font-weight: 100;
}
`;

export const Portfolio = () => {
    return(
        <PortfolioContainer>
            {/* <h4>skills</h4> */}
            <Skills />
            {/* <Projects /> */}
        </PortfolioContainer>
    )
};
