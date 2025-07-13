import React from "react";
import Header from "../components/header/header";
import "./About.css";
import Skills from "./MySkills";
import Footer from "../pages/footer/footer";
export default function About() {
  return (
    <div className="Aboutme">
      {/* <div className="space_animation">
        <div className="space_man"></div>
        <div className="spacedoor"></div>
      </div> */}
      <Header />
      <main>
        <section>
          <h1 className="Mainhadingskill">
            My Portfolio of Creative Web<br></br> Development Projects
          </h1>
          <p className="subhadingskill">
            Showcasing innovative projects built with cutting-edge technologies,
            blending<br></br> creativity with functionality and performance.
          </p>
          <div className="projects">
            <div>
              <section className="View-project">
                <video autoPlay muted loop playsInline width="100%">
                  <source src="/project1.mp4" type="video/mp4" />
                </video>
              </section>
              <section className="left-s-project">
                <article>
                  <h2>Bit Lyv</h2>
                  <h3>This is my first big python(flask) project</h3>
                  <p>
                    A full-stack platform enabling developers to create,
                    version, and share modular CSS/JS libraries with unique
                    CDN-style URLs. Built an interactive frontend with React.js,
                    Three.js (3D visualizations), and GSAP for smooth
                    animations, offering a modern UI/UX.
                  </p>
                  <div>
                    <a href="https://github.com/Asfar-07" target="_black">
                      Learn more<i className="fa-solid fa-arrow-down-long"></i>
                    </a>
                    <samp></samp>
                  </div>
                </article>
              </section>
            </div>
          </div>
          <div className="gitbutton">
            <a href="https://github.com/Asfar-07" target="_black">
              more github
            </a>
          </div>
        </section>
      </main>
      <Skills />
      <Footer />
    </div>
  );
}
