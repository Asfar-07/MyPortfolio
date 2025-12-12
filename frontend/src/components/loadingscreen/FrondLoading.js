import React from "react";
import "./FrondLoader.css";
export default function FrondLoader({ loading, valueloading }) {

  return (
    loading && (
      <div className="loader-screen">
        {/* <h1 className="fade-in">ASFAR MUHAMMED NS</h1>
        <h4 style={{margin:'10px 0'}}>software engineer</h4> */}
        <div className="loading-Scale">
          <div style={{width:`${valueloading}%`}}></div>
        </div>
        <p>{valueloading}%</p>
        {/* <div className="front-loader-spin"></div> */}
      </div>
    )
  );
}
