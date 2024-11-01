import React from "react";
import "../footer/footer.css";

export default function footer() {
  return (
    <div>
      <footer>
        <div>
          {/* <h3>hi</h3> */}
          <p style={{textAlign:"center"}}>coding and gaming are same <br></br>
          but different 😁</p>
        </div>
     
            <span></span>
     
        <div>
          <div>
          <a href="/"><i className="fa-brands fa-instagram"></i></a>
          <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="/"><i className="fa-brands fa-twitter"></i></a>
          <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <a href="/">Direct contact</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
