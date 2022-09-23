import React from "react";
import "../style/about-me.css";

export function AboutMe() {
  return (
    <section id="about-me">
      <h4 id="about-me__hidden-tittle">about me</h4>
      <p>
        My name is Rafał and I am a self-taught developer.
        <br />
        Live in Gdańsk, Poland.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt
        ullam itaque! Consequuntur, asperiores modi! (...)
      </p>
      <button id="about-me__read-more-btn">read more</button>
    </section>
  );
}
