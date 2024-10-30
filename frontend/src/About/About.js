import React from 'react'
import Header from '../components/header/header'
import "./About.css"
export default function About() {
  return (
    <div className='Aboutme'>
        <Header/>
      <p style={{textAlign:"center", margin:"30px 0px", letterSpacing:"1.5px"}}> "My work showcases a range of web projects where I've applied creativity and technical skills to<br></br> bring ideas to life, each project reflecting my commitment to quality and innovation."</p>
      <main>
      <section >
        <h1>My Art</h1>
        <div className='myproject'>
          <div></div>
          <div></div>
        </div>
      </section>
      <section>
        <h1>My Tools</h1>
      </section>
      <section id='AboutExperience'>
        <h1>Experience</h1>
      </section>
      </main>
    </div>
  )
}
