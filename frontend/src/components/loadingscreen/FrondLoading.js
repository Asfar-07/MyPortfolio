import React, { useEffect, useState } from "react";
import "./FrondLoader.css";
export default function FrondLoader() {
  const [count,setCount]=useState(0)
  const [statusloading,setStatusLoading]=useState(true)
  useEffect(()=>{
    var run=0;
    const interval=setInterval(()=>{
      setCount(run)
      run=run+1;
      if(run>=100){
        clearInterval(interval);
        setStatusLoading(false)
      }
    },30)
    return () => clearInterval(interval);
  },[])
  return (
    statusloading && (
      <div className="loader-screen">
        {/* <h1 className="fade-in">ASFAR MUHAMMED NS</h1>
        <h4 style={{margin:'10px 0'}}>software engineer</h4> */}
        <div className="loading-Scale">
          <div style={{width:`${count}%`}}></div>
        </div>
        <p>{count}%</p>
        {/* <div className="front-loader-spin"></div> */}
      </div>
    )
  );
}
