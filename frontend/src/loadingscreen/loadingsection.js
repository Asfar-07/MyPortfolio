import React from 'react';
import './loading.css'; 


// Import images
import leftImage1 from './1496522.webp';
import leftImage2 from './1496522.webp';
import leftImage3 from './1496522.webp';
import rightImage from './2809963.png';

const LoadingOverlay = (props) => {
    // console.log(props.loadingaction)
  return (
    <>
     {props.loadingaction&& (
    <div className="loading-overlay" id="loadingOverlay">
      <div className="main-loading">
        <samp>
          <div className="AmoungUS"></div>
        </samp>
        <div className="AmoungAnimation">
          <section className="loading-left">
            <img src={leftImage1} alt="Left1" />
            <img src={leftImage2} alt="Left2" />
            <img src={leftImage3} alt="Left3" />
          </section>
          <section className="loading-right">
            <img src={rightImage} alt="Right" />
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
