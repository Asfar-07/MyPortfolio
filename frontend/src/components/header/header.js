import "../header/header.css"
import { useTheme } from "../../ThemeContext";
export default function Header() {
  const { listcolor } = useTheme();
  return (
    <div className='Header' style={{color:listcolor.fontcolor}}>
        <header>
            <a href="/" id='loco' style={{color:listcolor.fontcolor}}>A</a>
            <div className='Links'>
                <a href="/" style={{color:listcolor.fontcolor}}>Home</a>
                <a href="/About" style={{color:listcolor.fontcolor}}>About</a>
                <a href="/#contactsection" style={{color:listcolor.fontcolor}}>Contact</a>
            </div>
        </header>
    </div>
  )
}
