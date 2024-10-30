import "../header/header.css"
export default function header() {
  return (
    <div className='Header'>
        <header>
            <a href="/" id='loco'>A</a>
            <div className='Links'>
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/#contactsection">Contact</a>
            </div>
        </header>
    </div>
  )
}
