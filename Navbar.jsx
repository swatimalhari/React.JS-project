import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>

        <NavLink to="/home" className="nav-item">
          <li>Home</li>
        </NavLink>

        <NavLink to="/about" className="nav-item">
          <li>About</li>
        </NavLink>

        <NavLink to="/services" className="nav-item">
          <li>Service</li>
        </NavLink>

        <NavLink to="/contact" className="nav-item">
          <li>Contact</li>
        </NavLink>

      </nav>
    </div>
  )
}

export default Navbar