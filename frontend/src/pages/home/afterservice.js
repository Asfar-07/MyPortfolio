import React, { useRef, useEffect } from "react";
// import { DispalyAlienship_3D } from "../../3Dthree/ControlThree";
import "../../assets/styles/afterservice.css";
import { gsap } from "gsap/gsap-core";

export default function AfterService() {
  const Alien_Ship_3D = useRef();
  const Main_alien_Ship_3D = useRef();
  const main_Heading = useRef();
  const place_Ship = useRef();
  const alien_Light=useRef();
  // const [animationDone, setAnimationDone] = useState(false);
  // useEffect(() => {
  //   DispalyAlienship_3D(Alien_Ship_3D.current);
  // }, []);
  useEffect(() => {
    if (main_Heading.current) {
      gsap.fromTo(
        main_Heading.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: main_Heading.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }
  }, []);
  // useEffect(() => {
  //   function moveBoxToO() {
  //     const sideRect = Main_alien_Ship_3D.current.getBoundingClientRect();
  //     const targetRect = place_Ship.current.getBoundingClientRect();

  //     const targetX =
  //       targetRect.left + targetRect.width / 2 - sideRect.width / 2;
  //     const targetY =
  //       targetRect.top + targetRect.height / 2 - sideRect.height / 2;

  //     const dx = targetX - sideRect.left;
  //     const dy = targetY - sideRect.top;
  //     Main_alien_Ship_3D.current.style.setProperty("--dx", dx + "px");
  //     Main_alien_Ship_3D.current.style.setProperty("--dy", dy - 120 + "px");

  //     Main_alien_Ship_3D.current.classList.add("animate");

  //     Main_alien_Ship_3D.current.addEventListener(
  //       "animationend",
  //       () => {
  //         setAnimationDone(true);
  //         lockBoxToO() // fix its position
  //         // place_Ship.current.classList.add("magnet-effect");
  //         // alien_Light.current.style.display="block"
  //       },
  //       { once: true }
  //     );
  //   }
  //   setTimeout(moveBoxToO, 5000);
  //   function lockBoxToO() {
  //     const targetRect = place_Ship.current.getBoundingClientRect();
  //     Main_alien_Ship_3D.current.style.transition = "0s";
  //     Main_alien_Ship_3D.current.style.left =
  //       targetRect.left +
  //       targetRect.width / 2 -
  //       Main_alien_Ship_3D.current.offsetWidth / 2 +
  //       "px";
  //       console.log(targetRect.left);
  //     Main_alien_Ship_3D.current.style.top =
  //       targetRect.top +
  //       targetRect.height / 2 -
  //       Main_alien_Ship_3D.current.offsetHeight / 2 +
  //       "px";
  //     Main_alien_Ship_3D.current.style.transform = "translate(0,0)";
  //     Main_alien_Ship_3D.current.classList.remove("animate");
  //   }
  //   window.addEventListener("resize", () => {
  //     console.log(animationDone)
  //     if (true) lockBoxToO();
  //   });
  // }, []);
  return (
    <div className="after_Service">
      <main>
        <div className="small-Alien-Ship" ref={Main_alien_Ship_3D}>
          <div className="Alien-Ship-3D" ref={Alien_Ship_3D}></div>
          <div className="display-light-ship" ref={alien_Light}></div>
        </div>
        <h2 ref={main_Heading}>
          TURN ID<span  ref={place_Ship}>E</span>AS INTO <br></br>{" "}
          REALITY
        </h2>
      </main>
    </div>
  );
}
