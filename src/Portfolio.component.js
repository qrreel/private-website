import styled from "styled-components";

const PortfolioContainer = styled.section`
position: relative;

h4 {
    font-size: 1.25em;
    text-align: right;
    opacity: .2;
    font-weight: 100;
}

#projects-container {
    position: relative;
    display: grid;
    place-items: center;
    margin: .5em;
    padding: 1em 2em 1em .5em;
    border-right: 15px solid #b147b3;
    border-radius: 15px;
    font-size: .5em;
}

div:first-child {
    background-color: rgba(200, 200, 200, .1);
    width: 100%;
    height: 7em;
}

#skills-container {
    font-size: .3em;
    width: 50%;
    // margin: 0em auto;
    padding: 2em;
    position: relative;
    border-top: 3px solid rgba(200, 200, 200, .1);
    border-right: 3px solid rgba(200, 200, 200, .1);
}

ul {
    list-style-type: none;
    line-height: .9em;
}
`;

export const Portfolio = () => {
    return(
        <>
            <PortfolioContainer>
                <h4>projects & skills</h4>
                <section id="projects-container">
                    <div>
                        <div>
                            title
                        </div>
                        <div>
                            description
                        </div>
                    </div>
                </section>
                <section id="skills-container">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>Python</li>
                        <li>GIT</li>
                        <li>NPM</li>
                        <li>Rest Api</li>
                        <li>React</li>
                    </ul>
                </section>
            </PortfolioContainer>
        </>
    )
};
