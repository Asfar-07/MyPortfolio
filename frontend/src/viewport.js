import React from 'react'
import Frontview from "./components/frontview/mainfront"
import Secondview from './components/secondsection/secondview';
import Thirdsection from './components/thirdsection/thirdsection';
import Contactpart from './components/contactpart/useContactpart';
import Footer from './components/footer/footer';



export default function viewport() {
  return (
    <div>
       <Frontview />
    <Secondview />
    <Thirdsection />
    <Contactpart />
    <Footer /> 
    </div>
  )
}
