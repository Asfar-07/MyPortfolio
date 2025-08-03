import React, { useEffect, useRef } from "react";
import "../assets/styles/backspace.css";
import {
  DispalyAlienship_3D,
  DispalyAsteroid_3D,
} from "../3Dthree/ControlThree";
export default function Backspace() {
  const WebSpace = useRef();
  const isFirstRender = useRef(true);
  const sceneAlienShip3D = useRef();
  useEffect(() => {
    function createsmallstar() {
      const numStars = 80;
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
  useEffect(()=>{
    function makeFirstAsteroid(){
      for (let i = 0; i < 4; i++) {
        const asteroid = document.createElement("div");
      asteroid.classList.add("randomAsteroid");
      const startY = Math.random() * WebSpace.current.clientHeight;
      const sizeAsteroid= Math.floor(Math.random() * (50-20)+20);
      const angleAsteroid = Math.floor(Math.random() * 20) ;
      asteroid.style.width=sizeAsteroid+"px"
      asteroid.style.height=sizeAsteroid+"px"
      asteroid.style.top=startY+"px"
      asteroid.style.left="-100px"
      WebSpace.current.appendChild(asteroid);
      DispalyAsteroid_3D(asteroid);
      }
    }
    setTimeout(() => {
      makeFirstAsteroid()
    }, 10000);
  },[])
  useEffect(() => {
    let num=0;
    function MOVEasteroid() {
      const listrandomAsteroid=document.querySelectorAll(".randomAsteroid");
      
      // console.log(listrandomAsteroid[0])
      const pickside= Math.floor(Math.random() * 2)+1;
      const asteroid=listrandomAsteroid[num]
      const startY = Math.random() * WebSpace.current.clientHeight;
      const angleAsteroid = Math.floor(Math.random() * 20) ;
      const animeduration= Math.floor(Math.random() * (20-15)+15)
      // console.log(animeduration)
      if(pickside==1){
        asteroid.style.top=startY+"px"
        asteroid.style.left="-100px"
      }else{
        asteroid.style.left=startY+"px"
        asteroid.style.top="-100px"
      }
      asteroid.style.animation=`moveAsteroid ${animeduration}s linear`;
      asteroid.style.setProperty("--asteroidAngle", `${angleAsteroid}deg`);
      if(num>=3){
        num=0
      }else{
        num +=1
      }
      setTimeout(() => {
      asteroid.style.animation="none";
    }, ((animeduration*1000)-1000));
    }
    const interval = setInterval(MOVEasteroid, 15000);
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
