import styled from "styled-components";
import GitHubLogo from "./img/GitHub-Mark-Light-32px.png"
import LinkedInLogo from "./img/PinClipart.com_graduation-designs-clip-art_1198440.png"
import MailLogo from "./img/Daco_532333.png"

const WelcomeContainer = styled.div`
position: relative;
margin-bottom: 1em;

h1 {
    font-size: 2.5em;
    margin-top: .2em;
    text-align: right;
    overflow: hidden;
}

#contact-container {
    display: flex;
    align-items: center;
    font-size: .5em;
    gap: .5em;
    margin: 0;
    position: absolute;
    right: 0;
    top: 0em;
    text-shadow: 1px 1px 1px black; 
}

#contact-container__letters {
    position: relative;
}

#contact-container__letters::before {
    position: absolute;
    content: '';
    top: .8em;
    right: -.3em;
    width: 15em;
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

#about-me {
    font-size: .5em;
    margin: .5em;
    padding: 1em .5em 1em 2em;
    border-left: 15px solid #aab347;
    border-radius: 15px;
    position: relative;
    transition: 0.3s;
}

#about-me__hidden-tittle {
    position: absolute;
    opacity: 0;
    top: 0;
    right: 0;
    // font-weight: bold;
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
                <section id="contact-container">
                    <div id="contact-container__letters">contact</div>
                    <img src={MailLogo} id="Mail_logo" alt="Mail" className="contact-container__icon" />
                    <img src={LinkedInLogo} id="LinkedIn_logo" alt="LinkedIn" className="contact-container__icon" />
                    <img src={GitHubLogo} id="GitHub_logo" alt="GitHub" className="contact-container__icon" />
                </section> 
                <h1>welcome</h1>
                <section id="about-me">
                    <span id="about-me__hidden-tittle">about me</span>
                    <p id="about-me__content">
                        My name is Rafał and I am a self-taught developer.<br />
                        Live in Gdańsk, Poland.<br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt ullam itaque! Consequuntur, asperiores modi!
                    </p>
                    <div id="about-me__read-more-btn">read more</div>
                </section>
            </WelcomeContainer>
        </>
    )
};
