import React, { useRef, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { Contact } from "./components/Contact.component";
import { AboutMe } from "./components/AboutMe.component";
import { Skills } from "./components/Skills.component";
import { Projects } from "./components/Projects.component";
import { BackgroundArrow } from "./components/Background.component";

import "./style/main.css";
import "./style/top-container.css";

function App() {
  const ref = useRef();
  const [width, setWidth] = useState();

  let movement_timer;

  function getNewWidth() {
    setWidth(ref.current.offsetWidth);
  }

  window.addEventListener("resize", () => {
    movement_timer = setInterval(getNewWidth(), 100);
    clearInterval(movement_timer);
  });

  useLayoutEffect(() => getNewWidth());
  return (
    <>
      <BackgroundArrow />

      <div
        id="top-container"
        style={{ fontSize: width > 500 ? "2rem" : "1.7rem" }}
      >
        <div id="top-container__left" ref={ref}>
          <Contact />
          <h1 style={{ fontSize: width > 500 ? "10rem" : "5rem" }}>welcome</h1>
          <AboutMe />
        </div>
        <div id="top-container__right">
          <Skills />
        </div>
      </div>
      <Projects />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
