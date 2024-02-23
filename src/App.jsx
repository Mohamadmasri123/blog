import React from 'react'
import { BrowserRouter , Routes, Route,} from 'react-router-dom';
import Home from './page/Home';
import Services from"./page/Services"
import Contact from "./page/Contact"
import About from "./page/About"
import Navbar from './components/Navbar';
import "./App.css"
import Footer from './components/Footer';




const App = () => {
  return (
    <div>
       <Navbar/>
      <BrowserRouter>
        <Routes>   
         <Route path="/" element={<Home/>}/>
             
           <Route path="/Services" element={<Services/>}/>
           <Route path="/Contact" element={<Contact/>}/>
           <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
 </div>
  )
}

export default App
