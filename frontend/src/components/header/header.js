import "../header/header.css";
import { useTheme } from "../../ThemeContext";
export default function Header() {
  const { listcolor } = useTheme();
  var backgroundColor=""
  if(listcolor.settheme==="light"){
    backgroundColor="#e7e9eb"
  }else{
    backgroundColor="black"
  }
  return (
    <>
      <input type="checkbox" id="cancel" style={{ display: "none" }} />
      <label htmlFor="cancel" id="mycheck">
        {/* <i className="fa-solid fa-xmark"></i> */}
        <i className="fa-solid fa-bars"></i>
      </label>
      <div className="Header" style={{ color: listcolor.fontcolor}}>
        <header>
          <a href="/" id="loco" style={{ color: listcolor.fontcolor }}>
            A
          </a>
          <div className="Links">
            <a href="/" style={{ color: listcolor.fontcolor }}>
              Home
            </a>
            <a href="/About" style={{ color: listcolor.fontcolor }}>
              About
            </a>
            <a href="/#contactsection" style={{ color: listcolor.fontcolor }}>
              Contact
            </a>
          </div>
        </header>
      </div>
    </>
  );
}
