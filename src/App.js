import React from 'react';
import './App.css';
import About from './Components/About';
import Services from './Components/Services';
import Sidebar from './Components/Sidebar';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
   <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-4  sidebar">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-8 content">
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Contact/>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
