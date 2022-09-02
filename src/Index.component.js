import styled from "styled-components";
import GitHubLogo from "./img/GitHub-Mark-Light-32px.png"
import LinkedInLogo from "./img/PinClipart.com_graduation-designs-clip-art_1198440.png"
import MailLogo from "./img/Daco_532333.png"

const IndexContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
margin: 1em 3em;

& section {
    position: relative;
    margin: .5em 1em;
    font-size: 4rem;
}

& #welcome-container {
    margin-top: 1em;
}

& h1 {
    font-size: 2.5em;
    overflow: hidden;
}

& #contact {
    display: flex;
    align-items: center;
    font-size: .5em;
    gap: .5em;
    margin: 0;
    position: absolute;
    right: 0;
    top: -1.4em;
    text-shadow: 1px 1px 1px black; 
}

img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: .1s ease-out;
}

& img:hover {
    cursor: pointer;
    background-color: #04b8c4;
    box-shadow: 0 0 5px 5px #04b8c4;
}

& #contact::before {
    position: absolute;
    content: '';
    top: .8em;
    right: 4.2em;
    width: 20em;
    height: .2em;
    clip-path: polygon(0 0, 100% 0%, calc(100% - .2em) 100%, 0% 100%);
    background-color: #46e4f0;
    z-index: -2;
}

& p {
    font-size: .5em;
    margin: .5em;
    padding: 1em .5em 1em 2em;
    text-align: left;
}

& :not(p) {
    text-align: right;
}

& #welcome-container__intro {
    border-left: 15px solid #aab347;
    border-radius: 2%;
    position: relative;
    transition: 0.3s;
}

& #welcome-container__intro:hover #welcome-container__about-me {
    top: -.3em;
    opacity: .1;
}

& #welcome-container__intro:hover #welcome-container__read-more-btn {
    bottom: -1.75em;
    opacity: .7;
}

& #welcome-container__about-me {
    position: absolute;
    opacity: 0;
    top: 0;
    right: 0;
    font-weight: bold;
    font-size: 2.5em;
    transition: 0.2s;
}

& #welcome-container__read-more-btn {
    position: absolute;
    opacity: 0;
    padding: .2em .7em;
    bottom: -1em;
    right: 0;
    font-size: 1em;
    border: 3px solid;
    transition: 0.2s;
}

& #welcome-container__read-more-btn:hover {
    cursor: pointer;
    font-weight: bold;
    background-color: white;
    color: var(--primaryColor);
    opacity: 1;
}

& #portfolio-container__portfolio {
    font-size: .5em;
    border-left: 15px solid #b147b3;
    border-radius: 2%;
}

& #portfolio-container__skills {
    font-size: .3em;
    width: 80%;
    margin: 2em auto;
    padding: 2em;
}

& li {
    display: flex;
    align-items: center;
} 

& .skill-range {
    position: relative;
    margin: 0 1em;
    height: .2em;
    width: 10em;
    background: linear-gradient(90deg, transparent, white);
    border-radius: 2px;
}

& .skill-range::before {
    position: absolute;
    margin: 0 1em;
    height: .2em;
    width: 10em;
    border-radius: 2px;
    z-index: 1;
}
`;

export const Index = () => {
    return(
        <>
            <IndexContainer>
                <section id="welcome-container">
                    <div id="contact">contact
                        <img src={MailLogo} id="Mail_logo" alt="Mail"/>
                        <img src={LinkedInLogo} id="LinkedIn_logo" alt="LinkedIn"/>
                        <img src={GitHubLogo} id="GitHub_logo" alt="GitHub" />
                    </div> 
                    <h1>welcome</h1>
                    <p id="welcome-container__intro">
                        <span id="welcome-container__about-me">about me</span>
                        my name is rafał and i am a self-taught developer.<br />
                        live in gdańsk, poland.<br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt ullam itaque! Consequuntur, asperiores modi!
                        <div id="welcome-container__read-more-btn">Read more</div>
                    </p>
                </section>
                <section id="portfolio-container">
                    <h4>projects & skills</h4>
                    <p id="portfolio-container__portfolio">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt ullam itaque! Consequuntur, asperiores modi!
                    </p>
                    <div id="portfolio-container__skills">
                        <ul>
                            <li><div className="skill-range"></div>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>Python</li>
                            <li>GIT</li>
                            <li>NPM</li>
                            <li>Rest Api</li>
                            <li>React</li>
                        </ul>
                    </div>
                </section>
            </IndexContainer>
        </>
    )
};
