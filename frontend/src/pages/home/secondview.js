// src/hooks/useCustomHook.js
import React, { useEffect } from "react";
import "../../assets/styles/secondsection.css";
import iconimage from "../../assets/image/programmerimg.png";
import cvdocument from "../../assets/pdf/resume.pdf";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function SecondView() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  useEffect(() => {
    const startCounterAnimation = () => {
      const counter = document.querySelector(".counter");
      if (counter) {
        counter.classList.remove(".counter");
        counter.classList.add("animate-counter");
      }
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounterAnimation();
            observer.unobserve(entry.target); // Stop observing after the counter is triggered
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    const target = document.querySelector(".Counter-section");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  return (
    <div className="secondsection" ref={ref}>
      {/* Left image */}
      <motion.section
        className="leftimage"
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={iconimage} alt="iconimage" loading="lazy"/>
      </motion.section>

      {/* Right content */}
      <motion.section
        className="rightcontent"
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <main>
          <h2>
            let <br />
            me introduce <br />
            <div>
              <h2>myself</h2>
            </div>
          </h2>
          <p>
            I’m a Full-Stack Developer skilled in the MERN stack (MongoDB,
            Express.js, React, Node.js). I specialize in building scalable web
            applications, managing both front-end and back-end systems from
            start to finish. I'm passionate about creating clean, robust, and
            efficient digital solutions.
          </p>

          <samp className="Counter-section">
            <div>
              <div className="counter" id="counter">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
              </div>
            </div>
            <samp style={{ position: "relative", top: "4px" }}>+</samp>
            &nbsp;Projects Completed
          </samp>

          <div className="CV">
            <a href={cvdocument} download>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              download cv
            </a>
          </div>
        </main>
      </motion.section>
    </div>
  );
}
