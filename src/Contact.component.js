import { Component } from "react";
import styled from "styled-components";
import GitHubLogo from "./img/GitHub-Mark-Light-32px.png"
import LinkedInLogo from "./img/PinClipart.com_graduation-designs-clip-art_1198440.png"
import MailLogo from "./img/Daco_532333.png"

const ContactContainer = styled.section`
display: flex;
align-items: center;
font-size: .5em;
gap: .5em;
margin: 0;
position: absolute;
right: 0;
top: 0em;
text-shadow: 1px 1px 1px black;

#contact-container {
    position: relative;
}

#contact-container::before {
    position: absolute;
    content: '';
    top: .8em;
    right: -.3em;
    width: 20em;
    height: .2em;
    clip-path: polygon(0 0, 100% 0%, calc(100% - .2em) 100%, 0% 100%);
    background-color: #46e4f0;
    z-index: -2;
}

.contact-container__icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: .1s ease-out;
}

.contact-container__icon:hover {
    cursor: pointer;
    background-color: #04b8c4;
    box-shadow: 0 0 5px 5px #04b8c4;
}
`;

export function Contact() {
    const links = [
        { name: 'Mail', src: MailLogo, anchore: "mailto:rafalwas88@gmail.com" },
        { name: 'LinkedIn', src: LinkedInLogo, anchore: "https://www.linkedin.com/in/rafa%C5%82-w%C4%85s-5b34a0248/" },
        { name: 'GitHub', src: GitHubLogo, anchore: "https://github.com/qrreel" }
    ]

    const contact = links.map(link =>
        <a href={ link.anchore } key={ link.name } target="blank">
            <img src={ link.src } className="contact-container__icon" alt={ link.name } /> 
        </a>  
    )

    return(
        <ContactContainer>
            <div id="contact-container">contact</div>
            { contact }
        </ContactContainer>
    )
};
