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
    outline: 3px solid grey;
}

#project-container__title {
    margin: 1em;
}

#project-container__description {
    position: absolute;
    height: 5em;
    width: 100%;
    bottom: 0;
    padding: 1em;
    background: linear-gradient(transparent, 70%, rgba(200, 200, 200, .5));
    font-size: .7em;
    transform: translateY(100px);
    visibility: hidden;
    transition: .3s .3s;
    opacity: 0;
}

#project-container:hover #project-container__description {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
}


`;

export const Projects = () => {
    return(
        <>
            <PortfolioContainer>
                <div id="project-container">
                    <div id="project-container__title">
                        title
                    </div>
                    <div id="project-container__description">
                        description
                    </div>
                </div>
            </PortfolioContainer>
        </>
    )
};
