// import { useState } from 'react'
import Navbar from './components/Navbar'
// import './App.css'
import './components/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Barbelow from './components/BarBelow';
import About from './components/About.jsx';
import Footer from './components/footer.jsx';
import Contact from './components/contact.jsx';
import Login from './components/login.jsx';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Barbelow/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>

      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
