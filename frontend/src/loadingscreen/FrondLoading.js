import React from 'react';
import './FrondLoader.css'; 
export default function FrondLoader({loading}) {
  return (
    ( loading &&
    <div className="loader-screen">
      <h1 className="fade-in">🚀 Loading Portfolio...</h1>
    </div>
    )
  );
}