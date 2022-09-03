import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --primaryColor: #1a2838
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        // outline: 1px solid rgba(255, 255, 255, .1);
    }

    *::selection {
        color: #04b8c4;
        background: rgba(200, 200, 200, .1);
    }

    body {
        display: grid;
        place-items: center;
        min-height: 100vh;
        background: linear-gradient(45deg, #000, 60%, var(--primaryColor)) no-repeat;
        color: white;
        font-family: 'Alumni Sans Pinstripe', sans-serif;
    }

    #root {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        font-size: 4rem;
        margin: .5em 1em;
        gap: 1em;
    }
`;
