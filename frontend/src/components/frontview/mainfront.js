import React, { Component } from "react";
import "../frontview/mainfront.css";
import Header from "../header/header";
import loffyhat from "./pngtree-straw-hat-cartoon-illustration-png-image_6562738.png"
// import Myimage from "../frontview/photo_2024-10-13_19-29-13.jpg";

class mainfront extends Component {


  render() {
    return (
      <div className="frontmain">
        <main>
          <section className="leftfront">
            <Header />
            <div className="maincontact">
              <div>
                <h2>It’s me</h2>
                <h2 id="Myname">Asfar <img src={loffyhat} alt="luffyhat" /></h2>
                <p>
                  Welcome to my personal website. I shared all details about
                  <br></br> me with my works
                </p>
              </div>
              <div className="contactiocn">
                <a href="/"><span><i class="fa-brands fa-facebook-f"></i></span></a>
                <a href="/"><span><i class="fa-brands fa-linkedin-in"></i></span></a>
                <a href="/"><span><i class="fa-solid fa-envelope"></i></span></a>
              </div>
            </div>
          </section>
          <section className="rightfront">
          <div className="container">
          <div className="first-div"></div>
          <div className="second-div"></div>
        </div>
          </section>
        </main>
     
      </div>
    );
  }
}
export default mainfront;
