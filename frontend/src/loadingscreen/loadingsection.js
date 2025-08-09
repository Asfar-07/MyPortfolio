import React from 'react';
import './loading.css'; 


// Import images
import leftImage from '../assets/image/free-server-icon-download-in-svg.png';

import rightImage from '../assets/image/2809963.png';

const LoadingOverlay = (props) => {
    // console.log(props.loadingaction)
  return (
    <>
     {props.loadingaction && (
    <div className="loading-overlay" id="loadingOverlay">
      <div className="main-loading">
        <samp>
          <div className="AmoungUS"></div>
        </samp>
        <div className="AmoungAnimation">
          <section className="loading-left">
            <img src={leftImage} alt="Left1" loading="eager" />
            <img src={leftImage} alt="Left2" loading="eager"/>
            <img src={leftImage} alt="Left3" loading="eager"/>
          </section>
          <section className="loading-right">
            <img src={rightImage} alt="Right" loading="eager"/>
          </section>
        </div>
        <div className="lastsection">
          <h4>Please Wait</h4>
          <div className="spinner"></div>
        </div>
      </div>
    </div>
     )}
     {props.loadingend&& (
     <div className="loading-overlay" id="loadingOverlay">
     <div className="main-loading">
     <div className="thankyou-overlay">
     <h2>I Got your message</h2>
     <p>Thank you for waiting!</p>
        </div>
     </div>
     </div>
     )}
    </>
  );
};

export default LoadingOverlay;
