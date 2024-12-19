import React from "react";
import Header from "../components/header/header";
import "./About.css";
import Skills from "./MySkills";
import Footer from "../components/footer/footer"
export default function About() {
  return (
    <div className="Aboutme">
      <Header />
      {/* <div className="Top-red">
        <p>
          {" "}
          "Here, you can explore all the details of my projects and skills. You can find even more on my GitHub. This portfolio website showcases the projects I’ve created using my skills. I’d love to hear your thoughts, so feel free to provide feedback using the contact page. Your input is greatly appreciated!"
        </p>
      </div> */}

      <main>
        <section>
          <h1 style={{marginBottom:"120px"}}>My Masterpiece Collection</h1>
          <div className="projects">
            <div>
              <section className="right-s-project">
                <div className="view-project-c">
                  <div className="first-p-img"></div>
                  <div className="bottom-p">
                    <h2>ALWAYS BEST</h2>
                    <button>SEE WEB</button>
                  </div>
                </div>
              </section>
              <section className="left-s-project">
                <article>
                  <h2>Social Link</h2>
                  <h3>
                  This is my first college project. It’s always best
                  </h3>
                  <p>
                  The social link is a simple social media website. The social link provides entertainment activities, chat facility like features. It is simple
                  to use, and anyone can easily understand it.
                  </p>
                  <div>
                    <a href="https://github.com/Asfar-07" target="_black">
                      Learn more<i class="fa-solid fa-arrow-down-long"></i>
                    </a>
                    <samp></samp>
                  </div>
                </article>
              </section>
            </div>
            <div style={{marginBottom:"150px"}}>
              <section className="left-s-project" style={{margin:"0", marginRight:"100px"}}>
                <article>
                  <h2>Southern Tourism</h2>
                  <h3>
                  This is my another big Node Js project, For tourism
                  </h3>
                  <p>
                  The Southern Tours Web-Based Project focuses on developing a comprehensive online platform that promotes tourism in the Southern region. Visitors can easily navigate through the website to explore tourist destinations, accommodations, activities, and more
                  </p>
                  <div>
                    <a href="https://github.com/Asfar-07" target="_black">
                      Learn more<i class="fa-solid fa-arrow-down-long"></i>
                    </a>
                    <samp></samp>
                  </div>
                </article>
              </section>
              <section className="right-s-project">
                <div className="view-project-c-2">
                  <div className="first-p-img"></div>
                  <div className="bottom-p">
                    <h2>ANOTHER ONE</h2>
                    <button>SEE WEB</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="gitbutton">
            <a href="https://github.com/Asfar-07" target="_black">more GitHub</a>
          </div>
        </section>
        {/* <section>
          <h1>My Tools</h1>
        </section>
        <section id="AboutExperience">
          <h1>Experience</h1>
        </section> */}
      </main>
      <Skills />
      <Footer />
    </div>
  );
}
