import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --primaryColor: #1a2838
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        // outline: 1px solid red;
    }

    body {
        display: grid;
        place-items: center;
        min-height: 100vh;
        background: linear-gradient(45deg, #000, 60%, var(--primaryColor)) no-repeat;
        color: white;
        font-family: 'Alumni Sans Pinstripe', sans-serif;
    }
    
    ul {
        list-style-type: none;
        line-height: .9em;
    }
`;
