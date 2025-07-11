import React, { useState, useRef, useEffect } from "react";
import "../contactpart/contact.css";
import callimage from "../contactpart/pngimg.com - telephone_booth_PNG1.png";
import LoadingOverlay from "../../loadingscreen/loadingsection";
import { useTheme } from "../../ThemeContext";
import { DispalyEarth_3D } from "../../3Dthree/ControlThree";
export default function useContactpart() {
  const { listcolor } = useTheme();
  let Secondrycolor = listcolor.secondrycolor;
  // console.log(Secondrycolor)
  const sceneEarth = useRef();
  const isFirstRender = useRef(true);
  const [email, setEmail] = useState();
  const [firstname, setFirstName] = useState();
  const [secondname, setLastName] = useState();
  const [phonenumber, setPhoneName] = useState();
  const [Message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingfinal, setLoadingFinal] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setTimeout(() => {
      const Earth = document.createElement("div");
      Earth.classList.add("Earth3D");
      sceneEarth.current.appendChild(Earth);
      DispalyEarth_3D(Earth);
    }, 10000);
  }, []);

  async function handlesubmit(e) {
    e.preventDefault();
    console.log(Message, email, firstname, secondname, phonenumber);
    try {
      setLoading(true);
      setLoadingFinal(false);
      const response = await fetch(
        "https://myportfolio-1tuj.onrender.com/Data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            firstname,
            secondname,
            phonenumber,
            email,
            Message,
          }),
        }
      );
      if (response.ok) {
        setLoading(false);
        setLoadingFinal(true);
        setTimeout(() => {
          setLoadingFinal(false);
        }, 4000);
        const Allinput = document.querySelectorAll(".contactinput input");
        const Alltextarea = document.querySelector(".contactinput textarea");
        Alltextarea.value = "";
        for (let i = 0; i < Allinput.length; i++) {
          Allinput[i].value = "";
        }
      } else {
        console.log("response error");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <>
      <LoadingOverlay loadingaction={loading} loadingend={loadingfinal} />
      <div
        className="contactsection"
        id="contactsection"
        style={{ color: "white", backgroundColor: Secondrycolor }}
      >
        <section className="tittlecontact" ref={sceneEarth}>
          {/* <img src={callimage} alt=""/> */}
        </section>
        <section className="maincontactpart">
          <h2 className="contacttittle">Say hello.... to contact</h2>
          <form className="contactinput" onSubmit={handlesubmit}>
            <div className="Forname">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>
            <div className="Fornumber_email">
              <input
                type="tel"
                name="phonenumber"
                placeholder="PhoneNumber"
                onChange={(e) => {
                  setPhoneName(e.target.value);
                }}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="messagearea">
              <textarea
                name="Message"
                id=""
                placeholder="Message..."
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="contactsubmit">
              <button>SUBMIT</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
