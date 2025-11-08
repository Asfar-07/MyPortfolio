import React, { useState, useRef, useEffect } from "react";
import "../../assets/styles/contact.css";
// import callimage from "../contactpart/pngimg.com - telephone_booth_PNG1.png";
import LoadingOverlay from "../../loadingscreen/loadingsection";
import { useTheme } from "../../ThemeContext";
import { DispalyEarth_3D } from "../../3Dthree/ControlThree";

export default function useContactpart({ loading }) {
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
    if (!loading) {
      DispalyEarth_3D(sceneEarth.current, setISLoading);
    }
  }, [sceneEarth, loading]);

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
      <LoadingOverlay loadingaction={sendloading} loadingend={loadingfinal} />
      <div
        className="contactsection"
        id="contactsection"
      >
        <section className="tittlecontact">
           <p>Let’s collaborate and build something amazing together.</p>

          <ul>
            <li><i className="fas fa-envelope"></i> asfarmuhammedns@example.com</li>
            <li><i className="fas fa-phone"></i> +91 9745872676</li>
            <li><i className="fas fa-map-marker-alt"></i> Kerala, India</li>
          </ul>
          <div className="contactiocn">
              <a href="https://github.com/Asfar-07">
                <span>
                   <i className="fa-brands fa-github"></i>
                </span>
              </a>
              <a href="https://www.linkedin.com/in/asfar2003">
                <span>
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
              </a>
              <a href="https://mail.google.com/" target="_black">
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </a>
            </div>
            
          <div className={`Earth3D-${listcolor.settheme}`} ref={sceneEarth} id="Earth3DScene"></div>
        </section>
        <section className="maincontactpart">
          <h2 className="contacttittle">Say hello.... to contact</h2>
          <form className="contactinput" onSubmit={handlesubmit}>
            <div className="Forname">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                  style={{border:` 1px solid ${listcolor.fontcolor }`}}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                  style={{border:` 1px solid ${listcolor.fontcolor }`}}
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
                  style={{border:` 1px solid ${listcolor.fontcolor }`}}
                onChange={(e) => {
                  setPhoneName(e.target.value);
                }}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                style={{border:` 1px solid ${listcolor.fontcolor }`}}
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
                  style={{border:` 1px solid ${listcolor.fontcolor }`}}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="contactsubmit">
              <button>Send Message</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
