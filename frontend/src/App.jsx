import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

function App() {
  

  return (
    <>
      <div className='max-w-[100vw] overflow-x-hidden'>
        <Router>
        <Navbar/>
        <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        </div>
        <Footer/>
        </Router>
      </div>
    </>
  )
}

export default App
