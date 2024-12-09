// src/hooks/useCustomHook.js
import React, { useEffect } from "react";
import "../secondsection/secondsection.css";
import iconimage from "../secondsection/programmer-working-isometric-style.png";
import cvdocument from "./cv.pdf";

export default function SecondView() {
  useEffect(() => {
    const startCounterAnimation = () => {
      const counter = document.querySelector(".counter");
      if (counter) {
        console.log("ok");
        counter.classList.remove(".counter");
        counter.classList.add("animate-counter");
      }
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounterAnimation();
            observer.unobserve(entry.target); // Stop observing after the counter is triggered
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the last section is visible
      }
    );

    const target = document.querySelector(".Counter-section");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  return (
    <div className="secondsection">
      <section className="leftimage">
        <img src={iconimage} alt="iconimage" />
      </section>
      <section className="rightcontent">
        <main>
          <h2>
            let’s <br /> introduce about <br />{" "}
            <div>
              <h2>myself</h2>
            </div>
          </h2>
          <p>
            {" "}
            " I am a Full-Stack Developer skilled in the MERN stack (MongoDB,
            Express.js, React, Node.js). Passionate about building innovative
            web applications, I specialize in creating scalable solutions and
            managing projects from start to finish. With expertise in front-end,
            back-end, and database management, I deliver high-quality, robust
            applications. I am eager to contribute to a dynamic team and develop
            cutting-edge software solutions.""
          </p>
          <samp className="Counter-section">
            <div>
              <div className="counter" id="counter">
                0 <br />1 <br /> 2 <br />3 <br /> 4 <br /> 5 <br />
              </div>
            </div>{" "}
            &nbsp; + project done
          </samp>
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
