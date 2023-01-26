import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.scss"
const Header = () => {

  return (
    <div className='header'>

<div >
      <Link className='scholl' to="/"><h2>OneSchool</h2></Link>
    </div>

      <div>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/add">Add</NavLink>
       <NavLink to="/courses">Courses</NavLink>
       <NavLink to="/programs">Programs</NavLink>
       <NavLink to="/teachers">Teachers</NavLink>
    </div>

    <div>
      <button>Contact Us</button>
    </div>
    <div className='iconbars'>
    <i  class="fa-solid fa-bars"></i>
    </div>
  
</div>



  
  )
}

export default Header
