import React, { useRef, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { Contact } from "./components/Contact.component";
import { AboutMe } from "./components/AboutMe.component";
import { Skills } from "./components/Skills.component";
import { Projects } from "./components/Projects.component";

import "./style/main.css";
import "./style/top-container.css";

function App() {
  const ref = useRef();
  const [width, setWidth] = useState();

  let movementTimer;
  const MIN_WIDTH = 500;

  function getNewWidth() {
    setWidth(ref.current.offsetWidth);
  }

  window.addEventListener("resize", () => {
    movementTimer = setInterval(getNewWidth(), 100);
    clearInterval(movementTimer);
  });

  useLayoutEffect(() => getNewWidth());

  return (
    <div style={{ fontSize: width > MIN_WIDTH ? "2rem" : "1.7rem" }}>
      <div id="background-arrow">
        <div id="background-arrow__base">
          <div id="background-arrow__bottom"></div>
        </div>
      </div>
      <div id="top-container">
        <div id="top-container__left" ref={ref}>
          <Contact />
          <AboutMe width={width} minWidth={MIN_WIDTH} />
        </div>
        <div id="top-container__right">
          <Skills />
        </div>
      </div>
      <Projects />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
