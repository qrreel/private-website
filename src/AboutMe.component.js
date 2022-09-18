import React from "react"
import styled from "styled-components";

const AboutMeContainer = styled.section`
font-size: .5em;
margin: .5em;
padding: 1em .5em 1em 2em;
border-left: 15px solid #aab347;
border-radius: 1%;
position: relative;

#about-me__hidden-tittle {
    position: absolute;
    opacity: 0;
    top: 0;
    right: 0;
    font-size: 2.5em;
    transition: 0.2s;
}

:hover #about-me__hidden-tittle {
    top: -.3em;
    opacity: .2;
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

:hover #about-me__read-more-btn {
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

export function AboutMe() { 
    return (
        <AboutMeContainer>
            <span id="about-me__hidden-tittle">about me</span>
            <p>
                My name is Rafał and I am a self-taught developer.<br />
                Live in Gdańsk, Poland.<br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt ullam itaque! Consequuntur, asperiores modi! (...)
            </p>
            <div id="about-me__read-more-btn">read more</div>
        </AboutMeContainer>
    )
}