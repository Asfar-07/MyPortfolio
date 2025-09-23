import React from 'react'
import '../../assets/styles/footerHeader.css';

export default function footerHeader() {
   const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight, 
      behavior: "smooth", 
    });
  }
  return (
    <div className='header-Footer'>
      <main>
        <h1>I Know You Love Games</h1>
        <p>Start playing now, enjoy every moment, and let the fun help you relax. Whether it’s a quick match or a long adventure, this is your time to unwind and have a great experience.</p>
        <button onClick={scrollToBottom}><i class="fa-solid fa-arrow-down"></i></button>
      </main>
    </div>
  )
}
