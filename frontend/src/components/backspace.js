import React, { useEffect, useRef } from "react";
import "../assets/styles/backspace.css";
import {
  DispalyAlienship_3D,
  DispalyAsteroid_3D,
} from "../3Dthree/ControlThree";
export default function Backspace({ loading }) {
  const WebSpace = useRef();
  const isFirstRender = useRef(true);
  const sceneAlienShip3D = useRef();
  
  useEffect(() => {
    function createShootingStar() {
      const star = document.createElement("div");
      star.classList.add("motionstar");
      const startX = Math.random() * window.innerWidth;
      const angleStar = Math.floor(Math.random() * (330 - 230 + 1)) + 230;
      star.style.left = startX + "px";
      star.style.setProperty("--starAngle", `${angleStar}deg`);
      star.style.setProperty("--endX", `-${document.body.scrollHeight}px`);
      WebSpace.current.appendChild(star);
      setTimeout(() => star.remove(), 1500);
    }
    const interval = setInterval(createShootingStar, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    function makeFirstAsteroid() {
      for (let i = 0; i < 4; i++) {
        const asteroid = document.createElement("div");
        asteroid.classList.add("randomAsteroid");
        const startY = Math.random() * WebSpace.current.clientHeight;
        const sizeAsteroid = Math.floor(Math.random() * (50 - 20) + 20);
        const angleAsteroid = Math.floor(Math.random() * 20);
        asteroid.style.width = sizeAsteroid + "px";
        asteroid.style.height = sizeAsteroid + "px";
        asteroid.style.top = startY + "px";
        asteroid.style.left = "-100px";
        WebSpace.current.appendChild(asteroid);
        DispalyAsteroid_3D(asteroid);
      }
    }
    if (!loading) {
      setTimeout(() => {
        makeFirstAsteroid();
      }, 500);
    }
  }, [loading]);
  useEffect(() => {
    let num = 0;
    function MOVEasteroid() {
      const listrandomAsteroid = document.querySelectorAll(".randomAsteroid");

      // console.log(listrandomAsteroid[0])
      const pickside = Math.floor(Math.random() * 2) + 1;
      const asteroid = listrandomAsteroid[num];
      const startY = Math.random() * WebSpace.current.clientHeight;
      const angleAsteroid = Math.floor(Math.random() * 20);
      const animeduration = Math.floor(Math.random() * (20 - 15) + 15);
      // console.log(animeduration)
      if (pickside == 1) {
        asteroid.style.top = startY + "px";
        asteroid.style.left = "-100px";
      } else {
        asteroid.style.left = startY + "px";
        asteroid.style.top = "-100px";
      }
      asteroid.style.animation = `moveAsteroid ${animeduration}s linear`;
      asteroid.style.setProperty("--asteroidAngle", `${angleAsteroid}deg`);
      if (num >= 3) {
        num = 0;
      } else {
        num += 1;
      }
      setTimeout(() => {
        asteroid.style.animation = "none";
      }, animeduration * 1000 - 1000);
    }
    if (!loading) {
      const interval = setInterval(MOVEasteroid, 15000);
      return () => clearInterval(interval);
    }
  }, [loading]);
  return (
    <div className="spacearound" ref={WebSpace}>
      {/* <div className="randomAsteroid" ref={sceneAsteroid}></div> */}
      <div className="alien3Dship">
        <div className="ufo" ref={sceneAlienShip3D}></div>
        <div className="pickjumb"></div>
      </div>
    </div>
  );
}
