import styled from "styled-components";
import { Contact } from "./Contact.component";
import { AboutMe } from "./AboutMe.component";

const WelcomeContainer = styled.div`
position: relative;
margin-bottom: 1em;

h1 {
    font-size: 2.5em;
    margin-top: 3rem;
    text-align: right;
    overflow: hidden;
}
`;

export const Welcome = () => {
    return(
        <WelcomeContainer>
            <h1>welcome</h1>
            <Contact />
            <AboutMe />
        </WelcomeContainer>
    )
};
