import React from 'react'
import { NavLink } from "react-router-dom";
import "./index.scss"
const Header = () => {
  return (
    <div className='header'>
<div>
  <h1>The Blog Website</h1>
</div>
        <nav>
        <NavLink  to="/">Home</NavLink>
        <NavLink  to="/blog">New Blog</NavLink>
        </nav>
       
    </div>
  )
}

export default Header