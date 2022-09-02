import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './GlobalStyle.component';
import { Index } from './Index.component';

const Page = () => {
    return (
        <>
            <GlobalStyle />
            <Index />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);