import React from 'react'
import Frontview from "./pages/home/mainfront"
import Secondview from './pages/home/secondview';
import Thirdsection from './components/thirdsection/thirdsection';
import Contactpart from './components/contactpart/useContactpart';
import Footer from './pages/footer/footer';

export default function viewport() {
  return (
    <div style={{zIndex:2}}>
       <Frontview />
    {/* <Secondview /> */}
    <Thirdsection />
    <Contactpart />
    <Footer /> 
    </div>
  )
}
