import styled from "styled-components";
import { Projects } from "./Projects.component";
import { Skills } from "./Skills.component";

const PortfolioContainer = styled.div`
h4 {
    font-size: 1.25em;
    text-align: right;
    opacity: .2;
    font-weight: 100;
}
`;

export const Portfolio = () => {
    return(
        <>
            <PortfolioContainer>
                <h4>projects & skills</h4>
                <Projects />
                <Skills />
            </PortfolioContainer>
        </>
    )
};
