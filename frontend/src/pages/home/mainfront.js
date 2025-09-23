// import React,{useEffect,useState,useRef} from "react";
import "../../assets/styles/mainfront.css";
import Header from "../../components/header/header";
import { useState ,useEffect, useRef } from "react";
// import loffyhat from "../../assets/image/LuffyHat.png";
import { useTheme } from "../../ThemeContext";
import SecondView from "./secondview";
import Contact from "../contact/useContactpart"
import Thirdsection from "../../components/thirdsection/thirdsection";
import Footer from "../footer/footer";

export default function useMainpage() {
  const { listcolor,frondloading } = useTheme();
  const [changeWords,setChangeWords]=useState(true)

  let containercolor = listcolor.frontcontainer;
  const typing_Style=useRef()
  useEffect(()=>{
    function MakeTypeEffect() {
      // console.log(typing_Style.current.clientWidth)
      const widthofContent=typing_Style.current.clientWidth;
       typing_Style.current.style.animation="changeWidth 5s linear";

       typing_Style.current.style.setProperty("--widthoftypingContent", `${widthofContent}px`);
       setTimeout(()=>{
        if(changeWords===true){
          setChangeWords(false)
        }else{
          setChangeWords(true)
        }
      },[2500])
      setTimeout(()=>{
        typing_Style.current.style.animation="none";
      },[5000])
    }
    const interval=setInterval(MakeTypeEffect,[8000])
     return () => clearInterval(interval);
  },[changeWords,typing_Style])

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
                <div className="typing_effect" ref={typing_Style}>
                  {changeWords ? <h4 >I'm a Mern Stack Developer <span style={{backgroundColor:listcolor.fontcolor }}></span></h4>: <h4 >I'm a Full Stack Developer <span style={{backgroundColor:listcolor.fontcolor}}></span></h4>}
                </div>
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
        <Contact loading={frondloading}/>
      </main>
       <Footer /> 
    </div>
  );
}
