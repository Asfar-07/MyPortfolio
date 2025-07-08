import "./App.css";
import "./Fonts.css"
import React, { useState, useEffect,useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viewport from "./viewport";
import About from "./About/About";
import { useTheme } from "./ThemeContext";
import FrondLoader from "./loadingscreen/FrondLoading";
import Backspace from "./components/backspace";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { listcolor, toggleTheme } = useTheme();
  useEffect(()=>{
     setTimeout(() => {
        setIsLoading(false)
      }, 3000);
  },[])
 
  const [rotate, setRotate] = useState(() => {
    return localStorage.getItem("angle") || "rotate(135deg)";
  });
  const switchtheme = () => {
    toggleTheme();
    if (rotate === "rotate(135deg)") {
      setRotate("rotate(315deg)");
      localStorage.setItem("angle", "rotate(315deg)");
    } else {
      setRotate("rotate(135deg)");
      localStorage.setItem("angle", "rotate(135deg)");
    }
  };
  return (
    <div className={`App-${listcolor.settheme}` } >
      {/* <div className="smallstar"></div> */}
      {/* <div className="spacearound" ref={WebSpace}></div> */}
      <Backspace />
      <section className="mainswitchmod">
        <div
          className="switchmod"
          onClick={switchtheme}
          style={{ transform: rotate }}
        >
          <i className="fa-solid fa-moon"></i>
          <div>
            <i className="fa-solid fa-sun"></i>
          </div>
        </div>
      </section>
      {isLoading && <FrondLoader /> }
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={viewport} />
          <Route path="/About" Component={About} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}
