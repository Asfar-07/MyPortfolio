import "./App.css";
import React, { useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import useMainpage from "./pages/home/mainfront";
import Backspace from "./components/backspace";
import FrondLoader from "./components/loadingscreen/FrondLoading";
import Skills from "./pages/about/MySkills";

export default function App() {
  const { listcolor, toggleTheme, frondloading, setFrondLoading } = useTheme();

  const [rotate, setRotate] = useState(() => {
    return localStorage.getItem("angle") || "rotate(135deg)";
  });
  // const [progress, setProgress] = useState(0);
  useEffect(()=>{
    setFrondLoading(false)
  })
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
    <div className={`App-${listcolor.settheme}`}>
      <FrondLoader loading={frondloading} valueloading={100} />
      <Backspace loading={frondloading} />
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
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={useMainpage} />
          <Route path="/Skills" Component={Skills} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
