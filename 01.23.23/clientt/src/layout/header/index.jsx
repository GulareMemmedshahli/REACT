import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Header = () => {
  return (
    <div className='header'>
      <h2>Notary</h2>
      <div>
      <Link to="/home">Home</Link>
      <Link to="/adduser">Add Customer</Link>
         <Link to="/practice">Practice Areas</Link>
         <Link to="/test">Testimonials</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
      </div>
    
    </div>
  )
}

export default Header