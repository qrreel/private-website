import styled from "styled-components";

const PortfolioContainer = styled.section`
font-size: .3em;
width: 50%;
margin: 0em auto;
padding: 2em;
border: 3px solid rgba(200, 200, 200, .1);

ul {
    list-style-type: none;
    line-height: .9em;
    letter-spacing: .2em;
    text-align: right;
}
`;

export const Skills = () => {
    return(
        <>
            <PortfolioContainer>
                <ul>
                    <li>HTML ★★★★★</li>
                    <li>CSS ★★★★★</li>
                    <li>JS ★★★★★</li>
                    <li>Python ★★★★★</li>
                    <li>GIT ★★★★★</li>
                    <li>NPM ★★★★★</li>
                    <li>Rest Api ★★★★★</li>
                    <li>React ★★★★★</li>
                </ul>
            </PortfolioContainer>
        </>
    )
};
