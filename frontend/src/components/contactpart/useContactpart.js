import React ,{useState} from "react";
import "../contactpart/contact.css";
import callimage from "../contactpart/pngimg.com - telephone_booth_PNG1.png"


export default function useContactpart() {
  const [email,setEmail]=useState()
  const [firstname,setFirstName]=useState()
  const [secondname,setLastName]=useState()
  const [phonenumber,setPhoneName]=useState()
  const [Message,setMessage]=useState()
  async function handlesubmit(e){
    e.preventDefault()
    console.log(Message,email,firstname,secondname,phonenumber)
    try{
      const response = await fetch('https://myportfolio-1tuj.onrender.com/Data', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({firstname,secondname,phonenumber,email,Message})
        });
    if(response.ok){
      console.log("Datasend")
     const Allinput= document.querySelectorAll(".contactinput input")
     const Alltextarea= document.querySelector(".contactinput textarea")
     console.log(Alltextarea)
     Alltextarea.value=""
    for(let i=0;i<Allinput.length;i++){
      Allinput[i].value=""
    }
     
    }else{
      console.log("response error")
    }
  }catch(error){
    console.log("error",error)
  }
  }
  return (
    <div className="contactsection" id="contactsection">
      <section className="tittlecontact">
        <img src={callimage} alt=""/>
      </section>
      <section className="maincontactpart">
        <h2 className="contacttittle">Say hello.... to contact</h2>
        <form className="contactinput" onSubmit={handlesubmit}>
          <div className="Forname">
            <input type="text" name="firstname" placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}} required/>
            <input
              type="text"
              name="LastName"
              placeholder="Last Name"
              onChange={(e)=>{setLastName(e.target.value)}}
              style={{ marginLeft: "25px" }}
              
            required/>
          </div>
          <div className="Fornumber_email">
            <input type="tel" name="phonenumber" placeholder="PhoneNumber" onChange={(e)=>{setPhoneName(e.target.value)}}  required/>
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={{ marginLeft: "25px" }}
              onChange={(e)=>{setEmail(e.target.value)}}
            required/>
          </div>
          <div className="messagearea">
            <textarea name="Message" id="" placeholder="Message..."  onChange={(e)=>{setMessage(e.target.value)}}></textarea>
          </div>
          <div className="contactsubmit">
            <button>SUBMIT</button>
          </div>
        </form>
        {/* <div className="followcontact">
          <h2>Follow us</h2>
          <a href="/">Instagram</a>
          <a href="/" style={{marginLeft:"20px"}}>Facebook</a>
        </div> */}
      </section>
    </div>
  );
}
