import React from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Services from './Services.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Login.jsx'
import Signup from './Signup.jsx'

const Router = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />}/>
            {/* <Route path="/" element={<About />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router