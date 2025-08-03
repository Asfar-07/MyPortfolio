import React from 'react';
import './FrondLoader.css'; 
export default function FrondLoader({resnet}) {
  console.log(resnet)
  return (
    <div className="loader-screen">
      <h1 className="fade-in">🚀 Loading Portfolio...</h1>
      {resnet && <p>Slow Network😑</p>}
    </div>
  );
}