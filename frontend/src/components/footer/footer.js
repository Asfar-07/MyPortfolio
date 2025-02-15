import React from "react";
import "../footer/footer.css";
import { useTheme } from "../../ThemeContext";
export default function Footer() {
  const { listcolor } = useTheme();
  let containercolor=listcolor.frontcontainer
  return (
    <div>
      <footer className={`Footer-${listcolor.settheme}`} >
        <div>
          {/* <h3>hi</h3> */}
          <p style={{textAlign:"center", width:"400px", font:"normal normal normal 18px / 1.2em madefor-text, helveticaneuew01-45ligh, helveticaneuew02-45ligh, helveticaneuew10-45ligh, sans-serif"}}>"Creating and coding have deepened my passion for crafting exceptional digital experiences."</p>
        </div>
     
            {/* <span></span> */}
     
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
        <span>© 2024 Asfar Muhammed. All Rights Reserved.</span>
      </footer>
    </div>
  );
}
