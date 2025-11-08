// import React,{useEffect,useState,useRef} from "react";
import "../../assets/styles/mainfront.css";
import Header from "../../components/header/header";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../ThemeContext";
import cvdocument from "../../assets/pdf/resume.pdf";
import Contact from "../contact/useContactpart";
import Footer from "../footer/footer";
import Projectwork from "./projectwork";
import aboutframe_1 from "../../assets/image/aboutframe_1.jpg";
import aboutframe_2 from "../../assets/image/aboutframe_2.jpg";

export default function useMainpage() {
  const { listcolor, frondloading } = useTheme();
  const [changeWords, setChangeWords] = useState(true);

  let containercolor = listcolor.frontcontainer;
  let fontColor;
  if (listcolor.settheme === "dark") {
    fontColor = "black";
  } else {
    fontColor = "white";
  }
  const typing_Style = useRef();
  useEffect(() => {
    function MakeTypeEffect() {
      // console.log(typing_Style.current.clientWidth)
      const widthofContent = typing_Style.current.clientWidth;
      typing_Style.current.style.animation = "changeWidth 5s linear";

      typing_Style.current.style.setProperty(
        "--widthoftypingContent",
        `${widthofContent}px`
      );
      setTimeout(() => {
        if (changeWords === true) {
          setChangeWords(false);
        } else {
          setChangeWords(true);
        }
      }, [2500]);
      setTimeout(() => {
        typing_Style.current.style.animation = "none";
      }, [5000]);
    }
    const interval = setInterval(MakeTypeEffect, [8000]);
    return () => clearInterval(interval);
  }, [changeWords, typing_Style]);

  useEffect(() => {
    const listColor = [
      "#00ccff",
      "#ff001e",
      "#ff6600",
      "#0000ff",
      "#00ff95",
      "#aa00ff",
      "#008000",
      "#1e90ff",
      "#800000",
      "#ff00a6",
    ];

    const skillText = document.querySelectorAll(".skillcolor");

    function give_ColorToText() {
      skillText.forEach((item) => {
        const pickColor = Math.floor(Math.random() * listColor.length);
        item.style.color = listColor[pickColor];
      });
    }

    give_ColorToText();
  }, []);

  return (
    <div className="frontmain">
      <Header />
      <main>
        <div className="homeView">
          <section className="leftfront">
            <h1>
              Hi, I'm <span>Asfar</span>
            </h1>
            <div className="typing_effect" ref={typing_Style}>
              {changeWords ? (
                <h4>
                  Mern Stack Developer{" "}
                  <span style={{ backgroundColor: listcolor.fontcolor }}></span>
                </h4>
              ) : (
                <h4>
                  Full Stack Developer{" "}
                  <span style={{ backgroundColor: listcolor.fontcolor }}></span>
                </h4>
              )}
            </div>
            <p>
              I create user-focused web applications that merge performance and
              simplicity through thoughtful design. Every project I build
              reflects a passion for modern development and meaningful user
              experiences.
            </p>
            <div className="info-me">
              <span>
                <i
                  style={{ color: listcolor.fontcolor }}
                  className="fa-solid fa-location-dot"
                ></i>
                Based in India
              </span>
              <span>
                <i
                  style={{ color: listcolor.fontcolor }}
                  className="fa-solid fa-briefcase"
                ></i>{" "}
                Available Now
              </span>
            </div>
            <div className="buttons_home">
              <a
                href="#contactsection"
                className="btnhome primary"
                style={{
                  color: fontColor,
                  backgroundColor: listcolor.fontcolor,
                }}
              >
                Hire Me
              </a>
              <a
                href={cvdocument}
                download
                className="btnhome secondary"
                style={{
                  color: listcolor.fontcolor,
                  border: `2px solid ${listcolor.fontcolor}`,
                }}
              >
                Download CV
              </a>
            </div>
          </section>
          <section className="rightfront">
            <div className="container">
              <div className="first-div"></div>
              <div
                className="second-div"
                style={{ backgroundColor: containercolor }}
              ></div>
            </div>
          </section>
        </div>
        {/* About Me Section */}
        <section className="about-me" id="about-me">
          <div className="about-text-me">
            <h3>About Me</h3>
            <h2>Building Meaningful Digital Experiences</h2>
            <p>
              I’m a Full-Stack Developer skilled in the MERN stack (MongoDB,
              Express.js, React, Node.js). I specialize in building scalable web
              applications, managing both front-end and back-end systems from
              start to finish. I'm passionate about creating clean, robust, and
              efficient digital solutions.
            </p>

            <div className="drive-title">What i know?</div>

            <div className="cards-skill">
              {/* Front-End */}
              <div className="card-skill">
                <div style={{ border: `1.5px solid ${listcolor.fontcolor}` }}>
                  <h3>Front-End</h3>
                  <p>
                    <span className="skillcolor">HTML5 </span>/
                    <span className="skillcolor">React </span>/
                    <span className="skillcolor">ThreeJS </span>/
                    <span className="skillcolor">Redux Toolkit </span>/
                    <span className="skillcolor">NextJs </span>/
                    <span className="skillcolor">GSAP </span>/
                    <span className="skillcolor">JavaScript </span>/
                    <span className="skillcolor">TypeScript </span>/
                    <span className="skillcolor">React Native </span>/
                    <span className="skillcolor">Puppeteer </span>/
                    <span className="skillcolor">Enzyme </span>
                  </p>
                </div>
              </div>

              {/* Style */}
              <div className="card-skill">
                <aside className={`link-card-${listcolor.settheme}`}>
                  <a
                    href="https://github.com/Asfar-07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://github.com/Asfar-07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </aside>
                <div style={{ border: `1.5px solid ${listcolor.fontcolor}` }}>
                  <h3>Style</h3>
                  <p>
                    <span className="skillcolor">CSS </span>/
                    <span className="skillcolor">SASS </span>/
                    <span className="skillcolor">Bootstrap </span>/
                    <span className="skillcolor">Figma </span>/
                    <span className="skillcolor">MUI </span>/
                    <span className="skillcolor">Material UI </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-img">
            <img src={aboutframe_1} alt="Profile Illustration" />
          </div>
        </section>

        {/* Back-End Section */}
        <section
          className="about-me"
          id="about-me-back"
          style={{ flexDirection: "row-reverse" }}
        >
          <div className="about-text-me">
            <div className="cards-skill">
              {/* Back-End */}
              <div className="card-skill">
                <div style={{ border: `1.5px solid ${listcolor.fontcolor}` }}>
                  <h3>Back-end</h3>
                  <p>
                    <span className="skillcolor">ExpressJs </span>/
                    <span className="skillcolor">SpringBoot</span>/
                    <span className="skillcolor">Spring </span>/
                    <span className="skillcolor">Flask </span>/
                    <span className="skillcolor">MYSQL </span>/
                    <span className="skillcolor">MongoDB </span>/
                    <span className="skillcolor">RestAPI </span>/
                    <span className="skillcolor">SocketIO </span>/
                    <span className="skillcolor">Node </span>/
                    <span className="skillcolor">OOBS </span>/
                    <span className="skillcolor">Monolithic </span>/
                    <span className="skillcolor">Microservices</span>
                  </p>
                </div>
              </div>

              {/* Design */}
              <div className="card-skill" style={{ justifyContent: "start" }}>
                <div style={{ border: `1.5px solid ${listcolor.fontcolor}` }}>
                  <h3>Other</h3>
                  <p>
                    <span className="skillcolor">GitHub </span>/
                    <span className="skillcolor">Canva </span>/
                    <span className="skillcolor">PS </span>/
                    <span className="skillcolor">Word </span>/
                    <span className="skillcolor">PostMan </span>
                  </p>
                </div>
                <aside className={`link-card-${listcolor.settheme}`}>
                  <a
                    href="https://github.com/Asfar-07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://github.com/Asfar-07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </aside>
              </div>
            </div>
          </div>

          <div className="about-img">
            <img src={aboutframe_2} alt="Profile Illustration" />
          </div>
        </section>
        <Projectwork />
        <Contact loading={frondloading} />
      </main>
      <Footer />
    </div>
  );
}
