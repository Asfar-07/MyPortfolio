import "../header/header.css";
import { useTheme } from "../../ThemeContext";
export default function Header() {
  const { listcolor } = useTheme();
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
            <a href="/#home" style={{ color: listcolor.fontcolor }}>
              Home
            </a>
            <a href="#about-me" style={{ color: listcolor.fontcolor }}>
              About
            </a>
             <a href="#Service" style={{ color: listcolor.fontcolor }}>
             Service
            </a>
            <a href="#contactsection" style={{ color: listcolor.fontcolor }}>
              Contact
            </a>
          </div>
        </header>
      </div>
    </>
  );
}
