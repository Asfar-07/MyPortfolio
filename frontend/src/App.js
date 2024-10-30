import './App.css';
import React  from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import viewport from './viewport';
import About from './About/About';
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={viewport}/>
      <Route path='/About' Component={About} />
    </Routes>
    </BrowserRouter>
    </>
  );
};
