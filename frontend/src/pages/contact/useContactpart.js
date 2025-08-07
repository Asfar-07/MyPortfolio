import React, { useState, useRef, useEffect } from "react";
import "../../assets/styles/contact.css";
// import callimage from "../contactpart/pngimg.com - telephone_booth_PNG1.png";
import LoadingOverlay from "../../loadingscreen/loadingsection";
import { useTheme } from "../../ThemeContext";
import { DispalyEarth_3D } from "../../3Dthree/ControlThree";
import FrondLoader from "../../loadingscreen/FrondLoading";
export default function useContactpart({loading}) {
  const { listcolor } = useTheme();
  let Secondrycolor = listcolor.secondrycolor;
  // console.log(Secondrycolor)
  const sceneEarth = useRef();
  const [email, setEmail] = useState();
  const [firstname, setFirstName] = useState();
  const [secondname, setLastName] = useState();
  const [phonenumber, setPhoneName] = useState();
  const [Message, setMessage] = useState();
  const [sendloading, setSendLoading] = useState(false);
  const [loadingfinal, setLoadingFinal] = useState(false);
  const [isloading, setISLoading] = useState(true);
  useEffect(() => {
    if(! loading){
      DispalyEarth_3D(sceneEarth.current,setISLoading);
    }
  }, [sceneEarth,loading]);

  async function handlesubmit(e) {
    e.preventDefault();
    // console.log(Message, email, firstname, secondname, phonenumber);
    try {
      setSendLoading(true);
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
        setSendLoading(false);
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
    {/* <FrondLoader loading={isloading}/> */}
      <LoadingOverlay loadingaction={sendloading} loadingend={loadingfinal} />
      <div
        className="contactsection"
        id="contactsection"
        style={{ color: "white"}}
      >
        <div className="fakebody" style={{backgroundColor:Secondrycolor}}></div>
        <section className="tittlecontact">
          <div className="Earth3D" ref={sceneEarth} id="Earth3DScene"></div>
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
