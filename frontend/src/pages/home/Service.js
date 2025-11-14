import React, { useRef, useEffect } from "react";
import "../../assets/styles/service.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebService from "../../assets/image/WebService.png";
import AppService from "../../assets/image/AppService.png";
import EditorService from "../../assets/image/EditorService.png";
import GameService from "../../assets/image/GameService.png";
gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  const animationSection = useRef();
  const animationElement = useRef();
  const headText = useRef();
  const leftCard = useRef();
  const rightCard = useRef();
  const leftInner = useRef();
  const rightInner = useRef();

  useEffect(() => {
    if (!animationElement.current || !animationSection.current) return;

    const mainbg = gsap.timeline({
      scrollTrigger: {
        trigger: animationSection.current,
        start: "20% bottom",
        end: "85% top",
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true,
      },
    });

    mainbg.fromTo(
      animationElement.current,
      { scale: 6 },
      { scale: 1, duration: 0.3 }
    );
    mainbg.to({}, { duration: 2 });

    mainbg.to(animationElement.current, { scale: 6, duration: 0.3 });
    const cardsIn = gsap.timeline({
      scrollTrigger: {
        trigger: animationSection.current,
        start: "30% 100%",
        end: "80% 50%",
        // markers: true,
        scrub: true,
      },
    });
    cardsIn.to(headText.current, { opacity: 1, duration: 0.1 });
    cardsIn.fromTo([leftInner.current, rightInner.current], {opacity:0},{ opacity: 1, duration: 0.1 });
    cardsIn.fromTo(
      leftCard.current,
      { x: "-500px"},
      { x: "0" , duration: 0.5 }
    );
    
    cardsIn.fromTo(
      rightCard.current,
      { x: "500px" },
      { x: "0", duration: 0.5 },
      "<"
    );
        cardsIn.to({}, { duration: 0.3 });
    cardsIn.to([leftInner.current, rightInner.current], {
      rotateY: "180deg",
      duration: 0.5,
    });
    cardsIn.to({}, { duration: 0.3 });
    cardsIn.to(leftCard.current, {
      x: "-500px",
      duration: 0.5,
    });
    cardsIn.to(rightCard.current, { x: "500px", duration: 0.5 }, "<");
    cardsIn.to([leftInner.current, rightInner.current], { opacity: 0, duration: 0.1 });
    cardsIn.to(headText.current, { opacity: 0, duration: 0.1 });
  }, []);

  return (
    <section className="my-service" ref={animationSection}>
      <div className="spaceship-bg" ref={animationElement}></div>
      <div className="service-container" id="cards">
        <div className="service-card-main">
          <div className="service-card left" ref={leftCard} id="left-card1">
            <div className="card-inner" ref={leftInner}>
              <div className="card-front">
                <img src={WebService} alt="webicon" loading="lazy"></img>
                <h3>Web Development </h3>
                <p>
                  I design and build responsive, user-focused websites that
                  combine functionality with elegant design to create a seamless
                  online experience.
                </p>
              </div>
              <div className="card-back">
                <img src={EditorService} alt="editoricon" loading="lazy"></img>
                <h3> Design & Edit </h3>
                <p>
                  I craft visuals and layouts that bring ideas to life —
                  blending creativity, balance, and attention to detail to make
                  every project stand out.
                </p>
              </div>
            </div>
          </div>
          <div className="service-card right" ref={rightCard} id="right-card1">
            <div className="card-inner" ref={rightInner}>
              <div className="card-front">
                <img src={AppService} alt="appicon" loading="lazy"></img>
                <h3>App Development </h3>
                <p>
                  I create smooth, intuitive applications that make everyday
                  tasks easier and provide engaging, reliable experiences across
                  all devices.
                </p>
              </div>
              <div className="card-back">
                <img src={GameService} alt="gameicon" loading="lazy"></img>
                <h3>Game Development </h3>
                <p>
                  I develop fun, interactive, and visually engaging games that
                  focus on creativity, smooth interaction, and immersive user
                  experiences..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-text" ref={headText}>
        Services
      </div>
    </section>
  );
}
