import React from "react";
import "../footer/footer.css";
import { useTheme } from "../../ThemeContext";
export default function Footer() {
  const { listcolor } = useTheme();
  let containercolor=listcolor.frontcontainer
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
          <a href="/" style={{backgroundColor:containercolor}}><i className="fa-brands fa-instagram"></i></a>
          <a href="/" style={{backgroundColor:containercolor}}><i className="fa-brands fa-facebook-f"></i></a>
          <a href="/" style={{backgroundColor:containercolor}}><i className="fa-brands fa-twitter"></i></a>
          <a href="/" style={{backgroundColor:containercolor}}><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <div style={{backgroundColor:containercolor}}>
            <i className="fa-solid fa-phone"></i>
            <a href="/">Direct contact</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
