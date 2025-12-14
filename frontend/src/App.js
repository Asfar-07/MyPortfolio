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

   useEffect(() => {
    let isCancelled = false;
    setFrondLoading(true);
    async function waitForResources() {
      const images = Array.from(document.images).filter(
        (img) => img.loading !== "lazy"
      );
      await Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = img.onerror = resolve;
          });
        })
      );

      await new Promise((res) => setTimeout(res, 300));

      if (!isCancelled) setFrondLoading(false);
    }

    waitForResources();

    return () => {
      isCancelled = true;
    };
  }, [setFrondLoading]);

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
      <FrondLoader/>
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
