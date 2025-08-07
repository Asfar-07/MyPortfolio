// import React,{useEffect,useState,useRef} from "react";
import "../../assets/styles/mainfront.css";
import Header from "../../components/header/header";
import { useState ,useEffect } from "react";
// import loffyhat from "../../assets/image/LuffyHat.png";
import { useTheme } from "../../ThemeContext";
import SecondView from "./secondview";
import Contact from "../contact/useContactpart"
import Thirdsection from "../../components/thirdsection/thirdsection";
import Footer from "../footer/footer";
import FrondLoader from "../../loadingscreen/FrondLoading";
import Backspace from "../../components/backspace";

export default function useMainpage() {
  const { listcolor } = useTheme();
  let containercolor = listcolor.frontcontainer;

 const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     let isCancelled = false;
 
     async function waitForResources() {
       const images = Array.from(document.images);
       await Promise.all(
         images.map((img) => {
           if (img.complete) return Promise.resolve();
           return new Promise((resolve) => {
             img.onload = img.onerror = resolve;
           });
         })
       );
 
       if (document.fonts && document.fonts.ready) {
         await document.fonts.ready;
       }
 
       await new Promise((res) => setTimeout(res, 300)); // optional delay
 
       if (!isCancelled) setLoading(false);
     }
 
     waitForResources();
 
     return () => {
       isCancelled = true;
     };
   }, []);

  return (
    <div className="frontmain">
      <FrondLoader loading={loading}/>
      <Backspace loading={loading}/>
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
        <Contact loading={loading}/>
      </main>
       <Footer /> 
    </div>
  );
}
