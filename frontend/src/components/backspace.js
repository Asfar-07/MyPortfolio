import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import "../assets/styles/backspace.css";
import {
  DispalyAlienship_3D,
  DispalyAsteroid_3D,
} from "../3Dthree/ControlThree";
export default function Backspace() {
  const WebSpace = useRef();
  const isFirstRender = useRef(true);
  const sceneAlienShip3D = useRef();
  const sceneAsteroid = useRef();
  useEffect(() => {
    function createsmallstar() {
      const numStars = 40;
      if (WebSpace.current) {
        for (let i = 0; i < numStars; i++) {
          const star = document.createElement("div");
          star.className = "smallstar";

          const size = Math.random() * 2.5 + 1;
          const top = Math.random() * WebSpace.current.clientHeight;
          const left = Math.random() * window.innerWidth;

          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.top = `${top}px`;
          star.style.left = `${left}px`;

          const duration = 2 + Math.random() * 3;
          const delay = Math.random() * 3;

          star.style.animationDuration = `${duration}s`;
          star.style.animationDelay = `${delay}s`;

          WebSpace.current.appendChild(star);
        }
      }
    }

    createsmallstar();
  }, []);

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
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    DispalyAlienship_3D(sceneAlienShip3D.current);
  }, [sceneAlienShip3D]);
  useEffect(() => {
    function MakeRandomAsteroid() {
      const asteroid = document.createElement("div");
      asteroid.classList.add("randomAsteroid");
      WebSpace.current.appendChild(asteroid);
      const startY = Math.random() * WebSpace.current.clientHeight;
      const sizeAsteroid= Math.floor(Math.random() * (50-20)+20);
       const angleAsteroid = Math.floor(Math.random() * 20) ;
       asteroid.style.width=sizeAsteroid+"px"
       asteroid.style.height=sizeAsteroid+"px"
       asteroid.style.setProperty("--asteroidAngle", `${angleAsteroid}deg`);
      asteroid.style.top=startY+"px"
      DispalyAsteroid_3D(asteroid);
      setTimeout(() => asteroid.remove(), 30000);
    }
    const interval = setInterval(MakeRandomAsteroid, 20000);
    return () => clearInterval(interval);
  });
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
