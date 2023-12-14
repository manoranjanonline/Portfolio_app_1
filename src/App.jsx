import { useState } from 'react'
import './App.css'

import Nav from './pages/Nav.jsx'
import Somu from './pages/Somu.jsx' 
import About from './pages/About.jsx'
import Myportfolio from './pages/Myportfolio.jsx'
import Client from './pages/Client.jsx'
import Footer from './pages/Footer.jsx'
function App() {
  return (
    <>
     <Nav/>
     <Somu/>
     <About/>
     <Myportfolio/>
    <Client/>
    <Footer/>
    </>  
    )
  }
export default App
