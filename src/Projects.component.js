import styled from "styled-components";

const PortfolioContainer = styled.section`
display: grid;
place-items: center;
margin: .5em;
padding: 1em;
border-right: 15px solid #b147b3;
border-radius: 15px;
font-size: .5em;

#project-container {
    position: relative;
    width: 100%;
    height: 7em;
    overflow: hidden;
}

#project-container__title {
    position: absolute;
    width: 100%;
    padding: .5em 1em;
    bottom: 0;
    text-align: right;
    font-weight: bold;
}

#project-container__description {
    position: absolute;
    height: 5em;
    width: 100%;
    bottom: 0;
    padding: 1em;
    background: linear-gradient(transparent, 70%, var(--primaryColor));
    font-size: .7em;
    transform: translateY(100px);
    visibility: hidden;
    transition: .3s .1s;
    opacity: 0;
}

#project-container:hover #project-container__title {
    animation: projectTitleOutIn .4s forwards;
}

#project-container:hover #project-container__description {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
}

@keyframes projectTitleOutIn {
0% {
    transform: translate(0, 0);
    opacity: 1;
    text-align: right;
}
49% {
    transform: translate(100%, 0);
    opacity: 0;
    text-align: right;
}
50% {
    transform: translate(-100%, -200%);
    opacity: 0;
    text-align: left;
}
100% {
    transform: translate(0, -200%);
    opacity: 1;
    text-align: left;
}
}
`;

export const Projects = () => {
    return(
        <PortfolioContainer>
            <div id="project-container">
                <div id="project-container__title">
                    Daily planner
                </div>
                <div id="project-container__description">
                    description
                </div>
            </div>
        </PortfolioContainer>
    )
};
