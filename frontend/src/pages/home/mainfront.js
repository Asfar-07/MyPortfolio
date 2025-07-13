// import React,{useEffect,useState,useRef} from "react";
import "../../assets/styles/mainfront.css";
import Header from "../../components/header/header";
// import loffyhat from "../../assets/image/LuffyHat.png";
import { useTheme } from "../../ThemeContext";
import SecondView from "./secondview";
import Contact from "../contact/useContactpart"
import Thirdsection from "../../components/thirdsection/thirdsection";
import Footer from "../footer/footer";

export default function useMainpage() {
  const { listcolor } = useTheme();
  let containercolor = listcolor.frontcontainer;
 
  return (
    <div className="frontmain">
      <Header />
      <main>
        <div className="homeView">
          <section className="leftfront">
            <div className="maincontact">
              <div>
                <h4>hello, It's Me</h4>
                <h2 id="Myname">
                  Asfar Muhammed
                  {/* <img src={loffyhat} alt="luffyhat" className="luffyhat"/> */}
                </h2>
                <h4 >I'm a Mern Stack Developer</h4>
                <p>
                  I create sleek, responsive websites from front to back.
                  Explore my projects and see what I’m building
                </p>
              </div>
              <div className="contactiocn">
                <a href="/">
                  <span>
                    <i className="fa-brands fa-facebook-f"></i>
                  </span>
                </a>
                <a href="/">
                  <span>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </span>
                </a>
                <a href="https://mail.google.com/" target="_black">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section className="rightfront">
            <div className="container">
              {/* <div className="xmashat"><img src={Xmas} width="100%" height="100%" alt="xmashat" /></div> */}
              <div className="first-div"></div>
              <div
                className="second-div"
                style={{ backgroundColor: containercolor }}
              ></div>
            </div>
          </section>
        </div>
        <SecondView />
        <Thirdsection />
        <Contact />
      </main>
       <Footer /> 
    </div>
  );
}
