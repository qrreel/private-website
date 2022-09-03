import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './IndexStyle.component';
import { Welcome } from './Welcome.component';
import { Portfolio } from './Portfolio.component';

const Page = () => {
    return (
        <>
            <GlobalStyle />
            <Welcome />
            <Portfolio />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);