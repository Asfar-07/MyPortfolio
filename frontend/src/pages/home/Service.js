import React, { useRef, useEffect } from "react";
import "../../assets/styles/service.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebService from "../../assets/image/WebService.png"
import AppService from "../../assets/image/AppService.png"
import EditorService from "../../assets/image/EditorService.png"
import GameService from "../../assets/image/GameService.png"
gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  const animationSection = useRef();
  const animationElement = useRef();
  const headText = useRef();
  const top_leftCard=useRef()
  const bottom_leftCard=useRef()
  const top_rightCard=useRef()
  const bottom_rightCard=useRef()
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
    mainbg.to({}, { duration:2 });
    
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
      cardsIn.to(headText.current, { opacity: 1,duration: .1  });
         cardsIn.fromTo(
        [top_leftCard.current, bottom_leftCard.current],
         { x: "-500px"},
        { x: "0", duration: .3 },
      );
       cardsIn.fromTo(
        [top_rightCard.current, bottom_rightCard.current],
         { x: "500px" },
        { x: "0", duration: .3 },
         "<"
      );
       cardsIn.to({}, { duration:.3 });
       cardsIn.to(
        [top_leftCard.current, bottom_leftCard.current],
        { x: "-500px", duration: .3 }
       )
        cardsIn.to(
          [top_rightCard.current, bottom_rightCard.current],
        { x: "500px", duration: .3 },
         "<"
       )
       cardsIn.to(headText.current, { opacity: 0 ,duration: .1 });
  }, []);

  return (
    <section className="my-service" ref={animationSection}>

      <div className="spaceship-bg" ref={animationElement}></div>
      <div className="service-container" id="cards">
        <div className="service-card-main" >
          <div className="service-card top-left" ref={top_leftCard} id="left-card1">
            <img src={WebService} alt="webicon"></img>
            <h3>Web Development </h3>
            <p>
             I design and build responsive, user-focused websites that combine functionality with elegant design to create a seamless online experience.
            </p>
          </div>
          <div className="service-card top-right" ref={top_rightCard} id="right-card1">
            <img src={AppService} alt="appicon"></img>
            <h3>App Development </h3>
            <p>
             I create smooth, intuitive applications that make everyday tasks easier and provide engaging, reliable experiences across all devices.
            </p>
          </div>
          <div className="service-card bottom-left" ref={bottom_leftCard} id="left-card2">
            <img src={EditorService} alt="editoricon"></img>
            <h3> Design & Edit </h3>
            <p>
             I craft visuals and layouts that bring ideas to life — blending creativity, balance, and attention to detail to make every project stand out.
            </p>
          </div>
          <div className="service-card bottom-right" ref={bottom_rightCard} id="right-card2">
            <img src={GameService} alt="gameicon"></img>
            <h3>Game Development </h3>
            <p>
             I develop fun, interactive, and visually engaging games that focus on creativity, smooth interaction, and immersive user experiences..
            </p>
          </div>
        </div>
      </div>
      <div class="scroll-text" ref={headText}>Services</div>
    </section>
  );
}
