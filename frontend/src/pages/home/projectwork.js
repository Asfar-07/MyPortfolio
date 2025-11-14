import React from 'react'
import "../../assets/styles/projectworks.css"
import Project_3 from "../../assets/image/Project_3.jpg";
import Project_2 from "../../assets/image/Project_2.jpg";
import Project_1 from "../../assets/image/Project_1.jpg";
import { useTheme } from "../../ThemeContext";
export default function Projectwork() {
    
     const { listcolor} = useTheme();
  return (
    <div>
       <section className="my-projects" id="projects">
      <h2>Featured Work</h2>
      <p className="projects-subtitle">
        A showcase of my recent projects, demonstrating expertise in web
        development, modern frameworks, and creative problem-solving.
      </p>

      <div className={`project-container-${listcolor.settheme}`}>
        {/* Project 1 */}
        <div className="project-card">
          <img src={Project_1} alt="E-Commerce Website" />
          <h3>E-Learning Website</h3>
          <p>
          Built for the education sector with strong user authentication.
          </p>
          <div className="tech-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>Java</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/Asfar-07" className="btn-outline">
              GitHub
            </a>
            <a href="/" className="btn-solid disable">
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={Project_2} alt="Portfolio Website" />
          <h3>Portfolio Website</h3>
          <p>Personal portfolio to showcase my design and coding projects.</p>
          <div className="tech-tags">
            <span>React JS</span>
            <span>Three Js</span>
            <span>Node</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/Asfar-07" className="btn-outline">
              GitHub
            </a>
            <a href="/" className="btn-solid">
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src={Project_3} alt="Weather App" />
          <h3>Coding Platform </h3>
          <p>
           Modern web app with virtual coding and a large code repository.
          </p>
          <div className="tech-tags">
            <span>React</span>
            <span>Flask</span>
            <span>MSql</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/Asfar-07" className="btn-outline">
              GitHub
            </a>
            <a href="/" className="btn-solid">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
