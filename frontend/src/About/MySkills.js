import React from "react";
import "./skills.css"

const Skills = () => {
  return (
    <main className="Mainskills">
      <section>
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
            <p>
              skill:
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
          </div>
        </header>
        <div className="aboutskills">
          React. js, a frontend-focused JS library used mainly for building
          single-page and multi-page interfaces, is one of the most popular
          programming technologies worldwide, and the number of companies
          reaching out to it proves its solid position.
        </div>
      </section>
      <section>
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
            <p>
              skill:
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
          </div>
        </header>
        <div className="aboutskills">
          Developers use Node. js to create server-side web applications, and it
          is perfect for data-intensive applications since it uses an
          asynchronous, event-driven model. Now that we know what is Node, let's
          look at why it is so prevalent in web development.
        </div>
      </section>
      <section>
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
            <p>
              skill:
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
          </div>
        </header>
        <div className="aboutskills">
          MongoDB is built on a scale-out architecture that has become popular
          with developers of all kinds for developing scalable applications with
          evolving data schemas. As a document database, MongoDB makes .
        </div>
      </section>
      <section>
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
            <p>
              skill:
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
          </div>
        </header>
        <div className="aboutskills">
          It's used for creating mobile and web apps, enterprise software,
          Internet of Things (IoT) devices, gaming, big data, distributed, and
          cloud-based applications among other types. Here are some specific,
          real-world examples of applications that are programmed with Java.
        </div>
      </section>
    </main>
  );
};

export default Skills;
