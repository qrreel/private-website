import React, { useEffect, useState } from "react";
import "../style/about-me.css";

export function AboutMe(props) {
  const [aboutMe, setAboutMe] = useState(false);

  const hideStyle = { display: aboutMe ? "none" : "inline-block" };
  const hideStyleH1 = {
    fontSize: props.width > props.minWidth ? "10rem" : "6rem",
    display: aboutMe ? "none" : "block",
  };

  return (
    <>
      <h1 style={hideStyleH1}>welcome</h1>
      <section id="about-me">
        <h4 id="about-me__hidden-tittle" style={hideStyle}>
          about me
        </h4>
        <p>
          My name is Rafał and I am a self-taught developer.
          <br />
          Live in Gdańsk, Poland. <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          nesciunt ullam itaque! Consequuntur, asperiores modi!
          <span style={hideStyle}>(...)</span>
        </p>
        <p style={{ display: !aboutMe ? "none" : "block" }}>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          nesciunt ullam itaque! Consequuntur, asperiores modi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quasi nesciunt ullam
          itaque! Consequuntur, asperiores modi!
        </p>
        <button
          id="about-me__read-more-btn"
          onClick={() => setAboutMe((prevState) => !prevState)}
        >
          {aboutMe ? "back" : "read more"}
        </button>
      </section>
    </>
  );
}
