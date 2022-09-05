import styled from "styled-components";
import { Contact } from "./Contact.component";

const WelcomeContainer = styled.div`
position: relative;
margin-bottom: 1em;

h1 {
    font-size: 2.5em;
    margin-top: .2em;
    text-align: right;
    overflow: hidden;
}

#about-me {
    font-size: .5em;
    margin: .5em;
    padding: 1em .5em 1em 2em;
    border-left: 15px solid #aab347;
    border-radius: 5px;
    position: relative;
    transition: 0.3s;
}

#about-me__hidden-tittle {
    position: absolute;
    opacity: 0;
    top: 0;
    right: 0;
    font-size: 2.5em;
    transition: 0.2s;
}

#about-me:hover #about-me__hidden-tittle {
    top: -.3em;
    opacity: .1;
}

#about-me__read-more-btn {
    position: absolute;
    opacity: 0;
    padding: .2em 1em;
    bottom: -1em;
    right: 0;
    border: 3px solid;
    transition: 0.2s;
}

#about-me:hover #about-me__read-more-btn {
    bottom: -1.75em;
    opacity: .7;
}

#about-me__read-more-btn:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: white;
    color: var(--primaryColor);
    opacity: 1;
}
`;

export const Welcome = () => {
    return(
        <>
            <WelcomeContainer>
                <Contact />
                <h1>welcome</h1>
                <section id="about-me">
                    <span id="about-me__hidden-tittle">about me</span>
                    <p id="about-me__content">
                        My name is Rafał and I am a self-taught developer.<br />
                        Live in Gdańsk, Poland.<br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt ullam itaque! Consequuntur, asperiores modi! (...)
                    </p>
                    <div id="about-me__read-more-btn">read more</div>
                </section>
            </WelcomeContainer>
        </>
    )
};
