import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viewport from "./viewport";
import About from "./About/About";
import { useTheme } from "./ThemeContext";
export default function App() {
  const { listcolor, toggleTheme } = useTheme();

  useEffect(() => {
    function createsmallstar() {
      const numStars = 100;

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "smallstar";

        // Random size and position
        const size = Math.random() * 2.5 + 1; // 1px - 3.5px
        const top = Math.random() * document.body.scrollHeight; // vertical space
        const left = Math.random() * window.innerWidth;

        // Apply styles
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${top}px`;
        star.style.left = `${left}px`;

        // Random twinkle duration and delay
        const duration = 2 + Math.random() * 3; // 2s - 5s
        const delay = Math.random() * 3;

        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        document.body.appendChild(star);
      }
    }
    createsmallstar()
    function createShootingStar() {
      const star = document.createElement("div");
      star.classList.add("motionstar");
      const startX = Math.random() * window.innerWidth;
      const angleStar = Math.floor(Math.random() * (330 - 230 + 1)) + 230;
      star.style.left = startX + "px";
      star.style.setProperty("--angle", `${angleStar}deg`);
      star.style.setProperty("--endX", `-${document.body.scrollHeight}px`);
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 1500);
    }
    const interval = setInterval(createShootingStar, 8000);
    return () => clearInterval(interval);
  }, []);

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
    <div className={`App-${listcolor.settheme}`}>
      {/* <div className="smallstar"></div> */}
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
          <Route path="/" Component={viewport} />
          <Route path="/About" Component={About} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
