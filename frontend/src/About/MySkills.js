import React from "react";
import "./skills.css";
import workicon from "./Projecticon.png";
import Skillicon from "./Skillicon.png";
import Achievement from "./Achievement.png";
import { useTheme } from "../ThemeContext";
import backimage from "./FrameDark.png";
import backimage2 from "./FrameLight.png";
import SmallSpinner from "../loadingscreen/SmallLoading"

const Skills = () => {
  const { listcolor } = useTheme();
  let bordercolor;
  let backgroundImageStyle;
  if (listcolor.settheme === "dark") {
    bordercolor = "var(--dark-border-color)";
    backgroundImageStyle = {
      borderColor: bordercolor,
      backgroundImage: `url(${backimage})`,
      backgroundSize: "100% 90%",
      backgroundRepeat: "no-repeat",
    };
  } else {
    bordercolor = "var(--light-border-color)";
    backgroundImageStyle = {
      borderColor: bordercolor,
      backgroundImage: `url(${backimage2})`,
      backgroundSize: "100% 90%",
      backgroundRepeat: "no-repeat",
    };
  }
  return (
    <main className="Mainskills">
      <article style={{ borderColor: bordercolor }}>
        <div>
          <img src={workicon} alt="Workicon" />
          <h2>+10 Project</h2>
        </div>
        <div>
          <img src={Skillicon} alt="Skillicon" />
          <h2>+5 Skills</h2>
        </div>
        <div>
          <img src={Achievement} alt="Achievementicon" />
          <h2>+3 certificate</h2>
        </div>
        <span className="luckynumber">95</span>
      </article>
      <h2 className="skillheading">What i know?</h2>
      <div style={backgroundImageStyle}>
        <section
          style={{
            borderColor: bordercolor,
            background: "url(./FrameDark.png)",
          }}
        >
          <header className="skillhead">
            <div>
              <img
                className="skillicon"
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp"
                alt="React.js Icon"
              />
            </div>
            <div>
              <h2>REACT.js</h2>
            </div>
          </header>
          <div className="aboutskills">
            React. js, a frontend-focused JS library used mainly for building
            single-page and multi-page interfaces, is one of the most popular
            programming technologies worldwide, and the number of companies
            reaching out to it proves its solid position.
          </div>
          <p>
            skill:
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </p>
        </section>
        <section style={{ borderColor: bordercolor }}>
          <header className="skillhead">
            <div>
              <img
                className="skillicon"
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-3d-icon-download-in-png-blend-fbx-gltf-file-formats--javascript-runtime-backend-node-js-logo-coding-lang-pack-logos-icons-7578002.png"
                alt="Node.js Icon"
              />
            </div>
            <div>
              <h2>NODE.js</h2>
            </div>
          </header>
          <div className="aboutskills">
            Developers use Node. js to create server-side web applications, and
            it is perfect for data-intensive applications since it uses an
            asynchronous, event-driven model. Now that we know what is Node,
            let's look at why it is so prevalent in web development.
          </div>
          <p>
            skill:
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </p>
        </section>
        <section style={{ borderColor: bordercolor }}>
          <header className="skillhead">
            <div>
              <img
                className="skillicon"
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-mongo-db-3d-icon-download-in-png-blend-fbx-gltf-file-formats--mongodb-database-document-oriented-nosql-coding-lang-pack-logos-icons-7577996.png"
                alt="MongoDB Icon"
              />
            </div>
            <div>
              <h2>MongoDB</h2>
            </div>
          </header>
          <div className="aboutskills">
            MongoDB is built on a scale-out architecture that has become popular
            with developers of all kinds for developing scalable applications
            with evolving data schemas. As a document database, MongoDB makes.
          </div>
          <p>
            skill:
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            {/* <i className="fa-solid fa-star"></i> */}
          </p>
        </section>
        <section style={{ borderColor: bordercolor }}>
          <header className="skillhead">
            <div>
              <img
                className="skillicon"
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-java-3d-icon-download-in-png-blend-fbx-gltf-file-formats--object-oriented-jvm-logo-applications-coding-lang-pack-logos-icons-7578017.png?f=webp"
                alt="Java Icon"
              />
            </div>
            <div>
              <h2>Java</h2>
            </div>
          </header>
          <div className="aboutskills">
            It's used for creating mobile and web apps, enterprise software,
            Internet of Things (IoT) devices, gaming, big data, distributed, and
            cloud-based applications among other types. Here are some specific,
            real-world examples of applications that are programmed with Java.
          </div>
          <p style={{display:"flex",alignItems:"center"}}>
            skill:
            <i className="fa-solid fa-star"></i>
            <div style={{display:"flex"}}>
            <SmallSpinner />
            <SmallSpinner />
            <SmallSpinner />
            <SmallSpinner />
            </div>
          </p>
        </section>
        <section style={{ borderColor: bordercolor }}>
          <header className="skillhead">
            <div>
              <img
                className="skillicon"
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp"
                alt="React.js Icon"
              />
            </div>
            <div>
              <h2>PYTHON</h2>
            </div>
          </header>
          <div className="aboutskills">
            Python is a programming language that is interpreted,
            object-oriented, and considered to be high-level too. What is
            Python? Python is one of the easiest yet most useful programming
            languages which is widely used in the software industry. People use
            Python for Competitive Programming, Web Development, and creating
            software.
          </div>
          <p style={{display:"flex",alignItems:"center"}}>
            skill:
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <div style={{display:"flex"}}>
            <SmallSpinner />
            </div>
          </p>
        </section>
        <section
          className="lastpartskill"
          style={{ borderColor: bordercolor }}
        ></section>
        <span className="luckynumber" style={{ left: "0px" }}>
          07
        </span>
      </div>
    </main>
  );
};

export default Skills;
