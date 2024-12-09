import './App.css';
import React ,{useState} from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import viewport from './viewport';
import About from './About/About';
import { useTheme } from "./ThemeContext";
export default function App() {
  const { listcolor, toggleTheme } = useTheme();
  // console.log(listcolor)
  const [rotate,setRotate]=useState(()=>{
    return localStorage.getItem("angle") || "rotate(135deg)";
  });
  const switchtheme=()=> {
    toggleTheme()
    if(rotate === "rotate(135deg)"){
      setRotate("rotate(320deg)")
      localStorage.setItem("angle","rotate(320deg)")
    }else{
      setRotate("rotate(135deg)")
      localStorage.setItem("angle","rotate(135deg)")
    }
  }
  return (
    <div className={`App-${listcolor.settheme}`}>
      <section className="mainswitchmod">
       <div className="switchmod" onClick={switchtheme} style={{transform:rotate}}>
              <i className="fa-solid fa-moon"></i>
              <div><i className="fa-solid fa-sun"></i></div>
        </div>
        </section>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={viewport}/>
      <Route path='/About' Component={About} />
    </Routes>
    </BrowserRouter>
    </div>
  );
};
