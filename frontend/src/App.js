import "./App.css";
import "./Fonts.css";
import React, { useState, useEffect } from "react";
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
  const [progress, setProgress] = useState(0);
  const widthBody = document.body;
  useEffect(() => {
    let isCancelled = false;
    setFrondLoading(true);

    const updateProgress = (value) => {
      setProgress((prev) => {
        const next = Math.min(100, Math.max(prev, value));
        return next;
      });
    };

    async function waitForResources() {
      let progress = 0;
      updateProgress(progress);

      const images = Array.from(document.images).filter(
        (img) => img.loading !== "lazy"
      );

      const totalSteps = images.length + 1; // +1 for fonts
      let completedSteps = 0;

      // ---- Image Loading ----
      await Promise.all(
        images.map((img) => {
          if (img.complete) {
            completedSteps++;
            updateProgress(Math.floor((completedSteps / totalSteps) * 100));
            return Promise.resolve();
          }

          return new Promise((resolve) => {
            img.onload = img.onerror = () => {
              completedSteps++;
              updateProgress(Math.floor((completedSteps / totalSteps) * 100));
              resolve();
            };
          });
        })
      );

      // ---- Fonts Loading ----
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
        completedSteps++;
        updateProgress(Math.floor((completedSteps / totalSteps) * 100));
      }
      // Optional smooth delay before complete
      await new Promise((res) => setTimeout(res, 300));

      if (!isCancelled) {
        updateProgress(100);
        setFrondLoading(false);
      }
    }

    waitForResources();

    return () => {
      isCancelled = true;
    };
  }, [widthBody, setFrondLoading]);

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
      <FrondLoader loading={frondloading} valueloading={progress} />
      <Backspace loading={frondloading} />
      {/* <div className="smallstar"></div> */}
      {/* <div className="spacearound" ref={WebSpace}></div> */}
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
