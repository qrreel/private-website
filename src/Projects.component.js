import styled from "styled-components";

const ProjectsContainer = styled.div`
display: grid;
place-items: center;
height: 100vh;

& li {
    display: grid;
    place-items: end;
}
`;

export const Projects = () => {
    return(
        <>
            <ProjectsContainer>
                Projects
            </ProjectsContainer>
        </>
    )
};