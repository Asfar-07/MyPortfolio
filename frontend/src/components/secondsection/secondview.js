// src/hooks/useCustomHook.js
import React from "react";
import "../secondsection/secondsection.css";
import iconimage from "../secondsection/programmer-working-isometric-style.png";
import cvdocument from "./cv.pdf"
export default function secondview() {
  return (
    <div className="secondsection">
      <section className="leftimage">
        <img src={iconimage} alt="iconimage" />
      </section>
      <section className="rightcontent">
        <main>
          <h2>
            let’s <br /> introduce about <br /> <div><h2>myself</h2></div>
          </h2>
          <p>
            {" "}
            "My work showcases a range of web projects where I've applied
            creativity and technical skills to bring ideas to life, each project
            reflecting my commitment to quality and innovation."
          </p>
          <samp>+5 project done</samp>
          <div className="CV">
            <a href={cvdocument} download>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download CV
            </a>
          </div>
        </main>
      </section>
    </div>
  );
}
